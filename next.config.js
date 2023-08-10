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
              outputPath: 'videos/', // adjust the output path as needed
              publicPath: '_next/static/videos/', // adjust the public path as needed
            },
          },
        });
    
        return config;
    },
}

module.exports = nextConfig;
