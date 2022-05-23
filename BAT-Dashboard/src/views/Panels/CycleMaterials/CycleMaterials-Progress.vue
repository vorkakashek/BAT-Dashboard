<script>
export default {
    data() {
        return {
            totalData: [
                {
                    name: "Executed",
                    value: 900,
                },
                {
                    name: "Delivered to TMR",
                    value: 300,
                },
                {
                    name: "Delivered to City",
                    value: 901,
                },
                {
                    name: "Not Delivered",
                    value: 800,
                },
                {
                    name: "Target",
                    value: 1000,
                },
            ],
            comparisonData: [
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 4000,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 15103,
                    deliveredToTMR: 6802,
                    deliveredToCity: 16310,
                    notDelivered: 500,
                    target: 16700,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 3000,
                    deliveredToTMR: 3400,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 1,
                    deliveredToTMR: 2,
                    deliveredToCity: 3,
                    notDelivered: 500,
                    target: 4000,
                },
            ],
        };
    },
};
</script>

<template lang="pug">
.panel
    TotalProgressbar(:inData="totalData")
        template(#legend)
            ProgressbarLegend(:inData="totalData")

.panel
    h2 Total
    .comparison-items
        ComparisonItem(
            v-for="item in comparisonData",
            :comparisonData="item",
            :vertical="true"
        )
</template>


<style lang="scss" scoped>
</style>