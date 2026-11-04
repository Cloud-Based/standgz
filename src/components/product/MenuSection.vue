<script setup lang="ts">
import { computed, ref } from "vue";
// import { ArrowRight } from "lucide-vue-next";
import { products } from "@/data/products";
import type { Category, Product } from "@/types";
import CategoryFilter from "./CategoryFilter.vue";
import ProductGrid from "./ProductGrid.vue";
const props = defineProps<{ searchQuery: string; favorites: number[] }>();
const emit = defineEmits<{ add: [product: Product]; favorite: [id: number] }>();
const activeCategory = ref<Category>("All");
const filteredProducts = computed(() =>
  products.filter(
    (p) =>
      (activeCategory.value === "All" ||
        p.category === activeCategory.value) &&
      `${p.name} ${p.description}`
        .toLowerCase()
        .includes(props.searchQuery.toLowerCase()),
  ),
);
</script>
<template>
  <section id="menu" class="menu-section page-wrap">
    <div class="section-heading">
      <div>
        <div class="section-kicker">MENU PILIHAN KITA <span>✦</span></div>
        <h2>Lagi pengen <em>makan apa?</em></h2>
        <p>Geser, pilih, lalu nikmati. Semudah itu.</p>
      </div>
      <!-- <a href="#menu" class="text-link">
        Lihat semua <ArrowRight :size="17" />
      </a> -->
    </div>

    <CategoryFilter v-model="activeCategory" />

    <ProductGrid
      :products="filteredProducts"
      :favorites="favorites"
      @add="emit('add', $event)"
      @favorite="emit('favorite', $event)"
    />
  </section>
</template>
