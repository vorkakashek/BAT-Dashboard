<script setup>

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
});

function handlerClass(name) {
    return name.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('');
};

</script>

<template lang="pug">
.product-card-infographics
    .stat(v-for="item in data" :class="item.class ? item.class : handlerClass(item.name)")
        span.stat-name {{ $t(`${item.name}`) }}
        span.stat-value {{ item.value }}

</template>

<style lang="scss" scoped>
.product-card-infographics {
    background-color: var(--grey);
    padding: var(--pdsm);
    border-radius: var(--radius-4);
    min-width: fit-content;
}

.stat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14.5px;
    letter-spacing: .025rem;

    &.Executed {
        color: var(--green);
        order: 1;
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

    // &.Stock {
    //     color: var(--blue-bright);
    // }

    &.NotDelivered {
        opacity: .5;
        order: 9;
    }

    &.Target,
    &.Potential,
    &.Total {
        margin-top: var(--pdsm);
        background-color: var(--color-target);
        padding: var(--pd) var(--pdsm);
        border-radius: var(--radius-4);
        color: #333;
        order: 10;
    }

    &.More90d {
        color: var(--orange-light);
        z-index: 3;
    }
    &.Current, &.Three12Month {
        color: var(--yellow);
        z-index: 2;
    }
    &.GreenTarget, &.New {
        color: var(--green-light);
    }
    &.More1y, &.Overdue {
        color: var(--orange-pale);
        z-index: 3;
    }
    &.Hidden {
        display: none;
    }
    &.More180d {
        color: #434343;
    }
    &.d90d180 {
        color: var(--orange-light);
    }
    &.d30d90 {
        color: var(--yellow);
    }
    &.Less30d {
        color: var(--green-light);
    }
    &.new {
        color: var(--blue-sky);
    }
}

.stat-value {
    margin-left: var(--pdxxl);
    font-weight: 900;
}
</style>