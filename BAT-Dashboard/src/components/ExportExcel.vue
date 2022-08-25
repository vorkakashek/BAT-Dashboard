<script setup>

import { ref } from 'vue'

const props = defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    link: {
        type: String,
        required: false,
        default: '#',
    }
})

const modal = ref()

</script>

<template lang="pug">

ModalConstructor(modalName="ExportExcel", ref="modal", :dialog="true")

.export-excel(:href="props.link" :class="{ disabled }" @click="modal.show")
    app-icon(name="excel", size="40")


</template>

<style lang="scss" scoped>
.export-excel {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.75;
    }

    &.disabled {
        filter: grayscale(1);
        opacity: .5;
        pointer-events: none;
        user-select: none;
    }

    @include respond-to(large) {
        height: 36px;
        width: 36px;
        margin-left: auto;
        margin-right: 8px;

        .icon {
            height: 36px;
            width: 36px;
        }
    }
}
</style>