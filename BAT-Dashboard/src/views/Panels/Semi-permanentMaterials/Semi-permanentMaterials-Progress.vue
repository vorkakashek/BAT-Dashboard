<script setup>

import { ref, computed } from 'vue'

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

</script>

<template lang="pug">

TotalProgressbar(:data="newTotalData")
    template(#legend)
        ProgressbarLegend(:data="newTotalData")

.panel
    h2 {{ $t('total') }}
    .comparison-items
        ComparisonItem(v-for="item in newItemList" :comparisonData="item")
</template>


<style lang="scss" scoped>
</style>