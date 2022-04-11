<script setup>
import { RouterLink, RouterView } from "vue-router";
import LeftSidebar from "@/components/LeftSidebar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template lang="pug">
RouterView
</template>

<style lang="scss">
@import "@/assets/base.css";

body {
    background: var(--bgc);
}

#app {
    
}

main {
    margin-left: var(--sidebar);
    margin-top: var(--navbar);
    padding: var(--pdlg);
}
</style>
