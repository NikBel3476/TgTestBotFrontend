import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/TgTestBotFrontend/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				notFound: resolve(__dirname, '404.html')
			}
		}
	},
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
