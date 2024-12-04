import { createApp } from "vue"; // Import Vue's createApp
import { createPinia } from "pinia"; // Import Pinia for state management
import App from "./App.vue"; // Main App component
import router from "./router"; // Vue Router setup

// Import Global CSS
import "@/assets/styles/global.css";

// Create and mount the Vue app
createApp(App)
  .use(router) // Use Vue Router
  .use(createPinia()) // Use Pinia state management
  .mount("#app"); // Mount the app to the DOM
