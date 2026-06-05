# Materi P05: Manajemen Produk (Tambah & Tampil)

## 🌍 Analogi Dunia Nyata
Bayangkan Anda adalah **Manajer Gudang**.
- **FlatList** = Anda memiliki buku daftar barang yang sangat panjang, tetapi Anda hanya membuka halaman yang sedang dilihat mata saja untuk menghemat tenaga (memori).
- **Form Tambah** = Lembar berita acara saat ada barang baru masuk ke gudang.
- **SQLite** = Lemari arsip permanen di kantor gudang. Barang yang sudah dicatat tidak akan hilang meski lampu padam (aplikasi ditutup).

## 💡 Konsep Inti
1. **FlatList**: Komponen React Native untuk menampilkan daftar data dalam jumlah besar secara efisien. Ia hanya merender item yang terlihat di layar.
2. **KeyExtractor**: Identitas unik untuk setiap item dalam list agar React tidak bingung saat data berubah.
3. **Data Persistance**: Konsep menyimpan data agar tetap ada meskipun aplikasi dimatikan.
4. **Modality**: Menampilkan layar tambah produk di atas layar daftar produk (seperti jendela popup).

## 🏗 Cara Kerja di WARUNGku
Kita akan membuat sistem **Optimistic Update**. Begitu user klik "Simpan", data langsung muncul di layar (State), sementara di latar belakang sistem menyimpan data tersebut ke database lokal (SQLite). Ini membuat aplikasi terasa sangat instan bagi pengguna.

## ⚠️ Kesalahan Umum Junior Developer
- Menggunakan `ScrollView` untuk menampilkan ratusan data (Aplikasi akan lambat/crash).
- Tidak menggunakan format mata uang yang benar (hanya angka polos).
- Lupa menangani kondisi "Data Kosong" (Layar putih polos membuat user bingung).

## 🔥 Tips Senior Developer
Selalu gunakan `keyboardType="numeric"` untuk input Harga dan Stok agar user tidak perlu repot berpindah mode keyboard. Gunakan `Alert` konfirmasi sebelum data disimpan untuk mencegah salah input.
