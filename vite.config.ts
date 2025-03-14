import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    "process.env": {},
  },
});
