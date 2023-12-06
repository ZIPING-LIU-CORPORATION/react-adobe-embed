import babel from "@rollup/plugin-babel";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';
import filesize from 'rollup-plugin-filesize';

import replace from "@rollup/plugin-replace";
import typescript from 'rollup-plugin-typescript2';
import terser from "@rollup/plugin-terser";
const config = {
    input: './canary/App.tsx',
    output: [
        {

            file: "build/app.js",
            format: 'umd',
            name: 'App',
            globals: {
                react: 'React',
                'react-dom/client': 'ReactDOM'
            }

        }
    ],
    plugins: [
        css(),
        typescript({
            useTsconfigDeclarationDir: false,
            sourceMap: false,
            tsconfig: "./tsconfig.build.json",
            tsconfigOverride: {
                compilerOptions: {
                    outDir: "build"
                },

                declaration: false,
                include: [
                    "./canary/App.tsx"
                ],

                exclude: [
                    "**/__tests__",
                    "build",
                    "dist",
                ],
                
            },
        }),
        peerDepsExternal(),
        babel({
            exclude: ['node_modules/**',
                "build",
                "dist",
            ],

            babelHelpers: 'external',
            include: [
                "canary/App.tsx"
            ],


            presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
        }),
        resolve(),

        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        filesize(),
        terser({
            format: {
                comments: "all",
                preamble: "/* react app for react-adobe-embed used as a live testing environment  via github pages */"
            }
        }),

    ],

    external: ['react', 'react-dom/client', 'react-dom'],
};

export default config;
