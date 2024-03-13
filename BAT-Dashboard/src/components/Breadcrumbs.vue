<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue'
const route = useRoute()

const path =  computed(() => route.matched.map(item => {
	return item.meta.label ? item.meta.label : item.name
}))
const links =  computed(() => route.matched.map(item => item.path))
</script>
	
<template lang="pug">
nav.breadcrumbs
	template(v-for="(item, index) in path" :key="item")
		router-link(:to="`${links[index]}`" v-if="item !== ''").breadcrumbs__link {{ item === 'panel' ? 'Dashboard' : item }}
</template>
	
<style scoped lang="scss">
.breadcrumbs {
	display: flex;
	align-items: center;
	&__link {
		text-decoration: none;
		color: var(--TEXT---PRIMARY, #3A474B);
		font-size: 14px;
		font-weight: 400;
		line-height: normal;
		opacity: 0.5;
		&:last-child {
			opacity: 1;
			font-weight: 700;
		}
		&+& {
			margin-left: 8px;
			padding-left: 11px;
			&::before {
				content: '';
				position: absolute;
				width: 3px;
				height: 3px;
				border-radius: 50%;
				background-color: #3A474B;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
}
</style>