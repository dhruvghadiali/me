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
      "@MERedux": "/src/slice",
      "@MEUtils": "/src/utils",
      "@MEAssets": "/src/assets",
      "@MEHelpers": "/src/helpers",
      "@MELocalizationEn": "/src/localization/en",
      "@MECommonComponents": "/src/components/common",
      "@MEShadcnComponents": "/src/components/shadcn",
      "@MEScreenComponents": "/src/components/screens",
      "@MEPageRoutes": "/src/utils/pageRoutes/index.js",
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
