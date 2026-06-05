# Materi P15: Capstone - Build, Test & Deploy

## 🌍 Analogi Dunia Nyata
Bayangkan Anda sedang meluncurkan **Buku Novel Baru**.
- **Build AAB** = Mencetak buku dalam jumlah besar di percetakan profesional. Formatnya sangat rapi dan ukurannya pas untuk rak toko buku.
- **Internal Testing** = Membagikan buku ke beberapa teman dekat (kritikus) untuk mencari salah ketik (typo) sebelum dijual massal.
- **Google Play Store** = Toko buku Gramedia atau Amazon. Tempat di mana seluruh dunia bisa menemukan dan membeli buku Anda.
- **Landing Page** = Poster atau website profil buku Anda agar orang tertarik untuk pergi ke toko buku dan membelinya.

## 💡 Konsep Inti
1. **Android App Bundle (AAB)**: Format publikasi standar Google Play yang memungkinkan Google membuat APK yang dioptimalkan sesuai dengan spesifikasi HP masing-masing pengguna (Hemat size!).
2. **Internal Testing Track**: Fitur Google Play Console untuk merilis aplikasi secara terbatas ke maksimal 100 penguji yang kita undang.
3. **App Store Optimization (ASO)**: Teknik membuat deskripsi, kata kunci, dan screenshot aplikasi yang menarik agar mudah ditemukan di pencarian Play Store.
4. **Product Documentation**: Tulisan instruksi yang menjelaskan kegunaan produk dan cara merawat/menginstalnya.

## 🏗 Cara Kerja di WARUNGku PRO
Alur Final Delivery:
1. Pastikan seluruh API Laravel sudah online (Production Server).
2. Jalankan `eas build --platform android` untuk mendapatkan `.aab`.
3. Unggah file tersebut ke **Google Play Console** di jalur "Internal Testing".
4. Undang teman sekelas sebagai tester untuk mencoba fitur Cloud Sync.
5. Buat website satu halaman sederhana (Landing Page) yang berisi: "WARUNGku PRO - Solusi Kasir UMKM Tercanggih".

## ⚠️ Kesalahan Umum Junior Developer
- Mengunggah aplikasi yang API-nya masih menembak ke `localhost` (Tentu saja tidak akan jalan di internet!).
- Lupa mencatat **Keystore Password** (Jika hilang, aplikasi tidak bisa di-update selamanya di Play Store).
- Mengabaikan kualitas screenshot (Screenshot yang buram atau tidak menarik akan membuat user enggan men-download).

## 🔥 Tips Senior Developer
Selalu buat **Release Notes** setiap kali rilis versi baru. Berikan daftar apa yang baru atau apa yang diperbaiki (misal: "Versi 1.2: Perbaikan bug cetak PDF"). User sangat menyukai developer yang rajin melakukan pembaruan aplikasi.
