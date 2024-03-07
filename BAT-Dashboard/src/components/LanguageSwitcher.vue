<template>
	<div class="locale" :class="{'locale--active': currentLocale === 'ru'}">
		<button class="locale__button" :class="{'locale__button--active': currentLocale === 'en'}" @click="switchLocale('en')">EN</button>
		<button class="locale__button" :class="{'locale__button--active': currentLocale === 'ru'}" @click="switchLocale('ru')">RU</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const currentLocale = ref('en')
const { locale } = useI18n()

if(localStorage.getItem('locale')) {
	currentLocale.value = localStorage.getItem('locale')
	locale.value = localStorage.getItem('locale')
	document.documentElement.setAttribute('lang', localStorage.getItem('locale'));
} 

const switchLocale = (lang) => {
	document.documentElement.setAttribute('lang', lang);
	localStorage.setItem('locale', lang);
	// $i18n.locale = locale;
	currentLocale.value = lang;
	locale.value = lang
}
</script>

<style scoped lang="scss">
.locale {
	display: flex;
	position: relative;
	margin-left: auto;
	&::before {
		content: '';
		width: 32px;
		height: 23px;
		border-radius: 6px;
		background: #3A474B;
		position: absolute;
		top: 0px;
		left: 0px;
		transition: .3s ease;
	}
	&--active::before {
		left: calc(100% - 32px);
	}
	&__button {
		background: transparent;
		border: 0;
		padding: 4px 8px;
		width: 32px;
		height: 23px;
		display: flex;
		outline: none;
		transition: .3s ease;
		font-size: 12px;
		font-weight: 700;
		cursor: pointer;
		color: #bfbfbf;
		&--active {
			color: #fff
		}
	}
}
</style>