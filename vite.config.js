import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

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
