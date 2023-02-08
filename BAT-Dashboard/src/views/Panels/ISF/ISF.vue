<script setup>
import { ref, onMounted, watch } from "vue";
import FavoriteToggler from "@/components/FavoriteToggler.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.isf_togglers.find(e => e.name === 'isf_1').value !== 'unset') {
        itemValue.value = [store.isf_togglers.find(e => e.name === 'isf_1').value]
    }
})

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

</script>


<template lang="pug">
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

FavoriteToggler(:options="options" v-model="itemValue")

RouterView


</template>

<style lang="scss" scoped>

</style>