<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.togglers.find(e => e.name === 'isf_2').value !== 'unset') {
        ISFFilterValue.value = store.togglers.find(e => e.name === 'isf_2').value
    }
    if (store.togglers.find(e => e.name === 'isf_3').value !== 'unset') {
        PEXFilterValue.value = store.togglers.find(e => e.name === 'isf_3').value
    }
    if (store.togglers.find(e => e.name === 'isf_4').value !== 'unset') {
        RKAFilterValue.value = store.togglers.find(e => e.name === 'isf_4').value
    }
})

const ISFFilterOptions = ref(['ALL', 'BWD', 'OHD']);
const ISFFilterValue = ref('ALL');

// CAPEX OPEX
const PEXFilterOptions = ref(['ALL', 'CAPEX', 'OPEX']);
const PEXFilterValue = ref('ALL');

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
        photo: "MINI",
        type: "BWD",
        type_pex: "OPEX",
        type_rka: "RKA",
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
        photo: "MINI",
        type: "OHD",
        type_pex: "OPEX",
        type_rka: "Local",
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
        photo: "MINI",
        type: "OHD",
        type_pex: "CAPEX",
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
        photo: "MINI",
        type: "OHD",
        type_pex: "CAPEX",
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
        photo: "MINI",
        type: "BWD",
        type_pex: "OPEX",
        type_rka: "Indep",
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

watch(() => ISFFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(ISFFilterValue.value, 'isf_2')
    }
})
watch(() => PEXFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(PEXFilterValue.value, 'isf_3')
    }
})
watch(() => RKAFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(RKAFilterValue.value, 'isf_4')
    }
})

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:data="totalData")

.panel
    FilterToggler(:options="ISFFilterOptions" v-model="ISFFilterValue")
    FilterToggler(:options="PEXFilterOptions" v-model="PEXFilterValue")
    FilterTogglerMulti(:options="RKAFilterOptions" v-model="RKAFilterValue")
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>