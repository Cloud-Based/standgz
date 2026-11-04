<script setup lang="ts">
import { ArrowRight, Flame } from "lucide-vue-next";
import heroPhoto from "@/assets/images/products/hero.webp";
defineEmits<{ explore: [] }>();
</script>
<template>
  <section id="home" class="hero page-wrap">
    <div class="hero-copy">
      <div class="eyebrow">
        <span class="eyebrow-dot"
          ><Flame :size="15" fill="currentColor"
        /></span>
        MADE FRESH, MADE WITH LOVE
      </div>
      <h1>
        Rasa enak,<br />bikin <em>happy!</em><span class="sparkle">✳</span>
      </h1>
      <p>
        Makan enak nggak harus nunggu weekend.<br class="desktop-only" />
        Temukan comfort food favoritmu di sini.
      </p>
      <div class="hero-buttons">
        <button class="button-primary" @click="$emit('explore')">
          Gas, pilih menu <ArrowRight :size="18" /></button
        ><span class="tiny-note">no bad days, just good bites <b>☺</b></span>
      </div>
      <div class="social-proof">
        <div class="avatar-stack">
          <span>🍜</span><span>🍗</span><span>🥤</span>
        </div>
        <div><b>4.9/5</b><small>disukai foodies lokal</small></div>
        <span class="proof-stars">★★★★★</span>
      </div>
    </div>
    <div class="hero-art">
      <div class="hero-blob"></div>
      <div class="hero-sticker">YUMMY<br /><small>in my tummy!</small> ♡</div>
      <div class="hero-photo">
        <img
          :src="heroPhoto"
          alt="Rice bowl dengan sayuran segar"
        />
      </div>
      <div class="hero-caption">
        <span>01 / THE GOOD STUFF</span><b>Eat well, feel good.</b>
      </div>
      <span class="doodle doodle-one">✳</span
      ><span class="doodle doodle-two">〰</span>
    </div>
  </section>
</template>
