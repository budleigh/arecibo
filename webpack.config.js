const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
}
