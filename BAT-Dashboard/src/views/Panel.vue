<script setup>
import { useReportStore } from "@/store/store"
import Navbar from "@/components/Navbar.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import { ref, onMounted, watch, provide } from "vue";
import { useI18n } from "vue-i18n";

const route = useRoute()
const { t } = useI18n()
const store = useReportStore()

const active = ref(false);
const navItems = ref([
    {
        link: "ISF",
        icon: "ISFPOSM",
        name: t('leftSidebar.isf'),
        children: [
            {
                link: "Equipment",
                name: t('leftSidebar.equipment'),
            },
            {
                link: "Headers",
                name: t('leftSidebar.headers'),
            },
            {
                link: "CycleMaterials",
                name: t('leftSidebar.cycleMaterials'),
            },
            {
                link: "Semi-permanentMaterials",
                name: t('leftSidebar.semipermanentMaterials'),
            },
            {
                link: "PremiumPartners",
                name: t('leftSidebar.premiumPartners'),
            },
        ]
        // children: [
        //     {
        //         link: "Delivery-Execution",
        //         name: t('leftSidebar.deliveryexecution'),
        //     },
        //     {
        //         link: "Comparison",
        //         name: t('leftSidebar.comparison'),
        //     },
        //     {
        //         link: "Progress",
        //         name: t('leftSidebar.progress'),
        //     },
        // ],
    },
    {
        link: "POSM",
        name: t('leftSidebar.posm'),
        children: [
            {
                link: "CAPEX-Depts",
                name: t('leftSidebar.capexdepts'),
            },
            {
                link: "OPEX-Depts",
                name: t('leftSidebar.opexdepts'),
            },
            {
                link: "Stock",
                name: t('leftSidebar.stock'),
            },
            {
                link: "Transits",
                name: t('leftSidebar.transits'),
            },
        ],
    },
    {
        link: "Projects",
        name: "Projects",
        disabled: true,
        children: [
            {
                link: "Catalog",
                name: "Projects Catalog",
            },
            {
                link: "Delivery-Execution",
                name: t('leftSidebar.deliveryexecution'),
            },
            {
                link: "Comparison",
                name: t('leftSidebar.comparison'),
            },
            {
                link: "Progress",
                name: t('leftSidebar.progress'),
            },
        ],
    },
    // {
    //     link: "CycleMaterials",
    //     name: "CycleMaterials",
    //     children: [
    //         {
    //             link: "Delivery-Execution",
    //             name: t('leftSidebar.deliveryexecution'),
    //         },
    //         {
    //             link: "Comparison",
    //             name: t('leftSidebar.comparison'),
    //         },
    //     ],
    // },
    // {
    //     link: "Semi-permanentMaterials",
    //     name: t('leftSidebar.semipermanentMaterials'),
    //     children: [
    //         {
    //             link: "Delivery-Execution",
    //             name: t('leftSidebar.deliveryexecution'),
    //         },
    //         {
    //             link: "Comparison",
    //             name: t('leftSidebar.comparison'),
    //         },
    //         {
    //             link: "Progress",
    //             name: t('leftSidebar.progress'),
    //         },
    //     ],
    // },
    // {
    //     link: "Headers",
    //     name: t('leftSidebar.headers'),
    //     children: [
    //         {
    //             link: "Delivery-Execution",
    //             name: t('leftSidebar.deliveryexecution'),
    //         },
    //         {
    //             link: "Comparison",
    //             name: t('leftSidebar.comparison'),
    //         },
    //         {
    //             link: "Progress",
    //             name: t('leftSidebar.progress'),
    //         },
    //     ],
    // },
    // {
    //     link: "Equipment",
    //     name: t('leftSidebar.equipment'),
    //     children: [
    //         {
    //             link: "Delivery-Execution",
    //             name: t('leftSidebar.deliveryexecution'),
    //         },
    //         {
    //             link: "Comparison",
    //             name: t('leftSidebar.comparison'),
    //         },
    //         // {
    //         //     link: "Progress",
    //         //     name: t('leftSidebar.progress'),
    //         // },
    //     ],
    // },
])
const navItemsBuffer = ref([...navItems.value]);
const multiselects = ref([
    {
        value: null,
        options: ["Unit long name 1", "Unit 2", "Unit 3", "Unit 4"],
        placeholder: t('multiselects.unit'),
    },

    {
        value: null,
        options: ["Region 1", "Region 2", "Region 3", "Region 4"],
        placeholder: t('multiselects.region'),
    },
    {
        value: null,
        options: ["City 1", "City 2", "City 3", "City 4"],
        placeholder: t('multiselects.city'),
    },
    {
        value: null,
        options: ["CM 1", "CM 2", "CM 3", "CM 4"],
        placeholder: t('multiselects.cm'),
    },
    {
        value: null,
        options: ["TMR 1", "TMR 2", "TMR 3", "TMR 4"],
        placeholder: t('multiselects.tmr'),
    },
])
const updatedItems = ref([])

const clicked = ref(false)
const modal = ref()
const menuActive = ref(false)

// контент для Alarm-сообщения
let modal_msg = 'ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequuntur illum nihil blanditiis iste vel vero obcaecati omnis cumque error! Cumque vitae tempore vero doloremque eos error, in possimus temporibus.'
let modal_title = 'Title'

const navActive = (data) => {
    menuActive = data.menuActive;
}
const updateItems = (key, value) => {
    const index = navItems.value.findIndex(({ name }) => name === key);

    navItems.value.splice(index, 1, {
        ...navItems.value[index],
        itemValue: value,
    });
}
const filterItems = (key, value) => {
    if(value === 'Dashboard') navItems.value = navItemsBuffer.value
    else navItems.value = [...navItemsBuffer.value.filter(e => e[key] === value)]
}

provide('navItems', navItems)
provide('updateItems', updateItems)
provide('filterItems', filterItems)

// показываем модалку с уведомлением один раз, сохраняя в localStorage
onMounted(() => {
    if (store.alarm_express === true) {
        modal.value.show()
    }
})

// watch(() => route.name, (val) => {
//     if(route.name !== 'Dashboard') {
//         console.log(navItems.value.filter(e => e.link === route.name)[0].children)
//         updateItems.value = [...navItems.value.filter(e => e.link === route.name)[0].children]
//         console.log(updateItems.value)
//     } else {
//         updateItems.value = []
//     }
// })
</script>

<template lang="pug">
Navbar(:navActive="navActive" @activate="active = !active")
LeftSidebar(:sidebarActive="active")
ModalConstructor(modalName="AlarmExpress", ref="modal", :dialog="true", :title="modal_title", :msg="modal_msg")
main
    .container
        //- span {{ $route.path }} {{ !($route.path === '/panel/Dashboard' || $route.path === '/panel/Projects/Catalog') }}
        Filters(
            v-if="!($route.path === '/panel/Dashboard' || $route.path === '/panel/Projects/Catalog' || $route.path === '/panel/ISF' || $route.path === '/panel/POSM')",
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