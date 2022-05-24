<script>
export default {
    props: {
        inData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    computed: {
        ExecutedPercentage() {
            if (this.inData.executed !== undefined) {
                return (
                    this.inData.executed /
                    (this.inData.target / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },

        DeliveredPercentage() {
            if (this.inData.delivered !== undefined) {
                return (
                    this.inData.delivered /
                    (this.inData.target / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },

        DeliveredToTMRPercentage() {
            if (this.inData.deliveredToTMR !== undefined) {
                return (
                    this.inData.deliveredToTMR /
                    (this.inData.target / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },

        DeliveredToCityPercentage() {
            if (this.inData.deliveredToCity !== undefined) {
                return (
                    this.inData.deliveredToCity /
                    (this.inData.target / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },
    },

    methods: {
        valueOffset(value) {
            let val = -50;
            if (Number(value) < 5) {
                val = 0;
            }
            if (Number(value) > 95) {
                val = -100;
            }

            return `transform: translateX(${val}%);`;
        },
        collisionFixDeliveredToCity(
            DeliveredToCityPercentage,
            ExecutedPercentage
        ) {
            let valY = 0;
            let valX = -50;

            if (DeliveredToCityPercentage < 5) {
                valX = 0;
            }

            if (DeliveredToCityPercentage > 95) {
                valX = -100;
            }

            if ((DeliveredToCityPercentage - ExecutedPercentage < 10 && DeliveredToCityPercentage - ExecutedPercentage > 0) || (ExecutedPercentage - DeliveredToCityPercentage < 10 && ExecutedPercentage - DeliveredToCityPercentage > 0)) {
                valY = -50;
            }

            return `transform: translateX(${valX}%) translateY(${valY}%);`;
        },
    },
};
</script>

<template lang="pug">
.progressbar-container
    .progressbar-wrapper
        .progressbar
            //- Executed 
            .progressbar--bar.green(
                :style="{ width: ExecutedPercentage + '%' }",
                v-if="ExecutedPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="valueOffset(ExecutedPercentage)"
                ) {{ ExecutedPercentage }}%

            //- Delivered
            .progressbar--bar.green-light(
                :style="{ width: DeliveredPercentage + '%' }",
                v-if="DeliveredPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="valueOffset(DeliveredPercentage)"
                ) {{ DeliveredPercentage }}%

            //- Delivered to TMR
            .progressbar--bar.green-light.tmr(
                :style="{ width: DeliveredToTMRPercentage + '%' }",
                v-if="DeliveredToTMRPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="valueOffset(DeliveredToTMRPercentage)"
                ) {{ DeliveredToTMRPercentage }}%

            //- Delivered to City
            .progressbar--bar.yellow(
                :style="{ width: DeliveredToCityPercentage + '%' }",
                v-if="DeliveredToCityPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="collisionFixDeliveredToCity(DeliveredToCityPercentage, ExecutedPercentage)"
                ) {{ DeliveredToCityPercentage }}%

    //- slot using in product cards
    slot(name="data")
</template>


<style lang="scss" scoped>
.progressbar-label {
    font-weight: 700;
    color: var(--blue-dark);
    margin-right: var(--pdlg);
    flex-shrink: 0;
}

.progressbar--bar-value {
    position: absolute;
    // right: 8px;
    left: 100%;
    transform: translateX(-50%);
    bottom: 100%;
    font-weight: 900;
    font-size: 13.5px;
    color: #333;
    opacity: 0;
    transition: font-size 0.05s ease;
    animation: animateOpacity 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.1s;
    animation-fill-mode: forwards;
}

.progressbar {
    position: relative;
    background-color: #e5e5e5;
    // border-radius: 100px;
    border-radius: 4px;
    width: 100%;
    // height: 10px;
    height: 16px;

    // max-width: calc(360px + var(--index) * 8);
    @include respond-to(medium) {
        max-width: 100%;
    }
}

.progressbar--bar {
    position: absolute;
    z-index: 1;
    height: 100%;
    background-color: var(--green);
    // border-radius: 100px;
    border-radius: 4px;
    transition: all 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    width: 0;
    max-width: 0;
    animation: animateProgressBar 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    animation-fill-mode: forwards;

    &.green-light {
        background-color: var(--green-light);
        z-index: 4;
        animation-delay: 0s;

        &:not(.tmr) {
            .progressbar--bar-value {
                // right: unset;
                // left: 100%;
            }
        }
        .progressbar--bar-value {
            color: var(--green-light-darker);
            bottom: unset;
            top: 100%;
        }
    }
    &.green {
        background-color: var(--green);
        z-index: 5;
        animation-delay: 0.15s;
        .progressbar--bar-value {
            color: var(--green);
        }
    }
    &.yellow {
        background-color: var(--yellow);
        z-index: 3;
        animation-delay: 0.15s;
        .progressbar--bar-value {
            color: var(--orange);
        }
    }
}

.progressbar--bar-value {
    position: absolute;
}

.progressbar-container {
    display: flex;

    @include respond-to(medium) {
        flex-wrap: wrap;

        > * {
            width: 100%;
        }
    }
}

.progressbar-wrapper {
    display: flex;
    align-items: center;
    // width: 100%;
    flex-grow: 1;
    &:hover {
        .progressbar--bar-value {
            // font-size: 15px;
        }
    }
}

@keyframes animateProgressBar {
    from {
        max-width: 0%;
    }
    to {
        max-width: 100%;
    }
}

@keyframes animateOpacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>