# Materi P01: Backend Setup (Laravel API)

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Restoran Franchise Besar**.
- **Aplikasi Mobile (Frontend)** = Buku menu dan pelayan di meja pelanggan.
- **API (Application Programming Interface)** = Pelayan yang berjalan dari meja pelanggan ke dapur untuk menyerahkan pesanan.
- **Backend (Laravel)** = Dapur pusat yang memasak pesanan sesuai instruksi pelayan.
- **Database (MySQL)** = Kulkas dan lemari penyimpanan bahan baku di dalam dapur.

## 💡 Konsep Inti
1. **RESTful API**: Aturan standar dalam mengirim dan menerima data melalui internet (menggunakan format JSON). Terdiri dari Endpoint (URL) dan Method (GET, POST, PUT, DELETE).
2. **Migrations**: "Version Control" untuk database. Memungkinkan tim developer membuat dan mengubah struktur tabel menggunakan kode PHP, bukan manual klik di PHPMyAdmin.
3. **Seeder & Factory**: Alat untuk membuat ribuan data palsu (dummy) secara otomatis agar kita bisa mengetes performa API tanpa harus menginput data satu per satu.
4. **Foreign Keys**: Tali pengikat yang menghubungkan satu tabel dengan tabel lain (contoh: Barang A milik Toko B).

## 🏗 Cara Kerja di WARUNGku PRO
Kita tidak akan merender tampilan HTML/Blade di Laravel ini. Laravel hanya akan bertugas sebagai **Mesin Data** (Penyedia API). Aplikasi React Native kita nanti akan mengirim request (misal: `POST /api/login`), dan Laravel akan membalas dengan JSON `{"status": "success", "token": "xyz"}`.

## ⚠️ Kesalahan Umum Junior Developer
- Lupa mengatur file `.env`, sehingga koneksi database ditolak.
- Menulis logika bisnis di dalam Migration (Migration hanya untuk struktur tabel!).
- Tidak membuat struktur *Foreign Key* yang ketat (misal: `onDelete('cascade')`), sehingga akan ada "data yatim piatu" saat toko dihapus.

## 🔥 Tips Senior Developer
Selalu buat *diagram relasi entitas* (ERD) di kertas atau alat desain (seperti dbdiagram.io) sebelum menulis kode Migration. Mengubah struktur database di tengah proyek yang sudah berjalan jauh lebih sulit daripada mengubah tampilan UI.
