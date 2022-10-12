import { defineNuxtConfig } from 'nuxt'
import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    modules: ["@nuxt/content", "nuxt-windicss"],
    nitro: {
        prerender: {
            routes: ["/sitemap.xml"],
        },
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    vite: {
        plugins: [
            svgLoader({
                svgo: false,
            }),
        ],
    },
})
