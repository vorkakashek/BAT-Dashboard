<script setup>
import { computed, ref, reactive } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

const totalData = ref([
    {
        name: "Executed",
        value: 222,
    },
    {
        name: "Stock",
        value: 777,
    },
])

const itemList = ref([
    {
        label: "MBU",
        type_rla: "",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ]
    },
    {
        label: "NW",
        type_rla: "",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ]
    },
    {
        label: "MBU",
        type_rla: "",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ]
    },
    {
        label: "NW",
        type_rla: "",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ]
    },
])

// Indep/Local RKA
const RKAFilterOptions = ref(['Indep/Local', 'RKA']);
const RKAFilterValue = ref(['Indep/Local', 'RKA']);

const importPhoto = computed(() => new URL(`./../../../assets/images/Cycle Materials/2.jpg`, import.meta.url).href)

const newTotalData = computed(() => {
    if (totalData.value.find(({ name }) => name === 'Target') === undefined) {
        return [...totalData.value, newObj('Potential', handlerSumm(totalData.value))]
    } return totalData.value
})

const newItemList = computed(() => {
    if (itemList.value.find(({ stats }) => stats.find(({ name }) => name === 'Target')) === undefined) {
        itemList.value.forEach(e => e.stats = [...e.stats, newObj('Potential', handlerSumm(e.stats))])
        return itemList.value
    }
    return itemList.value
})

// Summary of all values func
const handlerSumm = (arr) => {
    let sum = 0
    arr.forEach(el => {
        sum += el.value
    })
    return sum
}

const newObj = (name, value) => { return { name, value } }

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


TotalProgressbar(:data="newTotalData")
    template(#legend)
        ProgressbarLegend(:inData="newTotalData")

.panel
    h2 Touchpoints
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto" @click="() => showSingle()")
        .comparison-content
            FilterTogglerMulti(:options="RKAFilterOptions" v-model="RKAFilterValue")
            .comparison-items
                ComparisonItem(v-for="item in newItemList" :comparisonData="item")
</template>

<style lang="scss" scoped>
</style>