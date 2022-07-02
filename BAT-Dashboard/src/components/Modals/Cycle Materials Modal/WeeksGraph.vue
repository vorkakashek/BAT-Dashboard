<script setup>

import { computed } from 'vue';

import VerticalGraph from '@/components/Modals/Cycle Materials Modal/VerticalGraph.vue';

const props = defineProps({
    data: Object,
});

const legend = ['Not delivered to CS, %', 'Delivered to CS, %', 'Transit to city, %', 'Delivered to city, %', 'Transit to TMR, %', 'Delivered to TMR, %', 'Executed, %']

function legendName(item) {
    return item.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('').slice(0, -2)
}

const targetPos = computed(() => {
    if (props.data.info.targetPercent !== undefined) {
        return props.data.info.targetPercent
    }
    return null
})

</script>

<template lang="pug">

.graph-constructor
    .graph-constructor-target-outer(v-if="targetPos !== null")
        .graph-constructor-target(:style="['bottom:' + targetPos + '%']")
            .graph-constructor-target-value {{ targetPos }}%
            .graph-constructor-target-name Target

    .graph-constructor-percents
        .percent(v-for="n in 11" :style="{ top: 100 - (n * 10 - 10) + '%', transform: 'translateY(-50%)' }") {{ n * 10 - 10 }}%

    .graph-constructor-content
        VerticalGraph(v-for="(graph, key) in data.weeks" :data="graph" :animationdelay="key")
        .backlines
            .line(v-for="n in 11" :style="{ top: 100 - (n * 10 - 10) + '%', transform: 'translateY(-50%)' }")


.graph-legend
    template(v-for="item in legend")
        .graph-legend-item(:class="legendName(item)") {{ item }} 

</template>

<style lang="scss" scoped>
.graph-constructor-target-outer {
    position: absolute;
    left: 0;
    top: calc(0 + var(--pdxxl));
    height: 420px;
    width: 100%;
    user-select: none;
}
.graph-constructor-target {
    position: absolute;
    bottom: 0%;
    z-index: 100;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #333;
    user-select: none;
    transition: all .2s ease;

    &:hover {

        .graph-constructor-target-value {
            box-shadow: 0px 2px 4px rgba(207, 207, 207, 0.55);
        }
    }
}

.graph-constructor-target-name,
.graph-constructor-target-value {
    position: absolute;
    top: 50%;
    border-radius: var(--radius-8);
    padding: var(--pd) var(--pdsm);
    font-size: 13px;
}

.graph-constructor-target-name {
    right: 0;
    transform: translateY(-50%);
    background-color: #333;
    color: #fff;
    letter-spacing: .05rem;

    &:before {
        content: "";
        position: absolute;
        left: -4px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 0px;
        height: 0px;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 4px solid #333;
    }
}

.graph-constructor-target-value {
    left: 0;
    transform: translateY(-50%);
    background-color: #fff;
    color: #333;
    font-weight: 900;
    border: 1px solid transparent;
}

.graph-constructor-content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}

.vertical-graphs {
    position: relative;
    z-index: 2;
}

.backlines {
    height: 420px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;

    .line {
        position: absolute;
        width: 100%;
        left: 0;

        &:after {
            content: '';
            display: block;
            height: 1px;
            flex-grow: 1;
            background-image: linear-gradient(to right, #333 0%, #333 50%, transparent 50%);
            background-size: 10px 1px;
            background-repeat: repeat-x;
            opacity: .15;
        }
    }

}

.graph-constructor-percents {
    flex-shrink: 0;
    height: 420px;
    width: 40px;
    margin-right: 20px;
    text-align: right;
    opacity: .3;
    position: relative;

    .percent {
        font-size: 14px;
        position: absolute;
        right: 0;

        animation: .6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both slide-fade;

        &:first-child,
        &:last-child {
            font-weight: 700;
        }
    }
}

@keyframes slide-fade {
    from {
        opacity: 0;
        transform: translateX(-100%) translateY(-50%);
    }

    to {
        opacity: 1;
        transform: translateX(0) translateY(-50%);
    }
}

.graph-constructor {
    margin: 0 auto;
    margin-top: var(--pdxxl);
    display: flex;
    align-items: flex-start;
    max-width: 100%;
    overflow: auto hidden;
    justify-content: flex-start;
    padding: 20px 0;
    position: relative;
}

.graph-legend {
    border-radius: var(--radius-8);
    border: 1px solid #EFEFEF;
    padding: var(--pdsm) var(--pdlg);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    max-width: fit-content;
    margin: 0 auto;
    margin-top: var(--pdsm);
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
}

@keyframes legendappear {
    from {
        opacity: 0;
        height: 0px;
    }

    to {
        opacity: 1;
        height: 40px;
    }
}

.graph-legend-item {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 14px;
    letter-spacing: 0.01rem;
    overflow: hidden;
    animation: .2s ease both legendappear .3s;

    &:before {
        content: '';
        flex-shrink: 0;
        display: block;
        border-radius: var(--radius-4);
        width: 24px;
        height: 24px;
        margin: var(--pdsm);
    }

    &:not(:last-child) {
        margin-left: var(--pdlg);
    }

    &.NotDeliveredToCS {
        &:before {
            background-color: #EDD0D099;
        }

    }

    &.DeliveredToCS {
        &:before {
            background-color: #E5E5E5;
        }

    }

    &.TransitToCity {
        &:before {
            background-color: #FFF2CC;
        }

    }

    &.DeliveredToCity {
        &:before {
            background-color: #FFBB00;
        }

    }

    &.TransitToTMR {
        &:before {
            background-color: #E2F0D9;
        }

    }

    &.DeliveredToTMR {
        &:before {
            background-color: #AFCA0B;
        }

    }

    &.Executed {
        &:before {
            background: linear-gradient(180deg, #50AF47 0%, #98CA0B 100%);
        }

    }
}
</style>