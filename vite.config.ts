import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // import { ... } from "@/..."
      },
    },
    plugins: [react()],
    define: {
      __APP_ENV__: env
    },
  };
});
