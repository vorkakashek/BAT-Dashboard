<script setup>
import { ref, watch } from "vue";


const options = [
    {
        value: 0,
        label: 'ALL SELECTED'
    },
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
        label: 'Item 3'
    },
    {
        value: 4,
        label: 'Item 3 asdas das asd'
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

RouterView


</template>

<style lang="scss" scoped>
</style>