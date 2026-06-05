# Materi P07: Layar Kasir POS - Keranjang Belanja

## 🌍 Analogi Dunia Nyata
Bayangkan Anda sedang di **Supermarket**.
- **Katalog Produk** = Rak-rak barang yang Anda lihat.
- **Keranjang (Cart)** = Keranjang fisik yang Anda dorong. Saat Anda mengambil sabun, Anda memasukkannya ke keranjang. Jika butuh dua, Anda ambil satu lagi.
- **Kalkulasi Total** = Layar di meja kasir yang menjumlahkan semua harga barang saat di-scan sebelum Anda membayar.

## 💡 Konsep Inti
1. **Object-based State**: Menyimpan keranjang dalam bentuk array of objects (misal: `[{id: 1, name: 'Beras', qty: 2, price: 15000}]`).
2. **Immutability**: Prinsip di React di mana kita tidak boleh mengubah state secara langsung, melainkan membuat salinan baru (menggunakan spread operator `...`).
3. **Derived State**: Menghitung total harga langsung dari state keranjang yang ada, bukan menyimpan total harga sebagai state terpisah (agar selalu sinkron).
4. **Filtering & Finding**: Menggunakan fungsi `.find()` untuk mengecek apakah barang sudah ada di cart, dan `.filter()` untuk menghapus barang.

## 🏗 Cara Kerja di WARUNGku
Di WARUNGku, setiap klik pada produk akan memicu fungsi `addToCart`. Fungsi ini akan mengecek: "Apakah produk ini sudah ada di keranjang?". Jika YA, maka cukup tambah `qty`-nya. Jika TIDAK, maka masukkan sebagai item baru dengan `qty: 1`.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak memperbarui total harga saat qty berubah.
- Langsung mengubah nilai array (`cart[0].qty = 2`) tanpa menggunakan `setCart`. Ini akan membuat UI tidak terupdate (re-render).
- Membiarkan qty menjadi 0 atau negatif (seharusnya jika qty < 1, item dihapus dari cart).

## 🔥 Tips Senior Developer
Selalu gunakan fungsi pembulatan atau format angka yang konsisten. Untuk aplikasi POS, kecepatan render `FlatList` di katalog sangat penting. Jika produk sangat banyak, pertimbangkan untuk menggunakan pencarian (search bar) agar kasir cepat menemukan barang.
