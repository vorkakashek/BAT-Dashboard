<script>
export default {
    data() {
        return {
            totalData: [
                {
                    name: "Executed",
                    value: 15103,
                },
                {
                    name: "Delivered to TMR",
                    value: 6802,
                },
                {
                    name: "Delivered to City",
                    value: 16310,
                },
                {
                    name: "Not Delivered",
                    value: 800,
                },
                {
                    name: "Target",
                    value: 16700,
                },
            ],
            comparisonData: [
                {
                    label: "MBU",
                    executed: 301,
                    deliveredToTMR: 302,
                    deliveredToCity: 303,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "NW",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "South",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Volga-Centre",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Ural",
                    executed: 3997,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3999,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Siberia-FE",
                    executed: 40,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3900,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "asd-FE",
                    executed: 3788,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3800,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Sibasdsdaeria-FE",
                    executed: 2300,
                    deliveredToTMR: 1204,
                    deliveredToCity: 2303,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Sidsadberia-FE",
                    executed: 5,
                    deliveredToTMR: 1204,
                    deliveredToCity: 10,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Sibsdasderia-FE",
                    executed: 111,
                    deliveredToTMR: 1204,
                    deliveredToCity: 10,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "Sasdadsasd",
                    executed: 390,
                    deliveredToTMR: 5555,
                    deliveredToCity: 10,
                    notDelivered: 500,
                    target: 5000,
                },
                {
                    label: "Sasd123123adsasd",
                    executed: 4999,
                    deliveredToTMR: 9000,
                    deliveredToCity: 10,
                    notDelivered: 500,
                    target: 5000,
                },
            ],
            visible: false,
            index: 0,
            imgs: "",
        };
    },
    computed: {
        importPhoto() {
            return new URL(
                `./../../../assets/images/Cycle Materials/2.jpg`,
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
    h2 Cycle Materials
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")
        .comparison-items
            ComparisonItem(v-for="item in comparisonData" :comparisonData="item")
</template>

<style lang="scss" scoped>

</style>