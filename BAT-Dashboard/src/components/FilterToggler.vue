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
    margin: var(--pdlg) 0;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    gap: 2px;
    padding: 2px;
    &:not(:first-child) {
        margin-left: 16px;
    }
    .panel & {
        background-color: #F6F7F6;
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
                color: #fff;
                font-weight: 700;
                &:hover {
                    background-color: var(--blue-light-hover);
                }
            }
        }
    }
}

.filter_toggler-option-label {
    padding: 6px 8px;
    border-radius: 8px;
    color: #979797;
    font-family: "Source Sans Pro";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    transition: .3s ease;

    &:hover {
        background-color: hsl(120, 6%, 92%);
    }
}
</style>