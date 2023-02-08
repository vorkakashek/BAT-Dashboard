<script setup>
import { computed, ref, reactive } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

// BWD OHD
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
        label: "MBU",
        type: "OHD",
        type_pex: "CAPEX",
        type_rka: "Indep",
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
        type: "BWD",
        type_pex: "OPEX",
        type_rka: "RKA",
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
        type: "BWD",
        type_pex: "OPEX",
        type_rka: "Local",
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

// const filteredList = computed(() => itemList.value.filter(({ type, type_pex, type_rka }) => {
//     // if (ISFFilterValue.value === 'ALL') {
//     //     return true
//     // }
//     // return type === ISFFilterValue.value
//     // if (ISFFilterValue.value === 'ALL') {
//     //     return true
//     // } if (type === ISFFilterValue.value type_pex === PEXFilterValue.value) {

//     // }
//     // if (ISFFilterValue.value === 'ALL') {
//     //     if (PEXFilterValue.value === 'ALL') {

//     //     }
//     // }

//     // return ISFFilterValue.value === 'ALL' ? true :
//     //     RKAFilterValue.value === 'Indep/Local' ? type_rka === 'Indep' || type_rka === 'Local' :
//     //         RKAFilterValue.value === 'RKA' ? type_rka === 'RKA' :
//     //             type === ISFFilterValue.value || type_pex === PEXFilterValue.value
// }))

const importPhoto = computed(() => {
    return new URL(
        `./../../../assets/images/ISF/PRO.jpg`,
        import.meta.url
    ).href;
})

function showSingle() {
    state.imgs = importPhoto.value
    state.visible = true
}

function show() {
    state.visible = true
}

function handleHide() {
    state.visible = false
}
</script>


<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel()

vue-easy-lightbox(
    :visible="state.visible",
    :imgs="state.imgs",
    :index="state.index",
    @hide="handleHide"
)

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    h2 ISF
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")

        .comparison-content
            FilterToggler(:options="ISFFilterOptions" v-model="ISFFilterValue")
            FilterToggler(:options="PEXFilterOptions" v-model="PEXFilterValue")
            FilterTogglerMulti(:options="RKAFilterOptions" v-model="RKAFilterValue")
            .comparison-items
                ComparisonItem(v-for="item in itemList", :comparisonData="item")
</template>

<style lang="scss" scoped>

</style>