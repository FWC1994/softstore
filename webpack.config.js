const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux','redux-thunk'],
    },
    output: {
        path: path.join(__dirname, './softseek'),
        filename: 'assets/js/[name].[chunkhash].js',
        chunkFilename: 'assets/js/[name].[chunkhash].js',
        publicPath : './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                /*cacheDirectory是用来缓存编译结果，下次编译加速*/
                use: ['babel-loader?cacheDirectory=true'],
            },
            {
                test: /\.css|scss$/,
                include:path.join(__dirname, 'src/component'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.css|scss$/,
                include:path.join(__dirname, 'src/pages'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.css|scss$/,
                include:path.join(__dirname, 'src/styles'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.css|scss$/,
                include:path.join(__dirname, 'node_modules'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            
            
            /* 小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求 */
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "assets/js/vendor.js",
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
         /* new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }), */
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['softseek']),
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            styles: path.join(__dirname, 'src/styles')
        }
    }
};