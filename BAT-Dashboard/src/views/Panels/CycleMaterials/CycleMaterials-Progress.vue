<script setup>

import { ref } from 'vue'

const totalData = ref([
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
])

const itemList = ref([
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
    {
        label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
        executed: 3000,
        deliveredToTMR: 2,
        deliveredToCity: 2980,
        notDelivered: 500,
        target: 4000,
    },
])
</script>

<template lang="pug">

Teleport(to="#export-excel")
    ExportExcel(disabled)

TotalProgressbar(:inData="totalData")
    template(#legend)
        ProgressbarLegend(:inData="totalData")

.panel
    h2 Total
    .comparison-items
        ComparisonItem(
            v-for="item in itemList",
            :comparisonData="item",
            :vertical="true"
        )
</template>


<style lang="scss" scoped>
</style>