<script>
export default {
    data() {
        return {
            totalData: [
                {
                    name: "Executed",
                    value: 1235,
                },
                {
                    name: "Delivered",
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
                    label: "MBU",
                    stats: [
                        {
                            name: "Executed",
                            value: "301",
                        },
                        {
                            name: "Delivered to TMR",
                            value: "1204",
                        },
                        {
                            name: "Not Delivered",
                            value: "500",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ]
                },
                {
                    label: "NW",
                    stats: [
                        {
                            name: "Executed",
                            value: "301",
                        },
                        {
                            name: "Delivered to TMR",
                            value: "1204",
                        },
                        {
                            name: "Not Delivered",
                            value: "500",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ]
                },
            ],
        };
    },
};
</script>

<template lang="pug">

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    h2 Total
    .comparison-items
        ComparisonItem(v-for="item in comparisonData" :comparisonData="item" :vertical="true")
</template>


<style lang="scss" scoped>
</style>