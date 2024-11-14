import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path, { resolve } from 'path';

export default defineConfig({
	plugins: [
		solidPlugin(),
	],
	resolve: {
		alias: {
			'@' : path.resolve(__dirname, 'src'),
		},
	},
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
		},
	},
});