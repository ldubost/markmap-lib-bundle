import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import closure from 'rollup-plugin-closure-compiler-js';
import json from '@rollup/plugin-json';

export default [
 {
  input: 'node_modules/markmap-lib/dist/transform.js',
  output: {
      file: 'dist/markmap-lib.transform.bundle.js',
      format: 'umd',
      browser: true,
      name: 'transform'
  },
  plugins: [
    globals(),
    builtins(),
    resolve({
      preferBuiltins: false,
      browser: true,
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    closure({
      compilationLevel: 'WHITESPACE',
      languageIn: 'ES6',
      languageOut: 'ES6'
    })
  ]
},
{
  input: 'node_modules/markmap-lib/dist/view.js',
  output: {
      file: 'dist/markmap-lib.view.bundle.js',
      format: 'umd',
      browser: true,
      name: 'view'
  },
  plugins: [
    globals(),
    builtins(),
    json(),
    resolve({
      preferBuiltins: false,
      browser: true,
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    closure({
      compilationLevel: 'WHITESPACE',
      languageIn: 'ES6',
      languageOut: 'ES6'
    })
  ]
}
];
