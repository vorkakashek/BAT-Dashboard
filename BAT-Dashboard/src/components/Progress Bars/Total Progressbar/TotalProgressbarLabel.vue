<script setup>

let props = defineProps({
    label: {
        type: String,
        required: true,
    }
})

</script>

<template lang="pug">

.total_progressbar_label {{ label }}

</template>

<style lang="scss">
.total_progressbar_label {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: .02rem;
    color: var(--blue-dark);
    margin-right: 24px;
    max-width: 92px;
    flex-shrink: 0;
}
</style>