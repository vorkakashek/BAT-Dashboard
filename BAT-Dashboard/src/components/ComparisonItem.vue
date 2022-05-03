<script>
export default {
    props: ["comparisonData"],
    data() {
        return {
            
        };
    },
};
</script>

<template lang="pug">
.comparison-item
    .comparison-item-label {{ comparisonData.label }}
    ItemProgressbar(:inData="comparisonData")
        template(#data)
            ItemData(:inData="comparisonData")
</template>

<style lang="scss" scoped>
.comparison-item {
    width: 100%;
    background-color: #fff;
    border-radius: var(--radius-4);
    border: 1px solid #eeeeee;
    padding: var(--pdlg) var(--pdlg);
    margin-bottom: var(--pdsm);
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
    font-size: 18px;
    background-color: var(--grey);
    display: block;
    padding: var(--pd) var(--pdlg);
    border-radius: var(--radius-4);
    text-align: center;
}

.progressbar-container {
    display: block;
    flex-direction: row-reverse;
    @include respond-to(xlarge-plus) {
        display: flex;
    }
}

.product-card-infographics {
    background-color: #fafafa;
    padding: var(--pdsm);
    border-radius: var(--radius-4);
    margin-top: var(--pdlg);
    @include respond-to(xlarge-plus) {
        margin-right: var(--pdxl);

        flex-grow: 1;
        flex-basis: 0;
    }
}

::v-deep {
    .progressbar-wrapper {
        margin: calc(var(--pdxl) * 1.5) 0 var(--pdxl) 0;
        @include respond-to(xlarge-plus) {
            flex-grow: 3;
            margin: 0;
        }
    }
}
</style>