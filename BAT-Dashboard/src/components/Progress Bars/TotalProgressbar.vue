<script setup>

import { computed } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
    label: {
        type: String,
        required: false,
        default: 'Total',
    }
});

const bars = computed(() => {
    return props.data.filter((item) => item.name !== 'Target' && item.name !== 'Not Delivered');
});

const target = computed(() => {
    return props.data.find((item) => item.name === 'Target').value;
});

function progressbarPercent(bar) {
    return parseFloat((bar.value / (target.value / 100)).toFixed(1))
};

function progressbarClass(bar) {
    return bar.name.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('');
};

function handlerPosY(bar) {
    if (bar.name === 'Delivered to TMR' || bar.name === 'Transit to TMR' || bar.name === 'Delivered') {
        return 'bottom';
    }
    return 'top';
}

function translateXFix(bar) {
    if (+progressbarPercent(bar) > 97 ) {
        return 'transform: translateX(-100%)'
    }
    return 'transform: translateX(-50%)'
}

</script>

<template lang="pug">

.progressbar-container
    .progressbar-wrapper
        .progressbar-label {{ props.label }}
        .progressbar-outer
            .progressbar-inner(v-for="(bar, index) in bars" :style="[`width: ${progressbarPercent(bar)}%`]" :class="progressbarClass(bar)")
                .progressbar-value(:class="handlerPosY(bar)" :style="[translateXFix(bar)]" v-if="bar.value > 0") {{progressbarPercent(bar)}}%

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

    @include respond-to(handlers) {
        width: 100%;
        margin-right: 0;
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
            bottom: calc(-100% - 8px);
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