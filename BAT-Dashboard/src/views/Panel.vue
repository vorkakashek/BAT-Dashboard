<script setup>
import { useReportStore } from "@/store/store"
import Navbar from "@/components/Navbar.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import { ref, onMounted, watch, provide } from "vue";

const clicked = ref(false),
    modal = ref(),
    store = useReportStore(),
    menuActive = ref(false)

// const multiselects = ref([
//     {
//         value: null,
//         options: ["Unit long name 1", "Unit 2", "Unit 3", "Unit 4"],
//         placeholder: "Unit",
//     },

//     {
//         value: null,
//         options: ["Region 1", "Region 2", "Region 3", "Region 4"],
//         placeholder: "Region",
//     },
//     {
//         value: null,
//         options: ["City 1", "City 2", "City 3", "City 4"],
//         placeholder: "City",
//     },
//     {
//         value: null,
//         options: ["CM 1", "CM 2", "CM 3", "CM 4"],
//         placeholder: "CM",
//     },
//     {
//         value: null,
//         options: ["TMR 1", "TMR 2", "TMR 3", "TMR 4"],
//         placeholder: "TMR",
//     },
// ])

// const navItems = ref([
//     {
//         link: "Dashboard",
//         name: "Dashboard",
//     },
//     {
//         link: "ISF",
//         name: "ISF",
//         children: [
//             {
//                 link: "Delivery-Execution",
//                 name: this.$t('leftSidebar.deliveryexecution'),
//             },
//             {
//                 link: "Comparison",
//                 name: this.$t('leftSidebar.comparison'),
//             },
//             {
//                 link: "Progress",
//                 name: this.$t('leftSidebar.progress'),
//             },
//         ],
//     },
//     {
//         link: "CycleMaterials",
//         name: "CycleMaterials",
//         children: [
//             {
//                 link: "Delivery-Execution",
//                 name: this.$t('leftSidebar.deliveryexecution'),
//             },
//             {
//                 link: "Comparison",
//                 name: this.$t('leftSidebar.comparison'),
//             },
//         ],
//     },
//     {
//         link: "Semi-permanentMaterials",
//         name: "Semi-permanent materials",
//         children: [
//             {
//                 link: "Delivery-Execution",
//                 name: this.$t('leftSidebar.deliveryexecution'),
//             },
//             {
//                 link: "Comparison",
//                 name: this.$t('leftSidebar.comparison'),
//             },
//             {
//                 link: "Progress",
//                 name: this.$t('leftSidebar.progress'),
//             },
//         ],
//     },
//     {
//         link: "Headers",
//         name: "Headers",
//         children: [
//             {
//                 link: "Delivery-Execution",
//                 name: this.$t('leftSidebar.deliveryexecution'),
//             },
//             {
//                 link: "Comparison",
//                 name: this.$t('leftSidebar.comparison'),
//             },
//             {
//                 link: "Progress",
//                 name: this.$t('leftSidebar.progress'),
//             },
//         ],
//     },
//     {
//         link: "Projects",
//         name: "Projects",
//         children: [
//             {
//                 link: "Catalog",
//                 name: "Projects Catalog",
//             },
//             {
//                 link: "Delivery-Execution",
//                 name: this.$t('leftSidebar.deliveryexecution'),
//             },
//             {
//                 link: "Comparison",
//                 name: this.$t('leftSidebar.comparison'),
//             },
//             {
//                 link: "Progress",
//                 name: this.$t('leftSidebar.progress'),
//             },
//         ],
//     },
// ])

// контент для Alarm-сообщения
let modal_msg = 'ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequuntur illum nihil blanditiis iste vel vero obcaecati omnis cumque error! Cumque vitae tempore vero doloremque eos error, in possimus temporibus.',
    modal_title = 'Title'

// показываем модалку с уведомлением один раз, сохраняя в localStorage
onMounted(() => {
    if (store.alarm_express === true) {
        modal.value.show()
    }
})

</script>

<script>
// import {useI18n} from "vue-i18n";
        
// const i18n = useI18n();

export default {
    data() {
        return {
            navItems: [
                {
                    link: "Dashboard",
                    name: this.$t('leftSidebar.dashboard'),
                },
                {
                    link: "ISF",
                    name: this.$t('leftSidebar.isf'),
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: this.$t('leftSidebar.deliveryexecution'),
                        },
                        {
                            link: "Comparison",
                            name: this.$t('leftSidebar.comparison'),
                        },
                        {
                            link: "Progress",
                            name: this.$t('leftSidebar.progress'),
                        },
                    ],
                },
                {
                    link: "CycleMaterials",
                    name: "CycleMaterials",
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: this.$t('leftSidebar.deliveryexecution'),
                        },
                        {
                            link: "Comparison",
                            name: this.$t('leftSidebar.comparison'),
                        },
                    ],
                },
                {
                    link: "Semi-permanentMaterials",
                    name: this.$t('leftSidebar.semipermanentMaterials'),
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: this.$t('leftSidebar.deliveryexecution'),
                        },
                        {
                            link: "Comparison",
                            name: this.$t('leftSidebar.comparison'),
                        },
                        {
                            link: "Progress",
                            name: this.$t('leftSidebar.progress'),
                        },
                    ],
                },
                {
                    link: "Headers",
                    name: this.$t('leftSidebar.headers'),
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: this.$t('leftSidebar.deliveryexecution'),
                        },
                        {
                            link: "Comparison",
                            name: this.$t('leftSidebar.comparison'),
                        },
                        {
                            link: "Progress",
                            name: this.$t('leftSidebar.progress'),
                        },
                    ],
                },
                {
                    link: "Equipment",
                    name: this.$t('leftSidebar.equipment'),
                    children: [
                        {
                            link: "Delivery-Execution",
                            name: this.$t('leftSidebar.deliveryexecution'),
                        },
                        {
                            link: "Comparison",
                            name: this.$t('leftSidebar.comparison'),
                        },
                        // {
                        //     link: "Progress",
                        //     name: this.$t('leftSidebar.progress'),
                        // },
                    ],
                },
                // {
                //     link: "Projects",
                //     name: "Projects",
                //     children: [
                //         {
                //             link: "Catalog",
                //             name: "Projects Catalog",
                //         },
                //         {
                //             link: "Delivery-Execution",
                //             name: this.$t('leftSidebar.deliveryexecution'),
                //         },
                //         {
                //             link: "Comparison",
                //             name: this.$t('leftSidebar.comparison'),
                //         },
                //         {
                //             link: "Progress",
                //             name: this.$t('leftSidebar.progress'),
                //         },
                //     ],
                // },
                {
                    link: "POSM",
                    name: this.$t('leftSidebar.posm'),
                    children: [
                        {
                            link: "CAPEX-Depth",
                            name: this.$t('leftSidebar.capexdepth'),
                        },
                        {
                            link: "OPEX-Depth",
                            name: this.$t('leftSidebar.opexdepth'),
                        },
                        {
                            link: "Stock",
                            name: this.$t('leftSidebar.stock'),
                        },
                        {
                            link: "Transits",
                            name: this.$t('leftSidebar.transits'),
                        },
                    ],
                },
            ],
            multiselects: [
                {
                    value: null,
                    options: ["Unit long name 1", "Unit 2", "Unit 3", "Unit 4"],
                    placeholder: this.$t('multiselects.unit'),
                },

                {
                    value: null,
                    options: ["Region 1", "Region 2", "Region 3", "Region 4"],
                    placeholder: this.$t('multiselects.region'),
                },
                {
                    value: null,
                    options: ["City 1", "City 2", "City 3", "City 4"],
                    placeholder: this.$t('multiselects.city'),
                },
                {
                    value: null,
                    options: ["CM 1", "CM 2", "CM 3", "CM 4"],
                    placeholder: this.$t('multiselects.cm'),
                },
                {
                    value: null,
                    options: ["TMR 1", "TMR 2", "TMR 3", "TMR 4"],
                    placeholder: this.$t('multiselects.tmr'),
                },
            ]
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
ModalConstructor(modalName="AlarmExpress", ref="modal", :dialog="true", :title="modal_title", :msg="modal_msg")
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

:deep(.multiselect-option) {
    position: relative;
    padding-right: 40px;

    .tag {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 11px;
        font-weight: 700;
        border-radius: 4px;
        background-color: #e9f4ff;
        padding: 0 6px;
        color: #7c8e99;

        &.current {
            background-color: #b2d4f7;
        }
    }
}
</style>