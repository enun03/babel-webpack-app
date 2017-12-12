module.exports = {
    entry: './public/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'sytle-loader!css-loader'},
            {test: /\/js$/, loader: 'babel-loader', exclude: /node_modules/, query:{presets:['env']}}   
        ]
    }
}