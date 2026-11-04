<script setup lang="ts">
import { Truck, ShieldCheck, Headphones, Star } from "lucide-vue-next";
const perks = [
  {
    title: "Sat set delivery",
    description: "Langsung meluncur ke kamu",
    icon: Truck,
  },
  {
    title: "Pay with peace",
    description: "Transaksi aman & nyaman",
    icon: ShieldCheck,
  },
  {
    title: "We got you",
    description: "Siap bantu kapan aja",
    icon: Headphones,
  },
  {
    title: "Quality first",
    description: "Bahan fresh, rasa juara",
    icon: Star,
  },
];
</script>
<template>
  <section class="perks page-wrap">
    <div v-for="perk in perks" :key="perk.title" class="perk">
      <span><component :is="perk.icon" /></span>
      <div>
        <b>{{ perk.title }}</b
        ><small>{{ perk.description }}</small>
      </div>
    </div>
  </section>
</template>
