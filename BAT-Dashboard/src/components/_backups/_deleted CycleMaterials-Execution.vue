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
                    value: 3200,
                },
                {
                    name: "Not Executed",
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
                    value: 5900,
                },
                {
                    name: "Not Executed",
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
                    executed: 3500,
                    notExecuted: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    target: 4000,
                },
            ],

            otherProducts: [
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    target: 4000,
                },
                {
                    label: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    target: 4000,
                },
            ],
            // visible: false,
            // index: 0,
            // imgs: "",
        };
    },
    methods: {
        // showSingle(path) {
        //     this.imgs = path;
        //     this.show();
        // },
        // show() {
        //     this.visible = true;
        // },
        // handleHide() {
        //     this.visible = false;
        // },
    },
};
</script>

<template lang="pug">
//- vue-easy-lightbox(
//-     :visible="visible",
//-     :imgs="imgs",
//-     :index="index",
//-     @hide="handleHide"
//- )


.panel
    TotalProgressbar(:inData="mustSetTotalData")
        template(#legend)
            ProgressbarLegend(:inData="mustSetTotalData", label="Must set total")
.panel
    TotalProgressbar(:inData="otherTotal")
        template(#legend)
            ProgressbarLegend(:inData="otherTotal", label="Other total")

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