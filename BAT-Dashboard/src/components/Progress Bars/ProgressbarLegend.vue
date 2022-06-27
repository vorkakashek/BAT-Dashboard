<script>
export default {
    props: {
        inData: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        deleteSpaces(item) {
            return item.name.replace(/\s+/g, '');
        }
    }
};
</script>


<template lang="pug">
//- Object.keys(inData)[index]

.progressbar-legend
    .progressbar-legend__item(
        v-for="item in inData",
        :class="deleteSpaces(item)"
    )
        .progressbar-legend__item-desc
            .progressbar-legend__item-name {{ item.name }}
            .progressbar-legend__item-value {{ item.value }}

</template>

<style lang="scss" scoped>
.progressbar-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    border-radius: var(--radius-8);
    border: 1px solid #EFEFEF;
    padding: var(--pdsm) var(--pdlg) 0 var(--pdlg);

    @include respond-to(medium) {
        margin-left: 0;
        margin-top: var(--pdsm);
        width: 100%;
    }

    @include respond-to(handlers) {
        flex-wrap: wrap;
    }
}

.progressbar-legend__item-name {
    font-size: 15px;
    line-height: 1;
    opacity: 0.75;
}

.progressbar-legend__item-value {
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
}

.progressbar-legend__item {
    // text-align: center;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    // padding: var(--pdsm) var(--pdlg);
    margin-bottom: var(--pdsm);

    &:not(.Target) {
        margin-right: var(--pdlg);

        &:before {
            content: "";
            display: block;
            vertical-align: middle;
            border-radius: var(--radius-8);
            width: 32px;
            height: 32px;
            background-color: #e5e5e5;
            margin-right: 10px;
            flex-shrink: 0;
        }
    }

    &.Delivered {
        &:before {
            background-color: var(--green-light);
        }
    }

    &.DeliveredtoCity {
        &:before {

            background-color: var(--yellow);
        }
    }

    &.DeliveredtoTMR {
        &:before {
            background-color: var(--green-light);
        }
    }
    &.TransittoTMR {
        &:before {
            background-color: #E2F0D9;
        }
    }

    &.NotDelivered {
        &:before {
            background-color: #e5e5e5;
        }
    }

    &.Executed {
        &:before {
            background-color: var(--green);
        }
    }

    &.Target {
        margin-left: var(--pdxl);
        background-color: var(--color-target);
        padding: var(--pdsm) var(--pdlg);
        border-radius: var(--radius-8);
        
        // .progressbar-legend__item-value {
        //     &:after {
        //         content: "]";
        //     }
        //     &:before {
        //         content: "[";
        //     }
        // }
        .progressbar-legend__item-name {
            // font-weight: 700;
            margin-bottom: var(--pd);
        }
    }

    @include respond-to(handlers) {
        margin-bottom: var(--pdsm);
    }
}
</style>