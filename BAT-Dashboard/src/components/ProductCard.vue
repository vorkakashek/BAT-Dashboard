<script>
export default {
    props: ["product"],
    data() {
        return {};
    },
    methods: {
        itemPhoto(photo) {
            return new URL(`./../assets/images/${photo}.jpg`, import.meta.url)
                .href;
        },
    },
};
</script>

<template lang="pug">
.product-card
    .product-card__header
        .product-card__header-name {{ product.name }}
        .product-card__header-type {{ product.type }}
    img.product-card__photo(
        :src="itemPhoto(product.photo)",
        v-if="product.photo !== null",
        @click="() => showSingle(itemPhoto(product.photo))"
    )
    ItemProgressbar(:inData="product")
    ItemData(:inData="product")
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
    transition: all .25s ease;

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
    margin: var(--pdxl) 0;
}
</style>