const webpack = require('webpack')
module.exports = {
    entry: './public/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query:{presets:['env']}}   
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            //Util: "exports-loader?Util!bootstrap/js/dist/util",
           // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
          })
    ]
}