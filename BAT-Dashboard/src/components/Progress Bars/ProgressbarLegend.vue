<script setup>

import { computed } from 'vue'

const props = defineProps({
    inData: {
        type: Array,
        required: true
    },
})

// if data has 'Potential', create new Array of data
const newData = computed(() => {
    return props.inData
})

// Summary func
// const handlerSumm = (arr) => {
//     let sum = 0
//     arr.forEach(el => {
//         sum += el.value
//     })
//     return sum
// }

// Create new Object for data
// const newObj = (name, value) => { return { name, value }}

const deleteSpaces = (item) => item.name.replace(/\s+/g, '');

</script>


<template lang="pug">
.progressbar-legend
    .progressbar-legend__item(
        v-for="item in inData",
        :class="deleteSpaces(item)"
    )
        .progressbar-legend__item-desc
            .progressbar-legend__item-name {{ item.name }}
            .progressbar-legend__item-value {{ item.value }}

</template>

<style lang="scss" scoped>
.progressbar-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    border-radius: var(--radius-8);
    border: 1px solid #EFEFEF;
    padding: var(--pdsm) var(--pdlg) 0 var(--pdlg);

    @include respond-to(medium) {
        margin-left: 0;
        margin-top: var(--pdsm);
        width: 100%;
    }

    @include respond-to(handlers) {
        flex-wrap: wrap;
    }
}

.progressbar-legend__item-name {
    font-size: 15px;
    line-height: 1;
    opacity: 0.75;
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
    margin-bottom: var(--pdsm);
    order: 99;

    &:not(.Target, .Potential) {
        margin-right: var(--pdlg);

        &:before {
            content: "";
            display: block;
            vertical-align: middle;
            border-radius: var(--radius-8);
            width: 32px;
            height: 32px;
            background-color: #e5e5e5;
            margin-right: 10px;
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

    &.NotDelivered,
    &.Stock {
        order: 6;

        &:before {
            background-color: #e5e5e5;
        }
    }

    // &.Stock {
    //     &:before {
    //         background-color: var(--blue-bright);
    //     }
    // }

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
        order: 10;
        margin-left: var(--pdxl);
        background-color: var(--color-target);
        padding: var(--pdsm) var(--pdlg);
        border-radius: var(--radius-8);

        .progressbar-legend__item-name {
            margin-bottom: var(--pd);
        }
    }

    @include respond-to(handlers) {
        margin-bottom: var(--pdsm);
    }
}
</style>