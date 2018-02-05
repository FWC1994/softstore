const path = require('path');
var webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
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
                postcss: function () {
                    return [precss, autoprefixer, postcssImport];
                },
                devtool: 'inline-source-map',
            }
      })],
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

     /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'src'),
            loaders: [
              'style-loader',
              'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
              'postcss-loader?parser=postcss-scss'
            ]
          },
          // 公有样式，不需要私有化，单独配置
    
          {
            test: /\.css$/,
            include: path.resolve(__dirname, 'node_modules'),
            use: ['style!css!postcss']
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
        }]
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
        }
    },

};