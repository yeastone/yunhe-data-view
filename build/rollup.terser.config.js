import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser"
import image from '@rollup/plugin-image'

export default {
  input: 'build/entry.js',
  output: {
    format: 'umd',
    file: 'dist/datav.min.vue.js',
    name: 'datav'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    image(),
    commonjs(),
    vue(),
    terser(),
  ],
  external: ['Vue']
}