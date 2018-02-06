const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }), 
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                devtool: 'inline-source-map',
            }
        })
    ],
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
    },
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                /*cacheDirectory是用来缓存编译结果，下次编译加速*/
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/component'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'}                
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/pages'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'}                  
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}              
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
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            styles: path.join(__dirname, 'src/styles'),
        }
    },

};