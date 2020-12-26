const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              rootMode: "upward"
            }
          },
          {
            loader: "eslint-loader",
            options: {
              rootMode: "upward"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico"
    }),
    new WebpackPwaManifest({
      name: 'PneuShop',
      short_name: 'PneuShop',
      description: 'One stop hub for pneumatic products',
      theme_color: "#002060",
      background_color: "#EEEEEE",
      display: "standalone",
      icons: [
        {
          src: path.resolve("./src/favicon-16x16.png"),
          size: "16x16" // multiple sizes
        },
        {
          src: path.resolve("./src/favicon-32x32.png"),
          size: "32x32" // multiple sizes
        },
        {
          src: path.resolve("./src/android-chrome-192x192.png"),
          size: "192x192" // multiple sizes
        },
        {
          src: path.resolve("./src/android-chrome-512x512.png"),
          size: "512x512" // you can also use the specifications pattern
        }
      ]
    })
  ],
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  if (isProduction) {
    config.optimization.minimize = true;
    config.optimization.minimizer = [new TerserPlugin()];
    config.plugins.push(new Dotenv({
      path: "../../.env.prod"
    }));
    config.plugins.push(new CompressionPlugin());
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  else {
    config.devtool = 'source-map';
    config.plugins.push(new Dotenv({
      path: "../../.env.dev"
    }));
  }
  return config;
};