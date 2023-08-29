<script setup>

import { computed } from 'vue'

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
}) 

const deleteSpaces = (item) => item.name.replace(/\s+/g, '');

let dataSet = computed(() => {
    let x = []

    props.data.forEach((arr) => {
        arr.forEach((el) => {
            if (x.find(e => e.name === el.name) === undefined) {
                x.push(el)
            }
        })
    })
    return x
})

</script>


<template lang="pug">
.progressbar-legend
    .progressbar-legend__item(
        v-for="item in dataSet",
        :class="[deleteSpaces(item), {'empty': !(item.value > 0)}]"
    )
        .progressbar-legend__item-desc
            .progressbar-legend__item-name {{ $t(`${item.name}`) }}
            .progressbar-legend__item-value {{ item.value }}

</template>

<style lang="scss" scoped>
.progressbar-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    margin-left: 12px;
    // border-radius: var(--radius-8);
    // border: 1px solid #EFEFEF;
    // padding: var(--pdsm) var(--pdlg) 0 var(--pdlg);

    @include respond-to(xlarge) {
        // opacity: .25;
        flex-wrap: wrap;
        width: 30%;
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

    // @include respond-to(handlers) {
    //     flex-wrap: wrap;
    // }
}

.progressbar-legend__item-name {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1;
    letter-spacing: .05rem;
    // opacity: 0.75;
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

    &.empty {
        opacity: .25;
    }

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

    &.NotDelivered,
    &.Stock {
        order: 6;
    }

    &.Stock {
        &:before {
            background-color: var(--blue-bright);
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
        order: 100;
    }
    

    @include respond-to(handlers) {
        margin-bottom: var(--pdsm);
    }
}
</style>