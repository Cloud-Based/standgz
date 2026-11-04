<script setup lang="ts">
import { House } from "lucide-vue-next";
</script>

<template>
  <footer id="footer" class="footer page-wrap">
    <a href="#home" class="brand">
      <span class="brand-mark">
        <House :size="25" stroke-width="3" />
        <i>♥</i>
      </span>
      <span>Stand <span>Gen-Z.</span></span>
    </a>

    <p>Good food, good mood. Sampai ketemu di gigitan berikutnya!</p>

    <div class="footer-bottom">
      <span>© 2026 Stand Gen-Z. Made for your happy tummy.</span>
      <span class="footer-credit">
        Crafted with ♥ by <strong>Playpulia</strong>
      </span>
    </div>
  </footer>
</template>
