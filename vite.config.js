import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/
//create alias with @ symbol for component imports
import { fileURLToPath, URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
        output: {
           
            entryFileNames: 'app.js',
            
        }
    }
},
resolve:{
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
