<script setup>

import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
    ignore: {
        type: Array,
        required: false,
        default: ['Target', 'Not Delivered', 'Potential', 'Stock', 'Total'],
    },
    rtl: {
        type: Boolean,
        required: false,
        default: false,
    },
    label: {
        type: String,
        required: false,
    },
    isMillion: {
        type: Boolean,
        required: false,
    }
});

const bars = computed(() => {
    return props.data.filter((el) => !props.ignore.includes(el.name))
});
const isTotal = computed(() => {
    return props.data.some((el) => el.name === 'Total');
});

const target = computed(() => {
    if (props.data.find(({ name }) => name === 'Target') !== undefined) {
        return props.data.find(({ name }) => name === 'Target').value;
    }
    else if (props.data.find(({ name }) => name === 'Potential') !== undefined) {
        return props.data.find(({ name }) => name === 'Potential').value;
    }
    else if (isTotal.value) {
        return props.data.find(({ name }) => name === 'Total').value;
    }
});

function progressbarPercent(bar) {
    return parseFloat((bar.value / (target.value / 100)).toFixed(1))
};

function progressbarClass(bar) {
    if(bar === '') return ''
    return bar.name.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('')
};

let beforeElement = [0, '']
function handlerPosition(bar) {
    if(isTotal.value) {
        const percent = progressbarPercent(bar)
        if(percent > 11) {
            beforeElement = [percent, 'top']
            return 'top'
        }
        else if(percent < 11 && beforeElement[0] < 11 && beforeElement[1] === 'top') {
            beforeElement = [percent, 'bottom']
            return 'bottom'
        }
        else if(percent < 11 && beforeElement[0] < 11 && beforeElement[1] === 'bottom') {
            beforeElement = [percent, 'top']
            return 'top'
        }
        beforeElement = [percent, 'top']
        return 'top'
    }
    if (bar.name === 'Delivered to TMR' || bar.name === 'Transit to TMR' || bar.name === 'Delivered') {
        return 'bottom';
    }
    return 'top';
}

function translateXFix(bar, index) {
    if(isTotal.value) return 'transform: translateX(-50%)'
    if (parseFloat((bar.value / (target.value / 100)).toFixed(1)) < 4) {
        return 'transform: translateX(0%)'
    }
    if (parseFloat((bar.value / (target.value / 100)).toFixed(1)) > 97) {
        if (!props.rtl) {
            return 'transform: translateX(-100%)'
        } else {
            return 'transform: translateX(100%)'
        }
    }
    if (!props.rtl) {
        return 'transform: translateX(-50%)'
    } else {
        return 'transform: translateX(50%)'
    }
}

function progressbarMillion(bar) {
    if(bar === '') return null
    return `${(bar.value / 1000000).toFixed(1)} млн`.replace('.', ',')
}

</script>

<template lang="pug">
.progressbar-container(:class="{ 'rtl': rtl }")
    .progressbar-wrapper
        //- .progressbar-label(v-if="(props.label || props.total) && props.label !== 'hidden'") {{ props.label }}
        .progressbar-outer(:class='{ "total": isTotal }')
            template(v-for="(bar, index) in bars")
                .progressbar-inner(:style="['width: ' + progressbarPercent(bar) + '%']" :class="bar.class ? bar.class : progressbarClass(bar)" v-if="bar['name'] !== 'Total'")
                    .progressbar-value(:class="handlerPosition(bar)"  :style="translateXFix(bar, index)" v-if="bar.value > 0") 
                        | {{ progressbarPercent(bar) + '%' }}  
                        span(style="margin-left: 5px; font-weight: 600; white-space: nowrap" v-if="progressbarMillion(bar) !== null && isMillion") ({{ progressbarMillion(bar) }})
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
    align-items: center;
    width: 100%;
    // margin-bottom: 16px;
    // margin: 24px 0 0 0;
    // margin-bottom: 24px;

    &:not(:first-child) {
        // margin-top: 24px;
    }

    @include respond-to(medium) {
        flex-wrap: wrap;

        >* {
            width: 100%;
        }
    }

    ~.rtl {
        margin-top: -20px;
        margin-bottom: 24px;

        .progressbar-label {
            @include respond-to(handlers) {
                margin-bottom: 0;
            }
        }
    }

    &.rtl {
        .progressbar-inner {
            left: unset;
            right: 0;
        }

        .progressbar-value {
            left: unset;
            right: 100%;
            bottom: unset;
            top: calc(100% - 2px);
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
        height: unset !important;
        margin-bottom: 24px;
        flex-grow: 1;
    }
}

.progressbar-value {
    position: absolute;
    left: 100%;
    white-space: nowrap;
    font-weight: 900;
    // transform: translateX(-50%);
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

    &.total {
        display: flex;
        .progressbar-inner {
            position: relative;
        }
        .progressbar-value {
            left: 50%;
        }
    }

    @include respond-to(medium) {
        max-width: 100%;
    }

    @include respond-to(handlers) {
        // margin: var(--pdxl) 0;
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

    &.Stock {
        background-color: var(--blue-bright);

        .progressbar-value {
            color: var(--blue-bright);
        }
    }

    // &.NoStock {
    //     background-color: #A7CBF0;

    //     .progressbar-value {
    //         color: #7697BC;
    //     }
    // }

    &.TransitToTMR {
        background-color: #E2F0D9;
        z-index: 8;

        .progressbar-value {
            color: #333;
            // bottom: calc(-100% - 8px);
            bottom: calc(-100% - 14px);
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

    &.More90d {
        background-color: var(--orange-light);
        .progressbar-value {
            color: var(--orange-light);
        }
        z-index: 3;
    }
    &.Current, &.Three12Month {
        background-color: var(--yellow);
        .progressbar-value {
            color: var(--yellow);
        }
        z-index: 2;
    }
    &.GreenTarget, &.New {
        background-color: var(--green-light);
        .progressbar-value {
            color: var(--green-light);
        }
    }
    &.More1y, &.Overdue {
        background-color: var(--orange-pale);
        .progressbar-value {
            color: var(--orange-pale);
        }
        z-index: 3;
    }
    &.Hidden {
        display: none;
    }
    &.More180d {
        background-color: #434343;
        .progressbar-value {
            color: #434343;
        }
    }
    &.d90d180 {
        background-color: var(--orange-light);
        .progressbar-value {
            color: var(--orange-light);
        }
    }
    &.d30d90 {
        background-color: var(--yellow);
        .progressbar-value {
            color: var(--yellow);
        }
    }
    &.Less30d {
        background-color: var(--green-light);
        .progressbar-value {
            color: var(--green-light);
        }
    }
    &.new {
        background-color: var(--blue-sky);
        .progressbar-value {
            color: var(--blue-sky);
        }
    }
}

.progressbar-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    // margin: var(--pdlg) 0 var(--pdxxl) 0;

    @include respond-to(handlers) {
        flex-wrap: wrap;
    }
}
</style>