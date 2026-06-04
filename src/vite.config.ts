import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react({
        jsxRuntime: 'automatic', // Forces automatic React runtime compilation
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    esbuild: {
      jsx: 'automatic', // Ensures esbuild transpile target uses the modern jsx runtime
    },
  };
});
