<script>
export default {
    props: ["comparisonData", "vertical"],
    data() {
        return {

        };
    },
};
</script>

<template lang="pug">
.comparison-item
    .comparison-item-label {{ comparisonData.label }}

    ItemProgressbar(:data="comparisonData.stats" v-if="!vertical")
        template(#data)
            ItemData(:data="comparisonData.stats")
    ItemProgressbarVertical(:data="comparisonData.stats" v-if="vertical")
        template(#data)
            ItemData(:data="comparisonData.stats")
    .comparison-item-type(v-if="comparisonData.type")
        label TYPE: 
        span {{ comparisonData.type }}
</template>

<style lang="scss" scoped>
.comparison-item-type {
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    margin-top: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >span {
        background-color: var(--grey-medium);
        padding: .25rem .5rem;
        border-radius: 4px;
        font-size: 13px;
    }

    >label {
        font-weight: 700;
        font-size: 12px;
    }
}

.comparison-item {
    // width: 100%;
    background-color: #fff;
    border-radius: var(--radius-4);
    border: 1px solid #eeeeee;
    padding: var(--pdlg) var(--pdlg);
    // margin-bottom: var(--pdsm);
    transition: all .25s ease;
    display: block;

    &:hover {
        box-shadow: var(--shadow);

        .comparison-item-label {
            color: var(--blue-light);
        }
    }
}

.comparison-item-label {
    color: var(--blue-medium);
    font-weight: 700;
    // font-size: 18px;
    font-size: 15px;
    background-color: var(--grey);
    display: block;
    padding: var(--pdsm) var(--pdlg);
    border-radius: var(--radius-4);
    text-align: center;
}

.progressbar-container {
    display: block;
    flex-direction: row-reverse;

    @include respond-to(xlarge-plus) {
        display: flex;
        flex-wrap: wrap;
    }
}

.product-card-infographics {
    background-color: #fafafa;
    padding: var(--pdsm);
    border-radius: var(--radius-4);
    margin-top: var(--pdlg);
    width: 100%;

    @include respond-to(xlarge-plus) {
        // margin-right: var(--pdxl);

        flex-grow: 1;
        flex-basis: 0;
    }
}

::v-deep {
    .progressbar-wrapper {
        margin: calc(var(--pdxl) * 1.5) 0 var(--pdxl) 0;
        width: 100%;

        @include respond-to(xlarge-plus) {
            flex-grow: 3;
        }
    }
}
</style>