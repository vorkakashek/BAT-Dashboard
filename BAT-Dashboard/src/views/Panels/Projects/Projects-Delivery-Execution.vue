<script setup>

import { ref } from 'vue'

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
        name: "GLO_Shelf Stopper",
        photo: "4",
        stats: [
            {
                name: "Executed",
                value: "2",
            },
            {
                name: "Delivered",
                value: "1359",
            },
            {
                name: "Not Delivered",
                value: "1012",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        name: "GLO_Device Premium Presenter 2 sku",
        photo: "3",
        stats: [
            {
                name: "Executed",
                value: "2",
            },
            {
                name: "Delivered",
                value: "1359",
            },
            {
                name: "Not Delivered",
                value: "1012",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
])

</script>


<template lang="pug">

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
    
</template>