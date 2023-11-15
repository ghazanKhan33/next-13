import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

  export default defineConfig({
    plugins: [react()],
    server: {
      host: "app.artemis.local",
      port: 3000,
      // https: {
      //   key: path.resolve(__dirname, process.env.REACT_APP_SERVER_HTTPS_KEY),
      //   cert: path.resolve(__dirname, process.env.REACT_APP_SERVER_HTTPS_CERT),
      // },
      origin:"app.artemis.local:3000",
    },
    build: {
      sourcemap: true,
    },
  });