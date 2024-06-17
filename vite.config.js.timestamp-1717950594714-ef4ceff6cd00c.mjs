// vite.config.js
import { VitePWA } from "file:///C:/Users/user/Documents/work/pwa/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/user/Documents/work/pwa/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/user/Documents/work/pwa/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue(), VitePWA({
    registerType: "autoUpdate",
    injectRegister: false,
    pwaAssets: {
      disabled: false,
      config: true
    },
    manifest: {
      name: "vite-project",
      short_name: "vite-project",
      description: "vite-project",
      theme_color: "#ffffff"
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true
    },
    devOptions: {
      enabled: false,
      navigateFallback: "index.html",
      suppressWarnings: true,
      type: "module"
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFx3b3JrXFxcXHB3YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEb2N1bWVudHNcXFxcd29ya1xcXFxwd2FcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL3dvcmsvcHdhL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIFZpdGVQV0Eoe1xuICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgIGluamVjdFJlZ2lzdGVyOiBmYWxzZSxcblxuICAgIHB3YUFzc2V0czoge1xuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlnOiB0cnVlLFxuICAgIH0sXG5cbiAgICBtYW5pZmVzdDoge1xuICAgICAgbmFtZTogJ3ZpdGUtcHJvamVjdCcsXG4gICAgICBzaG9ydF9uYW1lOiAndml0ZS1wcm9qZWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAndml0ZS1wcm9qZWN0JyxcbiAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcblxuICAgIHdvcmtib3g6IHtcbiAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxzdmcscG5nLGljb30nXSxcbiAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcbiAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcbiAgICAgIHNraXBXYWl0aW5nOiB0cnVlXG4gICAgfSxcblxuICAgIGRldk9wdGlvbnM6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbmF2aWdhdGVGYWxsYmFjazogJ2luZGV4Lmh0bWwnLFxuICAgICAgc3VwcHJlc3NXYXJuaW5nczogdHJ1ZSxcbiAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgIH0sXG4gIH0pXSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixTQUFTLGVBQWU7QUFDdFQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBR2hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUTtBQUFBLElBQ3ZCLGNBQWM7QUFBQSxJQUNkLGdCQUFnQjtBQUFBLElBRWhCLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFFQSxVQUFVO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsY0FBYyxDQUFDLGdDQUFnQztBQUFBLE1BQy9DLHVCQUF1QjtBQUFBLE1BQ3ZCLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFFQSxZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxNQUNsQixrQkFBa0I7QUFBQSxNQUNsQixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
