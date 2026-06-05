# Pertemuan 13 - Subscription & Monetisasi In-App (Freemium Model)

## 🏭 Konteks Industri
Membangun aplikasi hanyalah 50% dari perjalanan; 50% sisanya adalah bagaimana aplikasi tersebut **Menghasilkan Uang (Monetisasi)**. Di industri SaaS, model bisnis yang paling populer adalah **Freemium**. Kita memberikan fitur dasar secara gratis agar user tertarik mencoba, lalu mengunci fitur canggih (seperti Laporan PDF, Cloud Sync, Multi-device) di balik sistem langganan.

Developer profesional harus bisa membangun sistem "Gatekeeping" yang adil. Jika langganan user habis, fitur premium harus otomatis terkunci tanpa merusak data yang sudah ada. Kemampuan mengelola siklus hidup lisensi (*License Lifecycle Management*) adalah inti dari keberlanjutan bisnis software.

## 🎯 Sprint Goal
Membangun sistem pembatasan fitur (Freemium) dan manajemen status langganan user.

## 📦 Product Increment
- [x] Penambahan kolom `subscription_status` dan `expired_at` pada tabel `stores`.
- [x] Middleware `CheckPremium` di Laravel untuk melindungi endpoint premium.
- [x] Layar "Upgrade ke PRO" dengan tabel perbandingan fitur.
- [x] Fitur "Trial 7 Hari" otomatis untuk pendaftar baru.
- [x] UI Banner "Aktifkan PRO" pada fitur-fitur yang terkunci.

## 💰 Nilai Bisnis
Tanpa monetisasi, Anda hanya memiliki "hobi", bukan "bisnis". Fitur langganan memungkinkan Anda mendapatkan penghasilan rutin setiap bulan (*Recurring Revenue*). Ini sangat penting untuk menutupi biaya operasional server dan pengembangan fitur baru. Aplikasi dengan sistem pembayaran yang terintegrasi memiliki nilai valuasi yang jauh lebih tinggi bagi investor.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Keamanan & Hardening.
- **30 menit**: Teori: Model Bisnis SaaS (SaaS Economics) & Freemium Strategy.
- **150 menit**: Coding Sesi: Backend Subscription Logic & UI Paywall.
- **30 menit**: Peer Review: Cek apakah fitur Laporan PDF terkunci saat user berstatus 'FREE'.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] User baru otomatis mendapatkan status 'TRIAL' selama 7 hari.
- [ ] Tombol "Cetak PDF" tidak muncul atau memicu layar upgrade jika bukan user PRO.
- [ ] Status langganan di aplikasi mobile terupdate otomatis saat diubah di database server.
- [ ] Muncul notifikasi "Masa Trial Segera Habis" di Dashboard.
