# Pertemuan 03 - Navigasi & Arsitektur Layar Lengkap

## 🏭 Konteks Industri
Navigasi adalah "tulang punggung" dari sebuah aplikasi mobile. Aplikasi yang hebat bukan hanya yang fiturnya banyak, tapi yang **mudah dipindahkan (easy to navigate)**. Di industri, kita menggunakan standar navigasi seperti **Bottom Tabs** untuk fitur utama dan **Stack** untuk alur detail (seperti Klik Produk -> Lihat Detail).

Jika arsitektur navigasi salah dibuat di awal, aplikasi akan terasa berat, membingungkan user (UX buruk), dan sulit dikembangkan saat ada fitur baru.

## 🎯 Sprint Goal
Membangun kerangka navigasi lengkap aplikasi WARUNGku agar semua layar utama bisa diakses.

## 📦 Product Increment
- [x] Instalasi & Konfigurasi React Navigation.
- [x] Bottom Tab Navigator (4 Tab: Kasir, Produk, Laporan, Profil).
- [x] Stack Navigator untuk alur Autentikasi (Login/Register).
- [x] Layar Placeholder untuk setiap fitur utama.

## 💰 Nilai Bisnis
Aplikasi dengan navigasi yang intuitif memiliki *Retention Rate* (tingkat pengguna kembali) yang lebih tinggi. Klien UMKM akan merasa aplikasi ini "mudah dipakai" oleh karyawan mereka yang mungkin tidak terlalu melek teknologi. Arsitektur yang rapi juga memudahkan tim developer lain bergabung dalam proyek.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Design System.
- **30 menit**: Teori: Stack vs Tab Navigation & UX Flow.
- **150 menit**: Coding Sesi: Setup Navigation Container & Navigators.
- **30 menit**: Peer Testing: Mencoba berpindah layar tanpa error.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] User bisa berpindah antar 4 tab utama tanpa kendala.
- [ ] Tombol "Kembali" berfungsi dengan benar di Stack Navigator.
- [ ] Ikon pada Bottom Tab sesuai dengan konteks fiturnya.
- [ ] Struktur file navigasi terpisah di folder `src/navigation/`.
