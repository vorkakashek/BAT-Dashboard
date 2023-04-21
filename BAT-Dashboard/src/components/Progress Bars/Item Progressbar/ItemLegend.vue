<script setup>

import { computed } from 'vue'

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
})

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

function handlerClass(name) {
    return name.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('');
};

</script>

<template lang="pug">
.product-card-infographics
    .stat(v-for="item in dataSet" :class="[handlerClass(item.name), { 'empty': !(item.value > 0) }]")
        span.stat-name {{ item.name }}
        span.stat-value {{ item.value }}

</template>

<style lang="scss" scoped>
.product-card-infographics {
    background-color: var(--grey);
    padding: var(--pdsm);
    border-radius: var(--radius-4);
    min-width: fit-content;
    display: flex;
    flex-direction: column;
}

.stat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14.5px;
    letter-spacing: .025rem;

    &.empty {
        opacity: .4;
    }

    &.Executed {
        color: var(--green);
        order: 1;
    }

    &.NotExecuted {
        order: 2;
    }

    &.Delivered,
    &.DeliveredToTMR {
        color: var(--green-light-darker);
        order: 6;
    }

    &.TransitToTMR {
        color: #333;
        order: 7;

        .stat-value {
            font-weight: 400;
            background-color: #E2F0D9;
            padding: 0 4px;
            border-radius: var(--radius-4);
        }
    }

    &.DeliveredToCity {
        color: var(--orange);
        order: 8;
    }

    &.Stock {
        color: var(--blue-bright);
        order: 10;
    }

    &.NoStock {
        color: #7697BC;
        order: 11;
    }

    &.NotDelivered {
        opacity: .5;
        order: 9;
    }

    &.Target,
    &.Potential {
        margin-top: var(--pdsm);
        background-color: var(--color-target);
        padding: var(--pd) var(--pdsm);
        border-radius: var(--radius-4);
        color: #333;
        order: 10;
    }

    &.Target {
        order: 99;
    }

}

.stat-value {
    margin-left: var(--pdxxl);
    font-weight: 900;
}
</style>