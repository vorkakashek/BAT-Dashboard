<script setup>
import { onMounted } from 'vue';
import TogglerViewProgressbar from './TogglerViewProgressbar.vue'

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: false,
    },
    label: {
        type: String,
        required: false,
        default: 'Total'
    },
    valueStore: {
        type: String,
        required: false
    }
})

const deleteSpaces = (item) => item.name.replace(/\s+/g, '');

</script>


<template lang="pug">
.progressbar-legend(:class="{'progressbar-legend--progress-bar': type === 'progress-bar' || type === 'progress-bar-multicategory'}")
    .progressbar-label(v-if="props.label") {{ props.label }}
    .progressbar-legend__item(
        v-for="item in data",
        :class="deleteSpaces(item)"
    )
        .progressbar-legend__item-desc
            .progressbar-legend__item-name {{ item.name }}
            .progressbar-legend__item-value {{ item.value }}
    TogglerViewProgressbar(type="multicategory" :value="valueStore" v-if="type === 'progress-bar-multicategory'")
    TogglerViewProgressbar(type="graph" :value="valueStore" v-if="type === 'progress-bar-multicategory' || type === 'progress-bar'")
</template>

<style lang="scss" scoped>
.progressbar-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    // margin-left: 12px;
    margin-top: 32px;
    width: 100%;
    
    @include respond-to(xlarge) {
        flex-wrap: wrap;
        // width: 30%;
        max-width: 100%;
        justify-content: flex-start;

        .progressbar-legend__item {
            margin-bottom: 4px;
        }
    }

    @include respond-to(medium) {
        width: 100%;
        margin-left: 0;
        margin-top: 24px;
        justify-content: center;
    }
}

.progressbar-label {
    font-weight: 700;
    color: var(--blue-dark);
    margin-right: auto;
    @include respond-to(handlers) {
        width: 100%;
        margin-right: 0;
        height: unset !important;
        flex-grow: 1;
    }
    @include respond-to(small) {
        width: 100%;
    }
}

.progressbar-legend__item-name {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1;
    letter-spacing: .05rem;
    color: #0E2B63;
}

.progressbar-legend__item-value {
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
}

.progressbar-legend__item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    order: 99;

    &:not(.Target, .Potential) {
        margin-right: 12px;

        &:before {
            content: "";
            display: block;
            vertical-align: middle;
            border-radius: var(--radius-8);
            width: 24px;
            height: 24px;
            background-color: #e5e5e5;
            margin-right: 8px;
            flex-shrink: 0;
        }
    }

    &.Delivered {
        order: 5;

        &:before {
            background-color: var(--green-light);
        }
    }

    &.DeliveredtoCity {
        order: 4;

        &:before {

            background-color: var(--yellow);
        }
    }

    &.DeliveredtoTMR {
        order: 2;

        &:before {
            background-color: var(--green-light);
        }
    }

    &.TransittoTMR {
        order: 3;

        &:before {
            background-color: #E2F0D9;
        }
    }
    &.Multicategory {
        order: 1;

        &:before {
            background: linear-gradient(180deg, #318CAF 0%, #1AABC3 100%), #318CAF;
        }
    }
    &.Other {
        order: 1;

        &:before {
            background: #DFF7FF;
        }
    }

    &.NotDelivered,
    &.Stock {
        order: 6;

        &:before {
            background-color: #e5e5e5;
        }
    }

    &.NoStock {
        &:before {
            background-color: #A7CBF0;
        }
    }

    &.Executed {
        order: 1;

        &:before {
            background-color: var(--green);
        }
    }

    &.NotExecuted {
        order: 3;
    }

    &.Target,
    &.Potential {
        background-color: var(--color-target);
        padding: 4px 8px;
        border-radius: var(--radius-8);

        .progressbar-legend__item-name {
            margin-bottom: var(--pd);
        }
    }

    &.Potential {
        order: 10;
    }

    &.Target {
        order: 99;
    }

    @include respond-to(handlers) {
        margin-bottom: var(--pdsm);
    }
}
</style>