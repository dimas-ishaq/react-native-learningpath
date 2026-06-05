# 📑 Template Dokumentasi Produk - WARUNGku PRO

## 🚀 Fitur Utama
- **Multi-Tenant Cloud Sync**: Akses data toko Anda dari mana saja, kapan saja.
- **Role Management**: Akun terpisah untuk Owner dan Kasir dengan hak akses aman.
- **Smart Offline Mode**: Tetap bertransaksi meski internet mati, data otomatis sync saat online.
- **Financial Analytics**: Laporan laba rugi otomatis dan ekspor PDF resmi.
- **QR Eco-system**: Scan produk secepat minimarket modern.

## 🛠 Panduan Instalasi (Backend)
1. Clone repositori ini.
2. Jalankan `composer install`.
3. Konfigurasi `.env` (Database & Sanctum).
4. Jalankan `php artisan migrate --seed`.
5. Jalankan `php artisan serve`.

## 📱 Panduan Jalankan (Mobile)
1. Pastikan Node.js terinstall.
2. Jalankan `npm install`.
3. Ubah `API_URL` di `src/services/api.js` ke alamat server Anda.
4. Jalankan `npx expo start`.

---

# 🌐 Struktur Landing Page (Sederhana)
Siswa diminta membuat file `index.html` dengan struktur:
- **Hero Section**: Judul besar dan slogan aplikasi.
- **Feature Grid**: Ikon dan penjelasan singkat 3-4 fitur andalan.
- **Price Table**: Perbandingan paket FREE vs PRO.
- **Screenshot Gallery**: Tampilan layar Dashboard dan Kasir.
- **CTA (Call to Action)**: Tombol "Download Sekarang" atau "Coba Demo".
