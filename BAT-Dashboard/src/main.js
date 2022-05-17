import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Btn from "./components/Btn.vue";
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
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
// import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.es5.esm.min.js'
import VueEasyLightbox from 'vue-easy-lightbox'


const app = createApp(App);


app.use(router);

app.config.unwrapInjectedRef = true;

app
    .use(VueEasyLightbox)
    .component('Multiselect', Multiselect)
    .component('Btn', Btn)
    .component('Filters', Filters)
    .component('ProductCards', ProductCards)
    .component('ProductCard', ProductCard)
    .component('ItemData', ItemData)
    .component('ISFFilter', ISFFilter)
    .component('app-icon', AppIcon)
    .component('TotalProgressbar', TotalProgressbar)
    .component('ProgressbarLegend', ProgressbarLegend)
    .component('ItemProgressbar', ItemProgressbar)
    .component('ItemProgressbarVertical', ItemProgressbarVertical)
    .component('ComparisonItem', ComparisonItem)
    .mount("#app");
