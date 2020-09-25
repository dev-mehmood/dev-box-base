// //https://medium.com/meshstudio/continuous-integration-with-circleci-and-nodejs-44c3cf0074a0
// //requiring path and fs modules
// const path = require("path");
// const promisify = require("promisify-node");
// const axios = require('axios');
// const fs = promisify("fs");
// const chalk = require('chalk')
// const { exec, spawn, fork, execFile } = require("promisify-child-process");
// require("dotenv").config();
// // const fileName = 'root-config.js';
// // Simple-git without promise
// const simpleGit = require("simple-git")();
// // Shelljs package for running shell tasks optional
// const shellJs = require("shelljs");
// // Simple Git with Promise for handling success and failure
// const simpleGitPromise = require("simple-git/promise")();


// const prompt = require('prompt-sync')();
// async function asyncForEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     await callback(array[index], index, array);
//   }
// }

// getDevBoxSpaURL = () => {

//   switch (process.env.MODE) {
//     case 'production':
//       return process.env.DEV_BOX_SPA_URI_PRODUCTION;
//     case 'stage':
//     default:
//       return process.env.DEV_BOX_SPA_URI_STAGE;
//   }

// }
// getOutDirPath = () => {
//   let outPath = 'dist'
//   switch (process.env.MODE) {
//     case 'production':
//       outPath = 'prod'; break;
//     case 'stage':
//     default:
//       break;
//   }
//   return outPath;
// }
// // sequentially
// const asyncFilter = async (arr, predicate) =>
//   arr.reduce(
//     async (memo, e) => [...(await memo), ...((await predicate(e)) ? [e] : [])],
//     []
//   );
// let count = 0
// setModePrompt = async () => {
//   shellJs.cd(__dirname);
//   const modes = ['production', 'stage'];
//   const mode = prompt('Enter Mode "production" or "stage":');
//   if (modes.includes(mode)) {
//     console.log('OK .....')
//     return process.env.MODE = mode
//   }
//   console.log('Wrong value provided; try again')
//   count++
//   if (count > 3) throw Error('Please restart the program')
//   setModePrompt();

// }

// async function exec_it() {
//   try {
    
//     // set process.env.mode by user selection prompt
//     await setModePrompt();

//     console.log(process.env.MODE);

//     await exec(`rimref ${getOutDirPath()}`);
//     await exec("npm run build:deploy");

//     const directoryPath = path.join(__dirname, getOutDirPath());

//     let files = await fs.readdir(directoryPath);
//     let hash = "";
//     files = files.filter(function (file) {
//       const stat = fs.statSync(directoryPath + "/" + file);

//       if (stat.isDirectory()) {
//         hash = file;
//         return false;
//       }
//       return true;
//     });
//     if(perocess.env.mode === 
//       )
//     asyncForEach(files, async function (file) {
//       await fs.rename(
//         path.join(directoryPath, file),
//         path.join(directoryPath, hash, file)
//       );
//     });

//     await fs.writeFile(`${directoryPath}/meta.txt`, hash);
//     shellJs.cd(__dirname);
//     const repo = process.env.GIT_REPO;
//     // User name and password of your GitHub
//     const userName = process.env.GIT_USER_NAME;
//     const password = process.env.GIT_USER_PASSWORD;
//     const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
//     // add local git config like username and email

//     simpleGit.addConfig("user.email", process.env.GIT_USER_EMAIL);
//     simpleGit.addConfig("user.name", userName);

//     await simpleGitPromise.add(".");
//     const message = prompt('Enter commit message:');
//     console.log(message)
//     await simpleGitPromise.raw(['commit', '-m', message])
//     await simpleGitPromise.push("origin", "master");
//     let tagName = '', tagMessage = ''
//     if(process.env.mode === 'production') {
//       tagName = prompt('Enter Tag Name:');
//       tagMessage = prompt('Enter Tag Message')
//       await simpleGitPromise.addAnnotatedTag(tagName, tagMessage);
//       await simpleGitPromise.push('origin', tagName)
//     }

//     // const creds  = new Buffer(`${process.env.USER_NAME}:${process.env.USER_PASS}`);
//     // console.log(creds)
//     // axios.defaults.headers.common['authorization'] =  'Basic '+creds.toString('base64');
//     // axios.defaults.headers.common['authorization'] =  'Basic '+creds.toString('base64');

//     const { data: { token } } = await axios({
//       url: `${getDevBoxSpaURL()}/auth/login`,
//       method: 'post',
//       data: { email: process.env.USER_EMAIL, password: process.env.USER_PASS }
//     })
   
//     axios.defaults.headers.common['x-access-token'] = token;
//     await axios.get(`https://purge.jsdelivr.net/gh/dev-mehmood/dev-box-base/${getOutDirPath()}/meta.txt`)
//     const { hash } = await axios.get(`https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/${getOutDirPath()}/meta.txt`)
//     console.log(`https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/${getOutDirPath()}/${hash}/root-config.js`)
//     const x = await axios({
//       method: 'patch',
//       url: `${getDevBoxSpaURL()}/import-maps/import-map.json`,
//       data: {
//         "imports": {
//           "@dev-box/root-config": `https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/${getOutDirPath()}/${hash}/root-config.js`
//         },
//         "mode": getOutDirPath() // this method will also work for mode
//       }
//     });
//     if(process.env.MODE === 'production') {
//       const x = await axios({
//         method: 'patch',
//         url: `${getDevBoxSpaURL()}/import-maps/import-map.json`,
//         data: {
//           "imports": {
//             "@dev-box/root-config": `https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/${getOutDirPath()}/${hash}/root-config.js`
//           },
//           "mode": getOutDirPath() // this method will also work for mode
//         }
//       });
//     }
//     console.log("Process completed")
//   } catch (e) {
//     console.dir(e)
//     throw e;
//   }

// }
// exec_it();

// //https://dev.to/it if()next/the-ultimate-free-ci-cd-for-your-open-source-projects-3bkd
// function getProductionPath(hash){
//   if(process.env.MODE === 'production'){
      
//   }
// }



const path = require("path");
const promisify = require("promisify-node");
const axios = require('axios');
const fs = promisify("fs");
const { exec, spawn, fork, execFile } = require("promisify-child-process");
require("dotenv").config();
const simpleGit = require("simple-git")(); // Simple-git without promise
const shellJs = require("shelljs");// Shelljs package for running shell tasks optional

// Simple Git with Promise for handling success and failure
const simpleGitPromise = require("simple-git/promise")();
const prompt = require('prompt-sync')();

module.exports.asyncForEach = async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

getDevBoxSpaURL = (mode) => {

    switch (mode) {
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
module.exports.asyncFilter = async (arr, predicate) =>
    arr.reduce(
        async (memo, e) => [...(await memo), ...((await predicate(e)) ? [e] : [])],
        []
    );
let count = 0
module.exports.setMode = async () => {
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
module.exports.deploy = async function () {
    try {
        const mode = process.argv[2];
        if(!['production','stage'].includes(mode)) throw Error("Either 'production' of 'stage' required")
        process.env.MODE = mode;
        // this.setMode();

        // await exec(`rimref dist`); // delete dist folder
        await exec("npm run build:prod"); // run build:stage command for webpack

        
        if (process.env.MODE === 'stage') {
            await this.pushToGit();
            await this.updateImportMapStage()
        }

        if (process.env.MODE === 'production') {
            const tag = await this.tagProduction();
            await this.updateImportMapProd(tag)
        }

    } catch (e) {
        console.dir(e)
        throw e;
    }

}
module.exports.updateImportMapStage = async function () {
    const token = await this.getAuthToken(process.env.DEV_BOX_SPA_URI_STAGE);
    axios.defaults.headers.common['x-access-token'] = token;
    const x = await axios({
        method: 'patch',
        url: `${process.env.DEV_BOX_SPA_URI_STAGE}/import-maps/import-map.json`,
        data: {
            "imports": {
                "@dev-box/root-config": `https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base/dist/root-config.js`
            },
            "mode": 'dist'
        }
    });

}
module.exports.updateImportMapProd = async function (tag) {
    const token = await this.getAuthToken(process.env.DEV_BOX_SPA_URI_PRODUCTION);
    axios.defaults.headers.common['x-access-token'] = token;
    const x = await axios({
        method: 'patch',
        url: `${process.env.DEV_BOX_SPA_URI_PRODUCTION}/import-maps/import-map.json`,
        data: {
            "imports": {
                "@dev-box/root-config": `https://cdn.jsdelivr.net/gh/dev-mehmood/dev-box-base@${tag}/dist/root-config.js`
            },
            "mode": 'prod'
        }
    });

}
module.exports.getAuthToken = async function(uri) {
    const { data: { token } } = await axios({
        url: `${uri}/auth/login`,
        method: 'post',
        data: { email: process.env.USER_EMAIL, password: process.env.USER_PASS }
    })
    return token;
}
//https://dev.to/it if()next/the-ultimate-free-ci-cd-for-your-open-source-projects-3bkd
module.exports.pushToGit = async function () {

    // cd into current directory
    shellJs.cd(__dirname);
    const repo = process.env.GIT_REPO;
    // User name and password of your GitHub
    const userName = process.env.GIT_USER_NAME;
    const password = process.env.GIT_USER_PASSWORD;
    const remote = `https://${userName}:${password}@github.com/${userName}/${repo}`;
    // add local git config like username and email

    simpleGit.addConfig("user.email", process.env.GIT_USER_EMAIL);
    simpleGit.addConfig("user.name", userName);

    await simpleGitPromise.add(".");
    // const message = prompt('Enter commit message:');
     const message = 'test commit'
    // console.log(message);
    await simpleGitPromise.raw(['commit', '-m', message]);
    const pushes = await this.gitPush(userName, password)
    console.log('pushes')
    // await simpleGitPromise.push("origin", "master");
}

module.exports.tagProduction = async function () {
    await this.pushToGit();
    let lastTag = ''
    try  {
       lastTag = await simpleGitPromise.raw(['describe', "--exact-match", '--abbrev=0'])
    } catch(e) {
      console.log(e)
    }
    let tagName = 'v1.0.0', tagMessage = 'Test deployment v1.0.0'
    
    // tagName = prompt('Enter Production Tag Name:');
    // tagMessage = prompt('Enter Tag Message')
    await simpleGitPromise.addAnnotatedTag(tagName, tagMessage);
    await simpleGitPromise.push('origin', tagName)
    return tagName
}

//https://medium.com/meshstudio/continuous-integration-with-circleci-and-nodejs-44c3cf0074a0
this.deploy()
module.exports.gitPush = async function (user, pass){
  const remotes = await simpleGitPromise.getRemotes(true);
if (remotes.length) { // Otherwise it's a local repository, no push
    let remote = remotes[0].name; 
    if (remotes[0].refs.push.indexOf("@") < 0) { // credentials aren't in the remote ref
        remote = remotes[0].refs.push.replace("://", `://${user}:${pass}@`);
    }
  return await simpleGitPromise.push(remote, "master");
}
}