# Pertemuan 13 - Optimasi Performa & UX Enhancement

## 🏭 Konteks Industri
Di industri, aplikasi yang **lemot** adalah alasan nomor satu pengguna melakukan *uninstall*. Meskipun fitur aplikasi Anda lengkap, jika transisi layarnya patah-patah (lag) atau daftar produknya tidak lancar saat di-scroll, pengguna akan menganggap aplikasi Anda produk amatir.

Optimasi performa adalah pembeda antara Junior dan Senior Developer. Senior Developer tahu cara menghemat penggunaan memori dan mencegah "re-render" yang tidak perlu. Selain itu, penambahan detail kecil seperti **Haptic Feedback** (getaran halus) dan **Skeleton Loading** memberikan kesan bahwa aplikasi sangat responsif dan modern.

## 🎯 Sprint Goal
Meningkatkan kecepatan respon aplikasi dan memperhalus pengalaman pengguna (UX).

## 📦 Product Increment
- [x] Implementasi `React.memo` dan `useCallback` pada komponen berat.
- [x] Optimasi `FlatList` dengan properti `windowSize` dan `initialNumToRender`.
- [x] Implementasi Skeleton Loading (pengganti spinner membosankan).
- [x] Haptic Feedback pada tombol transaksi dan simpan.
- [x] Perbaikan memori pada pemrosesan gambar (Image Caching konsep).

## 💰 Nilai Bisnis
Aplikasi yang cepat dan halus meningkatkan rating di Play Store/App Store. Pengguna UMKM yang sibuk membutuhkan aplikasi yang instan. Performa yang baik juga berarti aplikasi bisa berjalan lancar di HP murah (low-end), sehingga target pasar Anda menjadi jauh lebih luas.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Pengaturan & Profil Toko.
- **30 menit**: Teori: Lifecycle, Re-rendering, & Profiling.
- **150 menit**: Coding Sesi: Optimasi FlatList & Tambah Skeleton.
- **30 menit**: Peer Review: Rasakan perbedaan kelancaran scroll sebelum vs sesudah.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Scroll daftar produk terasa halus tanpa ada "putih-putih" saat di-scroll cepat.
- [ ] Komponen kartu produk tidak merender ulang jika datanya tidak berubah (Memoization).
- [ ] Muncul Skeleton Loading saat data sedang dimuat (simulasi).
- [ ] HP bergetar halus saat tombol "Bayar" ditekan.
