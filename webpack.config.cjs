const path = require('path');
module.exports = env => {
   const envString = JSON.stringify(env, null, 2);
   const envObj = JSON.parse(envString);
   console.log(envString, envObj['production'] )
   const fileName = envObj['production'] ? 'index.min.js' : 'index.dev.js';
   const loader = envObj['production'] ? 'babel-loader' : 'ts-loader';
   console.log(fileName)
   return {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: fileName,
    },
    devtool: 'inline-source-map',

  
    
    module: {
    noParse:[
    /node_modules\/react/
    
],

    
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
                },
        
    
        ]
    },
    resolve: {
        extensions: ['.jsx', 'ts', 'tsx', 'js'],
        
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'react-router-dom': 'react-router-dom',
    }
   }
}