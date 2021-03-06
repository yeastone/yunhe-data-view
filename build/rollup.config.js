import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import image from '@rollup/plugin-image'

export default {
  input: 'build/entry.js',
  output: {
    format: 'umd',
    file: 'dist/datav.map.vue.js',
    name: 'datav'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    vue(),
    image()
  ],
  external: ['Vue','imageVerify','blinkStar']
}