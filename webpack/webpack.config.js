var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");






module.exports = {


    entry:{

        index:path.resolve(__dirname, './zj-1.css')
    },
    //输出
    output:{

        path:path.resolve(__dirname, 'build'),
        filename:'[name].css'
    },
    module:{
        loaders:[

            {
                test:/\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }

        ]
    },
    resolve:{
        extensions:["", ".js", ".jsx", ".css", ".json"]
    },
    plugins: [

        // 生成 css 样式的 并添加了 哈希（hash）
        new ExtractTextPlugin("[name].css?[hash]", {
            allChunks: true,
            disable: false
        })

    ]

};