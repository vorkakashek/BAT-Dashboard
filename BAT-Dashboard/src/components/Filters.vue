<script>
import Dropdown from './Dropdown.vue';
export default {
    props: ['multiselects', 'disableAllClear'],
    data() {
        return {

        };
    },
    components: {
        Dropdown
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
    .filters__row
        Dropdown(
            v-for="multiselect in multiselects",
            :options="multiselect.options",
            :placeholder="multiselect.placeholder",
            :multiselect="multiselect.multiselect",
            v-model="multiselect.value",
            :value="multiselect.value",
        )
    //- Multiselect(
    //-     v-for="multiselect in multiselects",
    //-     :options="multiselect.options",
    //-     v-model="multiselect.value",
    //-     mode="single",
    //-     :searchable="false",
    //-     :placeholder="multiselect.placeholder"
    //- )
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
    margin-top: 32px;
    flex-wrap: wrap;
    &__row {
        flex-wrap: wrap;
        display: flex;
        gap: 4px;
        &>*:nth-child(1) {
            margin-right: 28px;
        }
    }
    @include respond-to(large) {
        flex-wrap: wrap;
        align-items: flex-start;
    }
}
</style>