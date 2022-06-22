<script>
export default {

}
</script>


<template lang="pug">

div im multiselector

</template>


<style lang="scss" scoped>
.sidebar__tag-select {
    background-color: #dff7ff;
    padding: var(--pdsm);

    ::v-deep {
        .multiselect {
            border: none;
            outline: none;
            box-shadow: none;
        }

        .multiselect-placeholder {
            font-size: 13px;
            font-weight: 700;
        }

        .multiselect-tags-search {
            font-weight: 700;
            color: #333;
            font-size: 13px;
        }

        .multiselect-tags-search-wrapper {
            width: 100%;
        }

        .multiselect-clear {
            position: absolute;
            bottom: 8px;
        }

        .multiselect-caret {
            top: 10px;
            position: absolute;
        }

        .multiselect-dropdown {
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

        .multiselect-option {
            font-size: 13px;
        }
    }
}
</style>