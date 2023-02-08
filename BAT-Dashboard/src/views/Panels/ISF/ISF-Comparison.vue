<script setup>
import { computed, ref, reactive, onMounted, watch } from "vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.isf_togglers.find(e => e.name === 'isf_5').value !== 'unset') {
        ISFFilterValue.value = store.isf_togglers.find(e => e.name === 'isf_5').value
    }
    if (store.isf_togglers.find(e => e.name === 'isf_6').value !== 'unset') {
        PEXFilterValue.value = store.isf_togglers.find(e => e.name === 'isf_6').value
    }
    if (store.isf_togglers.find(e => e.name === 'isf_7').value !== 'unset') {
        RKAFilterValue.value = store.isf_togglers.find(e => e.name === 'isf_7').value
    }
})

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

watch(() => ISFFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(ISFFilterValue.value, 'isf_5')
    }
})
watch(() => PEXFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(PEXFilterValue.value, 'isf_6')
    }
})
watch(() => RKAFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(RKAFilterValue.value, 'isf_7')
    }
})
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