import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import inlineSvg from "./scripts/vite/vite-inline-svg";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inlineSvg(), svgr(), viteSingleFile()],
  root: path.resolve(__dirname, "./src/ui/"),
  // publicDir: path.join(__dirname, "./src/ui/public/"),
  build: {
    outDir: path.resolve(__dirname, "./dist"),
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
