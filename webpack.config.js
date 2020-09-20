const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
var API_URI = "https://api.dualcats.com";
var BUILD_ENVIROMENT = "production";
for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == "development") {
        API_URI = "http://localhost:8084";
        BUILD_ENVIROMENT = 'developement';
    }
}


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
        mode: BUILD_ENVIROMENT,
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(BUILD_ENVIROMENT),
                    API_URI: JSON.stringify(API_URI),
                    REFRESH_TOKEN_EXPIRE_TIME: 86400
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