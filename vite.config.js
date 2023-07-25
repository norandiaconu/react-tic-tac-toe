import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      manifest: true,
      outDir: 'docs',
    },
    plugins: [react(), viteTsconfigPaths()],
  };
});
