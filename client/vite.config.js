import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/whatsapp_clone/",      // before you deploy the project open it
  plugins: [react()],
});
