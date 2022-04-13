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
    max-width: 100%;
    margin-left: var(--sidebar);
    margin-top: var(--navbar);
    // padding: var(--pdlg);
    padding: var(--layout-pd);

    @include respond-to(large) {
        margin-left: 0;
    }

    // @include respond-to(handlers) {
    //     padding: var(--pdsm);
    // }
}

.panel {
    border-radius: var(--radius-8);
    background: #fff;
    box-shadow: var(--shadow);
    padding: var(--pdxl);
    overflow: hidden;
}

hr {
    opacity: 0.3;
    margin: var(--pdlg) 0;
}

.error {
    color: var(--pink);
    padding-right: var(--pdsm);
    font-size: 12px;
    font-weight: 700;
}

/* flex align justify center */
.fajc {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* panel */
.panel {
    border-radius: var(--radius-8);
    background-color: #fff;
    padding: var(--pdlg);
    border: 1px solid #eeeeee;
}
</style>
