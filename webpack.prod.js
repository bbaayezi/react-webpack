const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin()
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.min.js'
    }
})