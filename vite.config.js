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
      "@MEUtils": "/src/utils",
      "@MEAssets": "/src/assets",
      "@MELocalizationEn": "/src/localization/en",
      "@MECommonComponents": "/src/components/common",
      "@MEShadcnComponents": "/src/components/shadcn",
      "@MEScreenComponents": "/src/components/screens",
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
