<script setup>
import { onMounted, ref, watch } from 'vue';
import { useFiltersStore } from '../../store/store';
const store = useFiltersStore()

onMounted(() => {
    viewType.value = store.togglers.find(e => e.name === 'viewType_1').value
})

const viewType = ref('bar')

watch(viewType, (val) => {
    store.save(val, 'viewType_1')
})

</script>

<template lang="pug">
.details_icon(
    :class="{'details_icon-graph': viewType === 'graph'}"
    @click="viewType = viewType === 'bar' ? 'graph' : 'bar'"
)
    app-icon(name="bar_chart_4_bars")
</template>

<style scoped lang="scss">
.details_icon {
    padding: 2px 4px;
    background-color: var(--grey-light);
    border-radius: 4px;
    z-index: 10;
    cursor: pointer;
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    order: 100;
    margin-left: 48px;
    &:hover {
        background-color: var(--grey-medium);
    }
    &-graph {
        background-color: var(--blue-light);
        order: -1;
        &:hover {
            background-color: var(--blue-light-hover);
        }
        :deep(.icon) {
            fill: white
        }
    }
}
</style>