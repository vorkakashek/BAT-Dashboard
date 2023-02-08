<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.isf_togglers.find(e => e.name === 'isf_8').value !== 'unset') {
        ISFFilterValue.value = store.isf_togglers.find(e => e.name === 'isf_8').value
    }
})

const ISFFilterOptions = ref(['ALL', 'BWD', 'OHD']);
const ISFFilterValue = ref('ALL');

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

// const filteredList = computed(() => itemList.value.filter(({ type }) => {
//     if (ISFFilterValue.value === 'ALL') {
//         return true
//     }
//     return type === ISFFilterValue.value
// }))

watch(() => ISFFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(ISFFilterValue.value, 'isf_8')
    }
})

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    h2 Total
    ISFFilter(:options="ISFFilterOptions" v-model="ISFFilterValue")
    .comparison-items
        ComparisonItem(v-for="item in itemList" :comparisonData="item" :vertical="true")

</template>