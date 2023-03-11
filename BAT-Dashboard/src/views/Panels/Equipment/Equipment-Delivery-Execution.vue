<script setup>
import { ref, watch, onMounted } from "vue"
import FilterToggler from "@/components/FilterToggler.vue"
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore();


// BWD 
const BWDFilterOptions = ref(['ALL', 'BWD', 'VITRINE']);
const BWDFilterValue = ref('ALL');

onMounted(() => {
    if (store.togglers.find(e => e.name === 'equipment_2').value !== 'unset') {
        BWDFilterValue.value = store.togglers.find(e => e.name === 'equipment_2').value
    }
})

let total_data_1 = ref([
    {
        name: "Executed",
        value: 1235,
    },
    {
        name: "Not Executed",
        value: 800,
    },
    {
        name: "Stock",
        value: 2345,
    },
    {
        name: "Target",
        value: 4000,
    },
])

let total_data_2 = ref([
    {
        name: "Executed",
        value: 1235,
    },
    {
        name: "Not Executed",
        value: 800,
    },
    {
        name: "Stock",
        value: 2345,
    },
    {
        name: "Target",
        value: 4000,
    },
])

let total_data_3 = ref([
    {
        name: "Executed",
        value: 1235,
    },
    {
        name: "Not Executed",
        value: 800,
    },
    {
        name: "Target",
        value: 4000,
    },
])


let itemList = ref([
    {
        name: "GLO_Vitrine_PP_1000 (правый)",
        photo: "equipment-1",
        type_bwd: "VITRINE",
        stats: [
            {
                name: "Executed",
                value: "3470",
            },
            {
                name: "Not Executed",
                value: "1012",
            },
            {
                name: "Stock",
                value: "30",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        name: "GLO_Vitrine_PP_1000 (левый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            {
                name: "Executed",
                value: "1101",
            },
            {
                name: "Not Executed",
                value: "1012",
            },
            {
                name: "Stock",
                value: "632",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        name: "GLO_Vitrine_PP_1500 (правый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            {
                name: "Executed",
                value: "140",
            },
            {
                name: "Not Executed",
                value: "1012",
            },
            {
                name: "Stock",
                value: "1230",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        name: "GLO_Vitrine_PP_1500 (левый)",
        photo: "equipment-1",
        type_bwd: "VITRINE",
        stats: [
            {
                name: "Executed",
                value: "1982",
            },
            {
                name: "Not Executed",
                value: "1012",
            },
            {
                name: "Stock",
                value: "3123",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        name: "GLO_Vitrine_PP_1500 (левый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            {
                name: "Executed",
                value: "2031",
            },
            {
                name: "Not Executed",
                value: "1012",
            },
            {
                name: "Stock",
                value: "123",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
])

watch(() => BWDFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(BWDFilterValue.value, 'equipment_2')
    }
})

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="total_data_1")
    template(#progressbar)
        ItemProgressbar(:data="total_data_1" :ignore="['Not Executed', 'Stock', 'Target']" label="Total BWD Multicategory" total)
        ItemProgressbar(:data="total_data_1" :ignore="['Executed', 'Not Executed', 'Target']" rtl total)
    template(#legend)
        ProgressbarLegend(:inData="total_data_1")

TotalProgressbar(:data="total_data_2")
    template(#progressbar)
        ItemProgressbar(:data="total_data_2" :ignore="['Not Executed', 'Stock', 'Target']" label="Total Vitrine / Taylor made" total)
        ItemProgressbar(:data="total_data_2" :ignore="['Executed', 'Not Executed', 'Target']" rtl total)
    template(#legend)
        ProgressbarLegend(:inData="total_data_2")

TotalProgressbar(:data="total_data_3")
    template(#progressbar)
        ItemProgressbar(:data="total_data_3" :ignore="['Not Executed', 'Target']" label="Total BWD + Vitrine" total)
    template(#legend)
        ProgressbarLegend(:inData="total_data_3")

.panel
    FilterToggler(:options="BWDFilterOptions" v-model="BWDFilterValue")
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
                template(#progressbar)
                    ItemProgressbar(:data="product.stats" :ignore="['Target', 'Not Executed', 'Stock']")
                    ItemProgressbar(:data="product.stats" :ignore="['Target', 'Not Executed', 'Executed']" rtl)
</template>

<style lang="scss" scoped>
:deep(.stat) {
    &.Stock {
        color: var(--blue-bright);
    }
}

:deep(.progressbar-legend__item.Stock) {
    &:before {
        background-color: var(--blue-bright);
    }
}

:deep(.progressbar-label) {
    height: 24px;
}

</style>