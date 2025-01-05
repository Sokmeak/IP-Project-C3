import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue"; // Import LandingPage component
import Login from "@/views/Login.vue"; // Login page component
import Signup from "@/views/Signup.vue"; // Signup page component
import Home from "@/views/Home.vue"; // Home page component
import Cookies from "js-cookie";

// Authentication check function
export function isAuthenticated() {
  const savedEmail = Cookies.get("email");
  const savedPassword = Cookies.get("password");

  // const sessionEmail = sessionStorage.getItem("email"); // Temporary session storage
  // const sessionPassword = sessionStorage.getItem("password");

  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  let status = false;

  if ((savedEmail && savedPassword) || loggedInUser) {
    status = true;
    return status;
  }

  const sessionEmail = sessionStorage.getItem("email");
  const sessionPassword = sessionStorage.getItem("password");
  return (savedEmail && savedPassword) || (sessionEmail && sessionPassword);
}

// Define routes
const routes = [
  {
    path: "/",
    redirect: "landing", // Redirect to landing page
    props: true,
  },
  {
    path: "/landing",
    name: "LandingPage",
    component: LandingPage, // Default to LandingPage
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next("/home"); // Redirect to home if authenticated
      } else {
        next(); // Proceed to login
      }
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    props: true,
    beforeEnter: (to, from, next) => {
      import("@/stores/user").then(({ useStore }) => {
        const store = useStore();
        if (store.isRegister) {
          next("/login"); // Redirect to login if already registered
        } else {
          next(); // Allow accessing the signup page
        }
      });
    },
  },
  {
    path: "/home",
    name: "Home",
    props: true,
    component: Home,
    beforeEnter: (to, from, next) => {
      import("@/stores/user").then(({ useStore }) => {
        const store = useStore();
        const isRegistered = store.isRegister;
        if (!isRegistered) {
          next("/signup"); // Redirect to signup if not registered
        } else if (!isAuthenticated()) {
          next("/login"); // Redirect to login if not authenticated
        } else {
          next(); // Proceed to home
        }
      });
    },
  },
];

// Create and export the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
