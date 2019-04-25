const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: path.resolve('src/client/main.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyPlugin([{
            from: path.resolve('src', 'client', 'index.html'),
            to: path.resolve('dist', 'index.html')
        }])
    ]
}
