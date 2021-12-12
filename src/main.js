import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/scss/global.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome";

createApp(App).use(store).use(router).mount("#app");
