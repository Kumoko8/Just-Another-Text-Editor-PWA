const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'TODOs List'
      }),
      new WebpackPwaManifest({
        name: 'TODOs Manifest Example',
        short_name: 'myPWA',
        description:'its a PWA',
        background_color:'#7eb4e2',
        theme_color: '#7eb4e2',
        start_url: "./",
        publicpath: './',
        icons: [
         {
           src: path.resolve('assets/images/logo.png'),
           sizes: [96, 128, 192, 256, 384, 512],
           destination: path.join('assets', 'icons'),
         }
        ]
       }),
       new InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'service-worker.js',
      }), 
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};