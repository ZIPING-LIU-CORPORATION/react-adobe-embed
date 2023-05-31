import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import replace from "rollup-plugin-replace";
import typescript from 'rollup-plugin-typescript2';
import minify from 'rollup-plugin-babel-minify';

const config = {
    input: 'src/main.tsx',
    output: [
        {
       
            file: 'dist/react-adobe-embed.cdn.js',
            // cdn format
            format: 'umd',
            name: 'ReactAdobeEmbed',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM'            }

        }
    ],
    plugins: [
        typescript({ useTsconfigDeclarationDir: true }),
        peerDepsExternal(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            externalHelpers: true,
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
