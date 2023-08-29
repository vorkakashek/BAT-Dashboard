<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.togglers.find(e => e.name === 'posm_capex').value !== 'unset') {
        CAPEXFilterValue.value = store.togglers.find(e => e.name === 'posm_capex').value
    }
})

const CAPEXFilterOptions = ref(['Strings', 'Acts', 'Sum']);
const CAPEXFilterValue = ref('Strings');

const totalData = ref([
    {
        name: ">90 D",
        value: 1235,
        class: "More90d",
    },
    {
        name: "Current",
        value: 3200,
    },
    {
        name: "Target",
        value: 4000,
        class: "GreenTarget",
    },
])

const itemList = ref([
    {
        name: "new Монтаж",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        stats: [
            {
                name: ">90 d",
                value: "140",
                class: "More90d",
            },
            {
                name: "Current",
                value: "800",
            },
            {
                name: "Target",
                value: "1000",
                class: "GreenTarget",
            },
        ],
    },
    {
        name: "Used Монтаж",
        photo: "MINI",
        percentage: "30%",
        ignore: [],
        stats: [
            {
                name: ">90 d",
                value: "140",
                class: "More90d",
            },
            {
                name: "Current",
                value: "800",
            },
            {
                name: "Target",
                value: "1000",
                class: "GreenTarget",
            },
        ],
    },
    {
        name: "Used ДеМонтаж",
        photo: "MINI",
        percentage: "60%",
        ignore: [],
        stats: [
            {
                name: ">90 d",
                value: "500",
                class: "More90d",
            },
            {
                name: "Current",
                value: "800",
            },
            {
                name: "Target",
                value: "1000",
                class: "GreenTarget",
            },
        ],
    },
])

watch(() => CAPEXFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(CAPEXFilterValue.value, 'posm_capex')
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
    FilterToggler(:options="CAPEXFilterOptions" v-model="CAPEXFilterValue")
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>