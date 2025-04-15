import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [],
      },
    }),
    tailwindcss(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'logo.webp'],
      manifest: {
        name: 'PMB Unpas',
        short_name: 'PMB Unpas',
        description: 'Universitas Pasundan (Unpas) adalah kampus unggulan di Bandung yang menawarkan program studi lengkap, fasilitas modern, dan kerjasama dengan industri. Daftar sekarang!',
        theme_color: '#FEF251',
        background_color: '#FEF251',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024
      }
    }),
  ],
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) return "vendor-icons";
            if (id.includes("swiper")) return "vendor-swiper";
            if (id.includes("lodash")) return "vendor-lodash";
            if (id.includes("axios")) return "vendor-axios";
            return "vendor";
          }
        },
        hoistTransitiveImports: false,
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: "esbuild",
    target: "esnext",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-cookie-consent", "axios"],
    exclude: ["swiper"],
  },
  esbuild: {
    drop: ["console", "debugger"],
    target: "es2020",
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: "camelCase",
    },
  },
});
