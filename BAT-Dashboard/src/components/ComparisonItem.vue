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
    ItemProgressbar(:inData="comparisonData" v-if="!vertical")
        template(#data)
            ItemData(:inData="comparisonData")
    ItemProgressbarVertical(:inData="comparisonData" v-if="vertical")
        template(#data)
            ItemData(:inData="comparisonData")
</template>

<style lang="scss" scoped>
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