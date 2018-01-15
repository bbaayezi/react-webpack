const path = require('path');
const merge = require('webpack-merge');
const babelOption = require('./babelOption');
const common = require('./webpack.common');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: babelOption
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './src',
        port: 8000,
        open: false
    },
    plugins: [],
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'bundle.js'
    }
})