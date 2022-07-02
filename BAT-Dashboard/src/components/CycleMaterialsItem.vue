<script>

export default {
    props: ["item"],
    data() {
        return {
            visible: false,
            modalVisible: false,
            index: 0,
            imgs: "",
            cycleMaterialsData: {
                info: {
                    name: 'GC_A_TN_Big_Mini_Sas # Lucky Strike (221100591, 221200665, 221200666, 221200668, 221200669, 221200670, 221200671, 221200672)',
                    image: 3,
                    targetPercent: 89.3,
                    target: 13400,
                    totalqty: 15800,
                    centralstorage: '02/05/2022',
                },
                weeks: [
                    {
                        week: 'Week 22.1',
                        number: '-4',
                        dateStart: '30/05',
                        dateEnd: '31/05',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 10,
                            transitToCity: 40,
                            deliveredToCity: 20,
                            transitToTMR: 20,
                            deliveredToTMR: 10,
                            executed: 0,
                        }
                    },
                    {
                        week: 'Week 22.2',
                        number: '-3',
                        dateStart: '01/06',
                        dateEnd: '05/06',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 20,
                            deliveredToCity: 40,
                            transitToTMR: 10,
                            deliveredToTMR: 30,
                            executed: 25,
                        }
                    },
                    {
                        week: 'Week 23',
                        number: '-2',
                        dateStart: '06/06',
                        dateEnd: '12/06',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 10,
                            deliveredToCity: 20,
                            transitToTMR: 20,
                            deliveredToTMR: 50,
                            executed: 40,
                        }
                    },
                    {
                        week: 'Week 24',
                        number: '-1',
                        dateStart: '13/06',
                        dateEnd: '19/06',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 0,
                            deliveredToCity: 10,
                            transitToTMR: 30,
                            deliveredToTMR: 60,
                            executed: 45,
                        }
                    },
                    {
                        week: 'Week 25',
                        number: '+1',
                        dateStart: '20/06',
                        dateEnd: '26/06',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 0,
                            deliveredToCity: 10,
                            transitToTMR: 20,
                            deliveredToTMR: 70,
                            executed: 50,
                        }
                    },
                    {
                        week: 'Week 26',
                        number: '+2',
                        current: true,
                        dateStart: '20/06',
                        dateEnd: '26/06',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 0,
                            deliveredToCity: 0,
                            transitToTMR: 0,
                            deliveredToTMR: 100,
                            executed: 80,
                        }
                    },
                    {
                        week: 'Week 27',
                        number: '+3',
                        dateStart: '09/05',
                        dateEnd: '15/05',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 0,
                            deliveredToCity: 0,
                            transitToTMR: 0,
                            deliveredToTMR: 0,
                            executed: 0,
                        }
                    },
                    {
                        week: 'Week 28',
                        number: '+4',
                        dateStart: '16/05',
                        dateEnd: '22/05',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 0,
                            deliveredToCity: 0,
                            transitToTMR: 0,
                            deliveredToTMR: 0,
                            executed: 0,
                        }
                    },
                    {
                        week: 'Week 29',
                        number: '+5',
                        dateStart: '23/05',
                        dateEnd: '29/05',
                        graph: {
                            notDeliveredToCS: 0,
                            deliveredToCS: 0,
                            transitToCity: 0,
                            deliveredToCity: 0,
                            transitToTMR: 0,
                            deliveredToTMR: 0,
                            executed: 0,
                        }
                    },
                ]
            },
        };
    },
    methods: {
        importPhoto(photo) {
            return new URL(`./../assets/images/Cycle Materials/${photo}.jpg`, import.meta.url).href;
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
        // 
        showmodal() {
            this.modalVisible = true;
            document.querySelector('body').style.overflow = "hidden";
        },
        hideModal() {
            this.modalVisible = false;
            document.querySelector('body').removeAttribute("style");
        }
    },
};
</script>


<template lang="pug">

ModalConstructor(
    :visible="modalVisible",
    modalName="CycleMaterialsModal",
    @hide="hideModal", 
    :data="cycleMaterialsData"
)

vue-easy-lightbox(
    :visible="visible",
    :imgs="imgs",
    :index="index",
    @hide="handleHide"
)


.cycle-materials-item.showmodal(@click="() => showmodal()")
    .cycle-materials-item-data {{ item.label }}
    .cycle-materials-item-data
        img.zoom.cycle-materials-item__photo(
            :src="importPhoto(item.photo)",
            v-if="item.photo !== null",
            @click.stop="() => showSingle(importPhoto(item.photo))"
        )
    .cycle-materials-item-data
        ItemProgressbar(:data="item.stats")
            template(#data)
                ItemData(:data="item.stats")
</template>


<style lang="scss" scoped>
.panel {
    margin-left: var(--pdlg);
    margin-right: var(--pdlg);
}

.cycle-materials-item__photo {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: var(--radius-4);

    @include respond-to(medium) {
        width: auto;
        margin: 0 auto;
    }
}

.cycle-materials-item {
    display: flex;
    align-items: stretch;
    border: 1px solid var(--grey-medium);
    border-radius: var(--radius-8);
    position: relative;
    margin-top: var(--pdlg);
    transition: all .2s var(--tr-2);

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
        }
    }

    &:hover {
        box-shadow: var(--shadow);
    }
}

.product-card-infographics {
    @include respond-to (xlarge) {
        margin-top: var(--pdlg);
        width: 100%;
    }
}

::v-deep {
    .progressbar-container {
        flex-grow: 1;

        .progressbar-wrapper {
            flex-grow: 3;

            @include respond-to(xlarge-plus) {
                margin-right: var(--pdlg);
            }

            @include respond-to(xlarge) {
                margin: var(--pdxl) 0;
                width: 100%;
            }
        }

        @include respond-to(xlarge) {
            flex-wrap: wrap;
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
        flex-basis: 200px;

        @include respond-to (xlarge) {
            // flex-grow: 2;

        }
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

    @include respond-to(medium) {
        justify-content: center;
        text-align: center;
    }
}
</style>