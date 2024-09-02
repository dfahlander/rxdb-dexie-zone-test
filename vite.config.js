import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from 'vite-plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: ["@babel/plugin-transform-async-to-generator"],
      },
    })
  ],
  // optimizeDeps: {
  //   exclude: ['@socotec.io/socio-vue-components']
  // }
});
