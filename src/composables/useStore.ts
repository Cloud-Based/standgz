import { computed, ref } from "vue";
import type { CartItem, Product } from "@/types";

// State dibuat di luar fungsi agar tetap sama saat berpindah halaman.
const cart = ref<CartItem[]>([]);
const favorites = ref<number[]>([]);
const cartOpen = ref(false);

export function useStore() {
  const cartCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0),
  );
  const cartTotal = computed(() =>
    cart.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    ),
  );
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  function addToCart(product: Product) {
    const item = cart.value.find((row) => row.product.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      cart.value.push({
        product,
        quantity: 1,
      });
    }
  }

  function changeQuantity(id: number, amount: number) {
    const item = cart.value.find((row) => row.product.id === id);
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0)
      cart.value = cart.value.filter((row) => row.product.id !== id);
  }

  function removeFromCart(id: number) {
    cart.value = cart.value.filter((row) => row.product.id !== id);
  }

  function toggleFavorite(id: number) {
    favorites.value = favorites.value.includes(id)
      ? favorites.value.filter((value) => value !== id)
      : [...favorites.value, id];
  }

  function clearCart() {
    cart.value = [];
  }

  return {
    cart,
    favorites,
    cartOpen,
    cartCount,
    cartTotal,
    formatPrice,
    addToCart,
    changeQuantity,
    removeFromCart,
    toggleFavorite,
    clearCart,
  };
}
