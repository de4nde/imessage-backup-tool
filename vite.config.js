import { cpSync } from "node:fs";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "copy-classic-scripts",
      writeBundle(options) {
        cpSync("js", `${options.dir}/js`, { recursive: true });
      },
    },
  ],
});
