var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var postcss = require('postcss-loader');
var autoprefixer = require('autoprefixer');
var ENV = process.env.NODE_ENV;

var config = {
    debug: true,
    devtool: 'cheap-source-map',
    context: __dirname,
    output: {
        path: __dirname,
        filename: 'angular-md-table.min.js',
        sourceMapFilename: 'angular-md-table.min.js.map'
    },
    entry: './index.js',
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            //loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            //loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            loaders: ['ng-annotate', 'babel?presets[]=es2015,plugins[]=transform-runtime'],
            exclude: /node_modules|bower_components/
        }, {
            test: /\.(woff|woff2|ttf|eot|svg|jpg|png)(\?]?.*)?$/,
            loader: 'file-loader?name=res/[path][name].[ext]?[hash]'
        }, {
            test: /\.html$/,
            loader: 'html?removeEmptyAttributes=false&collapseWhitespace=false'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    postcss: function() {
        return [autoprefixer];
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.DefinePlugin({
            MODE: {
                production: process.env.NODE_ENV === 'production',
                dev: process.env.NODE_ENV === 'development',
                ON_MDTABLE_TEST: process.env.NODE_ENV === 'test'
            }
        }),
        new ExtractTextPlugin("angular-md-table.min.css")
    ]
};

// Modify the production path to dist folder
if (process.env.NODE_ENV === 'production') {
    config.output.path = path.join( __dirname, '../dist' );
    config.plugins.push( new webpack.optimize.UglifyJsPlugin( { output: { comments: false } } ) );
    config.devtool = 'source-map';
}

if (process.env.NODE_ENV === 'umd') {
    config.output.path = path.join( __dirname, '../dist' );
    config.output.libraryTarget = 'umd';
    config.output.library = 'TtmdTable';
    config.devtool = 'source-map';
}

module.exports = config;