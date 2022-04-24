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
                    name: "Planned",
                    value: 4000,
                },
            ],

            products: [
                {
                    name: "GLO_Modular Dispenser",
                    photo: "1",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Premium Dispenser",
                    photo: "2",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Modular Dispenser",
                    photo: "3",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Premium Dispenser",
                    photo: "4",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Device Premium Presenter 2 sku",
                    photo: "2",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Shelf Stopper",
                    photo: "1",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Device Premium Presenter 2 sku",
                    photo: "3",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 2641,
                    planned: 4000,
                },
                {
                    name: "GLO_Shelf Stopper",
                    photo: "4",
                    executed: 1493,
                    delivered: 2988,
                    notDelivered: 2641,
                    planned: 4000,
                },
            ],
        };
    },
};
</script>


<template lang="pug">
//- Filters
.panel
    TotalProgressbar(:inData="totalData")
        template(#legend)
            ProgressbarLegend(:inData="totalData")

.panel
    product-cards(:inData="products")
    
</template>