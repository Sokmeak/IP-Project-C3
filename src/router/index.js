import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue"; // Import LandingPage component
import Login from "@/views/Login.vue"; // Login page component
import Signup from "@/views/Signup.vue"; // Signup page component
import Home from "@/views/SubPages/Home.vue"; // Home page component
import MenClothes from "@/views/SubPages/MenClothes.vue"; // Men page component
import WomenClothes from "@/views/SubPages/WomenClothes.vue"; // Women page component
import ChildrenClothes from "@/views/SubPages/ChildrenClothes.vue"; // Children page component
import Cookies from "js-cookie";
import UserPage from "@/views/UserPage/UserPage.vue";

// Authentication check function
export function isAuthenticated() {
  const savedEmail = Cookies.get("email");
  const savedPassword = Cookies.get("password");
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
const id = 1;

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

    // auto login section

    //
    // beforeEnter: (to, from, next) => {
    //   if (isAuthenticated()) {
    //     next("/home"); // Redirect to home if authenticated
    //   } else {
    //     next(); // Proceed to login
    //   }
    // },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    props: true,
    // beforeEnter: (to, from, next) => {
    //   import("@/stores/user").then(({ useStore }) => {
    //     const store = useStore();
    //     if (store.isRegister) {
    //       next("/login"); // Redirect to login if already registered
    //     } else {
    //       next(); // Allow accessing the signup page
    //     }
    //   });
    // },
  },

  {
    path: "/userpage/:id",
    redirect: "/userpage/:id/account",
    component: UserPage,
    props: true,
    children: [
      {
        path: "account",
        name: "Account",
        component: () => import("@/views/UserPage/Account.vue"),
        beforeEnter: (to, from, next) => {
          if (!isAuthenticated()) {
            // Use the popup component's method
            const popup = new LoginSignupPopup();
            popup.showPopup();
          } else {
            next(); // Proceed to Account page
          }
        },
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: () => import("@/views/UserPage/ChangePassword.vue"),
      },
      {
        path: "favorites",
        name: "Favorites",
        component: () => import("@/views/UserPage/Favorites.vue"),
      },
      {
        path: "orders",
        name: "Orders",
        component: () => import("@/views/UserPage/Orders.vue"),
      },
      {
        path: "payment-methods",
        name: "PaymentMethods",
        component: () => import("@/views/UserPage/PaymentMethods.vue"),
      },
    ],
  },

  // home, men, women, children use the same have nav bar and footer.

  // Some the parent should be the layout page

  // {
  //   path: "/home",
  //   name: "Home",
  //   props: true,
  //   component: () => import("@/views/LayoutPage.vue"),
  //   beforeEnter: (to, from, next) => {
  //     import("@/stores/user").then(({ useStore }) => {
  //       const store = useStore();
  //       const isRegistered = store.isRegister;
  //       if (!isRegistered) {
  //         next("/signup"); // Redirect to signup if not registered
  //       } else if (!isAuthenticated()) {
  //         next("/login"); // Redirect to login if not authenticated
  //       } else {
  //         next(); // Proceed to home
  //       }
  //     });
  //   },
  // },

  // {
  //   path: "/men",
  //   name: "MenClothes",
  //   component: MenClothes,
  // },
  // {
  //   path: "/women",
  //   name: "WomenClothes",
  //   component: WomenClothes,
  // },
  // {
  //   path: "/children",
  //   name: "ChildrenClothes",
  //   component: ChildrenClothes,
  // },

  {
    path: "/product",
    redirect: "product/home", // default page in layout is home
    name: "product",
    component: () => import("@/views/LayoutPage.vue"),
    props: true,
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/SubPages/Home.vue"),
        beforeEnter: (to, from, next) => {
          if (!isAuthenticated()) {
            next("/login"); // Redirect to login if not authenticated
          } else {
            next(); // Proceed to home
          }
        },
      },
      {
        path: "men",
        name: "Men",
        component: () => import("@/views/SubPages/MenClothes.vue"),
      },
      {
        path: "women",
        name: "Women",
        component: () => import("@/views/SubPages/WomenClothes.vue"),
      },
      {
        path: "children",
        name: "Children",
        component: () => import("@/views/SubPages/ChildrenClothes.vue"),
      },
    ],
  },
];

// Create and export the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
