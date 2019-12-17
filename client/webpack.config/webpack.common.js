const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },{
            test: /\.(jpg|jpeg|png)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192
                },
            },
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new Dotenv({
            path: './.env.example',
        })
    ]
};