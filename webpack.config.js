var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.json', '.ts']
    },

    entry: {
        app: './src/main.ts'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Breakout',
            template: 'index.template.ejs'
        })
    ],

    output: {
        path: 'output',
        filename: 'breakout.js'
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'babel-loader!ts-loader'
        }]
    }
};