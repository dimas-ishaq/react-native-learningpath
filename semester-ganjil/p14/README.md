# Pertemuan 14 - Notifikasi & Pengingat Stok

## 🏭 Konteks Industri
Sebuah aplikasi yang hebat tidak hanya menunggu user datang, tapi juga bisa **memanggil** user kembali. Di industri, ini disebut sebagai *User Engagement* dan *Retention*. Fitur Notifikasi adalah cara paling efektif untuk memberitahu pemilik bisnis tentang hal penting yang terjadi, meskipun aplikasi sedang ditutup.

Bayangkan seorang pemilik warung yang sibuk. Mereka tidak punya waktu untuk mengecek daftar stok satu per satu setiap jam. Dengan fitur **Notifikasi Stok Menipis**, aplikasi akan secara proaktif berbisik kepada mereka: "Bos, stok Mie Instan sisa 2 bungkus, segera belanja!". Fitur ini mengubah aplikasi dari sekadar alat catat menjadi **Asisten Bisnis Pintar**.

## 🎯 Sprint Goal
Membangun sistem notifikasi lokal untuk memberikan peringatan stok dan pengingat operasional.

## 📦 Product Increment
- [x] Konfigurasi `expo-notifications` dalam aplikasi.
- [x] Fungsi pemicu notifikasi saat stok produk mencapai ambang batas (threshold).
- [x] Pengingat Laporan Harian terjadwal (misal: setiap jam 21.00).
- [x] Ikon notifikasi (badge) pada menu aplikasi.

## 💰 Nilai Bisnis
Fitur notifikasi mencegah bisnis kehilangan potensi penjualan akibat stok kosong (*Out of Stock*). Bagi UMKM, fitur ini memberikan rasa aman karena aplikasi bertindak sebagai pengawas 24/7. Developer yang bisa mengimplementasikan notifikasi dengan tepat (tidak mengganggu, tapi penting) memiliki nilai jual tinggi di mata klien.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Optimasi Performa & UX.
- **30 menit**: Teori: Local vs Push Notifications & Permission Handling.
- **150 menit**: Coding Sesi: Setup Notifications & Logic Stok Alert.
- **30 menit**: Peer Review: Tes apakah notifikasi muncul saat stok dikurangi.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Muncul notifikasi di ponsel saat stok produk diubah menjadi kurang dari 5.
- [ ] Notifikasi memiliki judul dan pesan yang jelas dan ramah user.
- [ ] Izin (Permission) notifikasi diminta secara benar saat aplikasi pertama dibuka.
- [ ] Notifikasi tetap muncul meskipun aplikasi berada di background (layar dikunci).
