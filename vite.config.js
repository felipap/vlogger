import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	root: 'src/renderer',
	build: {
		outDir: '../../dist/renderer',
		emptyOutDir: true,
		sourcemap: true,
	},
	server: {
		port: 3000,
	},
});
