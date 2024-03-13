<script setup>
import NavigationTiles from '../../../components/NavigationTiles.vue';
</script>
    
<template lang="pug">
NavigationTiles(v-if="$route.path.split('/').at(-1) === 'POSM'")
RouterView
</template>
    
<style scoped lang="scss">
    
</style>