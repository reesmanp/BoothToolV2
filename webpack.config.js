const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    boothtool: './views/components/Index.tsx',
    app: './views/index.ts'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  target: 'electron-renderer',
  module: {
    rules: [
      // All files with a '.scss' extension will be handled by 'sass-loader'.
      { test: /\.scss$/, loader: ExtractTextWebpackPlugin.extract('css-loader!sass-loader') },

      // All files with a '.css' extension will be handled by 'css-loader'.
      { test: /\.css$/, loader: 'css-loader' },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: 'boothtool.css',
      allChunks: true
    })
  ],
  node: {
    __dirname: false,
    __filename: false,
    fs: 'empty'
  },
};
