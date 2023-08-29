<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.togglers.find(e => e.name === 'posm_stock_1').value !== 'unset') {
        StockFilterValue.value = store.togglers.find(e => e.name === 'posm_stock_1').value
    }
    if (store.togglers.find(e => e.name === 'posm_stock_2').value !== 'unset') {
        StockFilterValueTwo.value = store.togglers.find(e => e.name === 'posm_stock_2').value
    }
})

const StockFilterOptions = ref(['Strings', 'Acts', 'Sum']);
const StockFilterValue = ref('Strings');

const StockFilterOptionsTwo = ref(['WORK', 'OFFICE', 'TMR']);
const StockFilterValueTwo = ref(['WORK', 'OFFICE', 'TMR']);

const totalData = ref([
    {
        name: ">1 Year",
        value: 1235,
        class: "More1y",
    },
    {
        name: "3-12 Month",
        value: 3200,
        class: "Three12Month",
    },
    {
        name: "Target",
        value: 4000,
        class: "GreenTarget",
    },
])

const itemList = ref([
    {
        name: "ТИП: Оборудование",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: ">1 year",
                value: "140",
                class: "More1y",
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
        name: "ТИП: Запчасти",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: ">1 year",
                value: "140",
                class: "More1y",
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
        name: "ТИП: Сувениры",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: ">1 year",
                value: "140",
                class: "More1y",
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
        name: "ТИП: POSM",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        notImportant: true,
        stats: [
            {
                name: ">1 year",
                value: "140",
                class: "More1y",
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

watch(() => StockFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(StockFilterValue.value, 'posm_stock_1')
    }
})
watch(() => StockFilterValueTwo.value, (val) => {
    if (val.length !== undefined) {
        store.save(StockFilterValueTwo.value, 'posm_stock_2')
    }
})

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData" :ignore="[]")
    template(#legend)
        ProgressbarLegend(:data="totalData")

.panel
    FilterToggler(:options="StockFilterOptions" v-model="StockFilterValue")
    FilterTogglerMulti(:options="StockFilterOptionsTwo" v-model="StockFilterValueTwo")
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>