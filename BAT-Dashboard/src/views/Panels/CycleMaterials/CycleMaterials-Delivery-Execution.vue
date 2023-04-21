<script setup>
import CycleMaterialsList from "@/components/CycleMaterialsList.vue";
import CycleMaterialsItem from "@/components/CycleMaterialsItem.vue";

import { ref } from "vue";

const mustSetTotalData = ref([
    {
        name: "Executed",
        value: 902,
    },
    {
        name: "Delivered to TMR",
        value: 1235,
    },
    {
        name: "Transit to TMR",
        value: 300,
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
])

const otherTotal = ref([
    {
        name: "Executed",
        value: 1,
    },
    {
        name: "Delivered to TMR",
        value: 0,
    },
    {
        name: "Transit to TMR",
        value: 0,
    },
    {
        name: "Delivered to City",
        value: 0,
    },
    {
        name: "Not Delivered",
        value: 9,
    },
    {
        name: "Target",
        value: 10,
    },
])

// Product lists:
const mustSetProducts = ref([
    {
        label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
        photo: "1",
        new: true,
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
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
        label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
        photo: "1",
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "6000",
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
        label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
        photo: "1",
        stats: [
            {
                name: "Executed",
                value: "1",
            },
            {
                name: "Delivered to TMR",
                value: "300",
            },
            {
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
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
])

const otherProducts = ref([
    {
        label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
        photo: "1",
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
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
        label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
        photo: "1",
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
                name: "Transit to TMR",
                value: "300",
            },
            {
                name: "Delivered to City",
                value: "3500",
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
])

</script>


<template lang="pug">

TotalProgressbar(:data="mustSetTotalData", label="Must set total")
    template(#legend)
        ProgressbarLegend(:data="mustSetTotalData")
TotalProgressbar(:data="otherTotal", label="Other total")
    template(#legend)
        ProgressbarLegend(:data="otherTotal")

.panel
    CycleMaterialsList(:labels="['Must set', 'Image', 'Execution status']" v-if="mustSetProducts.length > 0")
        template(#item)
            CycleMaterialsItem(v-for="item in mustSetProducts" :item="item")

    CycleMaterialsList(:labels="['Other', 'Image', 'Execution status']" v-if="otherProducts.length > 0")
        template(#item)
            CycleMaterialsItem(v-for="item in otherProducts" :item="item")
</template>
