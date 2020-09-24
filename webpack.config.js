const path = require("path");
require('dotenv').config();
let outPath ='dist'
switch (process.env.MODE){
  case 'production' :
      outPath = 'prod'; break;
  case 'stage':
  default : 
      break;
}
module.exports = {
  entry: __dirname + "/src/root-config-dist.js",
  devtool: "sourcemap",
  output: {
    filename: "[hash]/root-config.js",
    path: path.resolve(__dirname, outPath),
    libraryTarget: "system"
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  },
  externals: {
    "single-spa": "single-spa",
    "zone.js": "zone.js"
  },
  plugins: []
};
