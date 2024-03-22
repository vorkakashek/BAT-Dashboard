<script setup>
import { computed, ref, onMounted, watch } from "vue";
import POSMLayout from "./POSM-layout.vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import WeeksGraph from '@/components/Modals/Cycle Materials Modal/WeeksGraph.vue'
import { useFiltersStore } from "@/store/store"
import Dropdown from "@/components/Dropdown.vue";

const store = useFiltersStore()
const viewType = ref('bar')

onMounted(() => {
    if (store.togglers.find(e => e.name === 'posm_capex').value !== 'unset') {
        CAPEXFilterValue.value = store.togglers.find(e => e.name === 'posm_capex').value
    }
    viewType.value = store.togglers.find(e => e.name === 'viewType_3').value
})

const CAPEXFilterOptions = ref(['Strings', 'Acts', 'Sum']);
const CAPEXFilterValue = ref('Sum');

const CAPEXDropdownOptions = ref(['New','Pending','Canceled','Shipped',])
const CAPEXDropdownValue = ref(null);

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
                '90-180 d': {
                    qty: 30,
                    percent: 33.33,
                    class: "d90d180",
                },
                "30-90 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "d30d90",
                },
                "< 30 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "Less30d",
                },
            }
        },
        {
            week: 'Week 22.2',
            number: '-3',
            dateStart: '01/06',
            dateEnd: '05/06',
            graph: {
                '90-180 d': {
                    qty: 30,
                    percent: 33.33,
                    class: "d90d180",
                },
                "30-90 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "d30d90",
                },
                "< 30 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "Less30d",
                },
            }
        },
        {
            week: 'Week 23',
            number: '-2',
            dateStart: '06/06',
            dateEnd: '12/06',
            graph: {
                '90-180 d': {
                    qty: 30,
                    percent: 33.33,
                    class: "d90d180",
                },
                "30-90 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "d30d90",
                },
                "< 30 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "Less30d",
                },
            }
        },
        {
            week: 'Week 24',
            number: '-1',
            dateStart: '13/06',
            dateEnd: '19/06',
            graph: {
                '90-180 d': {
                    qty: 30,
                    percent: 33.33,
                    class: "d90d180",
                },
                "30-90 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "d30d90",
                },
                "< 30 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "Less30d",
                },
            }
        },
        {
            week: 'Week 25',
            number: '+1',
            dateStart: '20/06',
            dateEnd: '26/06',
            graph: {
                '90-180 d': {
                    qty: 30,
                    percent: 33.33,
                    class: "d90d180",
                },
                "30-90 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "d30d90",
                },
                "< 30 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "Less30d",
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
                '90-180 d': {
                    qty: 30,
                    percent: 33.33,
                    class: "d90d180",
                },
                "30-90 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "d30d90",
                },
                "< 30 d": {
                    qty: 30,
                    percent: 33.33,
                    class: "Less30d",
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
                'Total': {
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
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 0,
                    percent: 0,
                },
                'Total': {
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
                '>90 D': {
                    qty: 0,
                    percent: 0,
                    class: 'More90d'
                },
                'Current': {
                    qty: 0,
                    percent: 0,
                },
                'Total': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
    ],
})

const totalData = ref([
    {
        name: "90-180 d",
        value: "10",
        class: "d90d180",
    },
    {
        name: "30-90 d",
        value: "20",
        class: "d30d90",
    },
    {
        name: "< 30 d",
        value: "10",
        class: "Less30d",
    },
])

const itemList = ref([
    {
        name: "Москва",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        stats: [
            {
                name: "> 180 d",
                value: "1",
                class: "More180d",
            },
            {
                name: "90-180 d",
                value: "1",
                class: "d90d180",
            },
            {
                name: "30-90 d",
                value: "20",
                class: "d30d90",
            },
            {
                name: "< 30 d",
                value: "10",
                class: "Less30d",
            },
            {
                name: "NEW",
                value: "10",
                class: "new",
            },
        ],
    },
    {
        name: "Северо-Запад",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        stats: [
            {
                name: "> 180 d",
                value: "90",
                class: "More180d",
            },
            {
                name: "90-180 d",
                value: "3",
                class: "d90d180",
            },
            {
                name: "30-90 d",
                value: "3",
                class: "d30d90",
            },
            {
                name: "< 30 d",
                value: "3",
                class: "Less30d",
            },
            {
                name: "NEW",
                value: "1",
                class: "new",
            },
        ],
    },
    {
        name: "Юг",
        photo: "MINI",
        percentage: "10%",
        ignore: [],
        stats: [
            {
                name: "> 180 d",
                value: "10",
                class: "More180d",
            },
            {
                name: "90-180 d",
                value: "10",
                class: "d90d180",
            },
            {
                name: "30-90 d",
                value: "20",
                class: "d30d90",
            },
            {
                name: "< 30 d",
                value: "10",
                class: "Less30d",
            },
            {
                name: "NEW",
                value: "10",
                class: "new",
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
POSMLayout
    Teleport(to="#export-excel")
        ExportExcel()

    TotalProgressbar(hasTotal :data="totalData" :ignore="[]" :viewType="viewType" )
        template(#legend)
            WeeksGraph(:data="totalGraph" type="progress-bar" v-if="viewType === 'graph'" valueStore="viewType_3")
            ProgressbarLegend(hasTotal :data="totalData" type="progress-bar" v-if="viewType === 'bar'" valueStore="viewType_3")

    .panel
        .panel__row
            FilterToggler(:options="CAPEXFilterOptions" v-model="CAPEXFilterValue")
            Dropdown(
                multiselect
                :options="CAPEXDropdownOptions"
                v-model="CAPEXDropdownValue"
                placeholder="Document status"
            )
        ProductCards
            template(#items)
                ProductCard(v-for="product in itemList", :product="product" hasTotal)
</template>

<style lang="scss" scoped>
.panel {
    &__row {
        display: flex;
        align-items: center;
        gap: 8px;
    }
}
</style>