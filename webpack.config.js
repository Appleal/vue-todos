const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
module.exports = {
    entry: "./www/app/app.js",
    output: {
        path: path.resolve(__dirname,"www/dist"),
        filename: "all.js",
    },
    mode: "development",
    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/g,
            include: [
                path.resolve(__dirname, "www/app/app")
            ],
            exclude: [
                path.resolve(__dirname, "node-modules")
            ],
            loader: "babel-loader",
            options: {
                presets:["es2015"]
            }

        }, {
            test: /\.vue$/,
            loader: "vue-loader",
            include: [
                path.resolve(__dirname, "www/app")
            ],
            exclude: [
                path.resolve(__dirname, "node-modules")]
        },{
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
