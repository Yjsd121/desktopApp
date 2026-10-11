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
        vite: {
          define: {
            __filename: "fileURLToPath(import.meta.url)",
          },
          build: {
            rollupOptions: {
              external: [
                "@prisma/adapter-better-sqlite3",
                "better-sqlite3",
                "bindings",
                "file-uri-to-path",
              ],
            },
          },
        },
      },

      preload: {
        input: "src/preload/preload.ts",
      },
    }),
  ],
});
