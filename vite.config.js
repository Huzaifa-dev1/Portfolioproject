import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add a base path if your site is not deployed at the root
  base: '/',
  build: {
    // Generate sourcemaps for easier debugging
    sourcemap: true,
    // Ensure assets are properly handled
    assetsDir: 'assets',
    // Improve output configuration
    rollupOptions: {
      output: {
        // Ensure proper entrypoint format
        format: 'es',
        // Include file extensions in imports
        preserveModules: false,
        // Ensure proper chunks
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
        // Set proper file extensions
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  // Ensure proper asset handling
  server: {
    headers: {
      'Content-Type': 'text/javascript'
    }
  },
  // Ensure proper JSX handling
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})