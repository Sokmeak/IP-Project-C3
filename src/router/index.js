import { createRouter, createWebHistory } from "vue-router";

// import Home from "@/components/Home.vue";
import UserPage from "@/views/UserPage/UserPage.vue";
import Account from "@/views/UserPage/Account.vue";
import ChangePassword from "@/views/UserPage/ChangePassword.vue";
import Favorites from "@/views/UserPage/Favorites.vue";
import Orders from "@/views/UserPage/Orders.vue";
import PaymentMethods from "@/views/UserPage/PaymentMethods.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/userpage/:id",
    component: UserPage,
    props: true,
    children: [
      {
        path: "account",
        name: "Account",
        component: Account,
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: ChangePassword,
      },
      {
        path: "favorites",
        name: "Favorites",
        component: Favorites,
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "payment-methods",
        name: "PaymentMethods",
        component: PaymentMethods,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
