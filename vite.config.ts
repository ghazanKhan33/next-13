import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.REACT_APP_SERVER_HOST,
    port: parseInt(process.env.REACT_APP_SERVER_PORT, 10),
    // https: {
    //   key: path.resolve(__dirname, process.env.REACT_APP_SERVER_HTTPS_KEY),
    //   cert: path.resolve(__dirname, process.env.REACT_APP_SERVER_HTTPS_CERT),
    // },
    origin:process.env.REACT_APP_SERVER_ORIGIN,
  },
  build: {
    sourcemap: process.env.REACT_APP_BUILD_SOURCEMAP === 'true',
  },
})
