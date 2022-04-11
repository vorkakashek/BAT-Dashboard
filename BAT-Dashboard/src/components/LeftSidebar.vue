<template lang="pug">
sidebar
    div im sidebar
</template>

<style lang="scss" scoped>

sidebar {
    width: var(--sidebar);
    padding: var(--pdxl);
    background-color: #fff;
    position: fixed;
    top: var(--navbar);
    left: 0;
    height: calc(100% - var(--navbar));
}

</style>