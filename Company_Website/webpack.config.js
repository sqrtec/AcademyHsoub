const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", // أو "production" عند البناء النهائي
    entry: "./src/js/index.js",
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        clean: true, // ينظف مجلد build تلقائياً قبل كل بناء
    },

    module: {
        rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                publicPath: "../",
                },
            },
            "css-loader",
            "sass-loader",
            ],
        },

        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
            generator: {
            filename: "images/[name][ext]",
            },
        },

        {
            test: /\.(eot|woff|woff2|ttf)$/i,
            type: "asset/resource",
            generator: {
            filename: "fonts/[name][ext]",
            },
        },

        {
            test: /\.html$/i,
            loader: "html-loader",
        },

        {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
            exposes: ["$", "jQuery"],
            },
        },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        }),
        new HtmlWebpackPlugin({
        template: "./src/projects.html",
        filename: "projects.html",
        }),
        new HtmlWebpackPlugin({
        template: "./src/project-details.html",
        filename: "project-details.html",
        }),
        new MiniCssExtractPlugin({
        filename: "css/style.css",
        }),
    ],

    // Webpack Server
    devServer: {
        static: {
        directory: path.join(__dirname, "build"),
        },
        port: 9000,
        open: true,
        compress: true,
        client: {
        logging: "none",
        overlay: true, // يُظهر الأخطاء في المتصفح
        },
        devMiddleware: {
            writeToDisk: false,
        },
    },

    performance: {
        hints: false,
    },

    stats: "errors-only",
};
