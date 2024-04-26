import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  modules: ["@nuxtjs/google-fonts", "@vesp/nuxt-fontawesome"],
  googleFonts: {
    families: {
      Montserrat: true,
      Merriweather: true,
    },
  },
  fontawesome: {
    icons: {
      solid: ["camera-retro", "laptop"],
    },
  },
});
