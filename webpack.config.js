const webpack = require('webpack')

module.exports = {
    mode: 'development',
    performance: { hints: false },
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
        allowedHosts: [
            '.jezao.net'
        ]
    },
    module: {
        rules: [    
            {
                test: /.jsx?$/,

                use: [{
                    loader: 'babel-loader',

                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                }],

                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }

}