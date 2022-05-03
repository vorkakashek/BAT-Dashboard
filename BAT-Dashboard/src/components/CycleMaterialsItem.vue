<script>
export default {
    props: ["item"],
    data() {
        return {
            visible: false,
            index: 0,
            imgs: "",
        }
    },
    methods: {
        itemPhoto(photo) {
            return new URL(
                `./../assets/images/Cycle Materials/${photo}.jpg`,
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

.cycle-materials-item
    .cycle-materials-item-data {{ item.label }}
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
.cycle-materials-item__photo {
    max-height: 100%;
    height: 60px;
    width: 100%;
    object-fit: cover;
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
}

.product-card-infographics {
    flex-grow: 1;
    flex-basis: 0;
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