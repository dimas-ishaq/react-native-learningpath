# ☁️ WARUNGku PRO - Backend API (Laravel 11)

Folder ini dialokasikan untuk menyimpan kode *backend* aplikasi **WARUNGku PRO**.
Pada Semester Genap ini, kita bertransisi dari aplikasi *Offline-first* (SQLite) menjadi aplikasi berbasis *Cloud* (Software as a Service / SaaS).

## 🚀 Mengapa Menggunakan Laravel?
Laravel adalah framework PHP standar industri yang sangat tangguh untuk membangun API. Dengan Laravel Sanctum, kita bisa menangani Autentikasi secara aman, serta mempermudah pembuatan struktur database menggunakan *Migrations* dan *Eloquent ORM*.

## 🏗 Arsitektur Multi-Tenant
Sistem ini dirancang dengan konsep *Multi-tenancy*. Artinya, satu database (satu server) akan menampung banyak "Toko" (Tenant). Setiap pengguna hanya bisa melihat data milik toko mereka sendiri. Ini adalah fondasi dari bisnis SaaS yang menghasilkan *Recurring Revenue* (langganan bulanan).

## 📋 Prasyarat Sistem
- PHP >= 8.2
- Composer
- MySQL / MariaDB
- Postman / Insomnia (untuk testing API)
