
<script setup>

const props = defineProps({
    data: Object,
})


function importImage(photo) {
    return new URL(`./../../assets/images/Cycle Materials/${photo}.jpg`, import.meta.url).href;
}

</script>

<template lang="pug">
    
.modal-header
    img(:src="importImage(data.image)")
    .modal-header-section
        .name {{ data.name }}
        .header-data-container
            .header-data 
                span Total qty
                span {{ data.totalqty }}
            .header-data(v-if="data.target !== undefined")
                span Target
                span {{ data.target }}
            .header-data 
                span Central storage
                span {{ data.centralstorage }}

</template>

<style lang="scss" scoped>
.modal-header {
    display: flex;
    align-items: center;
    background-color: #F6F7F6;
    border-radius: var(--radius-8);
    padding: var(--pdsm);
    margin-bottom: var(--pdlg);

    img {
        border-radius: var(--radius-8);
        max-width: 280px;
        max-height: 80px;
        box-shadow: var(--shadow);
    }

    @include respond-to (medium) {
        flex-wrap: wrap;

        img {
            width: 100%;
            max-height: 100px;
            object-fit: contain;
            margin-bottom: var(--pdlg);
        }
    }

}

.header-data-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    @include respond-to (handlers) {
        justify-content: center;
        width: 100%;
    }
}

.modal-header-section {
    display: flex;
    align-items: center;
    flex-grow: 1;

    @include respond-to (handlers) {
        flex-wrap: wrap;
    }
}

.name {
    font-weight: 700;
    color: #333;
    margin-left: var(--pdlg);
    margin-right: auto;
    max-width: 50rem;

    @include respond-to (handlers) {
        width: 100%;
        text-align: center;
        margin-bottom: var(--pdlg);
    }
}

.header-data {
    border-radius: var(--radius-8);
    background-color: #fff;
    text-align: center;
    padding: var(--pdsm) var(--pdlg);
    margin-left: var(--pdsm);
    box-shadow: var(--shadow);

    span {
        display: block;
        letter-spacing: .03rem;

        &:first-child {
            font-size: 11px;
            color: #666;
        }

        &:last-child {
            font-size: 14px;
            font-weight: 700;
        }
    }

    @include respond-to (handlers) {
        margin-left: 0;

        &:not(:first-child) {
            margin-left: var(--pdlg);
        }
    }
}
</style>