<script setup>
import { ref, onMounted, watch } from "vue";
import FavoriteToggler from "@/components/FavoriteToggler.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.togglers.find(e => e.name === 'isf_1').value !== 'unset') {
        itemValue.value = [store.togglers.find(e => e.name === 'isf_1').value]
    }
})

const options = [
    {
        value: 1,
        label: 'Cycle Name 1',
        year: '2023'
    },
    {
        value: 2,
        label: 'Cycle Name 2',
        year: '2023'
    },
    {
        value: 3,
        label: 'Cycle Name 3',
        favorite: true,
        year: '2023'
    },
    {
        value: 4,
        label: 'Cycle Name 3',
        favorite: true,
        year: '2022'
    },
];

const itemValue = ref([options.length]);

const handlerOpen = (value) => itemValue.value = []

const handlerClose = () => {
    if (itemValue.value.length < 1) {
        itemValue.value = [options.length]
    }
}

watch(() => itemValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(itemValue.value[0], 'isf_1')
    }
})

let currentYear = (y) => {
    let now = new Date()
    return Number(y) === now.getFullYear() ? true : false
}

</script>


<template lang="pug">
//- Teleport(to="#multiselector")
//-     Multiselect(
//-         v-model="itemValue", 
//-         :close-on-select="true", 
//-         :options="options", 
//-         mode="tags",
//-         :max="1",
//-         @open="handlerOpen",
//-         @close="handlerClose",
//-         :canClear='false',
//-         :searchable="true",
//-         )
//-         template(v-slot:option="{ option }")
//-             span {{ option.label }}
//-             span.tag(:class="{ 'current': currentYear(option.year) }") {{ option.year }}

FavoriteToggler(:options="options" v-model="itemValue")

slot


</template>

<style lang="scss" scoped></style>