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
                    name: "Delivered to City",
                    value: 5900,
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
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
            ],

            otherProducts: [
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 301,
                    deliveredToTMR: 1204,
                    deliveredToCity: 3500,
                    notDelivered: 500,
                    target: 4000,
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
    TotalProgressbar(:inData="mustSetTotalData", label="Must set total")
        template(#legend)
            ProgressbarLegend(:inData="mustSetTotalData")
.panel
    TotalProgressbar(:inData="otherTotal", label="Other total")
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