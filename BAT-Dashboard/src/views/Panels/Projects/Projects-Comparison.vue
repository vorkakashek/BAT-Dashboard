<script setup>

import { ref, computed, reactive } from 'vue'

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

const totalData = ref([
    {
        name: "Executed",
        value: 1235,
    },
    {
        name: "Delivered",
        value: 3200,
    },
    {
        name: "Not Delivered",
        value: 800,
    },
    {
        name: "Target",
        value: 4000,
    },
])

const itemList = ref([
    {
        label: "MBU",
        type: "OHD",
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
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ]
    },
    {
        label: "NW",
        type: "BWD",
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
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ]
    },
])

const importPhoto = computed(() => {
    return new URL(
        `./../../../assets/images/project-1.jpg`,
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
        ProgressbarLegend(:data="totalData")

.panel
    h2 Projects
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")
        .comparison-items
            ComparisonItem(v-for="item in itemList" :comparisonData="item")
</template>

<style lang="scss" scoped>
</style>