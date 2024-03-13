<script setup>
import { computed, nextTick, ref, watch } from 'vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	placeholder: {
		type: String,
	},
	multiselect: {
		type: Boolean,
		default: false
	},
	isWhite: {
		type: Boolean,
		default: false
	},
	isFill: {
		type: Boolean,
		default: false
	},
	isSelectedInRow: {
		type: Boolean,
		default: false
	}
})
const value = ref(null)
const open = ref(false)
const dropdownPlaceholder = ref(null)
const dropdown = ref(null)
const top = ref(dropdownPlaceholder.value?.getBoundingClientRect().top + window.scrollY)
const left = ref(dropdownPlaceholder.value?.getBoundingClientRect().left)
const width = ref(dropdown.value?.getBoundingClientRect().width)

nextTick(() => {
	top.value = dropdownPlaceholder.value?.getBoundingClientRect().top + window.scrollY
	left.value = dropdownPlaceholder.value?.getBoundingClientRect().left
	width.value = dropdown.value?.getBoundingClientRect().width
	const resizeObserver = new ResizeObserver(function() {
		width.value = dropdown.value?.getBoundingClientRect().width
	});
	const resizeObserverPlaceholder = new ResizeObserver(function() {
		top.value = dropdownPlaceholder.value?.getBoundingClientRect().top + window.scrollY
		left.value = dropdownPlaceholder.value?.getBoundingClientRect().left
	});
	resizeObserver.observe(dropdown.value);
	resizeObserverPlaceholder.observe(dropdownPlaceholder.value);

	window.addEventListener('click', (event) => {
		if (!dropdown.value?.contains(event.target) && !dropdownPlaceholder.value?.contains(event.target)) {
			open.value = false
		}
	})
})

const updatePosition = () => {
	top.value = dropdownPlaceholder.value?.getBoundingClientRect().top + window.scrollY
	left.value = dropdownPlaceholder.value?.getBoundingClientRect().left
}

const selected = (option, index) => {
	if(!props.multiselect) {
		value.value = option
		open.value = false
	} else {
		if(value.value?.includes(option)) {
			value.value?.splice(value.value?.indexOf(option), 1)
		} else {
			value.value = value.value ? [...value.value, option] : [option]
		}
	}
	updatePosition()
	emits('update:modelValue', value.value)
}

</script>
	
<template lang="pug">
.dropdown-placeholder(ref="dropdownPlaceholder" :style="{ width: `${isFill ? '100%' : width }px` }" :class="{ 'dropdown-placeholder--white': isWhite }")
	.dropdown__header(@click="() => {open = !open; updatePosition();}")
		.dropdown__value {{ (value && !multiselect) ? value : placeholder }} {{ (multiselect && value?.length > 0) ? `(Selected: ${value.length})` : '' }}
		.dropdown__icon
			<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.94 3.00011L5 6.06011L8.06 3.00011L9 3.94677L5 7.94677L1 3.94677L1.94 3.00011Z" fill="white"/>
			</svg>
	teleport(to="body")
		.dropdown(:class="{ 'dropdown--open': open, 'dropdown--white': isWhite }" :style="{ top: `${top}px`, left: `${left}px`, opacity: open ? 1 : 0 }" ref="dropdown")
			.dropdown__header(@click="() => {open = !open; updatePosition();}")
				.dropdown__value {{ (value && !multiselect) ? value : placeholder }} {{ (multiselect && value?.length > 0) ? `(Selected: ${value.length})` : '' }}
				.dropdown__icon
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.94 3.00011L5 6.06011L8.06 3.00011L9 3.94677L5 7.94677L1 3.94677L1.94 3.00011Z" fill="white"/>
					</svg>
			.dropdown__wrapper(:class="{ 'dropdown__wrapper--open': open }")
				.dropdown__content
					button.dropdown__item(v-for="(item, index) in options", @click="() => selected(item, index)" :class="{'dropdown__item--selected': typeof value === 'object' ? value?.includes(item) : false}" ) 
						| {{ item }}
						<svg v-if="multiselect" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.11362 2.94702C8.40652 2.65412 8.40652 2.17925 8.11362 1.88636C7.82073 1.59346 7.34586 1.59346 7.05296 1.88636L4.99996 3.93936L2.94696 1.88636C2.65406 1.59346 2.17919 1.59346 1.8863 1.88636C1.5934 2.17925 1.5934 2.65412 1.8863 2.94702L3.9393 5.00002L1.8863 7.05302C1.5934 7.34592 1.5934 7.82079 1.8863 8.11368C2.17919 8.40658 2.65406 8.40658 2.94696 8.11368L4.99996 6.06068L7.05296 8.11368C7.34586 8.40658 7.82073 8.40658 8.11362 8.11368C8.40652 7.82079 8.40652 7.34592 8.11362 7.05302L6.06062 5.00002L8.11362 2.94702Z" fill="white"/>
						</svg>

</template>
	
<style scoped lang="scss">
.dropdown-placeholder {
	position: relative;
	border-radius: 8px;
	background: var(--blue-light);
	&--white {
		background: white;
		.dropdown {
			&__value {
				color: var(--TEXT---PRIMARY, #3A474B);
			}
			&__icon {
				margin-left: auto;
				:deep(path) {
					fill: var(--TEXT---PRIMARY, #3A474B);
				}
			}
		}
	}
}
.dropdown {
	background: var(--blue-light);
	border-radius: 8px;
	transition: width .3s ease, height .3s ease, background .3s ease, box-shadow .3s ease, opacity .3s ease;
	position: absolute;
	top: 0;
	left: 0;
	width: auto;
	z-index: 100;
	&__header {
		display: flex;
		align-items: center;
		padding: 8px 8px 8px 12px;
		cursor: pointer;
		transition: .3s ease;
		gap: 10px;
	}
	&__icon {
		width: 10px;
		height: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 8px;
		transition: .3s ease;
		svg {
			width: 10px;
			height: 10px;
		}
	}
	&__value {
		color: var(--WHITE, #FFF);
		font-family: "Source Sans Pro";
		font-size: 14px;
		font-weight: 600;
		line-height: normal;
		transition: .3s ease;
	}
	&__wrapper {
		display: grid;
		grid-template-rows: 0fr;
		grid-template-columns: 0fr;
		transition: .3s ease;
		max-height: 144px;
		// position: absolute;
		pointer-events: none;
		z-index: 100;

		&--open {
			pointer-events: all;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr;
			.dropdown {
				&__content {
					padding: 12px 8px 8px 12px;
					overflow-y: auto;
				}
			}
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		width: 100%;
		padding: 0 8px 0 12px;
		gap: 4px;
		transition: height .3s ease, padding .3s ease, overflow-y 0s ease 1s;
		overflow-y: hidden;
		&::-webkit-scrollbar {
			width: 4px;
			border-radius: 4px;
		}
		&::-webkit-scrollbar-thumb {
			width: 4px;
			background: rgba(58, 71, 75, 0.20);
			border-radius: 4px;
		}
	}
	&__item {
		display: flex;
		padding: 6px 8px;
		transition: .3s ease;
		border: 0;
		background: transparent;
		color: rgba(58, 71, 75, 0.60);
		font-size: 14px;
		font-weight: 600;
		line-height: normal;
		white-space: nowrap;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&--selected {
			color: #fff;
			border-radius: 6px;
			background: #00B1EB;
		}
	}
	&--open {
		background: #fff;
		box-shadow: 0px 16px 24px 0px rgba(157, 168, 181, 0.25);
		z-index: 101;
		.dropdown {
			&__value {
				color: var(--blue-light);
			}
			&__icon {
				transform: rotate(180deg);
				path {
					fill: var(--blue-light);
				}
			}
		}
	}
	&--white {
		background: white;
		.dropdown {
			&__value {
				color: var(--TEXT---PRIMARY, #3A474B);
			}
			&__icon {
				margin-left: auto;
				:deep(path) {
					fill: var(--TEXT---PRIMARY, #3A474B);
				}
			}
		}
	}
}
</style>