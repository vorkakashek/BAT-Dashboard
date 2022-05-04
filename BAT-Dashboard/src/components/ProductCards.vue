<script>
export default {
    data() {
        return {
            visible: false,
            index: 0,
            imgs: "",
        };
    },
    methods: {
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

.product-card-wrap
    slot(name="items")
    
</template>


<style lang="scss" scoped>
.hidden {
    display: none;
}

.product-card-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    width: 100%;
    height: 100%;
    gap: 16px;
    align-content: stretch;
    @include respond-to (handlers) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}
.product-card {
    background-color: #fff;
    border-radius: var(--radius-4);
    border: 1px solid #e5e5e5;
    padding: var(--pdsm);
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
    height: 240px;
    object-fit: contain;
    margin: var(--pdlg) 0 var(--pdsm) 0;
}
</style>