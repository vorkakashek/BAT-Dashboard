<script setup>
import { computed } from "vue";
</script>

<script>
export default {
    data() {
        return {
            ISFFilter: "ALL",
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
                    label: "CycleMaterial Cycle4",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 3000,
                },
                {
                    label: "CycleMaterial Cycle5",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 3400,
                },
                {
                    label: "CycleMaterial Cycle6",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 4100,
                },
            ],
        };
    },
    provide() {
        return {
            ISFFilter: computed(() => this.ISFFilter),
            updateISFFilter: this.updateISFFilter,
        };
    },
    methods: {
        updateISFFilter(value) {
            this.ISFFilter = value;
        },
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
        ISFFilter
        ComparisonItem(v-for="item in comparisonData" :comparisonData="item")
</template>


<style lang="scss" scoped>

</style>