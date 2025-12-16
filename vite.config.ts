import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	appType: 'spa',
	build: {
		chunkSizeWarningLimit: 4200
	},
	plugins: [vue()]
});
