# Pertemuan 02 - API Autentikasi & Manajemen Toko

## 🏭 Konteks Industri
Data bisnis bersifat sangat rahasia. Di industri SaaS, kebocoran data klien adalah bencana besar yang bisa menghancurkan reputasi perusahaan. Oleh karena itu, sistem **Autentikasi** harus sangat ketat. Kita menggunakan standar **Token-Based Authentication** agar aplikasi mobile bisa berkomunikasi secara aman dengan server tanpa harus mengirim password berulang kali.

Selain login, kita juga mengelola profil Toko secara dinamis. Saat user mendaftar, mereka tidak hanya membuat akun User, tapi juga mendaftarkan identitas Toko mereka. Inilah awal mula dari sistem *multi-tenant* yang profesional.

## 🎯 Sprint Goal
Membangun endpoint API untuk pendaftaran user, login, dan manajemen profil toko.

## 📦 Product Increment
- [x] Endpoint `POST /api/register` (Daftar User & Toko).
- [x] Endpoint `POST /api/login` (Mendapatkan Access Token).
- [x] Endpoint `POST /api/logout` (Menghapus Token).
- [x] Endpoint `GET /api/store` (Melihat detail profil toko).
- [x] Validasi request di sisi server (Laravel Request Validation).

## 💰 Nilai Bisnis
Sistem autentikasi yang aman adalah syarat untuk menerapkan model bisnis **Berbayar (Premium)**. Anda tidak bisa menagih biaya langganan jika sistem akun Anda tidak aman. Fitur ini memberikan kendali kepada pengembang untuk mematikan atau menghidupkan akses klien berdasarkan status pembayaran mereka.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Database Migration.
- **30 menit**: Teori: JWT vs Sanctum & Middleware Concept.
- **150 menit**: Coding Sesi: Membuat Controller & Route API.
- **30 menit**: Peer Review: Testing API menggunakan Postman.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Berhasil mendaftar user baru dan otomatis membuatkan 1 record di tabel `stores`.
- [ ] Login mengembalikan token (plainTextToken).
- [ ] Endpoint yang dilindungi (protected) tidak bisa diakses tanpa token yang valid.
- [ ] Pesan error validasi muncul dalam format JSON yang rapi.
