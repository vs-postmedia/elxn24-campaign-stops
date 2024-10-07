import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// PROJECT PATH
// const projectPath = '/svelte-template/';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/svelte-template/',
  // base: process.env.MODE === 'production' ? projectPath : '/',
  plugins: [svelte()],
  resolve: {
    alias: {
      "$components": path.resolve('./src/components'),
      "$data": path.resolve("./src/data"),
	    "$css": path.resolve("./src/css"),
	    "$fonts": path.resolve("./public/fonts"),
      "$images": path.resolve("./src/images"),
      "$videos": path.resolve("./public/video"),
      "$lib": path.resolve('./lib')
    }
  }
});
