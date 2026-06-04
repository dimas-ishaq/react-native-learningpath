# Materi P02: API Autentikasi & Manajemen Toko

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Hotel Mewah**.
- **Register** = Anda datang ke resepsionis dan menunjukkan KTP untuk memesan kamar.
- **Login** = Resepsionis memberikan Anda **Kartu Akses (Key Card)**.
- **Access Token** = Kartu Akses tersebut. Anda tidak perlu menunjukkan KTP lagi ke satpam setiap kali mau masuk lift atau kamar; cukup tempelkan kartu tersebut.
- **Middleware** = Satpam yang berdiri di depan lift. Jika Anda tidak punya kartu, Anda dilarang masuk.
- **Logout** = Anda mengembalikan kartu ke resepsionis saat check-out. Kartu tersebut tidak bisa dipakai lagi.

## 💡 Konsep Inti
1. **Laravel Sanctum**: Paket bawaan Laravel yang sangat ringan untuk mengelola token API (Personal Access Tokens).
2. **Controllers**: Tempat kita menulis logika bisnis (misal: mengecek apakah password benar atau salah).
3. **Middleware**: "Filter" yang memeriksa apakah sebuah request memiliki token yang sah sebelum diizinkan mengakses data.
4. **Validation**: Aturan pengisian data di API (misal: email harus unik dan password minimal 8 karakter).

## 🏗 Cara Kerja di WARUNGku PRO
Alur pendaftaran di aplikasi kita:
1. User mengirim Nama, Email, Password, dan Nama Toko.
2. Laravel memvalidasi data.
3. Laravel menyimpan User baru.
4. Laravel otomatis menyimpan Toko baru dan menghubungkannya dengan User ID tersebut.
5. Laravel membalas dengan token sukses.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak memvalidasi email (sehingga bisa mendaftar dengan email sembarangan).
- Mengembalikan data password mentah di dalam JSON (Sangat berbahaya!).
- Lupa menambahkan middleware `auth:sanctum` di rute API, sehingga data bisa dicuri orang tanpa login.

## 🔥 Tips Senior Developer
Selalu gunakan **API Resource** di Laravel untuk memformat data JSON agar seragam. Jangan biarkan format JSON berubah-ubah antar endpoint karena akan menyulitkan tim Frontend (React Native) nantinya.
