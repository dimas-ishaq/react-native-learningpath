# Materi P03: Navigasi & Arsitektur Layar

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Mall Besar**.
- **Bottom Tab** = Peta utama di lantai dasar yang menunjukkan lokasi departemen (Baju, Makanan, Elektronik).
- **Stack Navigation** = Saat Anda masuk ke toko Baju, lalu masuk lagi ke ruang ganti. Anda harus keluar dari ruang ganti untuk kembali ke area toko Baju.
- **Navigation Container** = Pintu masuk utama mall. Tanpa lewat sini, Anda tidak bisa masuk ke bagian manapun.

## 💡 Konsep Inti
1. **Navigation Container**: Pembungkus utama yang mengelola *state* navigasi seluruh aplikasi.
2. **Stack Navigator**: Alur layar yang bertumpuk (Layar A -> Layar B). Cocok untuk form atau detail data.
3. **Bottom Tab Navigator**: Menu utama yang selalu terlihat di bagian bawah layar. Cocok untuk fitur-fitur mandiri.
4. **Nesting Navigators**: Memasukkan Stack di dalam Tab (misal: Tab Produk memiliki Stack untuk Tambah Produk).

## 🏗 Cara Kerja di WARUNGku
Kita akan membagi navigasi menjadi dua kelompok besar:
- **AuthStack**: Login dan Register.
- **MainTab**: Kasir (POS), Produk (Catalog), Laporan (Analytics), dan Profil (Settings).

## ⚠️ Kesalahan Umum Junior Developer
- Tidak menggunakan `NavigationContainer` sehingga aplikasi crash.
- Menumpuk terlalu banyak Stack tanpa alasan yang jelas (memori boros).
- Nama route (halaman) yang tidak konsisten (campur bahasa Inggris/Indonesia).

## 🔥 Tips Senior Developer
Selalu gunakan nama route yang deskriptif. Gunakan ikon yang familiar bagi user UMKM (misal: Ikon Keranjang untuk Kasir, Ikon Kotak untuk Produk).
