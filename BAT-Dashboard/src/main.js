import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Btn from "./components/Btn.vue";
import AppIcon from "./components/AppIcon.vue";
import ProgressBar from "./components/app-progressbar.vue";
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';

const app = createApp(App);


app.use(router);

app
    .component('Multiselect', Multiselect)
    .component('Btn', Btn)
    .component('app-icon', AppIcon)
    .component('app-progressbar', ProgressBar)
    .mount("#app");
