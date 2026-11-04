<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import footerPhoto from "@/assets/images/products/footerbg.webp";
defineEmits<{ explore: [] }>();
</script>
<template>
  <section id="cerita" class="promo-section page-wrap">
    <div class="promo-card">
      <div class="promo-copy">
        <span class="promo-label">YOUR HAPPINESS, DELIVERED</span>
        <h2>Good food.<br /><em>Zero effort.</em></h2>
        <p>
          Lagi mager keluar? Tenang, makanan favoritmu siap nemenin hari.
          Tinggal klik, kami yang otw!
        </p>
        <button class="button-light" @click="$emit('explore')">
          Pilih makanan <ArrowRight :size="17" />
        </button>
        <div class="promo-scribble">made with ♡</div>
      </div>
      <div class="promo-image">
        <div class="sunburst">✳</div>
        <img
          :src="footerPhoto"
          alt="Makanan sehat siap disantap"
        /><span class="floating-note">your next<br />happy meal!</span>
      </div>
    </div>
  </section>
</template>
