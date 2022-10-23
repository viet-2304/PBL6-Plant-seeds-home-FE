const path = require('path');
const webpack = require('webpack');

const myConfig = {
    entry: [
        path.resolve('./app/renderer.js'),
        'webpack-hot-middleware/client?reload=true&path=http://localhost:5555/__webpack_hmr',
        'webpack/hot/only-dev-server',
    ],

    devtool: 'inline-source-map',
    target: 'web',

    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: 'style-loader!css-loader!sass-loader?sourceMap',
            },
        ],
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: [
                            'transform-class-properties',
                            'transform-decorators-legacy',
                            'transform-es2015-classes',
                            'react-hot-loader/babel',
                        ],
                    },
                },
            },
            {
                test: /.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    output: {
        path: path.join(__dirname, './app/static'),
        filename: 'bundled.js',
        publicPath: 'http://localhost:5555/static/',
    },
};

module.exports = [myConfig];
