import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  // script: [
  //   {
  //     src: "https://kit.fontawesome.com/f2d35917e5.js",
  //     crossorigin: "anonymous",
  //     // <script src="" crossorigin="anonymous"></script>
  //   },
  // ],
});
