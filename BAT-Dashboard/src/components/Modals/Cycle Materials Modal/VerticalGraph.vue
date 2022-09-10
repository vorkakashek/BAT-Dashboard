<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    itemKey: {
        type: Number,
        required: false,
        default: 0,
    },
})

function verticalTransform(name) {
    let value = -50;

    if (props.data.graph[name].percent < 5) {
        value = -100;
    }

    return 'transform:' + ' translateY(' + value + '%)';
};

function dataNumber() {
    if (Number(props.data.number) > 0) {
        return 'background-color: #797979; color: #fff; border-color: #797979;';
    }
    return 'background-color: transparent; color: #333; border-color: #333;';
};

function aroundNumber(num) {
    if (!Number.isInteger(num)) {
        return num.toFixed(1);
    }
    return num;
};

const ghost = computed(() => {
    return !(Object.values(props.data.graph).some(({ percent }) => percent > 0));
});

const handlerClass = (item) => {
    return item.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('')
}

</script>


<template lang="pug">

.vertical-graph(:class="{ ghost: ghost }")
    .graph-wrap
        .graph-thin.InStock
            .graph(:style="{ height: data.graph['In Stock'].percent + '%', animationDelay: itemKey * .1 + 's' }")
                .percent(:style="[{ animationDelay: itemKey * .1 + .3 + 's' }, verticalTransform('In Stock')]") {{ aroundNumber(data.graph['In Stock'].percent) }}

        .graph-thick
            template(v-for="(item, key) in data.graph")
                .graph-item(:style="{ height: item.percent + '%' }" v-if="key !== 'Executed' && key !== 'In Stock' && item.percent !== 0")
                    .graph(:class="handlerClass(key)" :style="{ animationDelay: itemKey * .1 + 's' }")
                        .percent(v-if="item.percent !== 0" :style="{ animationDelay: itemKey * .1 + .3 + 's' }") {{ aroundNumber(item.percent) }}
        .graph-thin
            .graph(:style="{ height: data.graph['Executed'].percent + '%', animationDelay: itemKey * .1 + 's' }")
                .percent(:style="[{ animationDelay: itemKey * .1 + .3 + 's' }, verticalTransform('Executed')]") {{ aroundNumber(data.graph['Executed'].percent) }}

    .week(:class="{ current: data.current }" :style="{ animationDelay: itemKey * .1 + 's' }")
        .week-label
            span.name {{ data.week }}
            span.number(:style="dataNumber()") {{ data.number }}
        .week-dates {{ data.dateStart }} — {{ data.dateEnd }}
 

</template>


<style lang="scss" scoped>
@keyframes grow {
    from {
        height: 0%;
        opacity: 0;
    }

    to {
        height: 100%;
        opacity: 1;
    }
}

@keyframes grow2 {
    from {
        max-height: 0%;
    }

    to {
        max-height: 100%;
    }
}

@keyframes thinpercent {
    from {
        top: 100%;
        opacity: 0;
    }

    to {
        top: 0%;
        opacity: 1;
    }
}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes week {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    to {
        opacity: 1;
        transform: translateY(0%);
    }
}

.graph-thin {
    display: flex;
    flex-direction: column-reverse;
    background-color: #F0F0F0CC;
    height: 100%;
    width: 14px;
    border-radius: 2px;
    padding: 1px;
    transition: all .3s ease .1s;

    .percent {
        position: absolute;
        top: 0%;
        left: 18px;
        transform: translateY(-50%);
        border-radius: var(--radius-4);
        background-color: var(--green);
        padding: 0 4px;
        color: #fff;
        font-weight: 400;
        font-size: 13px;
        animation: .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both thinpercent;

        &:after {
            content: '';
            position: absolute;
            left: -3px;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: 0px;
            height: 0px;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            border-right: 4px solid var(--green);
        }
    }

    .graph {
        width: 100%;
        background: linear-gradient(180deg, #50AF47 0%, #98CA0B 100%);
        border-radius: 2px;
        display: flex;
        flex-direction: column-reverse;
        animation: .75s cubic-bezier(0.55, 0.085, 0.68, 0.53) both grow2;
    }

    &.InStock {
        .graph {
            background: linear-gradient(180deg, #478caf 0%, #0bb6ca 100%);
        }

        .percent {
            left: unset;
            right: 18px;
            background-color: #478caf;

            &:after {
                border-right: unset;
                border-left: 4px solid #478caf;
                left: unset;
                right: -3px;
            }
        }
    }
}

.graph-thick {
    width: 40px;
    height: 100%;
    margin: 0 2px;
    display: flex;
    flex-direction: column;
    padding: 0 1px;
    border-radius: var(--radius-4);
    justify-content: flex-end;

    .graph-item {
        padding: 1px;
        display: flex;
        flex-direction: column-reverse;
        min-height: 16px;
    }

    .graph {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: var(--radius-4);
        animation: .3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both grow;

        &.NotDeliveredToCS {
            background-color: #EDD0D099;
            order: 0;

            .percent {
                opacity: .7;
            }
        }

        &.DeliveredToCS {
            background-color: #E5E5E5;
            order: 1;
        }

        &.TransitToCity {
            background-color: #FFF2CC;
            order: 2;
        }

        &.DeliveredToCity {
            background-color: #FFBB00;
            order: 3;
        }

        &.TransitToTMR {
            background-color: #E2F0D9;
            order: 4;
        }

        &.DeliveredToTMR {
            background-color: #AFCA0B;
            order: 5;
        }
    }

    .percent {
        font-weight: 900;
        color: #333;
        font-size: 13px;
        animation: .4s ease both fade;
    }
}

.graph-wrap {
    height: 420px;
    display: flex;
    justify-content: center;
}

.vertical-graph {
    position: relative;
    z-index: 2;
    min-width: 107px;
    border-radius: var(--radius-8);
    transition: all .3s ease;
    cursor: pointer;

    &:not(:last-child) {
        margin-left: calc(var(--pdlg) + 8px);
    }

    &:not(.ghost, .selected):hover,
    &.selected {
        background-color: rgba(177, 177, 177, 0.163);

        .graph-thin {
            background-color: rgb(215, 215, 215);
        }

        .week {
            background: #e0e0e0;

            &.current {
                background: #fff;
                border-color: #333;

                &:after {
                    color: #333;
                }
            }
        }
    }

    &.selected {
        &:before {
            content: 'click to deselect';
            display: block;
            white-space: nowrap;
            text-transform: uppercase;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 11px;
            letter-spacing: .05rem;
            color: #333;
            opacity: 0;
            bottom: calc(100%);
            transition: all .2s ease;
        }

        .week {
            &:not(.current) {
                background-color: var(--blue-light);

                .week-label {
                    color: #fff;

                    .number {
                        background-color: #fff !important;
                        border-color: #fff !important;
                        color: var(--blue-light) !important;
                    }
                }

                .week-dates {
                    color: #fff;
                }
            }

            &.current {
                border-color: var(--blue-light);

                &:after {
                    color: var(--blue-light);
                }

                .week-label {
                    color: var(--blue-light);

                    .number {
                        background-color: var(--blue-light) !important;
                        border-color: var(--blue-light) !important;
                    }
                }
            }
        }

        &:hover {
            &:before {
                content: 'click to deselect';
                display: block;
                white-space: nowrap;
                text-transform: uppercase;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                font-size: 11px;
                letter-spacing: .05rem;
                color: #333;
                opacity: 1;
                bottom: calc(100% + 4px);
            }
        }
    }

    &.ghost {
        user-select: none;
        pointer-events: none;

        .graph-thick {
            background-color: var(--grey-medium);
        }

        .graph-thin {
            .percent {
                background-color: var(--inactive);
                opacity: .3 !important;

                &:after {
                    border-right: 4px solid var(--inactive);
                }
            }
        }

        .week {
            opacity: .5 !important;
        }
    }
}

.week {
    border-radius: var(--radius-8);
    padding: var(--pdsm);
    background-color: #F5F5F5;
    margin-top: var(--pdsm);
    text-align: center;
    z-index: -1;
    // transition: all .3s ease .1s;
    animation: .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both week;

    &.current {
        background-color: #fff;
        border: 1px solid #9D9D9D;

        &:after {
            content: 'current';
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: .11rem;
            color: #9d9d9d;
            font-weight: 700;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateY(50%) translateX(-50%);
            background: #fff;
            padding: 0 8px;
            transition: all .3s ease .1s;
        }
    }
}

.week-label {
    color: #333;

    .name {
        font-weight: 700;
        font-size: 14px;
    }

    .number {
        font-size: 13px;
        opacity: .8;
        border: 1px solid #797979;
        padding: 0 4px;
        border-radius: var(--radius-4);
        margin-left: var(--pd);
        font-weight: 700;
        color: #797979;
    }
}

.week-dates {
    font-size: 14px;
    color: #333;
    opacity: .7;
}
</style>