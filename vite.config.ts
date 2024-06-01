import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import wyw from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {},
    plugins: [
      react(),
      nodePolyfills(),
      TanStackRouterVite(),
      wyw({
        include: ['**/*.{ts,tsx}'],
        babelOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
      }),
      tsconfigPaths(),
      svgr(),
    ],
  };
});

