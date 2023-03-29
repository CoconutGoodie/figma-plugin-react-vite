import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import path from "path";
import generateFile from "vite-plugin-generate-file";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  root: path.resolve(__dirname, "./src/ui/"),
  // publicDir: path.join(__dirname, "./src/ui/public/"),
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: false,
    rollupOptions: {
      input: {
        ui: path.relative(__dirname, "./src/ui/ui.html"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
    },
  },
});
