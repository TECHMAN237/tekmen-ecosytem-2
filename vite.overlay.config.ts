import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// Builds ONE self-contained script (React + styles inside a Shadow DOM) that is injected into
// the copies of the Agency and Innovation sites, so "Back to Ecosystem" and TEKMEN AI are always present.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: { 'process.env.NODE_ENV': '"production"' },
  publicDir: false,
  build: { outDir: 'public/overlay', emptyOutDir: true, lib: { entry: 'src/overlay.tsx', formats: ['iife'], name: 'TekmenOverlay', fileName: () => 'tekmen-overlay.js' } },
})
