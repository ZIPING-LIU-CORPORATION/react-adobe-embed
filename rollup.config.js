import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import replace from "rollup-plugin-replace";
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const config = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'lib/bundle.js', // equivalent to 'dist/bundle.js
      format: 'umd',
      name: 'ReactScriptTag',
      globals: {
        react: 'React'
      }
    },
    {
      file: 'lib/bundle.cjs.js', // equivalent to 'dist/bundle.js
      format: 'cjs',
      globals: {
        react: 'React'
      }
    },
    {
      file: 'lib/bundle.esm.js', // equivalent to 'dist/bundle.js
      format: 'esm',
     
      globals: {
        react: 'React'
      }
    },
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' ,
    runtimeHelpers: true,
    externalHelpers: true,
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
  }),
    localResolve(),
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    filesize(),
  ],

  external: ['react'],
};

export default config;
