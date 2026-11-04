# Rasa Rumah — Modular Vue 3 + TypeScript

## Menjalankan
1. `npm install`
2. `npm run dev`
3. `npm run build` untuk validasi build produksi.

## Struktur utama
- `App.vue`: root dan RouterView saja.
- `layouts/`: layout storefront dan checkout terpisah.
- `pages/`: HomePage dan CheckoutPage.
- `components/layout/`: topline, header, footer.
- `components/home/`: hero, promo, perks.
- `components/product/`: kategori, kartu produk, grid, section menu.
- `components/cart/`: drawer keranjang.
- `composables/useStore.ts`: state keranjang/favorit bersama antarhalaman.
- `data/products.ts`: katalog produk.
- `types/index.ts`: tipe TypeScript.

Checkout masih simulasi frontend; tombol Buat pesanan belum memanggil backend/payment gateway.
# standgz
