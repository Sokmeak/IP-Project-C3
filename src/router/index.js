import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // your home page component
import Login from "@/views/Login.vue"; // your login page component
import Signup from "@/views/Signup.vue"; // your signup page component
import Cookies from "js-cookie";

// Define your authentication check function
export function isAuthenticated() {
  const savedEmail = Cookies.get("email");
  const savedPassword = Cookies.get("password");
  // const sessionEmail = sessionStorage.getItem("email"); // Temporary session storage
  // const sessionPassword = sessionStorage.getItem("password");

  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  let status = false;

  if ((savedEmail && savedPassword) || loggedInUser) {
    status = true;
  }

  return status;
}

// Define routes
const routes = [
  {
    path: "/",
    redirect: "/home", // Redirect root to /home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next("/home"); // redirect to home if authenticated
      } else {
        next(); // proceed to the login page
      }
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: (to, from, next) => {
      import("@/stores/user").then(({ useStore }) => {
        const store = useStore();
        if (store.isRegister) {
          next("/login"); // Redirect to login if registration is complete
        } else {
          next(); // Allow accessing the signup page
        }
      });
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      import("@/stores/user").then(({ useStore }) => {
        const store = useStore();
        const test = isAuthenticated();
        const isRegistered = store.isRegister;

        if (!isRegistered) {
          next("/signup"); // Redirect to signup if not registered
        } else if (!test) {
          next("/login"); // Redirect to login if not authenticated
        } else {
          next(); // Proceed to home
        }
      });
    },
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // HTML5 History mode
  routes, // Array of routes
});

export default router;
