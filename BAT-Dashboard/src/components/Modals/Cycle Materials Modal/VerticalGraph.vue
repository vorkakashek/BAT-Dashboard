<script setup>

const props = defineProps({
    data: Object,
    animationdelay: Number,
});

function verticalTransform() {
    var value = -50;
    if (props.data.graph.executed < 5) {
        value = -100;
    }
    return 'transform:' + ' translateY(' + value + '%)';
}

function dataNumber() {
    if (Number(props.data.number) > 0) {
        return 'background-color: #797979; color: #fff; border-color: #797979;'
    }
    return 'background-color: transparent; color: #333; border-color: #333;'
}

</script>


<template lang="pug">


.vertical-graph
    .graph-wrap
        .graph-thick
            template(v-for="(value, key) in data.graph")
                .graph-item(:style="{ height: value + '%' }" v-if="key !== 'executed' && value !== 0")
                    .graph(:class="key" :style="{ animationDelay: animationdelay * .1 + 's' }")
                        .percent(v-if="value !== 0" :style="{ animationDelay: animationdelay * .1 + .3 + 's' }") {{ value }} 
        .graph-thin
            .graph(:style="{ height: data.graph.executed + '%', animationDelay: animationdelay * .1 + 's' }")
                .percent(:style="[{ animationDelay: animationdelay * .1 + .3 + 's' }, verticalTransform()]") {{ data.graph.executed }}
    .week(:class="{ current: data.current }" :style="{ animationDelay: animationdelay * .1 + 's' }")
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
        font-weight: 900;
        font-size: 13px;

        animation: .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both thinpercent;

        &:after {
            content: '';
            position: absolute;
            left: -4px;
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
}

.graph-thick {
    width: 40px;
    height: 100%;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    // background: #fff;
    padding: 0 1px;
    border-radius: var(--radius-4);

    .graph-item {
        padding: 1px;
        display: flex;
        flex-direction: column-reverse;
    }

    .graph {
        // height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: var(--radius-4);
        animation: .3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both grow;

        &.notDeliveredToCS {
            background-color: #EDD0D099;
            order: 0;
            // animation-delay: .5s;

            .percent {
                opacity: .7;
            }
        }

        &.deliveredToCS {
            background-color: #E5E5E5;
            order: 1;
        }

        &.transitToCity {
            background-color: #FFF2CC;
            order: 2;
        }

        &.deliveredToCity {
            background-color: #FFBB00;
            order: 3;
        }

        &.transitToTMR {
            background-color: #E2F0D9;
            order: 4;
        }

        &.deliveredToTMR {
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

    &:not(:last-child) {
        margin-left: var(--pdlg);
    }

    &:hover {
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