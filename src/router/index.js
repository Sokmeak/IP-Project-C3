import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from "@/views/SubPages/Home.vue";
import MenClothes from "@/views/SubPages/MenClothes.vue";
import WomenClothes from "@/views/SubPages/WomenClothes.vue";
import ChildrenClothes from "@/views/SubPages/ChildrenClothes.vue";
import ProductCart from "@/views/SubPages/ProductCart.vue"; // Shopping Cart Page
import UserPage from "@/views/UserPage/UserPage.vue";
import Account from "@/views/UserPage/Account.vue";
import Favorites from "@/views/UserPage/Favorites.vue";
import Orders from "@/views/UserPage/Orders.vue";
import PaymentMethods from "@/views/UserPage/PaymentMethods.vue";
import ChangePassword from "@/views/UserPage/ChangePassword.vue";
import LayoutPage from "@/views/LayoutPage.vue";
import LandingPage from "@/views/LandingPage.vue";
import ShippingPage from "@/views/ShippingPage.vue";
import ProductCheckout from "@/views/ProductCheckout.vue"; // Import ProductCheckout Page

import Login from "@/views/Login.vue"; // Login page component
import Signup from "@/views/Signup.vue"; // Signup page component

// Import Product Details
import ProductDeailsLayout from "@/views/SubPages/ProductDeailsLayout.vue";
import { computed } from "vue";
import Cookies from "js-cookie";
export function isAuthenticated() {
  const savedEmail = Cookies.get("email");
  const savedPassword = Cookies.get("password");
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
   const users= localStorage.getItem("currentEmail");
   console.log(users);
   
  let status = false;

  if ((savedEmail && savedPassword) || loggedInUser ||users) {
    status = true;
    return status;
  }

  const sessionEmail = sessionStorage.getItem("email");
  const sessionPassword = sessionStorage.getItem("password");
  return (savedEmail && savedPassword) || (sessionEmail && sessionPassword);
}

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/product",
    name: "ProductLayout",
    props: true,
    component: LayoutPage,
    children: [
      { path: "home", name: "Home", component: Home },
      { path: "men", name: "MenClothes", component: MenClothes },
      { path: "women", name: "WomenClothes", component: WomenClothes },
      { path: "children", name: "ChildrenClothes", component: ChildrenClothes },
      {
        path: "cart",
        name: "ProductCart",
        component: ProductCart,
      },
      {
        path: "view/:id", // Dynamic route for product details
        name: "ProductDetails",
        component: ProductDeailsLayout,
        props: true, // Pass route params as props
      },
    ],
  },

  {
    path: "/shipping",
    name: "ShippingPage",
    component: ShippingPage,
  },
  {
    path: "/checkout",
    name: "ProductCheckout", // Checkout Page
    component: ProductCheckout,
  },
  {
    path:"/searchResults",
    name:"SearchResults",
    component:() =>import("@/views/searchResults.vue")
  },
  {
    path: "/userpage/:id",
    // redirect: "/userpage/:id/account",
    component: UserPage,
    props: true,
    children: [
      { path: "account", name: "Account", component: Account },
      { path: "favorites", name: "Favorites", component: Favorites },
      { path: "orders", name: "Orders", component: Orders },
      {
        path: "payment-methods",
        name: "PaymentMethods",
        component: PaymentMethods,
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: ChangePassword,
      },
    ],
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
];

// {
//   path: "/",
//   name: "Test product details",
//   component: () =>
//     import("@/components/ProductDetails/ProductDeailsLayout.vue"),
// },

// Create and export the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
