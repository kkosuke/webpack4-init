const path = require('path');

module.exports = {
  mode: "production", // development | production
  devtool: false,  // false | "eval" | etc...

  // // デフォルトは src/index.js
  // entry: "./src/app.js",

  // // 依存関係がない場合は、[]で指定する。
  // // まとめてmain.jsに変換される。
  // entry: ["./src/app.js","./src/index.js"],

  // オブジェクトで渡すと、 keyがファイル名で、それぞれが変換される。
  entry: {
    app: "./src/app.js",
    index: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, './public'),
    // 以下の[name]は entryをオブジェクトで書いた際の、keyの値がnameに入る
    // name | id | fullhash などがある。
    filename: 'application.[name].js'
  },

  module :{
    rules:  [
      {
        test: /\.scss$/,
        // 後ろから実行される
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images'
            }
          }
        ]
      }
    ]
  }
};