<script setup>
import { onMounted, ref, watch } from 'vue';
import { useFiltersStore } from '../../store/store';
const store = useFiltersStore()

const props = defineProps({
    value: {
        type: String,
        required: false,
        default: 'viewType_1'
    },
    type: {
        type: String,
        required: true,
        default: 'bar'
    }
})

onMounted(() => {
    active.value = store.togglers.find(e => e.name === `${props.value}`).value === props.type
})

const active = ref(false)

watch(active, (val) => {
    if(val) {
        store.save(props.type, `${props.value}`)
    } else {
        store.save('bar', `${props.value}`)
    }
})
</script>

<template lang="pug">
.details_icon__wrapper(:class="{'details_icon__wrapper-active': active}")
    .details_icon(@click="active = !active")
        app-icon(name="bar_chart_4_bars" v-if="type === 'graph'")
        app-icon(size="18" name="multicategory" v-else-if="type === 'multicategory'")
</template>

<style scoped lang="scss">
.details_icon {
    // padding: 2px 4px;
    background-color: var(--grey-light);
    border-radius: 4px;
    z-index: 10;
    cursor: pointer;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    &:hover {
        background-color: var(--grey-medium);
    }
    &__wrapper {
        margin-left: 32px;
        order: 100;
        & + & {
            margin-left: 16px;
        }
        &-active {
            .details_icon {
                background-color: var(--blue-light);
                &:hover {
                    background-color: var(--blue-light-hover);
                }
            }
            :deep(.icon) {
                fill: white
            }
            :deep(path[fill="#6475A4"]) {
                fill: #C5ECF9
            }
            :deep(path[fill="#005"]) {
                fill: #fff
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