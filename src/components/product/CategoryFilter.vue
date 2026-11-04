<script setup lang="ts">
import {
  Coffee,
  GlassWater,
  Apple,
  Cookie,
  Blend,
  Utensils,
} from "lucide-vue-next";

import type { Category } from "@/types";

const props = defineProps<{
  modelValue: Category;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: Category];
}>();

const categories: {
  name: Category;
  icon: any;
}[] = [
  { name: "All", icon: Utensils },
  { name: "Best Coffee", icon: Coffee },
  { name: "Drinks", icon: GlassWater },
  { name: "Snacks", icon: Cookie },
  { name: "Fruits", icon: Apple },
  { name: "Smoothie", icon: Blend },
];
</script>

<template>
  <div class="category-row">
    <button
      v-for="cat in categories"
      :key="cat.name"
      class="category-chip"
      :class="{ 'category-active': props.modelValue === cat.name }"
      @click="emit('update:modelValue', cat.name)"
    >
      <component :is="cat.icon" :size="19" />
      <span>{{ cat.name }}</span>
    </button>
  </div>
</template>
