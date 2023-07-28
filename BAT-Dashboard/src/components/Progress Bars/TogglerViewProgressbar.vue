<script setup>
import { onMounted, ref, watch } from 'vue';
import { useFiltersStore } from '../../store/store';
const store = useFiltersStore()

const props = defineProps({
    value: {
        type: String,
        required: false,
        default: 'viewType_1'
    }
})

onMounted(() => {
    viewType.value = store.togglers.find(e => e.name === `${props.value}`).value
})

const viewType = ref('bar')

watch(viewType, (val) => {
    store.save(val, `${props.value}`)
})
</script>

<template lang="pug">
.details_icon__wrapper(:class="{'details_icon__wrapper-graph': viewType === 'graph'}")
    .details_icon(
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
    &:hover {
        background-color: var(--grey-medium);
    }
    &__wrapper {
        margin-left: 48px;
        order: 100;
        &-graph {
            order: -1;
            .details_icon {
                background-color: var(--blue-light);
                &:hover {
                    background-color: var(--blue-light-hover);
                }
            }
            :deep(.icon) {
                fill: white
            }
        }
    }
    @include respond-to(small) {
        margin: 0px 0px 0px auto;
        &__wrapper {
            width: 100%;
            &-graph {
                order: 1;
                margin-bottom: var(--pdsm);
            }
        }
    }
}
</style>