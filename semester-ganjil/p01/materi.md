# Materi P01: Project Setup & Branding

## 🌍 Analogi Dunia Nyata
Membangun aplikasi itu seperti membangun **Toko Fisik**.
- **Setup Project** = Membeli lahan dan menentukan pondasi bangunan.
- **Branding (Splash Screen/Logo)** = Memasang papan nama toko yang cantik di depan agar orang tertarik masuk.
- **Struktur Folder** = Menata rak-rak barang agar karyawan (developer) tidak bingung saat mencari stok.

## 💡 Konsep Inti
1. **Expo Managed Workflow**: Cara tercepat membangun aplikasi React Native tanpa harus pusing dengan konfigurasi Android Studio/Xcode di awal.
2. **Feature-Based Folder Structure**: Mengelompokkan kode berdasarkan kegunaannya (screens, components, utils) agar kode rapi.
3. **App.json**: File "KTP" aplikasi. Di sini kita mengatur nama, icon, dan warna splash screen.

## 🏗 Cara Kerja di WARUNGku
Di WARUNGku, kita akan menggunakan warna **Emerald Green (#10b981)** sebagai warna utama (Primary). Warna ini identik dengan kesegaran, uang, dan UMKM yang bertumbuh.

## ⚠️ Kesalahan Umum Junior Developer
- Menaruh semua file di root (berantakan).
- Mengabaikan `app.json` sehingga saat diinstall di HP namanya masih "Managed Expo App".
- Tidak menggunakan konstanta warna (mengetik kode warna manual di setiap file).

## 🔥 Tips Senior Developer
Selalu buat folder `src/` di awal. Jangan pernah menaruh file logika bisnis langsung di folder luar. Gunakan `.gitignore` agar folder `node_modules` yang berat tidak ikut ter-upload ke GitHub.
