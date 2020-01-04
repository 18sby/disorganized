const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CheckerPlugin } = require( 'awesome-typescript-loader' );

const ROOT = path.resolve( __dirname );

module.exports = {
  entry: './src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: ROOT + '/dist'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: 'awesome-typescript-loader' 
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
    alias: {
      '@': ROOT + '/src'
    },
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}