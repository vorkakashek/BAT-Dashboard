<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import WeeksGraph from '@/components/Modals/Cycle Materials Modal/WeeksGraph.vue'
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()
const viewType = ref('bar')

onMounted(() => {
    if (store.togglers.find(e => e.name === 'posm_capex').value !== 'unset') {
        CAPEXFilterValue.value = store.togglers.find(e => e.name === 'posm_capex').value
    }
    viewType.value = store.togglers.find(e => e.name === 'viewType_3').value
})

const CAPEXFilterOptions = ref(['Strings', 'Acts', 'Sum']);
const CAPEXFilterValue = ref('Strings');

const totalGraph = ref({
    info: {
        name: 'GC_A_TN_Big_Mini_Sas # Lucky Strike',
        image: 3,
        targetPercent: 89.3,
        target: 4000,
        totalqty: 4000,
        centralstorage: '02/05/2022',
    },
    weeks: [
        {
            week: 'Week 22.1',
            number: '-4',
            dateStart: '30/05',
            dateEnd: '31/05',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 3000,
                    percent: 90,
                },
                'Target': {
                    qty: 1000,
                    percent: 10,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 22.2',
            number: '-3',
            dateStart: '01/06',
            dateEnd: '05/06',
            graph: {
                '>90 D': {
                    qty: 1000,
                    percent: 10,
                    class: 'More90d'
                },
                'Current': {
                    qty: 2000,
                    percent: 80,
                },
                'Target': {
                    qty: 1000,
                    percent: 10,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 23',
            number: '-2',
            dateStart: '06/06',
            dateEnd: '12/06',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 3000,
                    percent: 90,
                },
                'Target': {
                    qty: 1000,
                    percent: 10,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 24',
            number: '-1',
            dateStart: '13/06',
            dateEnd: '19/06',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 3000,
                    percent: 90,
                },
                'Target': {
                    qty: 1000,
                    percent: 10,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 25',
            number: '+1',
            dateStart: '20/06',
            dateEnd: '26/06',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 3000,
                    percent: 90,
                },
                'Target': {
                    qty: 1000,
                    percent: 10,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 26',
            number: '+2',
            current: true,
            dateStart: '20/06',
            dateEnd: '26/06',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 3000,
                    percent: 90,
                },
                'Target': {
                    qty: 1000,
                    percent: 10,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 27',
            number: '+3',
            dateStart: '09/05',
            dateEnd: '15/05',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 0,
                    percent: 0,
                },
                'Target': {
                    qty: 0,
                    percent: 0,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 28',
            number: '+4',
            dateStart: '16/05',
            dateEnd: '22/05',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 0,
                    percent: 0,
                },
                'Target': {
                    qty: 0,
                    percent: 0,
                    class: 'GreenTarget'
                },
            }
        },
        {
            week: 'Week 29',
            number: '+5',
            dateStart: '23/05',
            dateEnd: '29/05',
            graph: {
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 0,
                    percent: 0,
                },
                'Target': {
                    qty: 0,
                    percent: 0,
                    class: 'GreenTarget'
                },
            }
        },
    ],
})

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

watch(store.togglers, (val) => {
    viewType.value = val.find(e => e.name === 'viewType_3').value
})

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData" :ignore="[]" :viewType="viewType")
    template(#legend)
        WeeksGraph(:data="totalGraph" type="progress-bar" v-if="viewType === 'graph'" valueStore="viewType_3")
        ProgressbarLegend(:data="totalData" type="progress-bar" v-if="viewType === 'bar'" valueStore="viewType_3")

.panel
    FilterToggler(:options="CAPEXFilterOptions" v-model="CAPEXFilterValue")
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>