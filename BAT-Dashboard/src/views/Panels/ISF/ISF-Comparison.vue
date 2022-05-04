<script setup>
import { computed } from "vue";
</script>

<script>
export default {
    data() {
        return {
            ISFFilter: "ALL",
            visible: false,
            index: 0,
            imgs: "",
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
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 3000,
                },
                {
                    label: "NW",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 3400,
                },
                {
                    label: "South",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 4100,
                },
                {
                    label: "Volga-Centre",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 2400,
                },
                {
                    label: "Ural",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 2000,
                },
                {
                    label: "Siberia-FE",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    target: 4000,
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
    computed: {
        importPhoto() {
            return new URL(
                `./../../../assets/images/ISF/PRO.jpg`,
                import.meta.url
            ).href;
        },
    },
    methods: {
        showSingle() {
            this.imgs = this.importPhoto;
            this.show();
        },
        show() {
            this.visible = true;
        },
        handleHide() {
            this.visible = false;
        },
        updateISFFilter(value) {
            this.ISFFilter = value
        }
    },
};
</script>


<template lang="pug">
vue-easy-lightbox(
    :visible="visible",
    :imgs="imgs",
    :index="index",
    @hide="handleHide"
)

.panel
    TotalProgressbar(:inData="totalData")
        template(#legend)
            ProgressbarLegend(:inData="totalData")


.panel
    h2 ISF
    .comparison-wrap
        img.zoom(:src="importPhoto", @click="() => showSingle()")
        .comparison-items
            ISFFilter
            ComparisonItem(v-for="item in comparisonData" :comparisonData="item")

</template>

<style lang="scss" scoped>


</style>