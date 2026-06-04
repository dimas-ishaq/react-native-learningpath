# Materi P13: Optimasi Performa & UX Enhancement

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Restoran Cepat Saji**.
- **Tanpa Optimasi** = Setiap ada pesanan, koki harus membaca buku resep dari awal, mencari bahan di gudang jauh, baru memasak. Pelanggan antre lama.
- **Dengan Optimasi (Memoization)** = Koki sudah menyiapkan bahan yang sering dipakai di meja depan (Caching). Koki juga sudah hafal resep (Memo) sehingga tidak perlu baca buku lagi setiap saat.
- **Skeleton Loading** = Saat makanan dimasak, pelayan memberikan piring dan sendok terlebih dahulu. Pelanggan merasa proses sudah dimulai dan tidak bosan menunggu.

## 💡 Konsep Inti
1. **React.memo**: Mencegah komponen merender ulang jika props-nya sama. Sangat efektif untuk item dalam list.
2. **useCallback & useMemo**: Menyimpan fungsi atau nilai perhitungan agar tidak dibuat ulang setiap kali parent component merender ulang.
3. **FlatList Optimization**: Menggunakan properti seperti `removeClippedSubviews` untuk membuang item yang tidak terlihat dari memori.
4. **Skeleton Screen**: Tampilan abu-abu bergerak yang menyerupai bentuk konten asli, memberikan persepsi bahwa aplikasi loading lebih cepat daripada spinner bulat biasa.

## 🏗 Cara Kerja di WARUNGku
Kita akan mengoptimalkan `ProductCard`. Karena daftar produk bisa sangat panjang, kita akan membungkus `ProductCard` dengan `React.memo`. Kita juga akan menggunakan `expo-haptics` untuk memberikan getaran saat kasir berhasil memproses pembayaran, memberikan kepuasan psikologis bahwa "transaksi sudah beres".

## ⚠️ Kesalahan Umum Junior Developer
- Menggunakan `React.memo` di SEMUA komponen (Over-optimization malah bisa membuat app lambat karena React sibuk membandingkan props).
- Tidak memberikan `keyExtractor` yang unik di FlatList, menyebabkan list berkedip saat data berubah.
- Loading screen yang terlalu lama tanpa ada indikator kemajuan.

## 🔥 Tips Senior Developer
Gunakan fitur **Performance Monitor** di menu pengembang Expo untuk melihat FPS (Frames Per Second). Targetkan aplikasi Anda selalu berjalan di **60 FPS** untuk kehalusan maksimal.
