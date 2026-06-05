# Pertemuan 04 - Sinkronisasi Produk & Stok ke Cloud

## 🏭 Konteks Industri
Fitur paling sakti dalam aplikasi SaaS adalah **Sync**. Di industri, pemilik bisnis ingin data yang mereka input di HP A otomatis muncul di HP B (misal: HP kasir dan HP pemilik). Sinkronisasi mengubah aplikasi dari "alat catat pribadi" menjadi "sistem perusahaan" yang terintegrasi.

Tantangan terbesarnya adalah bagaimana jika internet mati? Aplikasi harus tetap bisa menyimpan data secara lokal (SQLite), lalu secara cerdas mengirimkan data tersebut ke Cloud (MySQL) saat sinyal kembali pulih. Inilah yang disebut dengan arsitektur **Offline-First**.

## 🎯 Sprint Goal
Membangun sistem sinkronisasi data produk dari database lokal ke server cloud.

## 📦 Product Increment
- [x] Endpoint API `GET/POST/PUT/DELETE /api/products` di Laravel.
- [x] Middleware Scope: Hanya menampilkan produk milik Toko yang login.
- [x] Fitur "Push to Cloud" pada modul manajemen produk.
- [x] Indikator visual status data (Ikon awan: Hijau = Ter-sync, Abu-abu = Belum sync).
- [x] Logika penanganan konflik data sederhana.

## 💰 Nilai Bisnis
Fitur sinkronisasi adalah **Value Proposition** utama untuk upgrade ke versi PRO. Klien UMKM rela membayar biaya langganan bulanan demi keamanan data (jika HP hilang, data di server tetap ada) dan kemudahan monitoring jarak jauh. Tanpa sync, aplikasi Anda hanyalah sebuah "pulau" yang terisolasi.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Integrasi Auth.
- **30 menit**: Teori: Sync Logic & Offline-First Strategy.
- **150 menit**: Coding Sesi: Membuat Product API & Logic Sync di HP.
- **30 menit**: Peer Testing: Input produk di emulator, cek data di database laptop.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Produk yang ditambah di HP muncul di database MySQL (tabel `products`).
- [ ] List produk ditarik dari API jika user sedang online.
- [ ] Terdapat status "Synced" pada setiap item produk di layar.
- [ ] Foto produk (jika ada) berhasil ter-upload ke storage server.
