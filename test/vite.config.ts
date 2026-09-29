import { defineConfig } from "vite";

export default defineConfig({
  // relative asset paths, so the build works under the GitHub Pages sub path
  base: "./",
  resolve: {
    // the plugin is linked from ../, make it use this app's copies
    dedupe: ["mermaid", "reveal.js"],
  },
});
