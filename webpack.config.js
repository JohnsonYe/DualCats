const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');



module.exports = () => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [{
                    test: /\.(js)$/,
                    use: {loader: 'babel-loader'},
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(jpg|png)$/,
                    use: { loader: 'url-loader'}
                },

               
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        mode: 'product',
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
                    API_URI: JSON.stringify(process.env.API_URI || "http://localhost:8084")
                }
            })
        ],
        devServer: {
            port: 3000,
            historyApiFallback: true
        }
    }
}

// {
//     test: /\.s[ac]ss$/i,
//     use: ['style-loader', 'sass-loader']
// },