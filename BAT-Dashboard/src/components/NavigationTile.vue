<script setup>
defineProps({
	data: {
		type: Object,
	}
})
</script>
	
<template lang="pug">
.tile(:class="{'tile--disabled': data.disabled}")
	router-link(:to="`/panel/${data.link}`").tile__link
	app-icon(:name="data.icon ? data.icon : data.link", size="150").tile__icon
	.tile__children(v-if="data.children !== undefined && !data.disabled && data.withChildren")
		template(v-for="child in data.children")
			router-link(:to="`/panel/${data.link}/${child.link}`").tile__child
				app-icon(:name="child.icon ? child.icon : child.link", size="20")
				| {{ child.name }}
	.tile__row
		p.tile__title {{ data.name }}
		button.tile__button
			template(v-if="data.disabled")
				app-icon(name="lock", size="14")
			template(v-else)
				span 
					span Перейти
				app-icon(name="chevron", size="14")
</template>
	
<style scoped lang="scss">
.tile {
	display: flex;
	flex-direction: column;
	padding: 24px;
	border-radius: 4px;
	background: #FFF;
	box-shadow: 0px 16px 24px 0px rgba(157, 168, 181, 0.25);
	position: relative;
	text-decoration: none;
	transition: .3s ease;
	&__icon {
		margin: 16px auto 48px;
		:deep(path) {
			transition: .3s ease;
			fill: #E3E3E3;
		}
	}
	&__link {
		position: absolute;
		top: 0;
		z-index: 1;
		left: 0;
		width: 100%;
		height: 100%;
	}
	&__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
	}
	&__children {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		width: 100%;
		position: absolute;
		z-index: -1;
		top: 0px;
		transition: top .3s ease;
		left: 0;
		padding-top: 24px;
	}
	&__child {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #3A474B;
		font-size: 12px;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.24px;
		padding: 6px 10px;
		text-decoration: none;
		border-radius: 4px;
		background: var(--WHITE, #FFF);
		:deep(path) {
			fill: #00B1EB;
		}
	}
	&__title {
		color: #3A474B;
		font-size: 18px;
		font-weight: 700;
	}
	&__button {
		display: flex;
		align-items: center;
		padding: 8px 12px;
		border-radius: 6px;
		border: 1px solid #E3E3E3;
		background: transparent;
		transition: .3s ease;
		cursor: pointer;
		:deep(path) {
			transition: .3s ease;
			fill: #3a474b;
		}
		span {
			display: grid;
			grid-template-columns: 0fr;
			transition: .3s ease;
			color: #FFF;
			font-size: 12px;
			font-weight: 600;
			line-height: 120%; /* 14.4px */
			text-transform: uppercase;
			span {
				overflow: hidden;
				transition: .3s ease;
				width: auto;
			}
		}
	}
	&--disabled {
		pointer-events: none;
		.tile {
			&__title {
				color: #B8BDBE;
			}
		}
	}
	@include hover {
		box-shadow: none;
		.tile {
			&__icon {
				:deep(path) {
					fill: #00B1EB;
				}
			}
			&__button {
				background: #00B1EB;
				border-color: #00B1EB;
				gap: 10px;
				span {
					grid-template-columns: 1fr;
				}
				:deep(path) {
					fill: #fff;
				}
			}
			&__children {
				top: 100%;
				z-index: 2;
				transition: top .3s ease, z-index 0s .3s ease;
			}
		}
	}
	@include r(768px) {
		&__title {
			font-size: 16px;
		}
		&__children {
			position: static;
			top: 0;
			left: 0;
			opacity: 1;
			z-index: 2;
			gap: 6px 10px;
			margin-top: 20px;
		}
		&__icon {
			margin: 0 auto;
			width: 100px !important;
			height: 100px !important;
		}
		&__child {
			padding: 0px;
			gap: 6px;
			:deep(svg) {
				width: 10px !important;
				height: 10px !important;
			}
		}
		&__row {
			margin-top: 20px;
		}
	}
}
</style>