/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc';
import path, { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   build: { lib: { entry: resolve(__dirname, 'src/main.ts'), formats: ['es'] } },
//   resolve: { alias: { src: resolve('src/') } },
//   plugins: [dts()],
// });

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      // entry: resolve(__dirname, 'lib/index.ts'),
      name: 'react-beautiful-timeline',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.stories.ts', '**/*.spec.tsx'],
    }),
    cssInjectedByJsPlugin(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./lib/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'lib'),
    },
    // resolve: { alias: { src: resolve('src/') } },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
