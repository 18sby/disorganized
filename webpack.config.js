const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CheckerPlugin } = require( 'awesome-typescript-loader' );

const ROOT = path.resolve( __dirname );

module.exports = {
  entry: './src/App.tsx',
  output: {
    filename: '[name].js',
    path: ROOT + '/dist'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          { loader: 'awesome-typescript-loader' }
        ] 
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
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
        /* node_modules中的css文件不开启 css-loader -> modules */
        test: /\.css$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
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