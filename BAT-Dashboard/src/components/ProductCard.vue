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
    ItemProgressbar(:data="product.stats")
    ItemData(:data="product.stats")
</template>

<style lang="scss" scoped>
.product-card-infographics {
    margin-top: var(--pdlg);
}

.product-card {
    background-color: #fff;
    border-radius: var(--radius-4);
    border: 1px solid #e5e5e5;
    padding: var(--pdsm);
    transition: all 0.25s ease;

    &:hover {
        box-shadow: var(--shadow);
    }
}

.product-card__header {
    display: flex;
    justify-content: space-between;
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
    margin: var(--pdlg) 0 var(--pdxl) 0;
}

.progressbar-container {
    margin: var(--pdxl) 0 var(--pdxxl) 0;
}
</style>