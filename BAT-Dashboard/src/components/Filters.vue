<script>
export default {
    props: ['multiselects', 'disableAllClear'],
    data() {
        return {

        };
    },
    methods: {
        clearFilter: function () {
            for(var i = 0; this.multiselects.length > i; i++) {
                this.multiselects[i].value = null;
            }
        }
    }
};
</script>

<template lang="pug">
.filters
    Multiselect(
        v-for="multiselect in multiselects",
        :options="multiselect.options",
        v-model="multiselect.value",
        mode="single",
        :searchable="false",
        :placeholder="multiselect.placeholder"
    )
    .clear-filters(@click="clearFilter" v-if="!disableAllClear") Clear Filter
</template>

<style lang="scss" scoped>
.clear-filters {
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    margin-left: var(--pdxl);
    text-decoration: underline;
    opacity: .5;
    &:hover {
        opacity: 1;
        color: var(--blue-light);
    }

    @include respond-to(large) {
        order: -1;
        margin-left: 0;
        margin-right: auto;
        margin-top: 9px;
    }
}

.filters {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include respond-to(large) {
        flex-wrap: wrap;
        align-items: flex-start;
    }

    &::v-deep {
        .multiselect {
            margin: 0;
            width: fit-content;
            border-radius: 100px;
            border: var(--ms-border-width,1px) solid rgb(227, 227, 227);
            background-color: var(--blue-light);
            
            &:not(:first-child) {
                margin-left: var(--pdsm);
            }
            &.is-active {
                box-shadow: none;
                border: var(--ms-border-width,1px) solid var(--ms-border-color,#b3b5b9);
            }
            @include respond-to(large) {
                margin-bottom: var(--pdsm);
                &:first-child {
                    margin-left: var(--pdxl);
                }
            }
        }

        .multiselect-single-label {
            position: unset;
            padding-left: var(--pdlg);
            color: #fff;
            padding-right: 12px;
        }

        .multiselect-option {
            max-width: 100%;
            overflow: hidden;
            font-size: 13px;
            > span {
                max-width: 100%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            
        }

        .multiselect-dropdown {
            overflow-y: auto;
            border-radius: var(--radius-4);
            bottom: -2px;
            min-width: min-content;
            &::-webkit-scrollbar {
                width: 4px;
            }
            &::-webkit-scrollbar-track {
                background-color: #e4e4e4;
            }
            &::-webkit-scrollbar-thumb {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        }

        .multiselect-placeholder {
            // font-weight: 700;
            position: relative;
            padding-right: 12px;
            font-size: 14px;
            color: #fff;
            opacity: .85;
        }

        .multiselect-single-label-text {
            font-weight: 700;
            font-size: 14px;
            // color: var(--blue-light);
        }

        .multiselect-caret,
        .multiselect-clear-icon {
            background-color: #fff;
        }
    }
}
</style>