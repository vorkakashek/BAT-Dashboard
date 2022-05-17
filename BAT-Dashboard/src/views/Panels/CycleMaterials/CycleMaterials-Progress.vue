<script>
export default {
    data() {
        return {
            totalData: [
                {
                    name: "Executed",
                    value: 902,
                },
                {
                    name: "Delivered to TMR",
                    value: 1235,
                },
                {
                    name: "Delivered to City",
                    value: 3200,
                },
                {
                    name: "Not Delivered",
                    value: 800,
                },
                {
                    name: "Target",
                    value: 4000,
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
                    deliveredToCity: 3500,
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
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    executed: 3000,
                    deliveredToTMR: 3400,
                    deliveredToCity: 3500,
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