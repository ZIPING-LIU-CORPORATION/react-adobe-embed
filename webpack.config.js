const path = require("path");
const fs = require("fs");

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require( '@pmmmwh/react-refresh-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const bundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss", ".css", ".json"],

    },



    
    module: {
      rules: [
        // `js` and `jsx` files are parsed using `babel`
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        // `ts` and `tsx` files are parsed using `ts-loader`
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          use: [MiniCSSExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets",
              },
            },
          ],
        },
        {
          ///scss
          test: /\.s[ac]ss$/i,
          use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },

    mode: "production",

    entry: "./dist/src/index.js",

    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "build"),
    },

 
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "index.css",
        }),

        new ReactRefreshWebpackPlugin(),

    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
        
    
  };
};