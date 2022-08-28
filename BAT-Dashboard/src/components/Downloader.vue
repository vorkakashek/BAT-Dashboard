<script setup>

import { ref } from 'vue'
import { useReportStore } from "@/store/store"
const store = useReportStore()

const clicked = ref(false)
const modal = ref()

const downloadHandler = () => {
    clicked.value = true
    setTimeout(() => {
        clicked.value = false
    }, 500)

    modal.value.show()

    store.clear()
}

</script>

<template lang="pug">

ModalConstructor(modalName="ReportDownload", ref="modal", :dialog="true")

.downloader(@click="downloadHandler()" :class="{ clicked, disabled: store.amount_ready < 1 }")
    .downloader-icon
        app-icon(name="download")
    .downloader-amount(:class="{ timer: store.amount_new < 1 }" v-if="store.amount_new > 0 || store.amount_requested > 0")
        app-icon(name="time" size="15" v-if="store.amount_requested > 0 && store.amount_new < 1")
        .amount(v-if="store.amount_new > 0") {{ store.amount_new }}

</template>

<style lang="scss" scoped>
.downloader {
    background-color: var(--blue-light);
    border-radius: var(--radius-8);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--pdsm);
    margin-right: var(--pdsm);
    cursor: pointer;
    transition: all .3s ease;

    &.disabled {
        background-color: rgb(166, 166, 166);
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        &:not(.disabled) {
            background-color: var(--blue-light-hover);
        }
    }

    &.clicked {
        .downloader-icon {
            .icon {
                animation: swipe .5s ease both;
            }
        }
    }

}

.downloader-icon {
    width: 100px;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        fill: #fff;
        position: absolute;
    }
}


.downloader-amount {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 100%;
    transform: translateX(25%) translateY(-25%);
    background-color: rgb(246, 73, 73);
    display: flex;
    align-items: center;
    justify-content: center;

    &.timer {
        background-color: rgb(166, 166, 166);
        width: min-content;
        height: min-content;
        width: 19px;
        height: 19px;

        .icon {
            fill: #fff;
        }
    }

    .amount {
        color: #fff;
        font-weight: 400;
        font-size: 12px;
    }
}

@keyframes swipe {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(40px);
    }

    51% {
        transform: translateY(-40px);
    }

    to {
        transform: translateY(0%);
    }
}
</style>

