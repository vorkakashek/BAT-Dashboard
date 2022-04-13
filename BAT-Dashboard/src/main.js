import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Btn from "./components/Btn.vue";
// import AppIcon from "./components/app-icon.vue";
import AppIcon from "./components/AppIcon.vue";

const app = createApp(App);


app.use(router);

app
    .component('Btn', Btn)
    .component('app-icon', AppIcon)
    .mount("#app");
