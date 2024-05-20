import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // submit to the correct page each time we /api
        secure: false,
      },
    },
  },
  plugins: [react()],
});
