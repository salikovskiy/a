<script setup>
const getProjects = async () => {
	const data = await queryContent().find('/')
	return data
}

const projects = ref(await getProjects())
console.log(projects);
</script>

<template lang="pug">
div#home
    HeroSlider(:projects="projects")
    section.projects
        ProjectCard.project(v-for="project in projects" :key="project._id" :data-id="project._id" :project="project")
    About
</template>

<style lang="scss">
#home {
    @apply 2xl:(container m-auto);
    .projects {
        @apply lg:(flex);
        .project {
            @apply lg:(w-[50%])
        }
    }
}
</style>