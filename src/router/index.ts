import { createRouter, createWebHistory } from "vue-router";
import StorefrontLayout from "@/layouts/StorefrontLayout.vue";
import CheckoutLayout from "@/layouts/CheckoutLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import CheckoutPage from "@/pages/CheckoutPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: StorefrontLayout,
      children: [{ path: "", name: "home", component: HomePage }],
    },
    {
      path: "/checkout",
      component: CheckoutLayout,
      children: [{ path: "", name: "checkout", component: CheckoutPage }],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior: () => ({ top: 0 }),
});
