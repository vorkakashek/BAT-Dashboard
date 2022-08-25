<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    centered: {
        type: Boolean,
        required: false,
        default: false,
    },
    color: {
        type: String,
        required: false,
        default: 'var(--blue-light)'
    }
});
</script>

<template lang="pug">

button.main-button(:class="{ centered: centered }" :style="{ backgroundColor: color }") {{ text }}

</template>

<style lang="scss" scoped>

.main-button {
    // background-color: var(--blue-light);
    display: block;
    box-shadow: none;
    outline: none;
    border: none;
    padding: 12px var(--pdxl);
    border-radius: 100px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;

    &.centered {
        margin: 0 auto;
    }

    &:hover {
        background-color: var(--blue-light-hover);
    }
    &:active {
        background-color: var(--blue-medium);
    }
}

</style>