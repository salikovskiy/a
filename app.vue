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
  ],
})
</script>
<template lang="pug">
Header
main
  NuxtPage
Sidebar
Footer
</template>
<style lang="scss">
// - global styles
* { @apply m-0 p-0 box-border; }

body {
  @apply font-default bg-primary-black text-primary-white;
}

// -- typography
a {
  @apply text-primary-white;
}

h1,
h2,
h3,
h4 {
  @apply uppercase;
}
// elements
button {
  @apply bg-transparent w-auto text-primary-white;
}
img {
  @apply w-full block;
}

main {
  @apply mt-45px
          md:(mt-55px);
}
</style>
