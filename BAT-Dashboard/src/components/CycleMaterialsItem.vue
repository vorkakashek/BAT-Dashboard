<script setup>

import { ref, reactive } from 'vue'
import ExportExcel from './ExportExcel.vue';

const props = defineProps(['item'])

const state = reactive({
    visible: false,
    index: 0,
    imgs: "",
})

const itemList = ref({
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
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 436,
                    percent: 10,
                },
                'Transit to city': {
                    qty: 43590,
                    percent: 40,
                },
                'Delivered to city': {
                    qty: 234,
                    percent: 20,
                },
                'Transit to TMR': {
                    qty: 645,
                    percent: 20,
                },
                'Delivered to TMR': {
                    qty: 52,
                    percent: 10,
                },
                'In Stock': {
                    qty: 642,
                    percent: 98,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
        {
            week: 'Week 22.2',
            number: '-3',
            dateStart: '01/06',
            dateEnd: '05/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 4352,
                    percent: 20,
                },
                'Delivered to city': {
                    qty: 345,
                    percent: 40,
                },
                'Transit to TMR': {
                    qty: 634,
                    percent: 10,
                },
                'Delivered to TMR': {
                    qty: 7345,
                    percent: 30,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 3452,
                    percent: 25,
                },
            }
        },
        {
            week: 'Week 23',
            number: '-2',
            dateStart: '06/06',
            dateEnd: '12/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 563,
                    percent: 10,
                },
                'Delivered to city': {
                    qty: 34534,
                    percent: 20,
                },
                'Transit to TMR': {
                    qty: 547,
                    percent: 20,
                },
                'Delivered to TMR': {
                    qty: 568,
                    percent: 50,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 345,
                    percent: 40,
                },
            }
        },
        {
            week: 'Week 24',
            number: '-1',
            dateStart: '13/06',
            dateEnd: '19/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to city': {
                    qty: 123,
                    percent: 10,
                },
                'Transit to TMR': {
                    qty: 2315,
                    percent: 30,
                },
                'Delivered to TMR': {
                    qty: 23145,
                    percent: 60,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 1345,
                    percent: 45,
                },
            }
        },
        {
            week: 'Week 25',
            number: '+1',
            dateStart: '20/06',
            dateEnd: '26/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to city': {
                    qty: 39,
                    percent: 10,
                },
                'Transit to TMR': {
                    qty: 5123,
                    percent: 20,
                },
                'Delivered to TMR': {
                    qty: 89345,
                    percent: 70,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 521513,
                    percent: 50,
                },
            }
        },
        {
            week: 'Week 26',
            number: '+2',
            current: true,
            dateStart: '20/06',
            dateEnd: '26/06',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to city': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to TMR': {
                    qty: 59349,
                    percent: 100,
                },
                'In Stock': {
                    qty: 206,
                    percent: 45,
                },
                'Executed': {
                    qty: 53452,
                    percent: 80,
                },
            }
        },
        {
            week: 'Week 27',
            number: '+3',
            dateStart: '09/05',
            dateEnd: '15/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to city': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'In Stock': {
                    qty: 0,
                    percent: 0,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
        {
            week: 'Week 28',
            number: '+4',
            dateStart: '16/05',
            dateEnd: '22/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to city': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'In Stock': {
                    qty: 0,
                    percent: 0,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
        {
            week: 'Week 29',
            number: '+5',
            dateStart: '23/05',
            dateEnd: '29/05',
            graph: {
                'Not Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to CS': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to city': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to city': {
                    qty: 0,
                    percent: 0,
                },
                'Transit to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'Delivered to TMR': {
                    qty: 0,
                    percent: 0,
                },
                'In Stock': {
                    qty: 0,
                    percent: 0,
                },
                'Executed': {
                    qty: 0,
                    percent: 0,
                },
            }
        },
    ],
})

const importPhoto = (photo) => new URL(`./../assets/images/Cycle Materials/${photo}.jpg`, import.meta.url).href

const show = () => state.visible = true

const showSingle = (path) => {
    state.imgs = path
    show()
}

const handleHide = () => state.visible = false

const modal = ref(null)

</script>

<template lang="pug">

ModalConstructor(modalName="CycleMaterialsModal", :data="itemList", ref="modal")

vue-easy-lightbox(
    :visible="state.visible",
    :imgs="state.imgs",
    :index="state.index",
    @hide="handleHide"
)

.cycle-materials-item.showmodal(@click="() => modal.show()" :class="{ new: item.new }")
    .cycle-materials-item-data {{ item.label }}
    .cycle-materials-item-data
        .cycle-materials-item__photo
            img(:src="importPhoto(item.photo)")
            .image-zoom(:src="importPhoto(item.photo)", v-if="item.photo !== null", @click.stop="() => showSingle(importPhoto(item.photo))")
                app-icon(name="fullscreen" size="24")
    .cycle-materials-item-data 
        ItemProgressbar(:data="item.stats")
            template(#data)
                ItemData(:data="item.stats")
</template>

<style lang="scss" scoped>
.new {
    &:after {
        content: 'new';
        position: absolute;
        left: var(--pdsm);
        top: var(--pdsm);
        background-color: rgb(239, 127, 127);
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        font-size: 13px;
        padding: 0 var(--pdsm);
        border-radius: var(--radius-8);
        letter-spacing: .05rem;
    }
}

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

    img {
        max-width: 100%;
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