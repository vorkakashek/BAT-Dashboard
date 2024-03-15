<script setup>
import { ref, onMounted, watch } from "vue";
import FavoriteToggler from "@/components/FavoriteToggler.vue";
import OptionalToggler from "@/components/OptionalToggler.vue";
import Dropdown from "@/components/Dropdown.vue";
import { useFiltersStore } from "@/store/store"

const store = useFiltersStore()

onMounted(() => {
    if (store.togglers.find(e => e.name === 'isf_1').value !== 'unset') {
        itemValue.value = [store.togglers.find(e => e.name === 'isf_1').value]
    }
    if (store.togglers.find(e => e.name === 'isf_11').value !== 'unset') {
        optionalValue.value = store.togglers.find(e => e.name === 'isf_11').value
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

const optionalOptions = ref([
    {
        value: 'optional_1',
        label: 'Name 1',
    },
    {
        value: 'optional_2',
        label: 'Name 2',
    },
    {
        value: 'optional_3',
        label: 'Name 3',
    },
])
const optionalValue = ref([''])


const itemValue = ref([options.length - 1]);

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
watch(() => optionalValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(optionalValue.value, 'isf_11')
    }
})

let currentYear = (y) => {
    let now = new Date()
    return Number(y) === now.getFullYear() ? true : false
}

</script>


<template lang="pug">
Teleport(to="#Equipment")
    Dropdown(
        @update:modelValue="(val) => itemValue = [val.value]",
        :value="options.filter(i => i.value === itemValue[0])[0]",
        isWhite
        isFill
        :options="options",
        placeholder="Cycle Name",
    )
        template(v-slot:option="{ option }")
            span {{ option.label }}
            span.tag {{ option.year }}
        template(v-slot:value="{ value }")
            | {{value?.label || 'Cycle Name'}}
    //- Multiselect(
    //-     v-model="itemValue", 
    //-     :close-on-select="true", 
    //-     :options="options", 
    //-     mode="tags",
    //-     :max="1",
    //-     @open="handlerOpen",
    //-     @close="handlerClose",
    //-     :canClear='false',
    //-     :searchable="true",
    //-     )
    //-     template(v-slot:option="{ option }")
    //-         span {{ option.label }}
    //-         span.tag(:class="{ 'current': currentYear(option.year) }") {{ option.year }}

.filter-group
    FavoriteToggler(:options="options" v-model="itemValue")
    OptionalToggler(v-if="optionalOptions && optionalOptions.length > 0" :options="optionalOptions" v-model="optionalValue")

router-view 


</template>

<style lang="scss" scoped>
.filter-group {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: var(--pdlg);
    >* {
        margin: 0 !important;
        margin-bottom: var(--pdlg) !important;

        &:not(:last-child) {
            margin-right: var(--pdlg) !important;
        }
    }
}
</style>