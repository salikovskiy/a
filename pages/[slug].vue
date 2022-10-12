<script setup>
// Fetch post data
const route = useRoute()
const data = await queryContent().where({ slug: route.params.slug }).findOne()
const project = ref(data || {})

</script>

<template lang="pug">
div#project(v-if="project")
    img(width="300" :src="project.cover_url" alt="Image preview")
</template>

<style lang="scss" scoped>
.footer {
    @apply text-xs text-center py-3;
}
</style>
