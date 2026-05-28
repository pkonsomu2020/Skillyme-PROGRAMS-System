import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": "/src"
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core"
    ]
  }
})
