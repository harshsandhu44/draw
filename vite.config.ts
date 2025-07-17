import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure SEO files are properly copied
        assetFileNames: (assetInfo) => {
          if (/\.(webmanifest|xml|txt)$/.test(assetInfo.names[0])) {
            return `[name].[ext]`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.names[0])) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },
  server: {
    headers: {
      // Security headers for development
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
  define: {
    // Define app metadata for use in components
    __APP_NAME__: JSON.stringify("Draw by Harsh Sandhu"),
    __APP_DESCRIPTION__: JSON.stringify(
      "Create and share drawings with our easy-to-use online whiteboard",
    ),
    __APP_URL__: JSON.stringify("https://draw.harshsandhu.com"),
  },
});
