const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // development | production
  devtool: false,  // false | "eval" | etc...
  // // デフォルトは src/index.js
  // entry: "./src/app.js",
  // // 依存関係がない場合は、[]で指定する。
  // // まとめてmain.jsに変換される。
  // entry: ["./src/app.js","./src/index.js"],
  // オブジェクトで渡すと、 keyがファイル名で、それぞれが変換される。
  entry: {
    app: "./src/app.js",
    sub: "./src/sub.js"
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // 以下の[name]は entryをオブジェクトで書いた際の、keyの値がnameに入る
    // name | id | chunkhash などがある。
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          'babel-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // or style-loader
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[contenthash].[ext]',
                outputPath: 'images',
                publicPath: 'images'
            }
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

};