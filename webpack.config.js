const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './views/components/base.js']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'boothtool.js',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    contentBase: './html',
    publicPath: 'http://localhost:8080/built/'
  },
  module: {
    rules: [
      // All files with a '.scss' extension will be handled by 'sass-loader'.
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },

      // All files with a '.css' extension will be handled by 'css-loader'.
      { test: /\.css$/, loader: 'css-loader' },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
};
