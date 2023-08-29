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
	border: 1px solid #e5e5e5;
	border-radius: 30px;
	padding: 1px;
	position: relative;
	margin-left: auto;
	&::before {
		content: '';
		width: 43px;
		height: 22px;
		border-radius: 30px;
		background: #9FB0B6;
		position: absolute;
		top: 1px;
		transition: .3s ease;
		left: 1px;
	}
	&--active::before {
		left: calc(100% - 44px);
	}
	&__button {
		background: transparent;
		border: 0;
		padding: 4px 13px;
		display: flex;
		outline: none;
		transition: .3s ease;
		color: #BFBFBF;
		font-size: 12px;
		font-weight: 700;
		cursor: pointer;
		&--active {
			color: #fff
		}
	}
}
</style>