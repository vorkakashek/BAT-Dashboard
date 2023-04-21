<script setup>
import { ref, watch, onMounted } from "vue"
import FilterToggler from "@/components/FilterToggler.vue"
import { useFiltersStore } from "@/store/store"

// v2
import TotalProgressbarConstructor from "@/components/Progress Bars/Total Progressbar/TotalProgressbarConstructor.vue"
import Progressbar from "@/components/Progress Bars/Total Progressbar/Progressbar.vue"
import ProgressbarRTL from "@/components/Progress Bars/Total Progressbar/ProgressbarRTL.vue"
import ItemProgressbar from "@/components/Progress Bars/Item Progressbar/ItemProgressbar.vue"
import ItemProgressbarRTL from "@/components/Progress Bars/Item Progressbar/ItemProgressbarRTL.vue"
import ItemLegend from "@/components/Progress Bars/Item Progressbar/ItemLegend.vue"

const store = useFiltersStore();

// BWD 
const BWDFilterOptions = ref(['ALL', 'BWD', 'VITRINE']);
const BWDFilterValue = ref('ALL');

onMounted(() => {
    if (store.togglers.find(e => e.name === 'equipment_2').value !== 'unset') {
        BWDFilterValue.value = store.togglers.find(e => e.name === 'equipment_2').value
    }
})

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

let itemList = ref([
    {
        name: "GLO_Vitrine_PP_1000 (правый)",
        photo: "equipment-1",
        type_bwd: "VITRINE",
        stats: [
            [
                {
                    name: "Executed",
                    value: "3000",
                },
                {
                    name: "Not Executed",
                    value: "1000",
                },
                {
                    name: "Target",
                    value: "4000",
                }
            ],
            [
                {
                    name: "Stock",
                    value: "500",
                },
                {
                    name: "No Stock",
                    value: "500",
                },
                {
                    name: "Target",
                    value: "4000",
                }
            ],
        ],
        info: {
            photo: ["equipment-1", "equipment-2"],
            html: `<div><strong>Название: </strong> <span>BWD Премиум 11x15 черный</span></div><div><strong>Название: </strong> <span>BWD Премиум 11x15 черный</span></div>`
        }
    },
    {
        name: "GLO_Vitrine_PP_1000 (левый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            [
                {
                    name: "Executed",
                    value: "1000",
                },
                {
                    name: "Not Executed",
                    value: "3000",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "2000",
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
        info: {
            photo: ["equipment-1"],
            html: `<div><strong>Название: </strong> <span>BWD Премиум 11x15 черный</span></div><div><strong>Название: </strong> <span>BWD Премиум 11x15 черный</span></div>`
        }
    },
    {
        name: "GLO_Vitrine_PP_1500 (правый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            [
                {
                    name: "Executed",
                    value: "1500",
                },
                {
                    name: "Not Executed",
                    value: "2500",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "3000",
                },
                {
                    name: "No Stock",
                    value: "0",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
        ],
    },
    {
        name: "GLO_Vitrine_PP_1500 (правый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            [
                {
                    name: "Executed",
                    value: "1500",
                },
                {
                    name: "Not Executed",
                    value: "2500",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "3000",
                },
                {
                    name: "No Stock",
                    value: "0",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
        ],
    },
    {
        name: "GLO_Vitrine_PP_1500 (правый)",
        photo: "equipment-1",
        type_bwd: "BWD",
        stats: [
            [
                {
                    name: "Executed",
                    value: "1500",
                },
                {
                    name: "Not Executed",
                    value: "2500",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ],
            [
                {
                    name: "Stock",
                    value: "3000",
                },
                {
                    name: "No Stock",
                    value: "0",
                },
                {
                    name: "Target",
                    value: "4000",
                },
            ]
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

TotalProgressbarConstructor(:data="total_1")
    template(#progressbar)
        Progressbar(:data="total_1.data[0]")
            template(#after) outlet
        ProgressbarRTL(:data="total_1.data[1]")
            template(#after) equip

TotalProgressbarConstructor(:data="total_2")
    template(#progressbar)
        Progressbar(:data="total_2.data[0]")
            template(#after) outlet
        ProgressbarRTL(:data="total_2.data[1]")
            template(#after) equip

TotalProgressbarConstructor(:data="total_3")
    template(#progressbar)
        Progressbar(:data="total_3.data[0]")
            template(#after) outlet
        ProgressbarRTL(:data="total_3.data[1]")
            template(#after) equip

.panel
    FilterToggler(:options="BWDFilterOptions" v-model="BWDFilterValue")
    ProductCards
        template(#items)
            ProductCard(:product="item" v-for="item in itemList")
                template(#progressbar)
                    ItemProgressbar(:data="item.stats[0]")
                    ItemProgressbarRTL(:data="item.stats[1]")

                template(#legend)
                    ItemLegend(:data="item.stats")
</template>

<style lang="scss" scoped>
// :deep(.stat) {
//     &.Stock {
//         color: var(--blue-bright);
//     }
// }

// :deep(.progressbar-legend__item.Stock) {
//     &:before {
//         background-color: var(--blue-bright);
//     }
// }

// :deep(.progressbar-label) {
//     height: 24px;
// }

// .total_progressbar_container {
//     max-width: 800px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-right: auto;

//     @include respond-to (large) {
//         max-width: 100%;
//     }
// }

// :deep(.progressbar-container) {
//     &:first-child {
//         margin-bottom: 4px;
//     }
// }
</style>