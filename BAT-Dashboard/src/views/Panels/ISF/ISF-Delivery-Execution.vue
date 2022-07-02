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
                    value: 3900,
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

            products: [
                {
                    name: "MINI",
                    photo: "MINI",
                    type: "BWD",
                    stats: [
                        {
                            name: "Executed",
                            value: "2",
                        },
                        {
                            name: "Delivered",
                            value: "1359",
                        },
                        {
                            name: "Not Delivered",
                            value: "1012",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ],
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    type: "OHD",
                    stats: [
                        {
                            name: "Executed",
                            value: "140",
                        },
                        {
                            name: "Delivered",
                            value: "1359",
                        },
                        {
                            name: "Not Delivered",
                            value: "1012",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ],
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    type: "OHD",
                    stats: [
                        {
                            name: "Executed",
                            value: "140",
                        },
                        {
                            name: "Delivered",
                            value: "3900",
                        },
                        {
                            name: "Not Delivered",
                            value: "1012",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ],
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    type: "OHD",
                    stats: [
                        {
                            name: "Executed",
                            value: "140",
                        },
                        {
                            name: "Delivered",
                            value: "5200",
                        },
                        {
                            name: "Not Delivered",
                            value: "1012",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ],
                },
                {
                    name: "MINI",
                    photo: "MINI",
                    type: "BWD",
                    stats: [
                        {
                            name: "Executed",
                            value: "2",
                        },
                        {
                            name: "Delivered",
                            value: "3870",
                        },
                        {
                            name: "Not Delivered",
                            value: "1012",
                        },
                        {
                            name: "Target",
                            value: "4000",
                        },
                    ],
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
                this.filteredOptions = this.products.filter(
                    (item) => item.type == this.ISFFilter
                );
            } else {
                this.filteredOptions = null;
                this.filteredOptions = this.products;
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

TotalProgressbar(:data="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    ISFFilter
    ProductCards
        template(#items)
            ProductCard(v-for="product in filteredOptions", :product="product")
</template>

<style lang="scss" scoped>
</style>