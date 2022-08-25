<script setup>

import { ref } from 'vue'

const emits = defineEmits(["hide", "onYes"])

</script>

<template lang="pug">



h2 Export Request
.modal-highlight 
    app-icon(name="time")
    span This process may take some time
.modal-text Do you want to save the report in Excel?
.modal-btns
    Btn(text="No" color="#4a4a4a" @click="$emit('hide')")
    Btn(text="Yes" @click="$emit('hide')")


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