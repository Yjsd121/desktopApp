import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import electron from "vite-plugin-electron/simple";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),

    babel({
      presets: [reactCompilerPreset()],
    }),

    electron({
      main: {
        entry: "src/main/main.tsx",
      },

      preload: {
        input: "src/preload/preload.ts",
      },
    }),
  ],
});