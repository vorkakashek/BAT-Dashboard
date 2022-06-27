<script setup>
import { computed } from "vue";
</script>

<script>
export default {
    data() {
        return {
            ISFFilter: "ALL",
            filteredOptions: null,
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
                    type: "OHD",
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
                    type: "BWD",
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
        handleFilter() {
            if (this.ISFFilter !== "ALL") {
                this.filteredOptions = null;
                this.filteredOptions = this.comparisonData.filter(
                    (item) => item.type == this.ISFFilter
                );
            } else {
                this.filteredOptions = null;
                this.filteredOptions = this.comparisonData;
            }
        },
    },
    watch: {
        ISFFilter: function () {
            this.handleFilter();
        },
    },
    mounted() {
        this.handleFilter();
    },
};
</script>

<template lang="pug">
.panel
    TotalProgressbar(:data="totalData")
        template(#legend)
            ProgressbarLegend(:inData="totalData")

.panel
    h2 Total
    ISFFilter
    .comparison-items
        ComparisonItem(v-for="item in filteredOptions" :comparisonData="item" :vertical="true")
</template>


<style lang="scss" scoped>
</style>