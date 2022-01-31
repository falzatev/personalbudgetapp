const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[contenthash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true
    },
}
