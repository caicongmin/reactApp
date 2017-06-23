/**
 * Created by ccm on 2017/6/23.
 */
var path = require('path');
var webpack = require('webpack')
const config = {
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
