import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  define: {
    'process.env': {}
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  server: {
    allowedHosts: ["dd1d-180-244-129-187.ngrok-free.app"], // Tambahkan domain ngrok kamu di sini
    host: true, // Memungkinkan akses dari jaringan luar
    port: 5173, // Pastikan sesuai dengan port yang kamu gunakan
  }
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
  // server: {
  //   allowedHosts: ["dd1d-180-244-129-187.ngrok-free.app"], // Tambahkan domain ngrok kamu di sini
  //   host: true, // Memungkinkan akses dari jaringan luar
  //   port: 5173, // Pastikan sesuai dengan port yang kamu gunakan
  // }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
})
