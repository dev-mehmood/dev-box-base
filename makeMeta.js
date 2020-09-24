//https://medium.com/meshstudio/continuous-integration-with-circleci-and-nodejs-44c3cf0074a0
//requiring path and fs modules
const path = require("path");
const promisify = require("promisify-node");
const axios = require('axios');
const fs = promisify("fs");
const chalk = require('chalk')
const { exec, spawn, fork, execFile } = require("promisify-child-process");
// const fileName = 'root-config.js';
// Simple-git without promise
const simpleGit = require("simple-git")();
// Shelljs package for running shell tasks optional
const shellJs = require("shelljs");
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require("simple-git/promise")();


const prompt = require('prompt-sync')();
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
require("dotenv").config();
getDevBoxSpaURL = () => {

  switch (process.env.MODE) {
    case 'production':
      return process.env.DEV_BOX_SPA_URI_PRODUCTION;
    case 'stage':
    default:
      return process.env.DEV_BOX_SPA_URI_STAGE;
  }

}
getOutDirPath = () => {
  let outPath = 'dist'
  switch (process.env.MODE) {
    case 'production':
      outPath = 'prod'; break;
    case 'stage':
    default:
      break;
  }
  return outPath;
}
// sequentially
const asyncFilter = async (arr, predicate) =>
  arr.reduce(
    async (memo, e) => [...(await memo), ...((await predicate(e)) ? [e] : [])],
    []
  );
let count = 0
setModePrompt = async () => {
  shellJs.cd(__dirname);
  const modes = ['production', 'stage'];
  const mode = prompt('Enter Mode "production" or "stage":');
  if (modes.includes(mode)) {
    console.log('OK .....')
    return process.env.MODE = mode
  }
  console.log('Wrong value provided; try again')
  count++
  if (count > 3) throw Error('Please restart the program')
  setModePrompt();

}
async function exec_it() {
  try {
    
    // set process.env.mode by user selection prompt
    await setModePrompt();

    console.log(process.env.MODE);


    const { stdout, stderr } = await exec("npm run build:prod");
    const directoryPath = path.join(__dirname, getOutDirPath());

    let files = await fs.readdir(directoryPath);
    let hash = "";
    files = files.filter(function (file) {
      const stat = fs.statSync(directoryPath + "/" + file);

      if (stat.isDirectory()) {
        hash = file;
        return false;
      }
      return true;
    });

    asyncForEach(files, async function (file) {
      await fs.rename(
        path.join(directoryPath, file),
        path.join(directoryPath, hash, file)
      );
    });

    await fs.writeFile(`${directoryPath}/meta.txt`, hash);
    shellJs.cd(__dirname);
    const repo = process.env.GIT_REPO;
    // User name and password of your GitHub
    const userName = process.env.GIT_USER_NAME;
    const password = process.env.GIT_USER_PASSWORD;
    const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
    // add local git config like username and email

    simpleGit.addConfig("user.email", process.env.GIT_USER_EMAIL);
    simpleGit.addConfig("user.name", userName);

    await simpleGitPromise.add(".");
    const message = prompt('Enter commit message:');
    console.log(message)
    await simpleGitPromise.raw(['commit', '-m', message])
    await simpleGitPromise.push("origin", "master");

    // const creds  = new Buffer(`${process.env.USER_NAME}:${process.env.USER_PASS}`);
    // console.log(creds)
    // axios.defaults.headers.common['authorization'] =  'Basic '+creds.toString('base64');
    // axios.defaults.headers.common['authorization'] =  'Basic '+creds.toString('base64');

    const { data: { token } } = await axios({
      url: `https://dev-box-spa-stage.herokuapp.com/auth/login`,
      method: 'post',
      data: { email: process.env.USER_EMAIL, password: process.env.USER_PASS }
    })
    axios.defaults.headers.common['x-access-token'] = token
    await axios.get(`https://purge.jsdelivr.net/gh/dev-mehmood/dev-box-base/dist/meta.txt`)
    const { data } = await axios.get('https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/dist/meta.txt')
    console.log(`https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/dist/${data}/root-config.js`)
    const x = await axios({
      method: 'patch',
      url: `${getDevBoxSpaURL()}/import-maps/import-map.json`,
      data: {
        "imports": {
          "@dev-box/root-config": `https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/${getOutDirPath()}/${data}/root-config.js`
        },
        "mode": "stage"
      }
    });
    // console.log(x)
  } catch (e) {
    console.dir(e)
    throw e;
  }
}
exec_it();
