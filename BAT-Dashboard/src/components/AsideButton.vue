<script setup>
import { ref } from 'vue';
import Dropdown from '@/components/Dropdown.vue';

defineEmits(['open'])
const props = defineProps({
	disabled: Boolean,
	to: String,
	isPrimary: Boolean,
	isBack: Boolean,
	icon: String,
	name: String,
	activeItem: Boolean,
	isOpen: Boolean,
	children: {
		type: Array,
		default: [],
	}
})

</script>
	
<template lang="pug">
router-link.button(:class="{ 'disabled': disabled, 'button--primary': isPrimary, 'button--back': isBack }", :to="to" v-if="!(children?.length > 0 || isOpen)")
	.button__icon
		app-icon(v-if="icon" :name="icon" size="20")
	.button__title
		slot
	app-icon(name="lock" size="14").button__lock(v-if="disabled")
.button-wrapper(v-else :class="{'button-wrapper--open': activeItem || isOpen }")
	.button.button--children(:class="{ 'disabled': disabled, 'button--primary': isPrimary, 'button--back': isBack }")
		.button__header(@click="$emit('open')")
			.button__icon
				app-icon(v-if="icon" :name="icon" size="20")
			.button__title
				slot
			app-icon(name="lock" size="14").button__lock(v-if="disabled")
			<svg v-if="!disabled" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.33333 0.833292L7.5 4.99996L3.33333 9.16663L2.59375 8.42704L6.02083 4.99996L2.59375 1.57288L3.33333 0.833292Z" fill="#3A474B"/>
			</svg>
		.button__wrapper
			.button__content(:id="`${name?.split(' ').join('')}`")
				
	.button-childrens__wrapper(v-if="children?.length > 0")
		.button-childrens
			template(v-for="item in children") 
				router-link.button-children(:to="`/panel/${item.link}`") 
					app-icon(name="dot" size="36")
					| {{ item.name }}


</template>
	
<style scoped lang="scss">
.button {
	display: flex;
	text-decoration: none;
	padding: 4px;
	gap: 12px;
	align-items: center;
	width: 100%;
	transition: .3s ease;
	&__wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: .3s ease;
		width: 100%;
	}
	&__content {
		display: flex;
		height: 100%;
		transition: .3s ease;
		padding: 0px 12px;
		overflow: hidden;
		gap: 4px;
		flex-direction: column;
		width: 100%;
	}
	&__header {
		display: flex;
		cursor: pointer;
		padding: 4px;
		gap: 12px;
		align-items: center;
		width: 100%;
		& > svg:last-child {
			margin-left: auto;
			transition: .3s ease;
			margin-right: 8px;
			path {
				transition: .3s ease;
			}
		}
	}
	&__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		width: 36px;
		height: 36px;
		border-radius: 8px;
		transition: .3s ease;
		background: #F9FAFB;
		:deep(path) {
			fill: #00B1EB;
			transition: .3s ease;
		}
	}
	&__title {
		color: var(--TEXT---PRIMARY, #3A474B);
		font-size: 14px;
		font-weight: 600;
		transition: .3s ease;
	}
	&__lock {
		margin-left: auto;
		:deep(path) {
			fill: #B8BDBE
		}
	}
	&--children {
		gap: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
	}
	&--primary {
		background: #00B1EB;
		border-radius: 8px;
		.button {
			&__icon {
				background: transparent;
				:deep(path) {
					fill: #fff
				}
			}
			&__title {
				color: #fff;
			}
		}
	}
	&--back {
		.button {
			&__icon {
				background: transparent;
			}
		}
	}
	&.disabled {
		pointer-events: none;
		.button {
			&__title {
				color: #B8BDBE;
			}
			&__icon {
				:deep(path) {
					fill: #B8BDBE
				}
			}
		}
	}
	@include hover {
		opacity: 0.8;
	}
}
.button-wrapper {
	display: flex;
	flex-direction: column;
	transition: .3s ease;
	&--open {
		gap: 12px;
		.button-childrens__wrapper {
			grid-template-rows: 1fr;
		}
		.button-childrens {
			padding: 4px;
		}
		.button {
			background: #00B1EB;
			&__wrapper {
				grid-template-rows: 1fr;
			}
			&__content {
				padding: 10px 12px 12px;
			}
			&__title {
				color: #fff;
			}
			&__icon {
				background: transparent;
				:deep(path) {
					fill: #fff
				}
			}
			&__header {
				&>svg:last-child {
					transform: rotate(90deg);
					path {
						fill: #fff;
					}
				}
			}
		}
	}
}
.button-childrens {
	display: flex;
	overflow: hidden;
	flex-direction: column;
	border-radius: 8px;
	background: #F9FAFB;
	height: 100%;
	transition: .3s ease;
	padding: 0px 4px;
	gap: 4px;
	&__wrapper {
		display: grid;
		transition: .3s ease;
		grid-template-rows: 0fr;
	}
}
.button-children {
	display: flex;
	align-items: center;
	padding: 4px;
	border-radius: 8px;
	gap: 12px;
	text-decoration: none;
	color: var(--TEXT---PRIMARY, #3A474B);
	font-size: 14px;
	font-weight: 600;
	line-height: normal;
	:deep(circle) {
		fill: #3A474B;
	}
	&.router-link-active {
		background: #F2F5F8;
		color: #00B1EB;
		:deep(circle) {
			fill: #00B1EB;
		}
	}
}
</style>