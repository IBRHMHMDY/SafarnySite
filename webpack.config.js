const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

  entry: './src/js/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    clean: true,
  },

  stats: {
    warnings: false,
  },

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,
	  hints: false,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    devMiddleware:{
      writeToDisk: true,
    },
    // compress: true,
    port: 2022,
    open: true,
    // livereload: false,
    hot: false,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options:{
            name: '[name].[ext]',
            outputPath:'images',
            limit: 8192,
          }
          
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
          options:{
            name: '[name].[ext]',
            outputPath:'fonts',
            limit: 8192,
          }
          
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/turkey.html',
      filename: 'turkey.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
    new CleanWebpackPlugin(),
  ],
};