<script setup>

import { ref } from 'vue'
import { notify } from "@kyvg/vue3-notification"
import { useReportStore } from "@/store/store"

const svg = ref(`<svg class="icon-download" style="margin-left: 10px; vertical-align: middle;" fill="#fff" width="20" height="20" id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 480c0 17.673-14.327 32-32 32h-448c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zm-278.627-101.372c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0l-58.75 58.75v-246.746c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"/></svg>`)

const store = useReportStore()

const acceptHadnler = () => {
    notify({
        title: "Warning!",
        text: "The report is being prepared. Download the report by clicking on the icon" + `${svg.value}`,
        duration: 10000,
        type: "info",
    })

    store.increment()
}

const emits = defineEmits(["hide"])

</script>

<template lang="pug">

h2 Export Request
.modal-highlight 
    app-icon(name="time")
    span This process may take some time
.modal-text Do you want to save the report in Excel?
.modal-btns
    Btn(text="No" color="#4a4a4a" @click="$emit('hide')")
    Btn(text="Yes" @click="$emit('hide'), acceptHadnler()")


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