<script>
export default {
    props: ["labels"],
    data() {
        return {};
    },
};
</script>


<template lang="pug">
.cycle-materials-list
    .cycle-materials-list-header 
        .cycle-materials-header__label(v-for="label in labels") {{ label }}
    slot(name="item")
</template>


<style lang="scss" scoped>

.cycle-materials-list {
    &:not(:first-child) {
        margin-top: var(--pdxl);
    }
}


.cycle-materials-list-header {
    display: flex;
    align-items: center;
    border-radius: var(--radius-8);
    overflow: hidden;

    @include respond-to(small) {
        align-items: stretch;
    }
}

.cycle-materials-header__label {
    font-weight: 700;
    background-color: var(--grey);
    padding: var(--pdlg);
    flex: 1 0 0;
    &:nth-child(1) {
        flex-grow: 2;
    }
    &:nth-child(2) {
        flex-grow: 1;
    }
    &:nth-child(3) {
        flex-grow: 6;
    }

    @include respond-to(medium) {
        text-align: center;
    }
    @include respond-to(small) {
        flex: unset;
        flex-grow: 1;
    }
}

</style>