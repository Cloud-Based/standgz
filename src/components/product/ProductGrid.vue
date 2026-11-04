<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import type { Product } from "@/types";
defineProps<{ products: Product[]; favorites: number[] }>();
const emit = defineEmits<{ add: [product: Product]; favorite: [id: number] }>();
</script>
<template>
  <div v-if="products.length" class="product-grid">
    <ProductCard
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      :index="index"
      :favorite="favorites.includes(product.id)"
      @add="emit('add', $event)"
      @favorite="emit('favorite', $event)"
    />
  </div>
  <div v-else class="empty-state">
    Belum ada menu yang cocok. Coba kata pencarian lain, ya! ✨
  </div>
</template>
