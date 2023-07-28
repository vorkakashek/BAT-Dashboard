<script setup>
import { computed, onMounted, ref, watch } from "vue";
import WeeksGraph from '@/components/Modals/Cycle Materials Modal/WeeksGraph.vue'
import { useFiltersStore } from "@/store/store";
const store = useFiltersStore();

onMounted(() => {
    viewType.value = store.togglers.find(e => e.name === 'viewType_1').value
})

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

const totalGraph = ref({
    info: {
        name: 'GC_A_TN_Big_Mini_Sas # Lucky Strike',
        image: 3,
        targetPercent: 89.3,
        target: 13400,
        totalqty: 15800,
        centralstorage: '02/05/2022',
    },
    weeks: [
        {
            week: 'Week 22.1',
            number: '-4',
            dateStart: '30/05',
            dateEnd: '31/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 436,
                    percent: 10,
                },
                'Transit': {
                    qty: 645,
                    percent: 20,
                },
                'Delivered': {
                    qty: 52,
                    percent: 10,
                },
                'In Stock': {
                    qty: 642,
                    percent: 98,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
        {
            week: 'Week 22.2',
            number: '-3',
            dateStart: '01/06',
            dateEnd: '05/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 634,
                    percent: 10,
                },
                'Delivered': {
                    qty: 7345,
                    percent: 30,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 3452,
                    percent: 25,
                },
            }
        },
        {
            week: 'Week 23',
            number: '-2',
            dateStart: '06/06',
            dateEnd: '12/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 547,
                    percent: 20,
                },
                'Delivered': {
                    qty: 568,
                    percent: 50,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 345,
                    percent: 40,
                },
            }
        },
        {
            week: 'Week 24',
            number: '-1',
            dateStart: '13/06',
            dateEnd: '19/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 2315,
                    percent: 30,
                },
                'Delivered': {
                    qty: 23145,
                    percent: 60,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 1345,
                    percent: 45,
                },
            }
        },
        {
            week: 'Week 25',
            number: '+1',
            dateStart: '20/06',
            dateEnd: '26/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 5123,
                    percent: 20,
                },
                'Delivered': {
                    qty: 89345,
                    percent: 70,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 521513,
                    percent: 50,
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
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered': {
                    qty: 59349,
                    percent: 100,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 53452,
                    percent: 80,
                },
            }
        },
        {
            week: 'Week 27',
            number: '+3',
            dateStart: '09/05',
            dateEnd: '15/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered': {
                    qty: 0,
                    percent: 0,
                },
                'In Stock': {
                    qty: 0,
                    percent: 0,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
        {
            week: 'Week 28',
            number: '+4',
            dateStart: '16/05',
            dateEnd: '22/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered': {
                    qty: 0,
                    percent: 0,
                },
                'In Stock': {
                    qty: 0,
                    percent: 0,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
        {
            week: 'Week 29',
            number: '+5',
            dateStart: '23/05',
            dateEnd: '29/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered': {
                    qty: 0,
                    percent: 0,
                },
                'In Stock': {
                    qty: 0,
                    percent: 0,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
    ],
})

const itemList = ref([
    {
        label: "MBU",
        stats: [
            {
                name: "Executed",
                value: "301",
            },
            {
                name: "Delivered to TMR",
                value: "1204",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ]
    },
    {
        label: "NW",
        stats: [
            {
                name: "Executed",
                value: "301",
            },
            {
                name: "Delivered to TMR",
                value: "1204",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ]
    },
])

const viewType = ref('bar')

watch(store.togglers, (val) => {
    viewType.value = val.find(e => e.name === 'viewType_1').value
})

</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

TotalProgressbar(:data="totalData" label="hidden" :viewType="viewType")
    template(#legend)
        WeeksGraph(:data="totalGraph" label="Total" type="progress-bar" v-if="viewType === 'graph'")
        ProgressbarLegend(:data="totalData" label="Total" type="progress-bar" v-if="viewType === 'bar'")


.panel
    h2 Total
    .comparison-items
        ComparisonItem(v-for="item in itemList" :comparisonData="item" :vertical="true")

</template>

<style scoped lang="scss">

</style>