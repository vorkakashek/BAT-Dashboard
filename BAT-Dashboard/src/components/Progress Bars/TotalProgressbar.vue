<script setup>

import { computed } from 'vue'
import ItemProgressbar from '@/components/Progress Bars/ItemProgressbar.vue'

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
    label: {
        type: String,
        required: false,
        default: 'Total',
    },
    total: {
        type: Boolean,
        required: false,
        default: false,
    },
    viewType: {
        type: String,
        required: false,
        default: 'bar',
    },
    ignore: {
        type: Array,
    },
    hasTotal: {
        type: Boolean,
        required: false,
        default: false,
    }
});


function hideEmpty(data) {
    return props.data?.some(({ value }) => value > 0);
}
const total = computed(() => {
    if(props.hasTotal) {
        return props.data.reduce((a, b) => a + Number(b.value), 0);
    }
})
</script>

<template lang="pug">
.panel(v-if="hideEmpty(props.data)")
    .progressbar-container
        //- slot for progress bar
        slot(name="progressbar")
            ItemProgressbar(:hasTotal="hasTotal" :data="[...props.data, hasTotal ? {name: 'Total', value: total} : '']" :label="props.label" :ignore="props.ignore" :total="props.total" v-if="viewType ==='bar'")
        //- slot for legend (using in total progressbars)
        slot(name="legend")
        //- slot using in product cards
        slot(name="data")
</template>

<style lang="scss" scoped>
@keyframes animateProgressBar {
    from {
        max-width: 0%;
    }

    to {
        max-width: 100%;
    }
}

@keyframes animateValue {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.progressbar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;

    @include respond-to(medium) {
        flex-wrap: wrap;

        >* {
            width: 100%;
        }
    }
}

.progressbar-label {
    font-weight: 700;
    color: var(--blue-dark);
    margin-right: var(--pdlg);
    flex-shrink: 0;
    flex-basis: 7rem;
    justify-self: flex-start;
    align-self: flex-start;

    @include respond-to(handlers) {
        width: 100%;
        margin-right: 0;
    }
}

.progressbar-label {
    font-weight: 700;
    color: var(--blue-dark);
    margin-right: var(--pdlg);
    flex-shrink: 0;
    flex-basis: 7rem;

    @include respond-to(handlers) {
        width: 100%;
        margin-right: 0;
        height: unset !important;
        margin-bottom: 24px;
        flex-grow: 1;
    }
}

.progressbar-value {
    position: absolute;
    left: 100%;
    font-weight: 900;
    // transform: translate(-50%);
    font-size: 13.5px;
    color: #333;
    opacity: 0;
    transition: font-size 0.05s ease;
    animation: animateValue 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.1s;
    animation-fill-mode: forwards;

    &.top {
        bottom: calc(100% - 2px);
    }

    &.bottom {
        bottom: calc(-100% + 2px);
    }
}

.progressbar-outer {
    position: relative;
    background-color: #e5e5e5;
    border-radius: 4px;
    width: 100%;
    height: 22px;

    @include respond-to(medium) {
        max-width: 100%;
    }

    @include respond-to(handlers) {
        margin: var(--pdxl) 0;
    }
}

.progressbar-inner {
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 1;
    border-radius: var(--radius-4);
    transition: all 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    width: 0;
    max-width: 0;
    animation: animateProgressBar 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    animation-fill-mode: forwards;

    &.Executed {
        background-color: var(--green);
        z-index: 10;

        .progressbar-value {
            color: var(--green);
        }
    }

    &.DeliveredToTMR,
    &.Delivered {
        background-color: var(--green-light);
        z-index: 9;

        .progressbar-value {
            color: var(--green-light-darker);
        }
    }

    &.TransitToTMR {
        background-color: #E2F0D9;
        z-index: 8;

        .progressbar-value {
            color: #333;
            bottom: calc(-100% - 12px);
            font-weight: 400;
            background-color: #E2F0D9;
            padding: 0 4px;
            border-radius: var(--radius-4);
        }
    }

    &.DeliveredToCity {
        background-color: var(--yellow);
        z-index: 7;

        .progressbar-value {
            color: var(--orange);
            bottom: calc(100% + 8px);
        }
    }
}

.progressbar-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    margin: var(--pdlg) 0 var(--pdxxl) 0;

    @include respond-to(handlers) {
        flex-wrap: wrap;
    }
}
</style>