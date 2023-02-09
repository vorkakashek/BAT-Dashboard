<script setup>
import { ref, watch, onMounted } from "vue";
import FavoriteToggler from "@/components/FavoriteToggler.vue";
import { useFiltersStore } from "@/store/store";
const store = useFiltersStore();

onMounted(() => {
    if (store.togglers.find(e => e.name === 'headers_1').value !== 'unset') {
        itemValue.value = store.togglers.find(e => e.name === 'headers_1').value
    }
})

const options = [
    {
        value: 1,
        label: 'Cycle Name 1'
    },
    {
        value: 2,
        label: 'Cycle Name 2'
    },
    {
        value: 3,
        label: 'Cycle Name 3',
        favorite: true,
    },
    {
        value: 4,
        label: 'Cycle Name 4 (last)',
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
        store.save(itemValue.value, 'headers_1')
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