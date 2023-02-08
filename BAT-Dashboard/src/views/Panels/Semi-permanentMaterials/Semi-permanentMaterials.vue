<script setup>
import { ref, watch } from "vue";
import FavoriteToggler from "@/components/FavoriteToggler.vue";

const options = [
    {
        value: 1,
        label: 'Item 1'
    },
    {
        value: 2,
        label: 'Item 2'
    },
    {
        value: 3,
        label: 'Item 3',
        favorite: true,
    },
    {
        value: 4,
        label: 'Item 3 last',
        favorite: true,
    },
];

// const itemValue = ref([0]);

// watch(itemValue, (value) => {
//     if (value.length < 1) {
//         itemValue.value = [0]
//     }
// })

const itemValue = ref([options.length]);

const handlerOpen = (value) => itemValue.value = []
const handlerClose = () => {
    if (itemValue.value.length < 1) {
        itemValue.value = [options.length]
    }
}
</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel(disabled)

Teleport(to="#multiselector")
    Multiselect(
        v-model="itemValue", 
        :close-on-select="true", 
        :options="options", 
        mode="tags",
        :max="1",
        @open="handlerOpen",
        @close="handlerClose",
        :canClear='false',
        :searchable="true",
        )
//- Teleport(to="#multiselector")
//-     Multiselect(
//-         v-model="itemValue", 
//-         :close-on-select="true", 
//-         :options="options", 
//-         mode="tags",
//-         @select="handleSelector",
//-         :searchable="true",
//-         placeholder="Start typing or select...",
//-         )

FavoriteToggler(:options="options" v-model="itemValue")

RouterView

</template>