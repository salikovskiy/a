<script setup>
const props = defineProps({project: Object})
</script>

<template lang="pug">
div.project
    div.wrapper
        NuxtLink.image(:to="`/${project.slug}`")
            img(:src="project.cover_url")
        div.text
            NuxtLink.link(:to="`/${project.slug}`")
                h3.title {{ project.title }}
                p view project
</template>

<style lang="scss" scoped>
.project {
    @apply ;
    &:nth-child(2) {
        .wrapper {
            @apply sm:(flex-row-reverse)
                    lg:(flex-row);
            .image {
                @apply sm:(w-[calc(50%-1px)])
                        lg:(w-[50%]);
            }
            .text {
                @apply  sm:(border-l-transparent border-r)
                        lg:(border-l);
            }
        }
    }
    .wrapper {
        @apply border-b
                sm:(flex w-full)
                lg:(border-l);
    }
    .image {
        @apply sm:(w-[50%]);
        img {
            @apply h-70vw object-cover
                    sm:(h-340px);
        }
    }
    .text {
        @apply p-5 h-40vw flex flex-col
                sm:(w-[50%] justify-end h-340px border-l)
                md:(p-10);
        .link {
            @apply underline-transparent;
            .title {
                @apply text-base;
            }
            p {
                @apply text-xs underline italic font-light;
            }
        }
    }
}
</style>
