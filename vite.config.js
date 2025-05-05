import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@views': path.resolve(__dirname, './src/views'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@common': path.resolve(__dirname, './src/components/Common'),
      '@constants': path.resolve(__dirname, './src/components/Constants'),
      '@custom': path.resolve(__dirname, './src/components/CustomComponents'),
      '@layoutComponent': path.resolve(
        __dirname,
        './src/components/LayoutComponent'
      ),
      '@apidata': path.resolve(__dirname, './src/apidata'),
      '@routing': path.resolve(__dirname, './src/routes'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@nonLayout': path.resolve(__dirname, './src/layout'),
      '@api': path.resolve(__dirname, './src/api'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://node-api.pixeleyez.com',
        changeOrigin: true,
        allowOrigin: true,
      },
    },
  },
})
