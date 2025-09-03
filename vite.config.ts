import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    allowedHosts: [
      "creakily-healthful-linnet.cloudpub.ru",
      "e49f77f1986d.ngrok-free.app", // add your ngrok domain here
    ],
  },
});
