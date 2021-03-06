const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }), 
        new webpack.LoaderOptionsPlugin({
            options: {
                devtool: 'inline-source-map',
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
             }
         }),
    ],
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
    },
    
    output: {
        path: path.join(__dirname, './softseek'),
        filename: 'assets/js/[name].[hash].js',
        chunkFilename: 'assets/js/[name].[chunkhash].js',
        publicPath : '/softseek'
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
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './src'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8888
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            styles: path.join(__dirname, 'src/styles'),
            mock: path.join(__dirname, 'src/mock'),
        }
    },

};