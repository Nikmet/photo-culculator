import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    // resolve: {
    //     alias: {
    //         "@": path.resolve("./src")
    //     }
    // },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: '@import "./src/*.scss";'
    //         }
    //     }
    // },
    plugins: [
        react(),
        VitePWA({
            strategies: "injectManifest",
            srcDir: "src",
            filename: "sw.ts",
            registerType: "autoUpdate",
            injectRegister: false,

            pwaAssets: {
                disabled: false,
                config: true
            },

            manifest: {
                name: "photo-calculator",
                short_name: "ph-calc",
                description: "Приложение для расчета стоимости услуг фото-салона",
                theme_color: "#844f00"
            },

            injectManifest: {
                globPatterns: ["**/*.{js,css,html,svg,png,ico}"]
            },

            devOptions: {
                enabled: false,
                navigateFallback: "index.html",
                suppressWarnings: true,
                type: "module"
            }
        })
    ]
});
