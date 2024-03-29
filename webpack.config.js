var path = require('path');
var webpack = require('webpack');

var MODE = 'development';
var VUE_SRC = path.resolve(__dirname, 'dist/vue');
var VUE_DIST = path.resolve(__dirname, 'dist/static/vue-dist');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: MODE,
    entry: {
        app: VUE_SRC + '/app.js',
        index: path.resolve(__dirname, 'dist/static/js') + '/index.js',
    },
    output: {
        path: VUE_DIST,
        publicPath: '/static/vue-dist/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: VUE_SRC,
                exclude: '/node_modules/',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            'modules': false,
                        }],
                    ],
                    plugins: [
                        // dynamic importing vue routes (lazy load)
                        '@babel/plugin-syntax-dynamic-import',
                        ['@babel/plugin-transform-runtime', {
                            'regenerator': true
                        }],
                    ],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('dist/vue'),
            '@static': path.resolve('dist/static'),
        },
        extensions: ['.js', '.vue', '.json']
    },
};
