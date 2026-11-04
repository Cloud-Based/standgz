<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { House, ShoppingCart, Menu as MenuIcon, X } from "lucide-vue-next";

import { useStore } from "@/composables/useStore";

defineProps<{
  searchQuery: string;
}>();

const emit = defineEmits<{
  "update:searchQuery": [value: string];
  openCart: [];
}>();

const router = useRouter();
const mobileMenuOpen = ref(false);

const { cartCount } = useStore();

function goTo(id: string) {
  mobileMenuOpen.value = false;

  const scrollToSection = () => {
    requestAnimationFrame(() => {
      document.querySelector(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  if (router.currentRoute.value.name !== "home") {
    router.push({ name: "home" }).then(scrollToSection);
  } else {
    scrollToSection();
  }
}

// function handleSearch(event: Event) {
//   const target = event.target as HTMLInputElement;
//   emit("update:searchQuery", target.value);
// }
</script>

<template>
  <header class="site-header page-wrap">
    <!-- Brand -->
    <a
      href="#home"
      class="brand"
      aria-label="Stand Gen-Z beranda"
      @click.prevent="goTo('#home')"
    >
      <span class="brand-mark">
        <House :size="25" stroke-width="3" />
        <i>♥</i>
      </span>

      <span>Stand <span>Gen-Z.</span></span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <a class="nav-active" href="#home" @click.prevent="goTo('#home')">
        Beranda
      </a>

      <a href="#menu" @click.prevent="goTo('#menu')"> Menu </a>

      <a href="#cerita" @click.prevent="goTo('#cerita')"> Cerita Kami </a>

      <a href="#footer" @click.prevent="goTo('#footer')"> Lokasi </a>
    </nav>

    <!-- Header Actions -->
    <div class="header-actions">
      <!-- <label class="search-box">
        <Search :size="17" />

        <input
          :value="props.searchQuery"
          @input="handleSearch"
          @focus="goTo('#menu')"
          placeholder="Lagi pengen makan apa?"
          aria-label="Cari menu"
        />
      </label> -->

      <button
        class="cart-button"
        @click="emit('openCart')"
        aria-label="Buka keranjang"
      >
        <ShoppingCart :size="21" />
        <span>{{ cartCount }}</span>
      </button>

      <!-- Mobile Toggle -->
      <button
        class="mobile-toggle"
        @click="mobileMenuOpen = !mobileMenuOpen"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigasi"
      >
        <X v-if="mobileMenuOpen" :size="21" />
        <MenuIcon v-else :size="21" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="mobile-menu">
      <nav v-if="mobileMenuOpen" class="mobile-nav">
        <a href="#home" @click.prevent="goTo('#home')"> Beranda </a>

        <a href="#menu" @click.prevent="goTo('#menu')"> Menu </a>

        <a href="#cerita" @click.prevent="goTo('#cerita')"> Cerita Kami </a>

        <a href="#footer" @click.prevent="goTo('#footer')"> Lokasi </a>
      </nav>
    </Transition>
  </header>
</template>
