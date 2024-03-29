<script setup>
import { computed, reactive, ref } from 'vue'
// import ItemProgressbar_v2 from '@/components/Progress Bars/ItemProgressbar_v2.vue';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    hasTotal: {
        type: Boolean,
        required: false,
        default: false
    }
})

const state = reactive({
    visible: false,
    index: 0,
    imgs: '',
})

const total = computed(() => {
    if(props.hasTotal) {
        return props.product.stats.reduce((a, b) => a + Number(b.value), 0);
    }
})

const importPhoto = (photo) => new URL(`./../assets/images/${photo}.jpg`, import.meta.url).href;

const showSingle = (path) => {
    state.imgs = path;
    show();
}

const show = () => state.visible = true

const handleHide = () => state.visible = false


const product_vals = computed(() => {
    let product_keys = Object.keys(props.product).filter((e) => e.includes('type')),
        arr = []

    Object.entries(props.product).forEach((el) => {
        product_keys.forEach((k) => {
            if (el.includes(k)) {
                arr.push(el[1])
                // console.log(el[1])
            }
        })
    })
    return arr
})

const product_vals_doc = computed(() => {
    let product_keys = Object.keys(props.product).filter((e) => e.includes('doc')),
        arr = []

    Object.entries(props.product).forEach((el) => {
        product_keys.forEach((k) => {
            if (el.includes(k)) {
                arr.push(el[1])
                // console.log(el[1])
            }
        })
    })
    return arr
})

let modal = ref()
let modalGraph = ref()
let clicked = ref(false)

let showModal = () => {
    clicked.value = true
    modal.value.show()
}

let showModalGraph = () => {
    clicked.value = true
    modalGraph.value.show()
}

const manyPhotos = computed(() => props.product.info && props.product.info.photo !== undefined)

let showPhoto = () => {
    manyPhotos.value ? showModal() : showSingle(importPhoto(props.product.photo))
}

</script>

<template lang="pug">
vue-easy-lightbox(
    :visible="state.visible",
    :imgs="state.imgs",
    :index="state.index",
    @hide="handleHide"
)

ModalConstructor(modalName="ProductCardModal", :data="product", ref="modal", :dialog="false", styles="max-width: 900px; margin: auto;")
ModalConstructor(modalName="ProductCardModalGraph", :data="product.graph", ref="modalGraph")

//- (:class="{ interactive: product.info}")

.product-card
    .product-card__header
        .product-card__header-name(v-if="product.name") {{ $t(`${product.name}`) }}
        .product-card__header-type(v-if="product.type") {{ product.type }}
        //- .product-card__header-percentage(v-if="product.percentage" :class="{ 'color-pale': product.notImportant }") {{ product.percentage }}
    .product-card__photo_wrap
        .details_icon(v-if="manyPhotos")
            app-icon(name="details")
        .details_icon.details_icon-graph(
                v-if='product.graph'
                @click="() => showModalGraph()"
            )
            app-icon(name="bar_chart_4_bars")
        img.product-card__photo(
            :src="importPhoto(product.photo)",
            :class="{'interactive': manyPhotos, 'zoom': product.photo !== undefined}"
            @click="showPhoto()",
        )
    //- .product-card__photo_wrap(v-else-if="product.photo !== undefined")
    //-     .details_icon.details_icon-graph(
    //-             @click="() => showModalGraph()"
    //-             v-if='product.graph'
    //-         )
    //-         app-icon(name="details")
    //-     img.zoom.product-card__photo(
    //-         :src="importPhoto(product.photo)",
    //-         @click="() => showSingle(importPhoto(product.photo))"
    //-     )
    slot(name="progressbar")
        .progressbar_outer
            ItemProgressbar(:data="[...product.stats, hasTotal ? {name: 'Total', value: total} : '']" :ignore="product.ignore")
    slot(name="legend")
        ItemData(:data="hasTotal ? [...product.stats, {name: 'Total', value: total}] : product.stats")
    .type(v-if="product_vals.length > 0")
        label Type: 
        span(v-for="item in product_vals") {{ item }}
    .type(v-if="product_vals_doc.length > 0")
        label DOC Type: 
        span(v-for="item in product_vals_doc") {{ item }}
</template>

<style lang="scss" scoped>
img.interactive {
    cursor: pointer;
}

.progressbar_outer {
    margin-bottom: 24px;
}

.details_icon {
    padding: 2px 4px;
    background-color: var(--grey-light);
    display: inline-flex;
    border-radius: 4px;
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 10;
    &-graph {
        left: auto;
        right: 8px;
        cursor: pointer;
        background-color: var(--blue-light);
        width: 28px;
        height: 28px;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;
        :deep(.icon) {
            fill: white
        }
        &:hover {
            background-color: var(--blue-light-hover);
        }
    }
}

.product-card__photo_wrap {
    position: relative;
    margin-bottom: 32px;
    height: 200px;
    margin-top: auto;
    img {
        transition: all .3s ease;
    }

    &:hover {
        img {
            opacity: .75;
        }
    }
}

.type {
    text-align: center;
    text-transform: uppercase;
    // margin: 0 auto;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
        font-weight: 700;
        font-size: 12px;
        margin-right: auto;
    }

    span {
        background-color: var(--grey-medium);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 13px;
        margin-left: 4px;
    }
}

.product-card-infographics {
    // margin-top: var(--pdlg);
    margin-top: 4px;
}

.product-card {
    background-color: #fff;
    border-radius: var(--radius-4);
    border: 1px solid #e5e5e5;
    padding: var(--pdsm);
    transition: all 0.25s ease;

    display: flex;
    flex-direction: column;

    &:hover {
        box-shadow: var(--shadow);
    }

    &.interactive {
        // &:hover {
        //     .product-card__header-name {
        //         background-color: var(--blue-dark);
        //         color: #fff;
        //     }
        // }
    }
}

.product-card__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: auto;
    margin-bottom: 12px;
    gap: 24px;
    align-items: center;
}

.product-card__header-type {
    padding: var(--pd) var(--pdsm);
    font-weight: 700;
    color: var(--blue-light);
}
.product-card__header-percentage {
    background-color: var(--tomato);
    font-weight: 700;
    color: #fff;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 4px;
    &.color-pale {
        background-color: var(--orange-pale);
    }
}

.product-card__header-name {
    font-weight: 700;
    background-color: var(--grey-light);
    border-radius: var(--radius-4);
    color: var(--blue-dark);
    display: inline-block;
    padding: var(--pd) var(--pdsm);
    transition: all .3s ease;
}

.product-card__photo {
    width: 100%;
    height: 200px;
    object-fit: contain;
    // margin: var(--pdlg) 0 var(--pdxl) 0;
    // margin-bottom: 32px;
}

// .progressbar-container {
//     // margin: var(--pdxl) 0 var(--pdxxl) 0;

// }
</style>