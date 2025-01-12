import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia()); // Register Pinia
app.use(router); // Register Router

app.mount("#app");
