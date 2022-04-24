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
                    name: "Planned",
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
                    name: "Planned",
                    value: 7000,
                },
            ],

            mustSetProducts: [
                {
                    target: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    planned: 4000,
                },
                {
                    target: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    planned: 4000,
                },
                {
                    target: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    planned: 4000,
                },
            ],

            otherProducts: [
                {
                    target: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    planned: 4000,
                },
                {
                    target: "GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",
                    photo: "1",
                    executed: 3500,
                    notExecuted: 500,
                    planned: 4000,
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
    .cycle-materials-list
        .cycle-materials-list-header
            .cycle-materials-header__label Must set
            .cycle-materials-header__label Image
            .cycle-materials-header__label Execution status

        .cycle-materials-item(v-for="item in mustSetProducts")
            .cycle-materials-item-data {{ item.target }}
            .cycle-materials-item-data
                img.cycle-materials-item__photo(
                    :src="itemPhoto(item.photo)",
                    v-if="item.photo !== null",
                    @click="() => showSingle(itemPhoto(item.photo))"
                )
            .cycle-materials-item-data
                ItemProgressbar(:inData="item")
                    template(#data)
                        ItemData(:inData="item")

    .cycle-materials-list
        .cycle-materials-list-header
            .cycle-materials-header__label Other
            .cycle-materials-header__label Image
            .cycle-materials-header__label Execution status

        .cycle-materials-item(v-for="item in otherProducts")
            .cycle-materials-item-data {{ item.target }}
            .cycle-materials-item-data
                img.cycle-materials-item__photo(
                    :src="itemPhoto(item.photo)",
                    v-if="item.photo !== null",
                    @click="() => showSingle(itemPhoto(item.photo))"
                )
            .cycle-materials-item-data
                ItemProgressbar(:inData="item")
                    template(#data)
                        ItemData(:inData="item")
</template>


<style lang="scss" scoped>
.cycle-materials-list {
    &:not(:first-child) {
        margin-top: var(--pdxl);
    }
}

::v-deep {
    .progressbar-label {
        min-width: 100px;
    }
}

.cycle-materials-item__photo {
    max-height: 100%;
    object-fit: contain;
    border-radius: var(--radius-8);
}

.cycle-materials-item {
    display: flex;
    align-items: stretch;
    border: 1px solid var(--grey-medium);
    border-radius: var(--radius-8);
    position: relative;
    margin-top: var(--pd);

    @include respond-to(small) {
        flex-wrap: wrap;
        .cycle-materials-item-data {
            width: 100%;
            flex: unset;
            &:not(:last-child) {
                &:after {
                    bottom: 0;
                    height: 1px;
                    width: calc(100% - 16px);
                    left: 8px;
                    top: unset;
                }
            }

            &:last-child {
                .progressbar-container {
                    margin-top: var(--pdxl);
                }
            }
        }
    }
}

.cycle-materials-item-data {
    flex: 1 0 0;
    padding: var(--pdlg);
    display: flex;
    align-items: center;
    &:nth-child(1) {
        flex-grow: 2;
    }
    &:nth-child(2) {
        flex-grow: 1;
    }
    &:nth-child(3) {
        flex-grow: 6;
    }
    &:not(:last-child) {
        &:after {
            content: "";
            position: absolute;
            right: 0;
            top: 8px;
            height: calc(100% - 16px);
            display: block;
            background-color: var(--grey-medium);
            width: 1px;
        }
    }
}

.cycle-materials-list-header {
    display: flex;
    align-items: center;
    border-radius: var(--radius-8);
    overflow: hidden;

    @include respond-to(small) {
        align-items: stretch;
    }
}

.cycle-materials-header__label {
    font-weight: 700;
    background-color: var(--grey);
    padding: var(--pdlg);
    flex: 1 0 0;
    &:nth-child(1) {
        flex-grow: 2;
    }
    &:nth-child(2) {
        flex-grow: 1;
    }
    &:nth-child(3) {
        flex-grow: 6;
    }

    @include respond-to(small) {
        flex: unset;
        &:nth-child(1) {
            flex-grow: 1;
        }
        &:nth-child(2) {
            flex-grow: 1;
        }
        &:nth-child(3) {
            flex-grow: 1;
        }
    }
}

::v-deep {
    .product-card-infographics {
        margin-top: 0;
    }

    .progressbar-wrapper {
        @include respond-to(large) {
            margin-right: 0 !important;
        }
    }

    .cycle-materials-item {
        .progressbar-container {
            width: 100%;
            @include respond-to(xxlarge) {
                flex-wrap: wrap;
            }

            .progressbar-wrapper {
                @include respond-to(xxlarge) {
                    width: 100%;
                }
                @include respond-to(xlarge) {
                    width: 100%;
                    margin-right: 0;
                    .progressbar {
                        max-width: unset;
                    }
                }
            }
        }

        .product-card-infographics {
            @include respond-to(xlarge) {
                margin-top: var(--pdlg);
                width: 100%;
            }
        }
    }

    .progressbar-wrapper {
        margin-right: var(--pdxl);
    }
}
</style>