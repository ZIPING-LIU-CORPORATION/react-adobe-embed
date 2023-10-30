import {babel} from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from  '@haensl/rollup-plugin-local-resolve';
import replace from "@rollup/plugin-replace";

import typescript from "@rollup/plugin-typescript";
 
import terser from "@rollup/plugin-terser";
import{ dts} from "rollup-plugin-dts";

import packageJson from './package.json';

const outputCommonConf = {
  sourcemap: 'inline',
  exports: 'named',
  globals: {
    react: 'React',
    'react-dom/client': 'ReactDOM'
  }
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
            babel({ exclude: 'node_modules/**, src/tests/**' ,
        
            babelHelpers: 'external',
            presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
          }),
        

            
         
            replace({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }),

            
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" ,
          
            "sourceMap": true,
            exclude: [
              "**/tests/**/*",
              "**/*.test.tsx",
              "**/*.test.ts",
              "**/__tests__",
            ]
          }),
    
            terser( {
              format:{
                comments: "some",
                preamble: "/* react-script-tag */"
              }
            }),

            filesize(),
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    {
        input: "./lib/types/index.d.ts",
        output: [{ file: "lib/bundle.esm.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];