import { createPinia } from 'pinia'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Btn from "./components/Btn.vue";
import ExportExcel from "./components/ExportExcel.vue";
import AppIcon from "./components/AppIcon.vue";

import Filters from "@/components/Filters.vue";

import TotalProgressbar from "./components/Progress Bars/TotalProgressbar.vue";
import ProgressbarLegend from "./components/Progress Bars/ProgressbarLegend.vue";

import ItemProgressbar from "./components/Progress Bars/ItemProgressbar.vue";
import ItemProgressbarVertical from "./components/Progress Bars/ItemProgressbarVertical.vue";
import ComparisonItem from "./components/ComparisonItem.vue";

import ProductCards from "./components/ProductCards.vue";
import ProductCard from "./components/ProductCard.vue";

import ItemData from "./components/Progress Bars/ItemData.vue";
import ISFFilter from "./components/ISFFilter.vue";
import FilterToggler from "./components/FilterToggler.vue";
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
// import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.es5.esm.min.js'
import VueEasyLightbox from 'vue-easy-lightbox'
import ModalConstructor from './components/Modals/ModalConstructor.vue'
import Loading from './components/Loading.vue'
import Notifications from '@kyvg/vue3-notification'

import { createI18n } from 'vue-i18n'
import en from './locales/en';
import ru from './locales/ru';

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages: {
        ru: ru,
        en: en
    }
})

const app = createApp(App).use(createPinia()).use(Notifications);

app.use(i18n);

app.use(router);

app.config.unwrapInjectedRef = true;

app
    .use(VueEasyLightbox)
    .component('Multiselect', Multiselect)
    .component('Btn', Btn)
    .component('ExportExcel', ExportExcel)
    .component('Filters', Filters)
    .component('ProductCards', ProductCards)
    .component('ProductCard', ProductCard)
    .component('ItemData', ItemData)
    .component('ISFFilter', ISFFilter)
    .component('FilterToggler', FilterToggler)
    .component('app-icon', AppIcon)
    .component('TotalProgressbar', TotalProgressbar)
    .component('ProgressbarLegend', ProgressbarLegend)
    .component('ItemProgressbar', ItemProgressbar)
    .component('ItemProgressbarVertical', ItemProgressbarVertical)
    .component('ComparisonItem', ComparisonItem)
    .component('ModalConstructor', ModalConstructor)
    .component('Loading', Loading)
    .mount("#app");
