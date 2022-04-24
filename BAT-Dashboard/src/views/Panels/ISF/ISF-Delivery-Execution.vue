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
                    name: "Planned",
                    value: 4000,
                },
            ],

            products: [
                {
                    name: "MINI",
                    photo: "MINI",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "BWD",
                },
                {
                    name: "PRO",
                    photo: "PRO",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "BWD",
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "OHD",
                },
                {
                    name: "PRO",
                    photo: "PRO",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "BWD",
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "OHD",
                },
                {
                    name: "PRO",
                    photo: "PRO",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "OHD",
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "BWD",
                },
                {
                    name: "PRO",
                    photo: "PRO",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "OHD",
                },
                {
                    name: "SUPER",
                    photo: "SUPER",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 1012,
                    planned: 4000,
                    type: "BWD",
                },
            ],
        };
    },

    provide() {
        return {
            ISFFilter: computed(() => this.ISFFilter),
            updateISFFilter: this.updateISFFilter
        }
    },
    methods: {
        updateISFFilter(value) {
            this.ISFFilter = value
        }
    }
};
</script>


<template lang="pug">
.panel
    TotalProgressbar(:inData="totalData")
        template(#legend)
            ProgressbarLegend(:inData="totalData")

.panel
    ISFFilter

    product-cards(:inData="products")
</template>

<style lang="scss" scoped>


</style>