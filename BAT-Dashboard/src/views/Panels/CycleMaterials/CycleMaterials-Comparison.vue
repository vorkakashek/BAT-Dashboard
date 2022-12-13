<script setup>

import { computed, ref, reactive } from "vue";
import CMFilter from '@/components/CMFilter.vue';

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

const totalData = ref([
    {
        name: "Executed",
        value: 15103,
    },
    {
        name: "Delivered to TMR",
        value: 6802,
    },
    {
        name: "Transit to TMR",
        value: 300,
    },
    {
        name: "Delivered to City",
        value: 16310,
    },
    {
        name: "Not Delivered",
        value: 800,
    },
    {
        name: "Target",
        value: 16700,
    },
])

const itemList = ref([
    {
        label: "MBU",
        stats: [
            {
                name: "Executed",
                value: "301",
            },
            {
                name: "Delivered to TMR",
                value: "1204",
            },
            {
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        label: "NW",
        type: 'OTHER',
        stats: [
            {
                name: "Executed",
                value: "301",
            },
            {
                name: "Delivered to TMR",
                value: "1204",
            },
            {
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        label: "NW",
        type: 'OTHER',
        stats: [
            {
                name: "Executed",
                value: "301",
            },
            {
                name: "Delivered to TMR",
                value: "1204",
            },
            {
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        label: "NW",
        type: 'MUST SET',
        stats: [
            {
                name: "Executed",
                value: "301",
            },
            {
                name: "Delivered to TMR",
                value: "1204",
            },
            {
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
])

const CMFilterOptions = ref(['ALL', 'MUST SET', 'OTHER'])
const CMFilterValue = ref('ALL')

const importPhoto = computed(() => {
    return new URL(
        `./../../../assets/images/Cycle Materials/2.jpg`,
        import.meta.url
    ).href;
})

function showSingle() {
    state.imgs = importPhoto.value
    state.visible = true
}

function show() {
    state.visible = true
}

function handleHide() {
    state.visible = false
}

// Фильтруем список карточек по 'type'
let itemList_filtered = computed(() => itemList.value.filter(({ type }) => {
    if (CMFilterValue.value === 'ALL') {
        return true
    }
    return type === CMFilterValue.value
}))

</script>


<template lang="pug">

vue-easy-lightbox(
    :visible="state.visible",
    :imgs="state.imgs",
    :index="state.index",
    @hide="handleHide"
)

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    h2 Cycle Materials
    CMFilter(:options="CMFilterOptions" v-model="CMFilterValue")
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")
        .comparison-items
            ComparisonItem(v-for="item in itemList_filtered" :comparisonData="item")
</template>
