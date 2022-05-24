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
                val = -100;
            }
            if (Number(value) > 95) {
                val = 0;
            }

            return `transform: translateY(${val}%);`;
        },
        collisionFixDeliveredToCity(
            DeliveredToCityPercentage,
            ExecutedPercentage
        ) {
            let valY = -50;
            let valX = 0;

            if (DeliveredToCityPercentage < 5) {
                valY = -100;
            }

            if (DeliveredToCityPercentage > 95) {
                valY = 0;
            }

            if (DeliveredToCityPercentage - ExecutedPercentage < 10) {
                valX = -110;
            }

            return `transform: translateX(${valX}%) translateY(${valY}%);`;
        },

        // collisionFixDeliveredToCity(
        //     DeliveredToCityPercentage,
        //     ExecutedPercentage
        // ) {
        //     let val = -50;
        //     if (DeliveredToCityPercentage > 95) {
        //         val = -25;
        //     }
        //     if (DeliveredToCityPercentage <= 5) {
        //         val = 100;
        //     }
        //     if (DeliveredToCityPercentage - ExecutedPercentage < 10) {
        //         val = -25;
        //         if (DeliveredToCityPercentage <= 5) {
        //             val = -150;
        //         }
        //     }

        //     return `transform: translateY(${val}%);`;
        // },
        // collisionFixExecuted(DeliveredToCityPercentage, ExecutedPercentage) {
        //     let val = -50;

        //     if (ExecutedPercentage > 95) {
        //         val = 0;
        //     }
        //     if (ExecutedPercentage <= 5) {
        //         val = 0;
        //     }
        //     if (DeliveredToCityPercentage - ExecutedPercentage < 10) {
        //         val = 0;
        //         if (ExecutedPercentage <= 5) {
        //             val = -75;
        //         }
        //     }

        //     return `transform: translateY(${val}%);`;
        // },
    },
};
</script>

<template lang="pug">
.progressbar-container
    .progressbar-wrapper
        .progressbar
            //- Executed 
            .progressbar--bar.green(
                :style="{ height: ExecutedPercentage + '%' }",
                v-if="ExecutedPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="valueOffset(ExecutedPercentage)"
                ) {{ ExecutedPercentage }}%

            //- Delivered
            .progressbar--bar.green-light(
                :style="{ height: DeliveredPercentage + '%' }",
                v-if="DeliveredPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="valueOffset(DeliveredPercentage)"
                ) {{ DeliveredPercentage }}%

            //- Delivered to TMR
            .progressbar--bar.green-light.tmr(
                :style="{ height: DeliveredToTMRPercentage + '%' }",
                v-if="DeliveredToTMRPercentage !== false"
            )
                .progressbar--bar-value(
                    :style="valueOffset(DeliveredToTMRPercentage)"
                ) {{ DeliveredToTMRPercentage }}%

            //- Delivered to City
            .progressbar--bar.yellow(
                :style="{ height: DeliveredToCityPercentage + '%' }",
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
    top: 0 !important;
    left: calc(-100% - 32px);
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
    border-radius: var(--radius-4);
    height: 200px;
    width: 32px;
    @include respond-to(medium) {
        max-width: 100%;
    }
}

.progressbar--bar {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 0;
    background-color: var(--green);
    border-radius: 100px;
    transition: all 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    height: 0;
    max-height: 0;
    animation: animateProgressBar 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    animation-fill-mode: forwards;
    border-radius: var(--radius-4);

    &.green-light {
        background-color: var(--green-light);
        z-index: 4;
        animation-delay: 0s;
        .progressbar--bar-value {
            color: var(--green-light-darker);
            // bottom: unset;
            // top: 100%;
            left: unset;
            right: calc(-100% - 32px);
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
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    margin: 16px 0 0 0 !important;
    background-color: #fafafa;
    padding: var(--pdlg);
    border-radius: var(--radius-4);
}

@keyframes animateProgressBar {
    from {
        max-height: 0%;
    }
    to {
        max-height: 100%;
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