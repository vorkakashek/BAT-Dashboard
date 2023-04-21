<script setup>
import { computed, reactive, ref } from 'vue'
// import ItemProgressbar_v2 from '@/components/Progress Bars/ItemProgressbar_v2.vue';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
})

const state = reactive({
    visible: false,
    index: 0,
    imgs: '',
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

let modal = ref()
let clicked = ref(false)

let showModal = () => {
    clicked.value = true
    modal.value.show()
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

//- (:class="{ interactive: product.info}")

.product-card
    .product-card__header
        .product-card__header-name {{ product.name }}
        .product-card__header-type {{ product.type }}
    .product-card__photo_wrap(v-if="product.info && product.info.photo !== undefined")
        .details_icon
            app-icon(name="details")
        img.product-card__photo.interactive(
            :src="importPhoto(product.photo)",
            @click="() => showModal()",
        )
    img.zoom.product-card__photo(
        :src="importPhoto(product.photo)",
        v-else-if="product.photo !== undefined",
        @click="() => showSingle(importPhoto(product.photo))"
    )
    slot(name="progressbar")
        .progressbar_outer
            ItemProgressbar(:data="product.stats")
    slot(name="legend")
        ItemData(:data="product.stats")
    .type(v-if="product_vals.length > 0")
        label Type: 
        span(v-for="item in product_vals") {{ item }}
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
}

.product-card__photo_wrap {
    position: relative;
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
}

.product-card__header-type {
    padding: var(--pd) var(--pdsm);
    font-weight: 700;
    color: var(--blue-light);
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
    margin-bottom: 32px;
}

// .progressbar-container {
//     // margin: var(--pdxl) 0 var(--pdxxl) 0;

// }
</style>