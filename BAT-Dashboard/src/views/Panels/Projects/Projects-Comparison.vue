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
            visible: false,
            index: 0,
            imgs: "",
        };
    },
    computed: {
        importPhoto() {
            return new URL(
                `./../../../assets/images/project-1.jpg`,
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
    h2 Projects
    .comparison-wrap
        .comparison-aside
            img.zoom(:src="importPhoto", @click="() => showSingle()")
        .comparison-items
            ComparisonItem(v-for="item in comparisonData" :comparisonData="item")
</template>

<style lang="scss" scoped>
</style>