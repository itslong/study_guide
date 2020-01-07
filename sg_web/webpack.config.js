
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './src/index',
    ],
    output: {
        path: path.resolve('./static/dev/bundles/'),
        filename: '[name]-[hash].js',
        publicPath: 'http://localhost:3000/static/dev/bundles/',
    },
    devServer: {
        contentBase: './static/dev/bundles',
        historyApiFallback: true,
        hot: true,
        port: 3000,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleTracker({filename: 'webpack-stats.dev.json'}),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
