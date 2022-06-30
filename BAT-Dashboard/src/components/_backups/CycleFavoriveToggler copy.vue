<script setup>

import { computed, ref, watch } from "vue";

const props = defineProps({
    cycleOptions: {
        type: Array,
        required: true,
    },
});

const togglerValue = ref([]);

const options = computed(() => {
    return props.cycleOptions.filter(({ favorite }) => favorite)
});

const emit = defineEmits(['change']);
watch(() => togglerValue.value, () => {
    emit("change", [togglerValue.value]);
});

</script>

<template lang="pug">

.CycleFavoriveToggler
    label.toggle-option(v-for="option in options")
        input(type="radio" :value="option.value" v-model="togglerValue")
        .toggle-option-label {{ option.label }}

</template>

<style lang="scss" scoped>
.CycleFavoriveToggler {
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