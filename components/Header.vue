<script setup>
import Burger from '../assets/icons/burger.svg'
</script>

<template lang="pug">
header.header
    NuxtLink.logo Ann Kurinna
    nav
        NuxtLink(to="/portfolio") Portfolio
        NuxtLink(to="/about") About
        NuxtLink(to="/contact") Contact
    Burger
</template>

<style lang="scss" scoped>
</style>
