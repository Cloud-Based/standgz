<script setup lang="ts">
import { ref } from "vue";
import Topline from "@/components/layout/Topline.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import { useStore } from "@/composables/useStore";
import CartDrawer from "@/components/cart/CartDrawer.vue";
import FloatingCart from "@/components/cart/FloatingCart.vue";
const searchQuery = ref("");
const { cartOpen } = useStore();
</script>
<template>
  <div>
    <Topline />

    <AppHeader
      v-model:search-query="searchQuery"
      @open-cart="cartOpen = true"
    />

    <RouterView />

    <AppFooter />

    <CartDrawer />

    <FloatingCart />
  </div>
</template>
