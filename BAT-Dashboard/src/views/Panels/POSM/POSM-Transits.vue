<script setup>
import { computed, ref, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"
import WeeksGraph from '@/components/Modals/Cycle Materials Modal/WeeksGraph.vue'

const store = useFiltersStore()
const viewType = ref('bar')

onMounted(() => {
    viewType.value = store.togglers.find(e => e.name === 'viewType_6').value
})

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

const totalGraph = ref({
    info: {
        name: 'GC_A_TN_Big_Mini_Sas # Lucky Strike',
        image: 3,
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 3000,
                    percent: 90,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 1000,
                    percent: 10,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 2000,
                    percent: 80,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 3000,
                    percent: 90,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 3000,
                    percent: 90,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 3000,
                    percent: 90,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 3000,
                    percent: 90,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 0,
                    percent: 0,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 0,
                    percent: 0,
                    class: 'Three12Month'
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
                '>1 YEAR': {
                    qty: 0,
                    percent: 0,
                    class: 'More1y'
                },
                '3-12 MONTH': {
                    qty: 0,
                    percent: 0,
                    class: 'Three12Month'
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

const itemList = ref([
    {
        name: "TMR",
        photo: "work",
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
        name: "Промо",
        photo: "promo",
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
        name: "Мол",
        photo: "mol",
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
        name: "Ворк",
        photo: "tmr",
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

watch(store.togglers, (val) => {
    viewType.value = val.find(e => e.name === 'viewType_6').value
})
</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData" :ignore="[]" :viewType="viewType")
    template(#legend)
        WeeksGraph(:data="totalGraph" type="progress-bar" v-if="viewType === 'graph'" valueStore="viewType_6")
        ProgressbarLegend(:data="totalData" type="progress-bar" v-if="viewType === 'bar'" valueStore="viewType_6")

.panel
    ProductCards
        template(#items)
            ProductCard(v-for="product in itemList", :product="product")
</template>

<style lang="scss" scoped>

</style>