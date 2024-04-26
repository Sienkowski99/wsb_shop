import { resolve } from "path";
import { readFileSync } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: true,
      Merriweather: true,
    },
  },
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    "name": "wsb_shop",
    "short_name": "app",
    "theme_color": "#4DBA87",
    "useWebmanifestExtension": false,
    "icons":[
        {
            "src": "./wsb_shop_icon_192.png",
            "sizes": "192x192",
            "type": "image/png"
        },{
            "src": "./wsb_shop_icon_512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
  },
  server: {
    https: {
      key: readFileSync(resolve(__dirname, 'localhost+3-key.pem')),
      cert: readFileSync(resolve(__dirname, 'localhost+3.pem'))
    }
  }
});
