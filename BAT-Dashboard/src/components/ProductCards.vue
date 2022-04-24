<script>
export default {
    props: ["inData"],
    data() {
        return {
            visible: false,
            index: 0,
            imgs: "",
            filteredOptions: null,
        };
    },
    inject: ["ISFFilter"],
    methods: {
        itemPhoto(photo) {
            return new URL(`./../assets/images/${photo}.jpg`, import.meta.url)
                .href;
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
        handleFilter() {
            if (this.ISFFilter !== "ALL") {
                this.filteredOptions = null;
                this.filteredOptions = this.inData.filter(
                    (item) => item.type == this.ISFFilter
                );
                console.log(this.filteredOptions);
            } else {
                this.filteredOptions = null;
                this.filteredOptions = this.inData;
                console.log(this.filteredOptions);
            }
        },
    },
    watch: {
        ISFFilter: function () {
            this.handleFilter();
        },
    },
    mounted() {
        this.handleFilter();
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
//- div inData: {{ inData }}
//- div {{ ISFFilter }}

.product-card-wrap
    .product-card(v-for="product in filteredOptions")
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
.hidden {
    display: none;
}

.product-card-wrap {
    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
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
    margin: var(--pdlg) 0 var(--pdxl) 0;
}
</style>