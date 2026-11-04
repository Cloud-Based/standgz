<script setup lang="ts">
import { ArrowRight, Minus, Plus, X } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { useStore } from "@/composables/useStore";

const emit = defineEmits<{ explore: [] }>();

const router = useRouter();

const {
  cart,
  cartOpen,
  cartTotal,
  formatPrice,
  changeQuantity,
} = useStore();

function checkout() {
  cartOpen.value = false;
  router.push({ name: "checkout" });
}

function addMoreMenu() {
  cartOpen.value = false;

  if (router.currentRoute.value.name !== "home") {
    router.push({ name: "home" }).then(() => {
      emit("explore");
    });
  } else {
    emit("explore");
  }
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="cartOpen"
      class="drawer-backdrop"
      @click.self="cartOpen = false"
    >
      <aside class="cart-drawer">
        <!-- Header -->
        <div class="drawer-head">
          <div>
            <span class="section-kicker">YOUR HAPPY BAG</span>
            <h2>Keranjang <em>kamu</em></h2>
          </div>

          <button
            class="close-button"
            @click="cartOpen = false"
            aria-label="Tutup keranjang"
          >
            <X />
          </button>
        </div>

        <!-- Cart Items -->
        <div v-if="cart.length" class="cart-lines">
          <div
            v-for="item in cart"
            :key="item.product.id"
            class="cart-line"
          >
            <img
              :src="item.product.image"
              :alt="item.product.name"
            />

            <div class="cart-line-info">
              <b>{{ item.product.name }}</b>

              <small>
                {{ formatPrice(item.product.price) }}
              </small>

              <div class="quantity-control">
                <button
                  @click="changeQuantity(item.product.id, -1)"
                  aria-label="Kurangi"
                >
                  <Minus :size="13" />
                </button>

                <span>{{ item.quantity }}</span>

                <button
                  @click="changeQuantity(item.product.id, 1)"
                  aria-label="Tambah"
                >
                  <Plus :size="13" />
                </button>
              </div>
            </div>

            <b class="line-total">
              {{
                formatPrice(
                  item.product.price * item.quantity
                )
              }}
            </b>
          </div>
        </div>

        <!-- Empty Cart -->
        <div v-else class="cart-empty">
          <span>🛍️</span>
          <b>Keranjang masih kosong</b>

          <p>Yuk, cari sesuatu yang enak!</p>

          <button
            class="button-primary"
            @click="addMoreMenu"
          >
            Explore menu
            <ArrowRight :size="16" />
          </button>
        </div>

        <!-- Cart Summary -->
        <div v-if="cart.length" class="cart-summary">
          <div>
            <span>Total</span>
            <b>{{ formatPrice(cartTotal) }}</b>
          </div>

          <!-- Add More Menu -->
          <button
            class="add-more-button"
            @click="addMoreMenu"
          >
            <Plus :size="17" />
            Tambah menu lain
          </button>

          <!-- Checkout -->
          <button
            class="button-primary checkout-button"
            @click="checkout"
          >
            Lanjut checkout
            <ArrowRight :size="18" />
          </button>

          <small>
            Yuk, lanjutkan dan nikmati pesananmu!
          </small>
        </div>
      </aside>
    </div>
  </Transition>
</template>