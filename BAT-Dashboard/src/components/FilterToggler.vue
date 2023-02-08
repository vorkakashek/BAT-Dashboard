<script setup>

import { computed, onMounted } from 'vue'

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: String,
        required: true
    },
})

const emit = defineEmits(['update:modelValue'])

const togglerValue = computed({
    get: () => props.modelValue,
    set: (v) => emit("update:modelValue", v),
});

// onMounted(() => {
//     togglerValue.value = 'ALL'
// })

</script>

<template lang="pug">
.filter_toggler
    label.filter_toggler-option(v-for="option in options")
        input(type="radio" :value="option" v-model="togglerValue")
        .filter_toggler-option-label {{ option }}
</template>

<style lang="scss" scoped>
.filter_toggler {
    display: inline-flex;
    width: fit-content;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: var(--pdlg);
    border-radius: 100px;
    background-color: #fff;
    border: 1px solid #E1E1E1;
    overflow: hidden;
    &:not(:first-child) {
        margin-left: 16px;
    }
}

.filter_toggler-option {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    input {
        display: none;

        &:checked {
            &~.filter_toggler-option-label {
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

        input:not(:checked)~.filter_toggler-option-label {
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

.filter_toggler-option-label {
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