import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import replace from "rollup-plugin-replace";
import minify from 'rollup-plugin-babel-minify';
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
 

import packageJson from './package.json';

const outputCommonConf = {
  sourcemap: 'inline',
  globals: {
    react: 'React',
    'react-dom/client': 'ReactDOM'
  }
};

const config = {
  input: 'src/index.js',
  output: [
    {
      file: packageJson['umd:main'],
      format: 'umd',
      name: 'ReactScriptTag',
      ...outputCommonConf
    },
    {
      file: packageJson.main,
      format: 'cjs',
      ...outputCommonConf
    },
    {
      file: packageJson.module,
      format: 'es',
      ...outputCommonConf
    },
  ],
  plugins: [
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' ,
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
  ]
  }),
    localResolve(),
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    minify({ comments: false }),
    filesize(),
  ],
};


export default [
    {
        input: "./src/index.tsx",
        output: [
          {
            file: packageJson['umd:main'],
            format: 'umd',
            name: 'ReactScriptTag',
            ...outputCommonConf
          },
          {
            file: packageJson.main,
            format: 'cjs',
            ...outputCommonConf
          },
          {
            file: packageJson.module,
            format: 'es',
            ...outputCommonConf
          },
        ],
        plugins: [
            peerDepsExternal(),
            localResolve(),
            babel({ exclude: 'node_modules/**' }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            minify({ comments: false }),
            terser(),
            filesize(),
        ],
        external: ["react", "react-dom", "styled-components"]
    },
 
];