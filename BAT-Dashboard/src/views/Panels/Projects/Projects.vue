<script setup>
import { ref, watch } from "vue";

const options = [
    {
        value: 0,
        label: 'ALL SELECTED'
    },
    {
        value: "1",
        label: "Lucky Strike Legend",
        photo: "project-1",
    },
    {
        value: "2",
        label: "Project name 2",
        photo: "project-2",
    },
    {
        value: "3",
        label: "Project name 3",
        photo: "project-3",
    },
    {
        value: "4",
        label: "Project name 4",
        photo: "project-4",
    },
    {
        value: "5",
        label: "Project name 5",
        photo: "project-5",
    },
    {
        value: "6",
        label: "Project name 6",
        photo: "project-6",
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

</script>

<template lang="pug">
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

RouterView(v-if="$route.name === 'Projects-Catalog'" :options="options" v-model="itemValue")
RouterView(v-else)
</template>