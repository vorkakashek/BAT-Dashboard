<script setup>
import { ref } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";

// Indep/Local RKA
const RKAFilterOptions = ref(['Indep/Local', 'RKA']);
const RKAFilterValue = ref(['Indep/Local', 'RKA']);

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
        name: "MINI",
        photo: "headers-1",
        type_rka: "Local",
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
        name: "MINI",
        photo: "headers-1",
        type_rka: "RKA",
        stats: [
            {
                name: "Executed",
                value: "140",
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
        name: "MINI",
        photo: "headers-1",
        type_rka: "Indep",
        stats: [
            {
                name: "Executed",
                value: "140",
            },
            {
                name: "Delivered",
                value: "3900",
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
        name: "MINI",
        photo: "headers-1",
        type_rka: "RKA",
        stats: [
            {
                name: "Executed",
                value: "140",
            },
            {
                name: "Delivered",
                value: "5200",
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
        name: "MINI",
        photo: "headers-1",
        type_rka: "Local",
        stats: [
            {
                name: "Executed",
                value: "2",
            },
            {
                name: "Delivered",
                value: "3870",
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

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    FilterTogglerMulti(:options="RKAFilterOptions" v-model="RKAFilterValue")
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>