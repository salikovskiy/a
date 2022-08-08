<script setup>
const title = "Ann Kurinna | Portfolio"
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title,
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;1,300;1,400&display=swap" },
    { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
  ],
})
</script>
<template lang="pug">
Header
div Ann Portfolio
</template>
<style lang="scss">
body {
  @apply font-default bg-primary-black text-primary-white;
}
</style>
