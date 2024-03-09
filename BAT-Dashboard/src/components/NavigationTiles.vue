<script setup>
import NavigationTile from './NavigationTile.vue';
import { inject } from 'vue'
const navItems = inject("navItems");
</script>
	
<template lang="pug">
.navigation-tiles
	template(v-for="tile in navItems.length === 1 ? navItems[0].children : navItems" :key="tile.link")
			NavigationTile(:data="tile")
</template>
	
<style scoped lang="scss">
.navigation-tiles {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(464px, 1fr));
	gap: 24px;
	margin-top: 32px;
	
}
</style>