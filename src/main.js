


import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);


// Create and mount the Vue app
createApp(App)
  .use(router) // Use Vue Router
  .use(createPinia()) // Use Pinia state management
  .mount("#app"); // Mount the app to the DOM

