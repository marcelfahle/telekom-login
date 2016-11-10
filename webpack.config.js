const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';


var cssloaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader'
  }
]





module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  context: path.join(__dirname, './src'),
  entry: {
    js: [
      'babel-polyfill', 'index'
    ],
    vendor: [
      'react', 'react-dom'
    ]

  },
  output: {
    path: path.join(__dirname, './builds'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.scss/,
        loaders: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: cssloaders})
      },
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=8192&name=public/fonts/[name].[ext]'
      }
    ]
  },
  
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  
	plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new ExtractTextPlugin({
			filename: 'style.css',
      allChunks: true
    })
  ],

	devServer: {
    contentBase: './src',
    noInfo: true
  }
  
}
