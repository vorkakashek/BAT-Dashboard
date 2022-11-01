<script setup>

import { computed, ref } from 'vue'

import { useSalesChannelFilter } from "@/store/store";
const store = useSalesChannelFilter();

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
})

let current_value = ref(store.SalesChannelFilter_Value)

</script>

<template lang="pug">
.filter-item
    label.filter-item-option(v-for="option, index in options")
        input(type="checkbox" :value="option" v-model="current_value" @change="store.change(current_value)")
        .filter-item-option-label {{ option }}
</template>

<style lang="scss" scoped>
.filter-item {
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: var(--pdlg);
    border-radius: 100px;
    background-color: #fff;
    border: 1px solid #E1E1E1;
    overflow: hidden;
}

.filter-item-option {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    input {
        display: none;

        &:checked {
            &~.filter-item-option-label {
                background-color: var(--blue-light);
                opacity: 1;
                color: #fff;

                &:hover {
                    background-color: var(--blue-light-hover);
                }
            }
        }
    }

    &:not(&:last-child) {
        margin-right: 1px;

        input:not(:checked)~.filter-item-option-label {
            display: flex;
            align-items: center;
            position: relative;

            &:after {
                content: '';
                display: block;
                position: absolute;
                z-index: 1;
                right: 0;
                height: calc(100% - 16px);
                width: 1px;
                background-color: #E1E1E1;
            }
        }
    }
}

.filter-item-option-label {
    padding: var(--pdsm) 12px;
    border-radius: var(--radius-4);
    font-weight: 700;
    font-size: 13px;
    opacity: .6;
    transition: all .3s ease;

    &:hover {
        background-color: #cccccc;
    }
}
</style>