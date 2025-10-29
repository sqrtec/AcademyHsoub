const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // ملف البداية
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    clean: true,
},
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
},
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        }),
        new HtmlWebpackPlugin({
        template: "./src/register.html",
        filename: "register.html",
        }),
        new HtmlWebpackPlugin({
        template: "./src/login.html",
        filename: "login.html",
        }),
        new HtmlWebpackPlugin({
        template: "./src/first-student.html",
        filename: "first-student.html",
        }),
        new HtmlWebpackPlugin({
        template: "./src/second-student.html",
        filename: "second-student.html",
        }),
    ],
    devServer: {
        static: "./dist",
        open: true,
        port: 3000,
        hot: false,
        liveReload: true,
    },
    mode: "development",
};
