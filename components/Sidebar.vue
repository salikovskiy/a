<script setup>
import { useGlobalState } from '../store/state'

const globalState = useGlobalState()
</script>

<template lang="pug">
div.sidebar(:class="globalState.isSidebarOpen && 'show'")
    nav
        NuxtLink(to="/") Portfolio
        NuxtLink(to="/") About
        NuxtLink(to="/") Contact
</template>

<style lang="scss" scoped>
.sidebar {
    @apply fixed bg-primary-black top-45px left-0 right-0 transition transform -translate-y-full z-10
            md:(top-55px)
            lg:(hidden);
    &.show {
        @apply translate-y-0;
    }
    nav {
        @apply flex flex-col;
        a {
            @apply h-45px text-sm px-5 uppercase underline-transparent flex items-center border-b
                    md:(px-10);
        }
    }
}
</style>
