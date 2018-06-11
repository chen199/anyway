const path = require("path")
const bundlePath = path.resolve(__dirname, "public")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: bundlePath,
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          template: 'src/index_template.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9000
    }
}