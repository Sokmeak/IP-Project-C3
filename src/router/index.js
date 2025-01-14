import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from "@/views/SubPages/Home.vue";
import MenClothes from "@/views/SubPages/MenClothes.vue";
import WomenClothes from "@/views/SubPages/WomenClothes.vue";
import ChildrenClothes from "@/views/SubPages/ChildrenClothes.vue";
import ProductCart from "@/views/ProductCart.vue"; // Shopping Cart Page
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

// Import Product Details
import ProductDeailsLayout from "@/components/ProductDetails/ProductDeailsLayout.vue";
import { computed } from "vue";

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
    path: "/userpage/:id",
    name: "UserPage",
    component: UserPage,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
