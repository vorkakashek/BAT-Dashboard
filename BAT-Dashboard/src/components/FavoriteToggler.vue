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
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
    align-items: center;
    margin: var(--pdlg) 0;
    border-radius: 100px;
    background-color: #fff;
    border: 1px solid #E1E1E1;
    overflow: hidden;
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

                &:hover {
                    background-color: var(--blue-light-hover);
                }
            }
        }
    }

    &:not(&:last-child) {
        margin-right: 1px;

        input:not(:checked)~.toggle-option-label {
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

.toggle-option-label {
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