<script setup>
import { computed, reactive } from 'vue'

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
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

</script>

<template lang="pug">
vue-easy-lightbox(
    :visible="state.visible",
    :imgs="state.imgs",
    :index="state.index",
    @hide="handleHide"
)

.product-card
    .product-card__header
        .product-card__header-name {{ product.name }}
        .product-card__header-type {{ product.type }}
    img.zoom.product-card__photo(
        :src="importPhoto(product.photo)",
        v-if="product.photo !== null",
        @click="() => showSingle(importPhoto(product.photo))"
    )
    //- ItemProgressbar(:data="product.stats")
    slot(name="progressbar")
        ItemProgressbar(:data="product.stats")
    ItemData(:data="product.stats")
    .type(v-if="product_vals.length > 0")
        label Type: 
        span(v-for="item in product_vals") {{ item }}
</template>

<style lang="scss" scoped>
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
    margin-top: var(--pdlg);
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
}

.product-card__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: auto;
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