<script setup lang="ts">
import { nextTick } from "vue";
import { useStore } from "@/composables/useStore";
import type { Product } from "@/types";
import HeroSection from "@/components/home/HeroSection.vue";
import PromoSection from "@/components/home/PromoSection.vue";
import PerksSection from "@/components/home/PerksSection.vue";
import MenuSection from "@/components/product/MenuSection.vue";
const props = defineProps<{ searchQuery?: string }>();
const { favorites, addToCart, toggleFavorite } = useStore();
async function scrollToMenu() {
  await nextTick();
  document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
}
function addProduct(product: Product) {
  addToCart(product);
}
</script>
<template>
  <main>
    <HeroSection @explore="scrollToMenu" /><MenuSection
      :search-query="props.searchQuery ?? ''"
      :favorites="favorites"
      @add="addProduct"
      @favorite="toggleFavorite"
    /><PromoSection @explore="scrollToMenu" /><PerksSection />
  </main>
</template>
