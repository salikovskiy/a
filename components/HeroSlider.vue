<script setup>
const props = defineProps({projects: Object})
</script>

<template lang="pug">
div.hero-slider
    div.images
        <iframe src="https://giphy.com/embed/3oEduY9vzp0VSk0xQA" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    div.text
        h2 Unique interior design just for you
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nisi posuere nibh tempus faucibus quis cursus lacinia vel. Arcu, risus.
        button Lets work together!
</template>

<style lang="scss" scoped>
.hero-slider {
    @apply border-b
            lg:(flex border-r border-l);
    .images {
        @apply h-90vw max-h-520px border-b relative overflow-hidden
                lg:(w-[calc(50%+3px)] border-b-transparent border-r);
        img {
            @apply absolute w-[80%] top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%];
        }
        iframe {
            @apply pointer-events-none w-[90%] h-full m-auto;
        }
    }
    .text {
        @apply p-5 lg:(p-10 w-[50%] flex flex-col justify-end items-start);
        h2 {
            @apply text-base mb-3;
        }
        p {
            @apply text-xs italic font-light mb-5;
        }
        button {
            @apply text-xs uppercase italic underline;
        }
    }
}
</style>
