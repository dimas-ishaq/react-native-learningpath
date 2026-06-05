# Pertemuan 06 - Fitur Multi-Device & Real-time Dashboard

## 🏭 Konteks Industri
Di industri, sebuah bisnis jarang dijalankan oleh satu orang saja. Ada pemilik toko yang memantau dari rumah, dan ada kasir yang melayani di toko. Keduanya menggunakan aplikasi yang sama tetapi butuh data yang sinkron secara instan. Fitur **Multi-Device** adalah kunci efisiensi manajemen modern.

Fitur **Real-time Dashboard** memberikan pengalaman pengguna yang luar biasa. Bayangkan sang pemilik toko melihat grafik omzet di HP-nya bergerak naik secara otomatis tepat saat kasir mengklik tombol "Selesai" di HP kasir. Ini bukan hanya canggih, tapi juga memberikan rasa kontrol dan keamanan bagi pemilik bisnis terhadap uang mereka.

## 🎯 Sprint Goal
Membangun sistem akses multi-perangkat dan dashboard yang memperbarui data secara otomatis.

## 📦 Product Increment
- [x] Sistem Role-Based sederhana: Akun Owner (Akses penuh) vs Akun Kasir (Hanya transaksi).
- [x] Implementasi Polling Data di Dashboard menggunakan `React Query` atau `setInterval`.
- [x] Endpoint API khusus Laporan Ringkasan (`GET /api/dashboard/stats`).
- [x] UI Dashboard dengan indikator "Live" (titik hijau berkedip).

## 💰 Nilai Bisnis
Fitur ini adalah pemisah antara aplikasi "gratisan" dengan aplikasi "bisnis profesional". Kemampuan sinkronisasi antar perangkat (Multi-device) adalah alasan utama UMKM bersedia membayar langganan PRO senilai **Rp 150.000 - Rp 250.000 per bulan**. Ini adalah infrastruktur dasar untuk membangun rantai bisnis atau warung cabang banyak.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Sinkronisasi Transaksi.
- **30 menit**: Teori: Polling vs WebSocket & Konsep Role-Based Access.
- **150 menit**: Coding Sesi: Membuat Dashboard API & Logic Auto-refresh.
- **30 menit**: Peer Review: Buka Dashboard di HP A, lakukan transaksi di HP B, cek apakah HP A terupdate.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Dashboard memperbarui angka omzet otomatis tanpa harus tutup/buka aplikasi.
- [ ] Akun Kasir tidak bisa melihat menu "Laporan Keuangan" atau "Hapus Produk".
- [ ] Muncul notifikasi visual saat ada transaksi baru yang masuk ke server.
- [ ] Performa HP tetap stabil meskipun melakukan pengecekan data ke server secara berkala.
