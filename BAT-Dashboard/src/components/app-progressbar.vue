<script>
import gsap from "gsap";

export default {
    props: {
        label: {
            type: String,
            default: "Total",
            required: false,
        },
        progressbarsData: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            progressbars: this.progressbarsData,
            asd: 0,
        };
    },
    computed: {
        TotalValue() {
            for (var i = 0; this.progressbars.length > i; i++) {
                if (this.progressbars[i].name == "Planned") {
                    return this.progressbars[i].value;
                }
            }
        },

        DeliveredValue() {
            for (var i = 0; this.progressbars.length > i; i++) {
                if (this.progressbars[i].name == "Delivered") {
                    return this.progressbars[i].value;
                }
            }
        },

        DeliveredValuePercentage() {
            return this.DeliveredValue / (this.TotalValue / 100);
        },

        ExecutedValue() {
            for (var i = 0; this.progressbars.length > i; i++) {
                if (this.progressbars[i].name == "Executed") {
                    return this.progressbars[i].value;
                }
            }
        },

        ExecutedValuePercentage() {
            return this.ExecutedValue / (this.TotalValue / 100);
        },

        NotDeliveredValue() {
            return this.TotalValue - this.DeliveredValue;
        },
    },
};
</script>

<template lang="pug">
.panel.mgy
    .progressbar-container
        .progressbar-wrapper
            .progressbar-label {{ label }}
            .progressbar
                //- Executed 
                .progressbar--bar.green(
                    :style="{ width: ExecutedValuePercentage + '%' }"
                )
                    .progressbar--bar-value {{ ExecutedValue / (TotalValue / 100) }}%
                //- Delivered
                .progressbar--bar.green-light(
                    :style="{ width: DeliveredValuePercentage + '%' }"
                )
                    .progressbar--bar-value {{ DeliveredValue / (TotalValue / 100) }}%
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
    right: 8px;
    bottom: 100%;
    font-weight: 900;
    font-size: 12px;
    color: #333;
}

.progressbar {
    position: relative;
    background-color: #e5e5e5;
    border-radius: 100px;
    width: 100%;
    height: 8px;
    max-width: calc(360px + var(--index) * 8);
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
    animation: animateProgressBar .5s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0s;
    animation-fill-mode: forwards;

    &.green-light {
        background-color: var(--green-light);
        z-index: 4;
        animation-delay: 0s;
    }
    &.green {
        background-color: var(--green);
        z-index: 5;
        animation-delay: .15s;
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

.progressbar--bar-value {
    position: absolute;
}

.progressbar-container {
    display: flex;
}

.progressbar-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
}
</style>