/** @type {import('next').NextConfig} */
const path = require('path');

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
    
        return config;
    },
}

module.exports = nextConfig;
