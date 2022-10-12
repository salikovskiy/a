<script setup>
import { useGlobalState } from '../store/state'
import Burger from '../assets/icons/burger.svg'

const globalState = useGlobalState()
</script>

<template lang="pug">
header.header
    NuxtLink(to="/"): h1.logo Ann Kurinna
    nav
        NuxtLink(to="/portfolio") Portfolio
        NuxtLink(to="/about") About
        NuxtLink(to="/contact") Contact
    button.burger(@click="globalState.changeSidebarState"): Burger
</template>

<style lang="scss" scoped>
.header {
    @apply fixed top-0 w-full border-b border-t bg-primary-black border-primary-white flex h-45px items-center justify-between px-5 z-20
            md:(h-55px px-10);
    a { @apply underline-transparent; }
    .logo {
        @apply text-base
                md:(text-xl);
    }
    nav {
        @apply flex h-full border-l
                <lg:(hidden);
        a {
            @apply text-sm uppercase w-200px h-full flex justify-center items-center
                    border-r;
        }
    }
    .burger {
        @apply  lg:(hidden);
        svg {
            @apply pointer-events-none;
        }
    }
}
</style>
