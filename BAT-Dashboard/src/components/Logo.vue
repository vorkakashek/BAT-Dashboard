<script setup>

</script>
	
<template lang="pug">
.logo {{ $t('header.logo') }}
</template>
	
<style scoped lang="scss">
.logo {
    height: 39px;
    display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: space-between;
    font-weight: 900;
    font-size: 16px;
    color: #3A474B;
    line-height: 1;

    &:after {
        content: "";
        width: 100%;
        height: 2px;
        z-index: 1;
        background: var(--BAT);
    }

    @include r(768px) {
      font-size: 13px;
      height: 25px;
    }


    // @include respond-to (large) {
    //     margin-right: auto;
    //     width: calc(var(--sidebar) - 36px - 8px);
    //     font-size: calc(5px + var(--index) * 0.6);
    // }

    // @include respond-to(handlers) {
    //     padding: 0 8px;
    //     width: fit-content;
    //     font-size: calc(5px + var(--index) * 0.75);

    //     &:after {
    //         width: calc(100% - 16px);
    //     }
    // }
}
</style>