<script setup>

import { computed, ref } from 'vue';
import TogglerViewProgressbar from '@/components/Progress Bars/TogglerViewProgressbar.vue';
import VerticalGraph from '@/components/Modals/Cycle Materials Modal/VerticalGraph.vue';

const props = defineProps({
    data: Object,
    type: {
        type: String,
        required: false,
        default: "",
    },
    label: {
        type: String,
        required: false,
        default: "Total",
    },
    valueStore: {
        type: String,
        required: false
    }
});

const selectedWeek = ref(null)

function legendName(item) {
    return item.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('')
}

const targetPos = computed(() => {
    if (props.data.info.targetPercent !== undefined) {
        return props.data.info.targetPercent
    }
    return null
})

const expandStats = (key) => {
    if (selectedWeek.value === key) {
        selectedWeek.value = null
    } else {
        selectedWeek.value = key
    }
}

</script>

<template lang="pug">

.graph-constructor
    .graph-constructor-target-outer(v-if="targetPos !== null" :class="{'graph-constructor-target-outer--progress-bar': type === 'progress-bar'}")
        .graph-constructor-target(:style="['bottom:' + targetPos + '%']")
            .graph-constructor-target-value {{ targetPos }}%
            .graph-constructor-target-name Target: 
                br
                | {{ data.info.target }}

    .graph-constructor-percents(:class="{'graph-constructor-percents--progress-bar': type === 'progress-bar'}")
        .percent(v-for="n in 11" :style="{ top: 100 - (n * 10 - 10) + '%', transform: 'translateY(-50%)' }") {{ n * 10 - 10 }}%
    .graph-constructor-content
        VerticalGraph(v-for="(graph, key) in data.weeks" :data="graph" :itemKey="key" :type="type" :class="{ selected: key === selectedWeek }" @click="expandStats(key)")
        .backlines(:class="{'backlines--progress-bar': type === 'progress-bar'}")
            .line(v-for="n in 11" :style="{ top: 100 - (n * 10 - 10) + '%', transform: 'translateY(-50%)' }") 


.graph-legend(:class="{'graph-legend--progress-bar': type === 'progress-bar'}")
    .progressbar-label(v-if="props.label !== 'Total' || type === 'progress-bar'") {{ props.label }}
    .graph-legend-group
        .graph-legend-item(v-for="(item, key) in data.weeks[0].graph")
            .graph-legend-name(:class="item.class ? item.class : legendName(key)") {{ key }}
            .graph-legend-stats(v-if="selectedWeek !== null")
                .graph-legend-stats-qty {{ data.weeks[selectedWeek].graph[key].qty }} 
                    span pcs
                .graph-legend-stats-percent {{ data.weeks[selectedWeek].graph[key].percent }} 
                    span %
        .graph-legend-toolbar 
            TogglerViewProgressbar(type="multicategory" :value="valueStore" v-if="type === 'progress-bar-multicategory'")
            TogglerViewProgressbar(type="graph" :value="valueStore" v-if="type === 'progress-bar' || type === 'progress-bar-multicategory'")

</template>

<style lang="scss" scoped>
.graph-legend-toolbar {
    order: -1;
    display: flex;
}
.graph-constructor-target-outer {
    position: absolute;
    left: 0;
    top: calc(0 + var(--pdxxl));
    height: 420px;
    width: 100%;
    user-select: none;
    &--progress-bar {
        height: 210px;
    }
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

    &--progress-bar {
        height: 210px;
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

    &--progress-bar {
        height: 210px;
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
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
        height: 0;
        width: 0;
    }
}

.graph-legend {
    overflow: hidden;
    &--progress-bar {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
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

.selected-week {
    text-align: center;
    margin: 0 auto var(--pdsm) auto;
    padding: var(--pd) var(--pdlg);
    background-color: var(--blue-light);
    max-width: fit-content;
    border-radius: var(--radius-8);
    font-weight: 700;
    color: #fff;
}

.graph-legend-group {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: calc(var(--pdsm) * -1);
}

@keyframes legendappear {
    from {
        opacity: 0;
        max-height: 0%;
    }

    to {
        opacity: 1;
        height: 40px;
    }
}

.graph-legend-item {
    padding: var(--pdsm);
    transition: all .5s ease;
    border: 1px solid #e9e9e9;
    border-radius: var(--radius-8);
    margin-bottom: var(--pdsm);
    &:not(:last-child) {
        margin-left: var(--pdsm);
    }
}

.graph-legend-stats {
    font-size: 14px;
    padding: 0 var(--pdsm);
    background-color: #f5f5f5;
    border-radius: var(--radius-8);
}

.graph-legend-stats-qty,
.graph-legend-stats-percent {
    font-weight: 700;
    text-align: center;
}

.graph-legend-name {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 14px;
    letter-spacing: 0.01rem;
    overflow: hidden;
    animation: .2s ease both legendappear .3s;
    margin: 0 var(--pdsm);

    &:before {
        content: '';
        flex-shrink: 0;
        display: block;
        border-radius: var(--radius-4);
        width: 24px;
        height: 24px;
        margin-right: var(--pdsm);
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

    &.Transit {
        &:before {
            background-color: #E2F0D9;
        }
    }

    &.Delivered {
        &:before {
            background-color: #AFCA0B;
        }
    }

    &.InStock {
        &:before {
            background: linear-gradient(180deg, #478caf 0%, #0bb6ca 100%);
        }
    }

    &.Executed {
        &:before {
            background: linear-gradient(180deg, #50AF47 0%, #98CA0B 100%);
        }
    }

    &.More90d {
        &:before {
            background-color: var(--orange-light);
        }
    }
    &.Current, &.Three12Month {
        &:before {
            background-color: var(--yellow);
        }
    }
    &.GreenTarget, &.New {
        &:before {
            background-color: var(--green-light);
        }
    }
    &.More1y, &.Overdue {
        &:before {
            background-color: var(--orange-pale);
        }
    }
    &.Hidden {
        &:before {
            display: none;
        }
    }
    &.More180d::before {
        background-color: #434343;
    }
    &.d90d180::before {
        background-color: var(--orange-light);
    }
    &.d30d90::before {
        background-color: var(--yellow);
    }
    &.Less30d::before {
        background-color: var(--green-light);
    }
    &.new::before {
        background-color: var(--blue-sky);
    }
}
</style>