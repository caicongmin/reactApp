/**
 * Created by ccm on 2017/6/23.
 */
var path = require('path');
var webpack = require('webpack');
var HelloWorldPlugin = require('./plugin/hello-world');
const config = {
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // resolve.extensions import时可以不写文件扩展名
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, "./src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js|jsx$/,
        use: [
          'babel-loader'
        ],
        include: ["src"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HelloWorldPlugin({options: true})
  ],
};
const devConfig = () => {
  return Object.assign({
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      // host: process.env.HOST,
      port: 8000,
      contentBase: "./",
      hot: true,
      publicPath: '/',
      // colors: true
    }
  }, config)
}
module.exports = (env) => {
  console.log("env", env);
  // console.log("process", process.env)
  if (env === "development") {
    return devConfig();
  }
  return config;

};
