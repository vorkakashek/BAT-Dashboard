<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

const totalData = ref([
    {
        name: "Overdue",
        value: 1235,
    },
    {
        name: "Current",
        value: 3200,
    },
    {
        name: "New",
        value: 4000,
    },
    {
        name: "Target",
        value: 4000,
        class: 'Hidden'
    }
])

const itemList = ref([
    {
        name: "Work",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: "Overdue",
                value: "140",
            },
            {
                name: "3-12 Month",
                value: "800",
                class: "Three12Month",
            },
            {
                name: "New",
                value: "1000",
                class: "GreenTarget",
            },
            {
                name: "Target",
                value: "1000",
                class: "Hidden"
            }
        ],
    },
    {
        name: "Promo",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: "Overdue",
                value: "140",
            },
            {
                name: "3-12 Month",
                value: "800",
                class: "Three12Month",
            },
            {
                name: "New",
                value: "1000",
                class: "GreenTarget",
            },
            {
                name: "Target",
                value: "1000",
                class: "Hidden"
            }
        ],
    },
    {
        name: "Mol",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: "Overdue",
                value: "140",
            },
            {
                name: "3-12 Month",
                value: "800",
                class: "Three12Month",
            },
            {
                name: "New",
                value: "1000",
                class: "GreenTarget",
            },
            {
                name: "Target",
                value: "1000",
                class: "Hidden"
            }
        ],
    },
    {
        name: "TMR",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: "Overdue",
                value: "140",
            },
            {
                name: "3-12 Month",
                value: "800",
                class: "Three12Month",
            },
            {
                name: "New",
                value: "1000",
                class: "GreenTarget",
            },
            {
                name: "Target",
                value: "1000",
                class: "Hidden"
            }
        ],
    },
])

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData" :ignore="[]")
    template(#legend)
        ProgressbarLegend(:data="totalData")

.panel
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>