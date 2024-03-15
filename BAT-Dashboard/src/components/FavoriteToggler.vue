<script setup>

import { computed } from "vue";

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: Array,
        required: true,
    },
});

const options = computed(() => {
    return props.options.filter(({ favorite }) => favorite)
});

const togglerValue = computed({
    get: () => {
        // if (props.modelValue.filter((e) => e !== 0).length > 1) {
        //     return props.modelValue.filter((e) => e !== 0);
        // }
        // return props.modelValue.filter((e) => e !== 0)[0]
        if (props.modelValue.length > 1) {
            return props.modelValue
        }
        return props.modelValue[0]
    },
    set: (v) => emit("update:modelValue", [v]),
});


const emit = defineEmits(['update:modelValue']);

</script>

<template lang="pug">

.FavoriteToggler
    label.toggle-option(v-for="option in options")
        input(type="radio" :value="option.value" v-model="togglerValue")
        .toggle-option-label {{ option.label }}

</template>

<style lang="scss" scoped>
.FavoriteToggler {
    display: inline-flex;
    width: fit-content;
    flex-wrap: wrap;
    align-items: center;
    margin: var(--pdlg) 0;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    gap: 2px;
    padding: 2px;
}

.toggle-option {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    input {
        display: none;

        &:checked {
            &~.toggle-option-label {
                background-color: var(--blue-light);
                opacity: 1;
                color: #fff;
                font-weight: 700;
                &:hover {
                    background-color: var(--blue-light-hover);
                }
            }
        }
    }
}

.toggle-option-label {
    padding: 6px 8px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 13px;
    transition: all .3s ease;
    color: #979797;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;

    &:hover {
        background-color: #cccccc;
    }
}
</style>