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


TotalProgressbar(:data="totalData")
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