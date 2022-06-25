<script setup>
import Navbar from "@/components/Navbar.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
</script>

<script>
export default {
    data() {
        return {
            menuActive: false,
            multiselects: [
                {
                    value: null,
                    options: ["Unit long name 1", "Unit 2", "Unit 3", "Unit 4"],
                    placeholder: "Unit",
                },

                {
                    value: null,
                    options: ["Region 1", "Region 2", "Region 3", "Region 4"],
                    placeholder: "Region",
                },
                {
                    value: null,
                    options: ["City 1", "City 2", "City 3", "City 4"],
                    placeholder: "City",
                },
                {
                    value: null,
                    options: ["CM 1", "CM 2", "CM 3", "CM 4"],
                    placeholder: "CM",
                },
                {
                    value: null,
                    options: ["TMR 1", "TMR 2", "TMR 3", "TMR 4"],
                    placeholder: "TMR",
                },
            ],
            navItems: [
                {
                    link: "Dashboard",
                    name: "Dashboard",
                },
                {
                    link: "ISF",
                    name: "ISF",
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: "Delivery / Execution",
                        },
                        {
                            link: "Comparison",
                            name: "Comparison",
                        },
                        {
                            link: "Progress",
                            name: "Progress",
                        },
                    ],
                },
                {
                    link: "CycleMaterials",
                    name: "CycleMaterials",
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: "Delivery / Execution",
                        },
                        {
                            link: "Comparison",
                            name: "Comparison",
                        },
                    ],
                },
                {
                    link: "Semi-permanentMaterials",
                    name: "Semi-permanent materials",
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: "Delivery / Execution",
                        },
                        {
                            link: "Comparison",
                            name: "Comparison",
                        },
                        {
                            link: "Progress",
                            name: "Progress",
                        },
                    ],
                },
                {
                    link: "Projects",
                    name: "Projects",
                    children: [
                        {
                            link: "Catalog",
                            name: "Projects Catalog",
                        },
                        {
                            link: "Delivery-Execution",
                            name: "Delivery / Execution",
                        },
                        {
                            link: "Comparison",
                            name: "Comparison",
                        },
                        {
                            link: "Progress",
                            name: "Progress",
                        },
                    ],
                },
            ],
        };
    },
    provide() {
        return {
            navItems: computed(() => this.navItems),
            updateItems: this.updateItems,
        };
    },
    methods: {
        navActive(data) {
            this.menuActive = data.menuActive;
        },
        updateItems(key, value) {
            const index = this.navItems.findIndex(({ name }) => name === key);

            this.navItems.splice(index, 1, {
                ...this.navItems[index],
                itemValue: value,
            });
        },
    },
};
</script>

<template lang="pug">
Navbar(:navActive="navActive")
LeftSidebar(:sidebarActive="menuActive")
main
    .container
        Filters(
            v-if="$route.path !== '/panel/Dashboard' && $route.path !== '/panel/Projects/Catalog'",
            :multiselects="multiselects"
        )
        RouterView

</template>


<style lang="scss" scoped>
.fade-enter-active {
    transition: opacity 0.2s ease-in .1s;
}

.slide-fade-leave-active {
    transition: opacity 0.2s ease-in 0s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.3s ease 1s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(40px);
    opacity: 0;
}
</style>