<script setup>

import { ref, computed } from 'vue'
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";

const itemList = ref([
    {
        name: "GLO_Shelf Stopper",
        photo: "4",
        type_rka: "Indep",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ],
    },
    {
        name: "GLO_Device Premium Presenter 2 sku",
        photo: "3",
        type_rka: "Local",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ],
    },
    {
        name: "GLO_Device Premium Presenter 2 sku sad asd asd asd asdasdasdasd asd",
        photo: "3",
        type_rka: "Rka",
        stats: [
            {
                name: "Executed",
                value: 80,
            },
            {
                name: "Stock",
                value: 20,
            },
        ],
    },
])

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

// Indep/Local RKA
const RKAFilterOptions = ref(['Indep/Local', 'RKA']);
const RKAFilterValue = ref(['Indep/Local', 'RKA']);

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

function handleSelector(value) {
    if (value == 0) {
        itemValue.value = [0]
    }
    if (value !== 0 && itemValue.value.includes(0)) {
        itemValue.value = itemValue.value.filter((value) => value !== 0);
    }
}

</script>


<template lang="pug">

TotalProgressbar(:data="newTotalData")
    template(#legend)
        ProgressbarLegend(:inData="newTotalData")

.panel
    FilterTogglerMulti(:options="RKAFilterOptions" v-model="RKAFilterValue")
    ProductCards
        template(#items)
            ProductCard(v-for="product in newItemList", :product="product")
    
</template>