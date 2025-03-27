import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    })[
      ("transform-imports",
      {
        "react-icons": {
          transform: "react-icons/${member}",
          preventFullImport: true,
        },
      })
    ],
  ],
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    include: ["react-cookie-consent"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) return "vendor-icons";
            if (id.includes("swiper")) return "vendor-swiper";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  minify: "esbuild",
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
});
