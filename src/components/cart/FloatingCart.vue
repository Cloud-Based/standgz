<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";
import { useStore } from "@/composables/useStore";

const { cartCount, cartTotal, formatPrice, cartOpen } = useStore();
</script>

<template>
  <Transition name="floating-cart">
    <button
      v-if="cartCount > 0 && !cartOpen"
      class="floating-cart"
      @click="cartOpen = true"
      aria-label="Buka keranjang belanja"
    >
      <span class="cart-icon">
        <ShoppingCart :size="23" />
        <span class="cart-badge">{{ cartCount }}</span>
      </span>

      <span class="cart-info">
        <small>Keranjang</small>
        <strong>{{ formatPrice(cartTotal) }}</strong>
      </span>
    </button>
  </Transition>
</template>

<style scoped>
.floating-cart {
  position: fixed;
  right: 22px;
  bottom: 50px;
  z-index: 90;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 18px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;

  background: #244632;
  color: #fffefa;

  box-shadow:
    0 8px 28px rgba(36, 70, 50, 0.25),
    0 3px 8px rgba(36, 70, 50, 0.12);

  cursor: pointer;
  outline: none;

  animation: cart-float 2.5s ease-in-out infinite;

  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

/* Floating animation */
@keyframes cart-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }
}

/* Hover effect */
.floating-cart:hover {
  animation-play-state: paused;
  transform: translateY(-5px) scale(1.05);

  background: #315c40;

  box-shadow:
    0 14px 35px rgba(36, 70, 50, 0.3),
    0 5px 12px rgba(36, 70, 50, 0.15);
}

.floating-cart:active {
  transform: scale(0.95);
}

/* Cart icon */
.cart-icon {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: cart-shake 3.5s ease-in-out infinite;
}

/* Icon shake animation */
@keyframes cart-shake {
  0%,
  85%,
  100% {
    transform: rotate(0deg);
  }

  88% {
    transform: rotate(-12deg);
  }

  91% {
    transform: rotate(12deg);
  }

  94% {
    transform: rotate(-8deg);
  }

  97% {
    transform: rotate(0deg);
  }
}

/* Cart badge */
.cart-badge {
  position: absolute;
  top: -9px;
  right: -10px;

  min-width: 19px;
  height: 19px;
  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #244632;
  border-radius: 50px;

  background: #f47735;
  color: #ffffff;

  font-size: 10px;
  font-weight: 800;

  animation: badge-pulse 1.8s ease-in-out infinite;
}

/* Badge pulse */
@keyframes badge-pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(244, 119, 53, 0.35);
  }

  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 5px rgba(244, 119, 53, 0);
  }
}

/* Cart information */
.cart-info {
  display: grid;
  gap: 3px;
  text-align: left;
}

.cart-info small {
  color: rgba(255, 254, 250, 0.75);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.cart-info strong {
  color: #fffefa;
  font-size: 12px;
  font-weight: 800;
}

/* Enter and leave transition */
.floating-cart-enter-active,
.floating-cart-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.floating-cart-enter-from {
  opacity: 0;
  transform: translateX(40px) scale(0.8);
}

.floating-cart-leave-to {
  opacity: 0;
  transform: translateX(40px) scale(0.8);
}

/* Tablet */
@media (max-width: 768px) {
  .floating-cart {
    right: 18px;
    bottom: 45px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .floating-cart {
    right: 16px;
    bottom: 40px;

    width: 54px;
    height: 54px;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }

  .cart-icon {
    margin: 0;
  }

  .cart-info {
    display: none;
  }

  .cart-icon svg {
    width: 22px;
    height: 22px;
  }
}

/* Small mobile */
@media (max-width: 380px) {
  .floating-cart {
    right: 13px;
    bottom: 30px;

    width: 50px;
    height: 50px;
  }
}

/* Keyboard accessibility */
.floating-cart:focus-visible {
  outline: 3px solid #f47735;
  outline-offset: 4px;
}

/* Reduced motion accessibility */
@media (prefers-reduced-motion: reduce) {
  .floating-cart,
  .cart-icon,
  .cart-badge {
    animation: none !important;
  }

  .floating-cart-enter-active,
  .floating-cart-leave-active {
    transition: none;
  }
}
</style>
