const path = require('path');
const tsloader = require('ts-loader');
const react = require('react');
module.exports = env => {
   const envString = JSON.stringify(env, null, 2);
   const envObj = JSON.parse(envString);
   const fileName = envObj['production'] ? 'index.min.js' : 'index.dev.js';
   const loader = envObj['production'] ? 'babel-loader' : 'ts-loader';

   const loaders = {
    'babel-loader': require.resolve('babel-loader'),
    'ts-loader': require.resolve('ts-loader')
   }
   console.log('loader', loader);
   return {
    mode: 'production',
entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: fileName,
        publicPath: '/lib'
    },
    devtool: 'inline-source-map',


    module: {
 
        
    
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: loaders[loader],
             
            },
            {
                test: /\.jsx?$/,
                loader: loaders['babel-loader'],
                exclude: /node_modules/
                },
        
    
        ]
    },
    resolve: {
        extensions: ['.jsx', 'ts', 'tsx', 'js'],
        
    },

   }
}