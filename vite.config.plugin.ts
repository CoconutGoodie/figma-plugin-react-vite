import path from "path";
import { defineConfig } from "vite";
import generateFile from "vite-plugin-generate-file";
import { viteSingleFile } from "vite-plugin-singlefile";
import figmaManifest from "./figma.manifest";

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
    emptyOutDir: false,
    outDir: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@plugin": path.resolve(__dirname, "./src/plugin"),
    },
  },
});
