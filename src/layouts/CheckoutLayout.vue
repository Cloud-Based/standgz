<script setup lang="ts">
import { ArrowLeft, House } from "lucide-vue-next";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="checkout-layout min-h-screen bg-cream text-ink">
    <header class="checkout-header">
      <button class="back-button" @click="router.push({ name: 'home' })">
        <ArrowLeft :size="18" /> Kembali ke toko</button
      ><a class="brand" href="/"
        ><span class="brand-mark"><House :size="23" /><i>♥</i></span
        ><span>Stand <span>Gen-Z.</span></span></a
      >
    </header>
    <main class="checkout-content"><RouterView /></main>
  </div>
</template>
<style scoped>
.checkout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px max(calc((100% - 1100px) / 2), 5%);
  background: #f8f5ed;
  border-bottom: 1px solid #e8e3d8;
}
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  color: #244632;
  font-weight: 700;
  cursor: pointer;
}
.checkout-content {
  width: min(1100px, 90%);
  margin: 40px auto;
}
.checkout-header .brand {
  font-size: 20px;
}
</style>
