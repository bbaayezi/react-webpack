const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtraTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.scss$/,
                use: ExtraTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.css$/,
                use: ExtraTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin(),
        new ExtraTextPlugin('style.css'),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: './src/out.html'
        })
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.min.js'
    }
})