/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');

const nextConfig = {  
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(mp4|mov|avi)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/videos/',
              publicPath: '/_next/static/videos/',
            },
          },
        });

        config.plugins.push(new webpack.DefinePlugin({
          'process.env.GITHUB_AUTH_TOKEN': JSON.stringify(process.env.GITHUB_AUTH_TOKEN),
        }))
    
        return config;
    },
}

module.exports = nextConfig;
