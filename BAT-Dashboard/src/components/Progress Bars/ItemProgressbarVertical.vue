<script setup>

import { computed, ref, onMounted, onBeforeUpdate } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
});

const bars = computed(() => {
    return props.data.filter((item) => item.name !== 'Target' && item.name !== 'Not Delivered');
});

const target = computed(() => {
    return props.data.find((item) => item.name === 'Target').value;
});

function progressbarPercent(bar) {
    return parseFloat((bar.value / (target.value / 100)).toFixed(1)) + '%'
};

function progressbarClass(bar) {
    return bar.name.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('');
};

function handlerPosition(bar) {
    if (bar.name === 'Delivered to TMR' || bar.name === 'Transit to TMR' || bar.name === 'Delivered') {
        return 'right';
    }
    return 'left';
}


function translateYFix(bar) {
    if (parseFloat((bar.value / (target.value / 100)).toFixed(1)) < 3) {
        return 'transform: translateY(0)';
    }
    if (parseFloat((bar.value / (target.value / 100)).toFixed(1)) > 97) {
        return 'transform: translateY(-100%)';
    }
    return 'transform: translateY(-50%)';
}

</script>

<template lang="pug">


.progressbar-container
    .progressbar-wrapper
        .progressbar-outer
            .progressbar-inner(v-for="(bar, index) in bars" :style="['height: ' + progressbarPercent(bar)]" :class="progressbarClass(bar)")
                .progressbar-value(:class="handlerPosition(bar)" :style="[translateYFix(bar)]" v-if="bar.value > 0") {{ progressbarPercent(bar) }}
    //- slot using in product cards
    slot(name="data")
</template>

<style lang="scss" scoped>
@keyframes animateProgressBar {
    from {
        max-height: 0%;
    }

    to {
        max-height: 100%;
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
    align-items: center;
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
    font-weight: 900;
    font-size: 13.5px;
    color: #333;
    opacity: 0;
    transition: font-size 0.05s ease;
    animation: animateValue 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.1s;
    animation-fill-mode: forwards;

    &.left {
        right: calc(100% + 2px);
    }

    &.right {
        left: calc(100% + 2px);
    }
}

.progressbar-outer {
    position: relative;
    background-color: #e5e5e5;
    border-radius: 4px;
    height: 200px;
    width: 32px;
    @include respond-to(handlers) {
        margin: var(--pdxl) 0;
    }
}

.progressbar-inner {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    border-radius: var(--radius-4);
    transition: all 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    height: 0;
    max-height: 0;
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
        z-index: 4;

        .progressbar-value {
            color: var(--green-light-darker);
        }
    }

    &.TransitToTMR {
        background-color: #E2F0D9;
        z-index: 5;

        .progressbar-value {
            color: #333;
            bottom: calc(-100% - 8px);
        }
    }

    &.DeliveredToCity {
        background-color: var(--yellow);
        z-index: 3;

        .progressbar-value {
            color: var(--orange);
            margin-right: 38px;
        }
    }
}

.progressbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: var(--pdlg) 0 var(--pdxxl) 0;

    @include respond-to(handlers) {
        flex-wrap: wrap;
    }
}
</style>