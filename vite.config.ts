import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import path from "path";
import generateFile from "vite-plugin-generate-file";

const figmaManifest = {
  name: "Figma-Plugin-React-Vite",
  id: "1222852692367737510",
  api: "1.0.0",
  main: "plugin.js",
  ui: "ui.html",
  capabilities: [],
  enableProposedApi: false,
  editorType: ["figma", "figjam"],
};

export default defineConfig({
  plugins: [
    viteSingleFile(),
    generateFile({
      type: "json",
      output: "./manifest.json",
      data: figmaManifest,
    }),
  ],
  build: {
    lib: {
      name: figmaManifest.name,
      entry: path.resolve(__dirname, "./src/plugin/plugin.ts"),
      fileName: "plugin",
      formats: ["es"],
    },
    outDir: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
    },
  },
});
