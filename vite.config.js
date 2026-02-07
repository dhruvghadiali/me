import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,tsx,js,ts}",
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@MEComponents": "/node_modules/@dhruv21/me-components/dist/me-components.es.js",
      "@MEComponentsCss": "/node_modules/@dhruv21/me-components/dist/style.css",
      "@MERedux": "/src/slice",
      "@MEPages": "/src/pages",
      "@MEUtils": "/src/utils",
      "@MEAssets": "/src/assets",
      "@MEHelpers": "/src/helpers",
      "@MEContexts": "/src/contexts",
      "@MELocalization": "/src/localization",
      "@MECommonComponents": "/src/components/common",
      "@MEShadcnComponents": "/src/components/ui",
      "@MEScreenComponents": "/src/components/screens",
      "@MEPageRoutes": "/src/utils/pageRoutes/index.js",
      "@MEScreens": "/src/screens",
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
})
