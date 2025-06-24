import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === "development" ? [screenGraphPlugin()] : []),
  ] as PluginOption[],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
}));
