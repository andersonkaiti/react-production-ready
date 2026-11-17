import babel from '@rolldown/plugin-babel'
import { sentryVitePlugin } from '@sentry/bundler-plugins/vite'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    sentryVitePlugin({
      org: 'andersonkaiti',
      project: 'javascript-react',
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
})
