const path = require('path') // permite utilizar absolute paths
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',

  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, //testa todos os arquivos que terminam com .css
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // aplica esses estilos através desses modules
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App', //as options estão disponíveis na documentação oficial
      filename: 'index.html',
      template:'./src/template.html'
    }),
    new MiniCssExtractPlugin()
  ]
}