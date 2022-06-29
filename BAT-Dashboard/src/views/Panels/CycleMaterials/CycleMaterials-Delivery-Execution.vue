<script setup>
import CycleMaterialsList from "@/components/CycleMaterialsList.vue";
import CycleMaterialsItem from "@/components/CycleMaterialsItem.vue";

</script>

<script>
export default {
    data() {
        return {
            mustSetTotalData: [
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
            ],
            otherTotal: [
                {
                    name: "Executed",
                    value: 139,
                },
                {
                    name: "Delivered to TMR",
                    value: 4124,
                },
                {
                    name: "Transit to TMR",
                    value: 300,
                },
                {
                    name: "Delivered to City",
                    value: 9000,
                },
                {
                    name: "Not Delivered",
                    value: 1100,
                },
                {
                    name: "Target",
                    value: 7000,
                },
            ],

            mustSetProducts: [
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
            ],

            otherProducts: [
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
            ],

            visible: false,
            index: 0,
            imgs: "",
        };
    },
    methods: {
        itemPhoto(photo) {
            return new URL(
                `./../../../assets/images/Cycle Materials/${photo}.jpg`,
                import.meta.url
            ).href;
        },

        showSingle(path) {
            this.imgs = path;
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
    TotalProgressbar(:data="mustSetTotalData", label="Must set total")
        template(#legend)
            ProgressbarLegend(:inData="mustSetTotalData")
.panel
    TotalProgressbar(:data="otherTotal", label="Other total")
        template(#legend)
            ProgressbarLegend(:inData="otherTotal")

.panel
    CycleMaterialsList(:labels="['Must set', 'Image', 'Execution status']")
        template(#item)
            CycleMaterialsItem(v-for="item in mustSetProducts" :item="item")

    CycleMaterialsList(:labels="['Other', 'Image', 'Execution status']")
        template(#item)
            CycleMaterialsItem(v-for="item in otherProducts" :item="item")

</template>


<style lang="scss" scoped>
</style>