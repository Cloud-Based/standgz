<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { Plus, Minus } from "lucide-vue-next";
import type { Product } from "@/types";
import { useStore } from "@/composables/useStore";

import placeholderImage from "@/assets/images/products/image-unavailable.webp";

const props = defineProps<{
  product: Product;
  index: number;
  favorite: boolean;
}>();

const emit = defineEmits<{
  add: [product: Product];
  favorite: [id: number];
}>();

const { cart, changeQuantity } = useStore();

const imageSrc = ref(props.product.image || placeholderImage);

watch(
  () => props.product.image,
  (image) => {
    imageSrc.value = image || placeholderImage;
  },
);

function handleImageError() {
  imageSrc.value = placeholderImage;
}

// Jumlah produk di keranjang
const quantity = computed(() => {
  const item = cart.value.find((item) => item.product.id === props.product.id);

  return item?.quantity ?? 0;
});

function addProduct() {
  emit("add", props.product);
}

function decreaseQuantity() {
  changeQuantity(props.product.id, -1);
}

function increaseQuantity() {
  emit("add", props.product);
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
</script>

<template>
  <article
    class="product-card"
    :style="{
      '--card-rotate': `${props.index % 2 === 0 ? '-1deg' : '1deg'}`,
    }"
  >
    <div class="product-image">
      <img
        :src="imageSrc"
        :alt="product.name"
        loading="lazy"
        @error="handleImageError"
      />

      <span v-if="product.badge" class="product-badge">
        {{ product.badge }}
      </span>
    </div>

    <div class="product-info">
      <div class="product-category">{{ product.category }}</div>

      <h3>{{ product.name }}</h3>

      <p>{{ product.description }}</p>

      <div class="product-bottom">
        <b>
          {{
            product.price2
              ? `${formatPrice(product.price)} - ${formatPrice(product.price2)}`
              : formatPrice(product.price)
          }}
        </b>

        <!-- Add Product -->
        <button v-if="quantity === 0" class="add-button" @click="addProduct">
          <Plus :size="17" />
          Tambah ke Keranjang
        </button>

        <!-- Quantity Control -->
        <div v-else class="product-quantity">
          <button
            class="quantity-button"
            aria-label="Kurangi jumlah"
            @click="decreaseQuantity"
          >
            <Minus :size="14" />
          </button>

          <span class="quantity-value">
            {{ quantity }}
          </span>

          <button
            class="quantity-button"
            aria-label="Tambah jumlah"
            @click="increaseQuantity"
          >
            <Plus :size="14" />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
