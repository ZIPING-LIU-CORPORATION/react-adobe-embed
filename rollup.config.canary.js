import babel from   "@rollup/plugin-babel";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
 
import filesize from 'rollup-plugin-filesize';
 
import replace from "rollup-plugin-replace";
import typescript from 'rollup-plugin-typescript2';
import minify from 'rollup-plugin-babel-minify';

const config = {
    input: './canary/App.tsx',
    output: [
        {
       
            file: "build/app.js",
            format: 'umd',
            name:  'App',
            globals: {
                react: 'React',
                'react-dom/client': 'ReactDOM'            }

        }
    ],
    plugins: [
        typescript({ useTsconfigDeclarationDir: false ,

            tsconfigOverride: {
                compilerOptions: {
                    outDir: "build"
                },
         
            include: [
                 "canary/App.tsx"
            ],

            exclude: [
                "**/__tests__",
                "build",
                "dist",

            ]
        },
        }),
        peerDepsExternal(),
        babel({
            exclude: ['node_modules/**',
                "build",
                "dist",
            ],
        
            runtimeHelpers: true,
            externalHelpers: true,
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
        minify({
            comments: false
        })
        
    ],

    external: ['react', 'react-dom/client', 'react-dom'],
};

export default config;
