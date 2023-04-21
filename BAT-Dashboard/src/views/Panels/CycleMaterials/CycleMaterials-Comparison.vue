<script setup>

import { computed, ref, reactive, onMounted, watch } from "vue";
import CMFilter from '@/components/CMFilter.vue';
import { useFiltersStore } from "@/store/store";
const store = useFiltersStore();

onMounted(() => {
    if (store.togglers.find(e => e.name === 'cycle_4').value !== 'unset') {
        CMFilterValue.value = store.togglers.find(e => e.name === 'cycle_4').value
    }
})

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

const totalData = ref([
    {
        name: "Executed",
        value: 15103,
    },
    {
        name: "Delivered to TMR",
        value: 6802,
    },
    {
        name: "Transit to TMR",
        value: 300,
    },
    {
        name: "Delivered to City",
        value: 16310,
    },
    {
        name: "Not Delivered",
        value: 800,
    },
    {
        name: "Target",
        value: 16700,
    },
])

const itemList = ref([
    {
        label: "MBU",
        type: 'OTHER',
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        label: "NW",
        type: 'OTHER',
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        label: "NW",
        type: 'OTHER',
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
    {
        label: "NW",
        type: 'MUST SET',
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
            },
            {
                name: "Not Delivered",
                value: "500",
            },
            {
                name: "Target",
                value: "4000",
            },
        ],
    },
])

const CMFilterOptions = ref(['ALL', 'MUST SET', 'OTHER'])
const CMFilterValue = ref('ALL')

const importPhoto = computed(() => {
    return new URL(
        `./../../../assets/images/Cycle Materials/2.jpg`,
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

watch(() => CMFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(CMFilterValue.value, 'cycle_4')
    }
})

</script>


<template lang="pug">

vue-easy-lightbox(
    :visible="state.visible",
    :imgs="state.imgs",
    :index="state.index",
    @hide="handleHide"
)

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:data="totalData")

.panel
    h2 Cycle Materials
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")
        .comparison-content
            CMFilter(:options="CMFilterOptions" v-model="CMFilterValue")
            .comparison-items
                ComparisonItem(v-for="item in itemList" :comparisonData="item")
</template>
