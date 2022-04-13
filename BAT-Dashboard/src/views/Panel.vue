<script setup>
import Navbar from "@/components/Navbar.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {
    data() {
        return {
            menuActive: false,
        }
    },
    methods: {
        navActive(data) {
            this.menuActive = data.menuActive;
            console.log("Nav status: ", data);
        },
    },
};
</script>

<template lang="pug">
//- Navbar(@navClick="navActive")
Navbar(:navActive="navActive")
LeftSidebar(:sidebarActive="menuActive")
main
    RouterView

</template>
