<script setup>
defineProps({
	disabled: Boolean,
	to: String,
	isPrimary: Boolean,
	isBack: Boolean,
	icon: String
})
</script>
	
<template lang="pug">
router-link.button(:class="{ 'disabled': disabled, 'button--primary': isPrimary, 'button--back': isBack }", :to="to")
	.button__icon
		app-icon(:name="icon" size="20")
	.button__title
		slot
	app-icon(name="lock" size="14").button__lock(v-if="disabled")

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
	&__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		width: 36px;
		height: 36px;
		border-radius: 8px;
		background: #F9FAFB;
		:deep(path) {
			fill: #00B1EB
		}
	}
	&__title {
		color: var(--TEXT---PRIMARY, #3A474B);
		font-size: 14px;
		font-weight: 600;
	}
	&__lock {
		margin-left: auto;
		:deep(path) {
			fill: #B8BDBE
		}
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
</style>