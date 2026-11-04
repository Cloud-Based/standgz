import type { Product } from "@/types";

// Snacks
import tahuwalik from "@/assets/images/products/snacks/tahu-walik.webp";
import satean from "@/assets/images/products/snacks/sate-usus.webp";
import piscok from "@/assets/images/products/snacks/piscok.webp";
import mietelur from "@/assets/images/products/snacks/mie-telur-sate.webp";
import miepedes from "@/assets/images/products/snacks/mie-pedes.webp";
import cirengayam from "@/assets/images/products/snacks/cireng-ayam.webp";

// Drinks
import alpucok from "@/assets/images/products/drinks/alpucok.webp";
import nagasmoothie from "@/assets/images/products/drinks/buahnaga-smootis.webp";
import coklat from "@/assets/images/products/drinks/coklat.webp";
import dalgonabutter from "@/assets/images/products/drinks/dalgona-butterscot.webp";
import esteh from "@/assets/images/products/drinks/es-teh.webp";
import jerukperas from "@/assets/images/products/drinks/jeruk-peras.webp";
import jusnaga from "@/assets/images/products/drinks/jus-buahnaga.webp";
import jusmelon from "@/assets/images/products/drinks/jus-melon.webp";
import kopsuguren from "@/assets/images/products/drinks/kopisusu-gulaaren.webp";
import manggasmoothie from "@/assets/images/products/drinks/mangga-smootis.webp";
import markisa from "@/assets/images/products/drinks/markisa.webp";
import sopbuah from "@/assets/images/products/drinks/sop-buah.webp";
import taro from "@/assets/images/products/drinks/taro.webp";

export const products: Product[] = [
  // =========================
  // SNACKS
  // =========================
  {
    id: 1,
    name: "Tahu Kebalik",
    description: "Tahu crispy dengan rasa gurih dan pedas yang nagih.",
    price: 10000,
    category: "Snacks",
    image: tahuwalik,
  },
  {
    id: 2,
    name: "Bakaran (Sate Usus, Kulit, Ati Ampela)",
    description: "Aneka bakaran gurih dengan bumbu khas.",
    price: 1000,
    price2: 2000,
    category: "Snacks",
    image: satean,
  },
  {
    id: 3,
    name: "Piscok",
    description: "Pisang cokelat dengan perpaduan manis dan renyah.",
    price: 10000,
    category: "Snacks",
    image: piscok,
  },
  {
    id: 4,
    name: "Mie Telur Sate",
    description: "Mie telur dengan sensasi rasa gurih dan nikmat.",
    price: 10000,
    price2: 15000,
    category: "Snacks",
    image: mietelur,
  },
  {
    id: 5,
    name: "Cireng Ayam",
    description: "Cireng renyah dengan isian ayam yang gurih.",
    price: 10000,
    category: "Snacks",
    image: cirengayam,
  },
  {
    id: 6,
    name: "Mie Pedes",
    description: "Mie pedas dengan sensasi rasa yang bikin ketagihan.",
    price: 10000,
    price2: 15000,
    category: "Snacks",
    image: miepedes,
  },

  // =========================
  // DRINKS
  // =========================
  {
    id: 7,
    name: "Alpukat Kocok",
    description: "Alpukat creamy dengan rasa manis yang pas.",
    price: 10000,
    category: "Fruits",
    image: alpucok,
    badge: "Best seller",
  },
  {
    id: 8,
    name: "Buah Naga Smoothie",
    description: "Smoothie buah naga yang segar dan lembut.",
    price: 10000,
    category: "Smoothie",
    image: nagasmoothie,
  },
  {
    id: 9,
    name: "Es Cokelat",
    description: "Minuman cokelat dingin yang creamy.",
    price: 5000,
    category: "Drinks",
    image: coklat,
  },
  {
    id: 10,
    name: "Dalgona Butterscotch",
    description: "Perpaduan creamy dengan rasa butterscotch.",
    price: 10000,
    category: "Best Coffee",
    image: dalgonabutter,
  },
  {
    id: 11,
    name: "Es Teh",
    description: "Teh segar untuk menemani aktivitasmu.",
    price: 3000,
    category: "Drinks",
    image: esteh,
  },
  {
    id: 12,
    name: "Jeruk Peras",
    description: "Jeruk segar dengan rasa manis dan sedikit asam.",
    price: 5000,
    category: "Fruits",
    image: jerukperas,
    badge: "Best seller",
  },
  {
    id: 13,
    name: "Jus Buah Naga",
    description: "Jus buah naga segar dan menyehatkan.",
    price: 10000,
    category: "Fruits",
    image: jusnaga,
  },
  {
    id: 14,
    name: "Jus Melon",
    description: "Minuman melon segar dengan rasa manis alami.",
    price: 10000,
    category: "Fruits",
    image: jusmelon,
  },
  {
    id: 15,
    name: "Kopi Susu Gula Aren",
    description: "Kopi creamy dengan manis khas gula aren.",
    price: 10000,
    category: "Best Coffee",
    image: kopsuguren,
    badge: "Best seller",
  },
  {
    id: 16,
    name: "Mangga Smoothie",
    description: "Smoothie mangga dengan rasa tropis yang menyegarkan.",
    price: 10000,
    category: "Smoothie",
    image: manggasmoothie,
  },
  {
    id: 17,
    name: "Markisa XL",
    description: "Minuman markisa dengan perpaduan manis dan asam.",
    price: 8000,
    category: "Drinks",
    image: markisa,
    badge: "Best seller",
  },
  {
    id: 18,
    name: "Sop Buah",
    description: "Campuran buah segar dengan kuah manis dan creamy.",
    price: 10000,
    category: "Fruits",
    image: sopbuah,
  },
  {
    id: 19,
    name: "Taro Smoothie",
    description: "Minuman taro creamy dengan rasa manis yang lembut.",
    price: 10000,
    category: "Smoothie",
    image: taro,
  },
  {
    id: 20,
    name: "Americano",
    description: "Minuman kopi dengan rasa yang khas dan nikmat.",
    price: 8000,
    category: "Best Coffee",
  },
  {
    id: 21,
    name: "Kopi Susu",
    description: "Minuman kopi dengan rasa yang khas dan nikmat.",
    price: 8000,
    category: "Best Coffee",
  },
  {
    id: 22,
    name: "Caramel Latte",
    description: "Minuman kopi dengan rasa yang khas dan nikmat.",
    price: 10000,
    category: "Best Coffee",
  },
  {
    id: 23,
    name: "Red Velvet Smoothie",
    description: "Minuman kopi dengan rasa yang khas dan nikmat.",
    price: 10000,
    category: "Smoothie",
  },
  {
    id: 24,
    name: "Matcha Smoothie",
    description: "Minuman kopi dengan rasa yang khas dan nikmat.",
    price: 10000,
    category: "Smoothie",
  },
  {
    id: 24,
    name: "Milk Tea",
    description: "Minuman kopi dengan rasa yang khas dan nikmat.",
    price: 8000,
    category: "Drinks",
  },
  {
    id: 25,
    name: "Markisa",
    description: "Minuman markisa dengan perpaduan manis dan asam.",
    price: 5000,
    category: "Drinks",
    image: markisa,
    badge: "Best seller",
  },
  {
    id: 26,
    name: "Taro",
    description: "Minuman taro creamy dengan rasa manis yang lembut.",
    price: 5000,
    category: "Drinks",
    image: taro,
  },
  {
    id: 27,
    name: "Vanilla",
    description: "Minuman vanilla creamy dengan rasa manis yang lembut.",
    price: 5000,
    category: "Drinks",
  },
  {
    id: 28,
    name: "Cappucino",
    description: "Minuman cappucino creamy dengan rasa manis yang lembut.",
    price: 5000,
    category: "Drinks",
  },
  {
    id: 29,
    name: "Avocado",
    description: "Minuman avocado creamy dengan rasa manis yang lembut.",
    price: 5000,
    category: "Drinks",
  },
  {
    id: 30,
    name: "Red Velvet",
    description: "Minuman red velvet creamy dengan rasa manis yang lembut.",
    price: 5000,
    category: "Drinks",
  },
  {
    id: 31,
    name: "Matcha",
    description: "Minuman matcha creamy dengan rasa manis yang lembut.",
    price: 5000,
    category: "Drinks",
  },
  {
    id: 12,
    name: "Jeruk XL",
    description: "Jeruk segar dengan rasa manis dan sedikit asam.",
    price: 8000,
    category: "Fruits",
    image: jerukperas,
    badge: "Best seller",
  },
];

// Prioritaskan produk Best Seller
products.sort((a, b) => {
  const aBestSeller = a.badge?.toLowerCase() === "best seller";
  const bBestSeller = b.badge?.toLowerCase() === "best seller";

  return Number(bBestSeller) - Number(aBestSeller);
});
