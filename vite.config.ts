import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
 const env = loadEnv(mode, process.cwd(),'')

 return (
  {
  
    plugins: [react()],
    server: {
      host: env.REACT_APP_SERVER_HOST,
      port: parseInt(env.VITE_REACT_APP_SERVER_PORT),
      // https: {
      //   key: path.resolve(__dirname, process.env.REACT_APP_SERVER_HTTPS_KEY),
      //   cert: path.resolve(__dirname, process.env.REACT_APP_SERVER_HTTPS_CERT),
      // },
      origin:env.REACT_APP_SERVER_ORIGIN,
    },
    build: {
      sourcemap: env.REACT_APP_BUILD_SOURCEMAP === 'true',
    },
  }
 )
})
