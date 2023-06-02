import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import React from 'react'`,
    loaders: {
      '.js': 'jsx',
    },
  },
})