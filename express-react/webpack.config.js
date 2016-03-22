var path = require('path')
var webpack = require('webpack')

module.exports = {
entry: {
    app: './public/js/demo.js'
},
output: {
    filename: 'public/dist/bundle.js'
},
module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['jsx-loader?harmony'],
        exclude: /node_modules/
    }]
}
}
