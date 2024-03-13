<script setup>
import NavigationTiles from '../../../components/NavigationTiles.vue';
</script>


<template lang="pug">
NavigationTiles(v-if="$route.path.split('/').at(-1) === 'ISF'")
RouterView
</template>

<style lang="scss" scoped>

</style>