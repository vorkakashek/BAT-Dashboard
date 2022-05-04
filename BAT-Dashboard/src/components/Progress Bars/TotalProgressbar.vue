<script>
export default {
    props: {
        inData: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            default: "Total",
            required: false,
        },
        noLabel: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    data() {
        return {};
    },
    computed: {
        TotalValue() {
            if (
                this.inData.find((name) => name.name === "Target") !== undefined
            ) {
                return this.inData.find((name) => name.name === "Target").value;
            } else {
                return false;
            }
        },

        DeliveredPercentage() {
            if (
                this.inData.find((name) => name.name === "Delivered") !==
                undefined
            ) {
                return (
                    this.inData.find((name) => name.name === "Delivered")
                        .value /
                    (this.TotalValue / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },

        DeliveredToCityPercentage() {
            if (
                this.inData.find(
                    (name) => name.name === "Delivered to City"
                ) !== undefined
            ) {
                return (
                    this.inData.find(
                        (name) => name.name === "Delivered to City"
                    ).value /
                    (this.TotalValue / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },

        DeliveredToTMRPercentage() {
            if (
                this.inData.find((name) => name.name === "Delivered to TMR") !==
                undefined
            ) {
                return (
                    this.inData.find((name) => name.name === "Delivered to TMR")
                        .value /
                    (this.TotalValue / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },

        ExecutedPercentage() {
            if (
                this.inData.find((name) => name.name === "Executed") !==
                undefined
            ) {
                return (
                    this.inData.find((name) => name.name === "Executed").value /
                    (this.TotalValue / 100)
                ).toFixed(1);
            } else {
                return false;
            }
        },
    },
    methods: {
        valueOffset(value) {
            let val = -50;
            if (Number(value) <= 10) {
                val = 0;
            } if (Number(value) > 95) {
                val = -100;
            }

            return `transform: translateX(${val}%);`;
            
        },
    },
};
</script>

<template lang="pug">
.progressbar-container
    .progressbar-wrapper
        .progressbar-label(v-if="!noLabel") {{ label }}
        .progressbar
            //- Executed 
            .progressbar--bar.green(
                :style="{ width: ExecutedPercentage + '%' }",
                v-if="ExecutedPercentage !== false"
            )
                .progressbar--bar-value(
                    v-if="!(Number(ExecutedPercentage) <= 0)",
                    :style="valueOffset(ExecutedPercentage)"
                ) {{ ExecutedPercentage }}%

            //- Delivered
            .progressbar--bar.green-light(
                :style="{ width: DeliveredPercentage + '%' }",
                v-if="DeliveredPercentage !== false"
            )
                .progressbar--bar-value(
                    v-if="!(Number(DeliveredPercentage) <= 0)",
                    :style="valueOffset(DeliveredPercentage)"
                ) {{ DeliveredPercentage }}%

            //- Delivered to TMR
            .progressbar--bar.green-light.tmr(
                :style="{ width: DeliveredToTMRPercentage + '%' }",
                v-if="DeliveredToTMRPercentage !== false"
            )
                .progressbar--bar-value(
                    v-if="!(Number(DeliveredToTMRPercentage) <= 0)",
                    :style="valueOffset(DeliveredToTMRPercentage)"
                ) {{ DeliveredToTMRPercentage }}%

            //- Delivered to City
            .progressbar--bar.yellow(
                :style="{ width: DeliveredToCityPercentage + '%' }",
                v-if="DeliveredToCityPercentage !== false"
            )
                .progressbar--bar-value(
                    v-if="!(Number(DeliveredToCityPercentage) <= 0)",
                    :style="valueOffset(DeliveredToCityPercentage)"
                ) {{ DeliveredToCityPercentage }}%

    //- slot for legend (using in total progressbars)
    slot(name="legend")
    //- slot using in product cards
    slot(name="data")
</template>

<style lang="scss" scoped>
.progressbar-container {
    display: flex;

    @include respond-to(medium) {
        flex-wrap: wrap;

        > * {
            width: 100%;
        }
    }
}

.progressbar-label {
    font-weight: 700;
    color: var(--blue-dark);
    margin-right: var(--pdlg);
    flex-shrink: 0;
    flex-basis: 7rem;
    @include respond-to(handlers) {
        width: 100%;
        margin-right: 0;
    }
}

.progressbar--bar-value {
    position: absolute;
    // left: 50%;
    left: 100%;
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
    border-radius: 100px;
    width: 100%;
    height: 16px;
    @include respond-to(medium) {
        max-width: 100%;
    }

    @include respond-to(handlers) {
        margin: var(--pdxl) 0;
    }
}

.progressbar--bar {
    position: absolute;
    z-index: 1;
    height: 100%;
    background-color: var(--green);
    border-radius: 100px;
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
                // right: 50%;
                // left: 50%;
            }
        }
        .progressbar--bar-value {
            color: var(--green-light-darker);
            bottom: unset;
            top: 100%;
        }
    }
    &.yellow {
        background-color: var(--yellow);
        z-index: 3;
        animation-delay: 0s;
        .progressbar--bar-value {
            // color: var(--yellow);
            color: var(--orange);
            // right: unset;
            // left: 100%;
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

.progressbar--bar-value {
    position: absolute;
}

.progressbar-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    &:hover {
        .progressbar--bar-value {
            // font-size: 15px;
        }
    }

    @include respond-to(handlers) {
        flex-wrap: wrap;
    }
}
</style>