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
            comparisonData: [
                {
                    target: "MBU",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    planned: 3000,
                },
                {
                    target: "NW",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    planned: 3400,
                },
                {
                    target: "South",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    planned: 4100,
                },
                {
                    target: "Volga-Centre",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    planned: 2400,
                },
                {
                    target: "Ural",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    planned: 2000,
                },
                {
                    target: "Siberia-FE",
                    executed: 1204,
                    delivered: 1359,
                    notDelivered: 641,
                    planned: 4000,
                },
            ],
            visible: false,
            index: 0,
            imgs: "",
        };
    },
    computed: {
        productPhoto() {
            return new URL(
                `./../../../assets/images/Cycle Materials/2.jpg`,
                import.meta.url
            ).href;
        },
    },
    methods: {
        showSingle() {
            this.imgs = this.productPhoto;
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
    h2 ISF
    .comparison-wrap
        img(:src="productPhoto", @click="() => showSingle()")
        .comparison-items
            .comparison-item(v-for="item in comparisonData")
                .comparison-item-target {{ item.target }}
                ItemProgressbar(:inData="item")
                    template(#data)
                        ItemData(:inData="item")
</template>

<style lang="scss" scoped>
.comparison-wrap {
    display: flex;
    align-items: flex-start;
    img {
        max-width: 200px;
        object-fit: contain;
        margin-right: calc(var(--pdxl) * 2);
    }

    @include respond-to(xxlarge) {
        flex-wrap: wrap;
    }
}

.comparison-items {
    width: 100%;
    @include respond-to(xlarge) {
        width: 100%;
        margin-top: var(--pdxl);
    }
}

.comparison-item {
    width: 100%;
    background-color: #fff;
    border-radius: var(--radius-4);
    border: 1px solid #eeeeee;
    padding: var(--pdlg) var(--pdlg);
    margin-bottom: var(--pdsm);
    display: flex;
    align-items: center;

    &:hover {
        background-color: var(--grey);
        .comparison-item-target {
            color: var(--blue-light);
        }
    }

    @include respond-to(xlarge) {
        flex-wrap: wrap;
    }
}

.comparison-item-target {
    color: var(--blue-medium);
    font-weight: 700;
    font-size: 16px;
    width: 10%;
    flex-shrink: 0;
    min-width: 120px;
    @include respond-to(xlarge) {
        width: 100%;
        margin-bottom: var(--pdsm);
    }

    @include respond-to(large) {
        margin-bottom: var(--pdlg);
    }
}

.progressbar-container {
    flex-grow: 1;
}

::v-deep {
    .progressbar {
        max-width: 100% !important;
    }

    .progressbar-container {
        min-width: 300px;
        @include respond-to(xlarge) {
            min-width: 100%;
        }
    }

    .product-card-infographics {
        margin-left: var(--pdxl);
        // flex-grow: 1;
        margin-top: 0;
        span {
            &.planned {
                width: min-content;
            }
        }
        @include respond-to(xlarge) {
            width: 100%;
            margin-left: var(--pdxl);
            margin-top: 0;
        }
        @include respond-to(large) {
            margin-top: var(--pdlg);
            margin-left: 0;

            display: flex;
            flex-wrap: wrap;
            min-width: unset;
        }
    }

    .comparison-item {
        .progressbar-container {
            @include respond-to(xlarge) {
                flex-wrap: wrap;
            }
        }
        .progressbar-wrapper {
            @include respond-to(xlarge) {
                margin: var(--pdlg) 0;
                width: 100%;
            }
        }

        .product-card-infographics {
            @include respond-to(xlarge) {
                width: 100%;
                margin-left: 0;
                .planned {
                    margin-left: auto;
                }
            }
        }
    }
}
</style>