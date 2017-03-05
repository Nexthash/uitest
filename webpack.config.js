const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NgAnnotateWebpackPlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: 'http://localhost:8080',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', query: { sourceMap: true }}
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
    ],
    devServer: {
        contentBase: './public',
        stats: 'minimal'
    }
};