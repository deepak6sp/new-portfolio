const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname)+'/dist',
        publicPath: '/',
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: [
                  'file-loader?name=images/[name].[ext]'
                ]
            }, {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CopyWebpackPlugin([
        { from: 'index-prod.html', to: 'index.html' },
        { from: 'images', to: 'images'},
        { from: 'server-prod.js', to: 'server.js'},
        { from: 'analytics.min.js', to: 'analytics.min.js'},
        { from: 'package.json', to: 'package.json'}
      ]),
      new ExtractTextPlugin('style.min.css')

    ]
};
