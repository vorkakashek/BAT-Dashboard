<script setup>
import { computed, ref, reactive, watch, onMounted } from "vue"

import FilterToggler from "@/components/FilterToggler.vue"

// v2
import TotalProgressbarConstructor from "@/components/Progress Bars/Total Progressbar/TotalProgressbarConstructor.vue"
import Progressbar from "@/components/Progress Bars/Total Progressbar/Progressbar.vue"
import ProgressbarRTL from "@/components/Progress Bars/Total Progressbar/ProgressbarRTL.vue"
import ItemProgressbar from "@/components/Progress Bars/Item Progressbar/ItemProgressbar.vue"
import ItemProgressbarRTL from "@/components/Progress Bars/Item Progressbar/ItemProgressbarRTL.vue"
import ItemLegend from "@/components/Progress Bars/Item Progressbar/ItemLegend.vue"

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

let total_1 = ref({
    label: 'Total BWD Multicategory',
    data: [
        [
            {
                name: "Executed",
                value: 1200,
            },
            {
                name: "Not Executed",
                value: 800,
            },
            {
                name: "Target",
                value: 4000,
            },
        ],
        [
            {
                name: "Stock",
                value: 2000,
            },
            {
                name: "No Stock",
                value: 800,
            },
            {
                name: "Target",
                value: 4000,
            },
        ]
    ]
})

let total_2 = ref({
    label: "Total Vitrine / Taylor made",
    data: [
        [
            {
                name: "Executed",
                value: 1000,
            },
            {
                name: "Not Executed",
                value: 800,
            },
            {
                name: "Target",
                value: 4000,
            },
        ],
        [
            {
                name: "Stock",
                value: 2000,
            },
            {
                name: "No Stock",
                value: 1000,
            },
            {
                name: "Target",
                value: 4000,
            },
        ]
    ]
})

let total_3 = ref({
    label: "Total BWD + Vitrine",
    data: [
        [
            {
                name: "Executed",
                value: 1200,
            },
            {
                name: "Not Executed",
                value: 800,
            },
            {
                name: "Target",
                value: 4000,
            },
        ],
        [
            {
                name: "Stock",
                value: 2800,
            },
            {
                name: "No Stock",
                value: 0,
            },
            {
                name: "Target",
                value: 4000,
            },
        ]
    ]
})

// let itemList = ref([
//     {
//         name: "GLO_Vitrine_PP_1000 (правый)",
//         photo: "equipment-1",
//         type_bwd: "VITRINE",
//         stats: [
//             [
//                 {
//                     name: "Executed",
//                     value: "3000",
//                 },
//                 {
//                     name: "Not Executed",
//                     value: "1000",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 }
//             ],
//             [
//                 {
//                     name: "Stock",
//                     value: "500",
//                 },
//                 {
//                     name: "No Stock",
//                     value: "500",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 }
//             ],
//         ]
//     },
//     {
//         name: "GLO_Vitrine_PP_1000 (левый)",
//         photo: "equipment-1",
//         type_bwd: "BWD",
//         stats: [
//             [
//                 {
//                     name: "Executed",
//                     value: "1000",
//                 },
//                 {
//                     name: "Not Executed",
//                     value: "3000",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ],
//             [
//                 {
//                     name: "Stock",
//                     value: "2000",
//                 },
//                 {
//                     name: "No Stock",
//                     value: "1000",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ]
//         ],
//     },
//     {
//         name: "GLO_Vitrine_PP_1500 (правый)",
//         photo: "equipment-1",
//         type_bwd: "BWD",
//         stats: [
//             [
//                 {
//                     name: "Executed",
//                     value: "1500",
//                 },
//                 {
//                     name: "Not Executed",
//                     value: "2500",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ],
//             [
//                 {
//                     name: "Stock",
//                     value: "3000",
//                 },
//                 {
//                     name: "No Stock",
//                     value: "0",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ]
//         ],
//     },
//     {
//         name: "GLO_Vitrine_PP_1500 (правый)",
//         photo: "equipment-1",
//         type_bwd: "BWD",
//         stats: [
//             [
//                 {
//                     name: "Executed",
//                     value: "1500",
//                 },
//                 {
//                     name: "Not Executed",
//                     value: "2500",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ],
//             [
//                 {
//                     name: "Stock",
//                     value: "3000",
//                 },
//                 {
//                     name: "No Stock",
//                     value: "0",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ]
//         ],
//     },
//     {
//         name: "GLO_Vitrine_PP_1500 (правый)",
//         photo: "equipment-1",
//         type_bwd: "BWD",
//         stats: [
//             [
//                 {
//                     name: "Executed",
//                     value: "1500",
//                 },
//                 {
//                     name: "Not Executed",
//                     value: "2500",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ],
//             [
//                 {
//                     name: "Stock",
//                     value: "3000",
//                 },
//                 {
//                     name: "No Stock",
//                     value: "0",
//                 },
//                 {
//                     name: "Target",
//                     value: "4000",
//                 },
//             ]
//         ],
//     },
// ])

let itemList = ref([
    {
        label: "MBU",
        type_bwd: "VITRINE",
        stats: [
            [
                {
                    name: "Executed",
                    value: "3470",
                },
                {
                    name: "Not Executed",
                    value: "1012",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "30",
                },
                {
                    name: "No Stock",
                    value: "500",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
        ],
    },
    {
        label: "NW",
        type_bwd: "BWD",
        stats: [
            [
                {
                    name: "Executed",
                    value: "2000",
                },
                {
                    name: "Not Executed",
                    value: "2000",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "1000",
                },
                {
                    name: "No Stock",
                    value: "1000",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
        ],
    },
    {
        label: "VOLGA",
        type_bwd: "VITRINE",
        stats: [
            [
                {
                    name: "Executed",
                    value: "10",
                },
                {
                    name: "Not Executed",
                    value: "3090",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "10",
                },
                {
                    name: "No Stock",
                    value: "3980",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
        ],
    },
    {
        label: "VOLGA",
        type_bwd: "VITRINE",
        stats: [
            [
                {
                    name: "Executed",
                    value: "10",
                },
                {
                    name: "Not Executed",
                    value: "3090",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "3980",
                },
                {
                    name: "No Stock",
                    value: "10",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
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

TotalProgressbarConstructor(:data="total_1")
    template(#progressbar)
        Progressbar(:data="total_1.data[0]")
        ProgressbarRTL(:data="total_1.data[1]") 

TotalProgressbarConstructor(:data="total_2")
    template(#progressbar)
        Progressbar(:data="total_2.data[0]")
        ProgressbarRTL(:data="total_2.data[1]") 

TotalProgressbarConstructor(:data="total_3")
    template(#progressbar)
        Progressbar(:data="total_3.data[0]")
        ProgressbarRTL(:data="total_3.data[1]") 

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
                        ItemProgressbar(:data="item.stats[0]")
                        ItemProgressbarRTL(:data="item.stats[1]")
                    template(#data)
                        ItemLegend(:data="item.stats")
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