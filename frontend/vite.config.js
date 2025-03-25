import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allows access from external networks
    port: process.env.PORT || 5173, // Uses the environment variable or defaults to 5173
    strictPort: true,
    allowedHosts: ["job-management-portal-app.onrender.com"], // Allow this host
  },
});
