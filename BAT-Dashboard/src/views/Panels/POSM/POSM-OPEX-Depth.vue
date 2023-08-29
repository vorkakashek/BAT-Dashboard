<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

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
        type_equipment: "Оборудование",
        type_act: "Акт"
    },
    {
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
        type_parts: "Запчасти",
        type_actWork: "Акт от ворк"
    },
    {
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
        type_souvenirs: "Сувениры",
        type_statement: "Ведомость ЭДО"
    },
    {
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
        type_posm: "POSM",
        type_statement: "Ведомость ЭДО"
    },
])

onMounted(() => {
    if (store.togglers.find(e => e.name === 'posm_opex_1').value !== 'unset') {
        multiselects.value[0].value = store.togglers.find(e => e.name === 'posm_opex_1').value
    }
    if (store.togglers.find(e => e.name === 'posm_opex_2').value !== 'unset') {
        multiselects.value[1].value = store.togglers.find(e => e.name === 'posm_opex_2').value
    }
})

const multiselects = ref([
    {
        value: null,
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        placeholder: "Material type",
    },
    {
        value: null,
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        placeholder: "Document type",
    },
])

watch(() => multiselects.value[0].value, (val) => {
    if(val === null) {
        store.save('unset', 'posm_opex_1')
    } else if (val.length !== undefined) {
        store.save(multiselects.value[0].value, 'posm_opex_1')
    }
})
watch(() => multiselects.value[1].value, (val) => {
    if(val === null) {
        store.save('unset', 'posm_opex_2')
    } else if (val && val.length !== undefined) {
        store.save(multiselects.value[1].value, 'posm_opex_2')
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
    Filters(
        :multiselects="multiselects"
        disableAllClear="true"
        class='filters'
    )
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>
.filters {
    justify-content: flex-start;
    margin-bottom: 32px;
}
</style>