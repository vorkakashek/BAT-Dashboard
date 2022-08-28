<script setup>

import { ref } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
})

const clicked = ref(false)

const clickHandler = () => {
    event.preventDefault()
    clicked.value = true
    setTimeout(() => {
        clicked.value = false
    }, 500)
}

</script>

<template lang="pug">
.report
    span.report-date {{ data.date }}
    span.report-time {{ data.time }}
    a.report-name(:href="data.link" @click="clickHandler()" :class="{ clicked }") {{ data.name }}
        .downloader-icon
            app-icon(name="download" size="15")
</template>

<style lang="scss" scoped>
.report {
    padding: var(--pd);
    border-radius: var(--radius-4);
    border: 1px solid var(--grey-medium);
    position: relative;

    &:not(:first-child) {
        margin-top: var(--pdsm);
    }
}

.report-date {
    margin-right: var(--pd);
}

.report-time {
    margin-right: var(--pdlg);
}

.report-date,
.report-time {
    padding: calc(var(--pdsm) * 1.25);
    font-size: 15px;
    background-color: var(--grey-medium);
    border-radius: var(--radius-4);
}

.report-name {
    font-weight: 700;
    color: #fff;
    padding: var(--pdsm) var(--pdlg);
    background-color: var(--green);
    border-radius: var(--radius-4);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-left: var(--pdsm);

    &.clicked {
        .downloader-icon {
            .icon {
                animation: swipe .5s ease both;
            }
        }
    }

    &:hover {
        background-color: #369a2d;
    }

    .icon {
        margin-left: var(--pdlg);
        fill: #fff;
    }

    .downloader-icon {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
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