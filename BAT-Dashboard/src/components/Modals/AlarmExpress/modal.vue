<script setup>

import { ref } from 'vue'
import { useReportStore } from "@/store/store"

const store = useReportStore()

const acceptHadnler = () => {
    store.shown()
}

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
})

const emits = defineEmits(["hide"])

</script>

<template lang="pug">

h2 {{ title }}

.modal-text {{ msg }}
.modal-btns
    Btn(text="Okay" @click="$emit('hide'), acceptHadnler()")


</template>

<style lang="scss" scoped>
.modal-text {
    font-size: 18px;
}

h2 {
    margin-bottom: auto;
}

.modal-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--pdlg);

    .main-button {
        &:not(:first-child) {
            margin-left: 4px;
        }
    }
}

.modal-highlight {
    padding: var(--pdsm);
    border-radius: var(--radius-8);
    background-color: rgba(180, 242, 255, 0.508);
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

.icon {
    fill: rgb(132, 146, 176);
    fill: var(--blue-light);
    margin-right: 8px;
}

</style>