# Pertemuan 01 - Backend Setup (Laravel API)

## 🏭 Konteks Industri
Aplikasi mobile yang berdiri sendiri (offline) memiliki keterbatasan: data tidak bisa diakses dari perangkat lain dan rentan hilang jika HP rusak. Di industri, transisi ke **Sistem Cloud** adalah upgrade bisnis yang sangat menguntungkan. 

Sebagai developer, membangun *Backend API* yang solid adalah langkah pertama membuat produk SaaS (Software as a Service). Backend ibarat "Dapur Pusat", sedangkan aplikasi mobile adalah "Pelayan" yang mengambil pesanan. Jika dapur pusat berantakan, seluruh cabang restoran (aplikasi) akan kacau.

## 🎯 Sprint Goal
Menyiapkan *environment* Laravel 11 sebagai fondasi RESTful API untuk WARUNGku PRO.

## 📦 Product Increment
- [x] Project Laravel 11 terinstall.
- [x] Konfigurasi koneksi database MySQL (`.env`).
- [x] File *Migrations* untuk tabel: `users`, `stores`, `products`, `transactions`.
- [x] File *Seeder* untuk menghasilkan data dummy (untuk testing).
- [x] Setup respons JSON standar untuk API.

## 💰 Nilai Bisnis
Arsitektur backend yang benar (seperti *Multi-tenancy* di mana 1 database bisa dipakai banyak klien secara aman) memungkinkan Anda menjual WARUNGku PRO dengan sistem langganan bulanan (misal: Rp 150.000/bulan per toko). Ini adalah model bisnis *Recurring Revenue* yang sangat diincar oleh para pengusaha *startup*.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Visi WARUNGku PRO (SaaS).
- **30 menit**: Teori: Konsep RESTful API & Relasi Database (ERD).
- **150 menit**: Coding Sesi: Install Laravel, buat Migration, dan Seeder.
- **30 menit**: Peer Review: Cek relasi antar tabel (Foregin Keys) di PHPMyAdmin.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Perintah `php artisan migrate` berjalan sukses tanpa error.
- [ ] Perintah `php artisan db:seed` berhasil mengisi database MySQL dengan data dummy.
- [ ] Struktur tabel memiliki relasi yang benar (misal: `products.store_id` berelasi ke `stores.id`).
