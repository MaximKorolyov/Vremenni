В package.json в scripts/dev написать "HOST=185.239.50.54 vite"
В vite.config.js изменить defineConfig на 

export default defineConfig({
  plugins: [react()],
  server: {
    host: '185.239.50.54'
  }
})