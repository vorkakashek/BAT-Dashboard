<script setup>
import { ref, watch, onMounted } from "vue";
import { useFiltersStore } from "@/store/store";
const store = useFiltersStore();

onMounted(() => {
    if (store.togglers.find(e => e.name === 'projects_1').value !== 'unset') {
        itemValue.value = store.togglers.find(e => e.name === 'projects_1').value
    }
})

const options = [
    {
        value: 0,
        label: 'ALL SELECTED',
        year: '2023'
    },
    {
        value: "1",
        label: "Lucky Strike Legend",
        photo: "project-1",
        year: '2023'
    },
    {
        value: "2",
        label: "Project name 2",
        photo: "project-2",
        year: '2023'
    },
    {
        value: "3",
        label: "Project name 3",
        photo: "project-3",
        year: '2023'
    },
    {
        value: "4",
        label: "Project name 4",
        photo: "project-4",
        year: '2023'
    },
    {
        value: "5",
        label: "Project name 5",
        photo: "project-5",
        year: '2022'
    },
    {
        value: "6",
        label: "Project name 6",
        photo: "project-6",
        year: '2022'
    },
];

const itemValue = ref([0]);

watch(itemValue, (value) => {
    if (value.length < 1) {
        itemValue.value = [0]
    }
})

function handleSelector(value) {
    if (value == 0) {
        itemValue.value = [0]
    }
    if (value !== 0 && itemValue.value.includes(0)) {
        itemValue.value = itemValue.value.filter((value) => value !== 0);
    }
}

watch(() => itemValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(itemValue.value, 'projects_1')
    }
})

let currentYear = (y) => {
    let now = new Date()
    return Number(y) === now.getFullYear() ? true : false
}
</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel(disabled v-if="$route.path !== '/panel/Projects/Catalog'")

Teleport(to="#multiselector")
    Multiselect(
        v-model="itemValue", 
        :close-on-select="true", 
        :options="options", 
        mode="tags",
        @select="handleSelector",
        :searchable="true",
        placeholder="Start typing or select...",
        )
        template(v-slot:option="{ option }")
            span {{ option.label }}
            span.tag(:class="{ 'current': currentYear(option.year) }") {{ option.year }}

RouterView(v-if="$route.name === 'Projects-Catalog'" :options="options" v-model="itemValue")
RouterView(v-else)
</template>