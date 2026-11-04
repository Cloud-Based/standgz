```vue
<script setup lang="ts">
import { computed, ref } from "vue";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Store,
} from "lucide-vue-next";
import { useRouter } from "vue-router";
import { useStore } from "@/composables/useStore";

const router = useRouter();

const { cart, cartTotal, formatPrice } = useStore();

const MINIMUM_DELIVERY = 20000;

const STORE_WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER || "6281234567890";

const customerName = ref("");
const phone = ref("");
const address = ref("");
const notes = ref("");

const isDelivery = computed(() => cartTotal.value >= MINIMUM_DELIVERY);

const canSubmit = computed(() => {
  return (
    cart.value.length > 0 &&
    customerName.value.trim().length > 0 &&
    phone.value.trim().length > 0 &&
    (!isDelivery.value || address.value.trim().length > 0)
  );
});

function submitOrder() {
  if (!canSubmit.value) return;

  const orderItems = cart.value
    .map((item, index) => {
      const subtotal = item.product.price * item.quantity;

      return [
        `${index + 1}. ${item.product.name}`,
        `   ${item.quantity} x ${formatPrice(item.product.price)}`,
        `   Subtotal: ${formatPrice(subtotal)}`,
      ].join("\n");
    })
    .join("\n\n");

  const normalizedPhone = phone.value.trim();

  const orderType = isDelivery.value ? "DELIVERY" : "AMBIL DI STAND (PICKUP)";

  const message = `
*HALO STAND GEN-Z! 👋*
Saya ingin memesan makanan.

*DETAIL PELANGGAN*
Nama: ${customerName.value.trim()}
WhatsApp: ${normalizedPhone}

*DETAIL PESANAN*
${orderItems}

*INFORMASI PENGANTARAN*
Jenis pesanan: ${orderType}
${
  isDelivery.value
    ? `Alamat: ${address.value.trim()}`
    : "Pesanan diambil langsung di stand."
}

${notes.value.trim() ? `Catatan: ${notes.value.trim()}` : ""}

*TOTAL PEMESANAN*
${formatPrice(cartTotal.value)}

Mohon konfirmasi pesanan saya. Terima kasih! 🙏
  `.trim();

  const whatsappUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <section class="checkout-page">
    <div class="checkout-title">
      <span class="section-kicker">TINGGAL SELANGKAH LAGI ✦</span>

      <h1>Selesaikan <em>pesananmu</em></h1>

      <p>Isi informasi pemesanan, lalu lanjutkan melalui WhatsApp.</p>
    </div>

    <!-- Keranjang tersedia -->
    <div v-if="cart.length" class="checkout-grid">
      <form class="checkout-form" @submit.prevent="submitOrder">
        <div class="form-heading">
          <h2>Informasi pelanggan</h2>
          <p>Lengkapi data berikut untuk melanjutkan pesanan.</p>
        </div>

        <label>
          Nama penerima

          <input
            v-model="customerName"
            required
            type="text"
            placeholder="Masukkan nama lengkap"
          />
        </label>

        <label>
          Nomor WhatsApp

          <input
            v-model="phone"
            required
            type="tel"
            placeholder="08xxxxxxxxxx"
          />
        </label>

        <!-- Informasi pengantaran -->
        <div class="delivery-section">
          <div class="delivery-heading">
            <component :is="isDelivery ? MapPin : Store" :size="20" />

            <div>
              <h3>
                {{ isDelivery ? "Pengantaran pesanan" : "Ambil di stand" }}
              </h3>

              <p>
                {{
                  isDelivery
                    ? "Pesanan memenuhi minimum untuk layanan delivery."
                    : "Total belanja belum memenuhi minimum delivery."
                }}
              </p>
            </div>
          </div>

          <div v-if="isDelivery" class="delivery-info">
            <label>
              Alamat pengantaran

              <textarea
                v-model="address"
                required
                rows="3"
                placeholder="Nama jalan, nomor rumah, kecamatan, dan patokan lokasi..."
              />
            </label>

            <div class="delivery-badge">
              <CheckCircle2 :size="15" />
              Minimum delivery terpenuhi
            </div>
          </div>

          <div v-else class="pickup-info">
            <Store :size="17" />

            <span>
              Belanja minimal
              <strong>{{ formatPrice(MINIMUM_DELIVERY) }}</strong>
              untuk menggunakan layanan delivery. Silakan ambil pesanan langsung
              di stand.
            </span>
          </div>
        </div>

        <label>
          Catatan pesanan
          <small>(Opsional)</small>

          <textarea
            v-model="notes"
            rows="2"
            placeholder="Contoh: sambal dipisah, tidak pakai bawang..."
          />
        </label>

        <button
          class="button-primary whatsapp-button"
          type="submit"
          :disabled="!canSubmit"
        >
          <MessageCircle :size="19" />
          Pesan melalui WhatsApp
        </button>

        <p class="checkout-disclaimer">
          Pesanan akan dikirim melalui WhatsApp untuk dikonfirmasi oleh pihak
          stand.
        </p>
      </form>

      <!-- Ringkasan pesanan -->
      <aside class="checkout-summary">
        <h2>
          <ShoppingBag :size="19" />
          Ringkasan pesanan
        </h2>

        <div v-for="item in cart" :key="item.product.id" class="checkout-item">
          <img :src="item.product.image" :alt="item.product.name" />

          <div>
            <b>{{ item.product.name }}</b>

            <small>
              {{ item.quantity }} ×
              {{ formatPrice(item.product.price) }}
            </small>
          </div>

          <strong>
            {{ formatPrice(item.product.price * item.quantity) }}
          </strong>
        </div>

        <div class="checkout-total">
          <span>Total pesanan</span>
          <b>{{ formatPrice(cartTotal) }}</b>
        </div>

        <div class="summary-delivery">
          <span>Metode pesanan</span>

          <strong :class="{ delivery: isDelivery }">
            {{ isDelivery ? "Delivery" : "Ambil di stand" }}
          </strong>
        </div>

        <div v-if="!isDelivery" class="minimum-notice">
          <span>💡</span>

          <p>
            Tambahkan belanja sebesar
            <strong>
              {{ formatPrice(MINIMUM_DELIVERY - cartTotal) }}
            </strong>
            lagi untuk mendapatkan layanan delivery.
          </p>
        </div>

        <div v-else class="minimum-success">
          <CheckCircle2 :size="16" />
          Minimum delivery terpenuhi!
        </div>

        <small class="demo-note">
          Biaya pengantaran akan dikonfirmasi melalui WhatsApp.
        </small>
      </aside>
    </div>

    <!-- Keranjang kosong -->
    <div v-else class="checkout-empty">
      <span>🛍️</span>

      <h2>Keranjang kamu masih kosong</h2>

      <p>Pilih menu favoritmu terlebih dahulu.</p>

      <button class="button-primary" @click="router.push({ name: 'home' })">
        <ArrowLeft :size="17" />
        Kembali belanja
      </button>
    </div>
  </section>
</template>

<style scoped>
.checkout-page {
  width: 100%;
}

.checkout-title {
  margin-bottom: 28px;
}

.checkout-title h1 {
  font-size: clamp(32px, 5vw, 46px);
  letter-spacing: -2px;
  margin: 8px 0;
}

.checkout-title h1 em {
  font-family: "Kalam", cursive;
  color: #f47735;
  font-weight: 700;
}

.checkout-title p {
  color: #788073;
  font-size: 13px;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 26px;
  align-items: start;
}

.checkout-form,
.checkout-summary {
  background: #fffefa;
  border: 1px solid #eeeae0;
  border-radius: 20px;
  padding: 25px;
}

.checkout-form {
  display: grid;
  gap: 19px;
}

.form-heading h2 {
  font-size: 18px;
  margin: 0 0 5px;
}

.form-heading p {
  color: #858b80;
  font-size: 12px;
  margin: 0;
}

.checkout-form label {
  display: grid;
  gap: 7px;
  font-size: 12px;
  font-weight: 800;
}

.checkout-form label small {
  display: inline;
  color: #888;
  font-weight: 400;
}

.checkout-form input,
.checkout-form textarea {
  width: 100%;
  border: 1px solid #e6e2d8;
  border-radius: 11px;
  padding: 12px 14px;
  font: inherit;
  font-weight: 500;
  font-size: 12px;
  background: #fffdfa;
  outline-color: #244632;
}

.checkout-form textarea {
  resize: vertical;
}

.delivery-section {
  padding: 17px;
  background: #f8f7f0;
  border: 1px solid #eeeae0;
  border-radius: 14px;
  display: grid;
  gap: 15px;
}

.delivery-heading {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #244632;
}

.delivery-heading h3 {
  margin: 0 0 4px;
  font-size: 13px;
}

.delivery-heading p {
  margin: 0;
  color: #858b80;
  font-size: 11px;
}

.delivery-info {
  display: grid;
  gap: 12px;
}

.delivery-badge,
.minimum-success {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #287446;
  font-size: 11px;
  font-weight: 700;
}

.pickup-info {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 12px;
  border-radius: 10px;
  background: #fffefa;
  color: #747b70;
  font-size: 11px;
  line-height: 1.6;
}

.pickup-info svg {
  flex-shrink: 0;
  color: #244632;
  margin-top: 2px;
}

.pickup-info strong {
  color: #244632;
}

.whatsapp-button {
  width: 100%;
  justify-content: center;
  gap: 9px;
  background: #244632;
}

.whatsapp-button:hover {
  background: #315c40;
}

.checkout-form .button-primary:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.checkout-disclaimer {
  margin: -10px 0 0;
  color: #858b80;
  font-size: 10px;
  text-align: center;
  line-height: 1.6;
}

.checkout-summary {
  position: sticky;
  top: 25px;
}

.checkout-summary h2 {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 17px;
  font-size: 16px;
}

.checkout-item {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 12px 0;
  border-bottom: 1px solid #eeeae0;
}

.checkout-item img {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 10px;
}

.checkout-item div {
  flex: 1;
  display: grid;
  gap: 4px;
}

.checkout-item b {
  font-size: 11px;
}

.checkout-item small,
.demo-note {
  font-size: 10px;
  color: #858b80;
}

.checkout-item strong {
  font-size: 11px;
}

.checkout-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 13px;
}

.checkout-total b {
  font-size: 18px;
  color: #244632;
}

.summary-delivery {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed #e6e2d8;
  font-size: 11px;
}

.summary-delivery strong {
  color: #9a6b2d;
}

.summary-delivery strong.delivery {
  color: #287446;
}

.minimum-notice {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 15px;
  padding: 12px;
  border-radius: 10px;
  background: #fff6e9;
}

.minimum-notice p {
  margin: 0;
  font-size: 10px;
  line-height: 1.6;
  color: #8a6b42;
}

.minimum-notice strong {
  color: #b56c22;
}

.minimum-success {
  margin-top: 15px;
  padding: 11px;
  background: #edf7ee;
  border-radius: 9px;
}

.demo-note {
  display: block;
  margin-top: 13px;
  line-height: 1.6;
}

.checkout-empty {
  text-align: center;
  background: #fffefa;
  border-radius: 20px;
  padding: 55px 20px;
}

.checkout-empty > span {
  font-size: 40px;
}

.checkout-empty p {
  color: #838a7e;
  font-size: 13px;
}

.checkout-empty .button-primary {
  margin-top: 15px;
}

@media (max-width: 720px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }

  .checkout-summary {
    position: static;
  }

  .checkout-form,
  .checkout-summary {
    padding: 19px;
  }
}
</style>