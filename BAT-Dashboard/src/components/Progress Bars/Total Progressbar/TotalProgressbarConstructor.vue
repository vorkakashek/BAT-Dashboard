<script setup>
import { computed, ref } from 'vue'

import Progressbar from '@/components/Progress Bars/Total Progressbar/Progressbar.vue'
import TotalProgressbarLabel from '@/components/Progress Bars/Total Progressbar/TotalProgressbarLabel.vue'
import ProgressbarLegend from '@/components/Progress Bars/Total Progressbar/ProgressbarLegend.vue'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    ignore: {
        type: Array,
        required: false,
        default: []
    }
})

function hideEmpty(data) {
    return data.some(({ value }) => value > 0);
}

</script>

<template lang="pug">
.total_progressbar
    slot(name="label")
        TotalProgressbarLabel(:label="data.label")
    //- slot for progress bar
    .total_progressbar_container
        slot(name="progressbar")
            Progressbar(v-for="data in data.data" :data="data" :ignore="ignore")

    //- slot for legend (using in total progressbars)
    slot(name="legend")
        ProgressbarLegend(:data="data.data")
        //- slot using in product cards
    slot(name="data")
</template>

<style lang="scss" scoped>
.total_progressbar {
    display: flex;
    align-items: center;

    &:first-child {
        margin-bottom: 4px;
    }

    &:not(:last-child) {
        margin-bottom: 24px;
    }

    @include respond-to (medium) {
        flex-direction: column;

        :deep(.total_progressbar_label) {
            margin-right: 0;
            margin-bottom: 24px;
            text-align: left;
            align-self: flex-start;
            max-width: unset;
        }
    }
}

.total_progressbar_container {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;

    @include respond-to (large) {
        max-width: 100%;
    }
}

:deep(.progressbar-container) {
    margin-bottom: 0px;
    &.rtl {
        margin-top: 6px;
    }
}
</style>