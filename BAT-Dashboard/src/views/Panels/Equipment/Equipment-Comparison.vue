<script setup>
import { computed, ref, reactive, watch, onMounted } from "vue"
import FilterToggler from "@/components/FilterToggler.vue"
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore();

onMounted(() => {
    if (store.togglers.find(e => e.name === 'equipment_3').value !== 'unset') {
        BWDFilterValue.value = store.togglers.find(e => e.name === 'equipment_3').value
    }
})

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

// BWD 
const BWDFilterOptions = ref(['ALL', 'BWD', 'VITRINE']);
const BWDFilterValue = ref('ALL');

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
        label: "MBU",
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
        label: "NW",
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
        label: "VOLGA",
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
        label: "URAL",
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
        label: "SIBERIA",
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

const importPhoto = computed(() => {
    return new URL(
        `./../../../assets/images/equipment-1.jpg`,
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

watch(() => BWDFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(BWDFilterValue.value, 'equipment_3')
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
    h2 Equipment in PP
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")

        .comparison-content
            FilterToggler(:options="BWDFilterOptions" v-model="BWDFilterValue")
            .comparison-items
                ComparisonItem(v-for="item in itemList", :comparisonData="item")
                    template(#progressbar)
                        ItemProgressbar(:data="item.stats" :ignore="['Target', 'Not Executed', 'Stock']")
                        ItemProgressbar(:data="item.stats" :ignore="['Target', 'Not Executed', 'Executed']" rtl)
                    template(#data)
                        ItemData(:data="item.stats")
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


</style>