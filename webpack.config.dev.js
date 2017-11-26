const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname+'/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              use: [{
                   loader: "style-loader"
              }, {
                   loader: "css-loader", options: {
                       sourceMap: true
                   }
              }, {
                   loader: "sass-loader", options: {
                       sourceMap: true
                   }
              }]
            },
            {test: /\.js$/,
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
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
