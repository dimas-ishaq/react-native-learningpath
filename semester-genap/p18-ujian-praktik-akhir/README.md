# Pertemuan 18 - Ujian Praktik Akhir (Final Project Delivery)

## 🏭 Konteks Industri
Inilah hari **"Product Launch"**. Di industri, momen ini adalah saat Anda melakukan serah terima proyek ke klien (Handover) atau meluncurkan produk ke publik. Keberhasilan hari ini ditentukan oleh seberapa baik aplikasi Anda bekerja di bawah tekanan dan seberapa meyakinkan Anda dalam mempresentasikan solusi tersebut.

Anda bukan lagi seorang siswa, Anda adalah **Founder & Lead Developer** dari solusi digital "WARUNGku PRO".

## 🎯 Tujuan Ujian
Mendemonstrasikan produk utuh "WARUNGku PRO" yang mencakup aspek Full-stack Development, Cloud Integration, dan Business Pitching.

## ⏱ Durasi: 240 Menit (Sesi Demo & Penilaian)

---

## 📝 Instruksi Ujian (The Grand Delivery)

Tugas Anda adalah melakukan presentasi final yang terdiri dari 3 bagian:

### 1. The Business Pitch (5 Menit)
Gunakan Pitch Deck Anda untuk menjelaskan:
- Siapa target UMKM yang Anda sasar.
- Mengapa mereka harus membayar untuk versi PRO Anda.
- Bagaimana strategi Anda bersaing dengan aplikasi kasir besar lainnya.

### 2. The Live Demo (10 Menit)
Tunjukkan alur kerja lengkap aplikasi (Happy Path):
- **User A (Owner)**: Login, lihat Dashboard yang masih kosong, tambah produk via QR Scanner.
- **User B (Kasir)**: Login di HP berbeda, lakukan 3 transaksi (1 Tunai, 1 Hutang, 1 Diskon).
- **User A (Owner)**: Dashboard terupdate otomatis, buka Laporan Keuangan, dan Export PDF Laba Rugi.
- **Uji Offline**: Matikan internet, lakukan 1 transaksi, nyalakan kembali, dan tunjukkan data masuk ke Cloud.

### 3. Technical Q&A (5 Menit)
Jawablah pertanyaan penguji mengenai:
- Bagaimana cara kerja sinkronisasi data Anda?
- Bagaimana Anda menjamin keamanan data transaksi antar toko?
- Apa kendala teknis terbesar yang Anda selesaikan di project ini?

---

## 📊 Rubrik Penilaian Akhir (Total 100%)
1. **API & Database Integration (30%)**: Kestabilan Cloud Sync dan akurasi data di MySQL.
2. **Mobile App Functionality (30%)**: Kelengkapan fitur (QR, WA, PDF, Auth) dan kehalusan UX.
3. **Security & Performance (10%)**: Pengamanan token, pembersihan log, dan penanganan offline.
4. **Business & Presentation (20%)**: Kualitas Pitch Deck, Landing Page, dan kemampuan komunikasi.
5. **Documentation & Git (10%)**: Kerapian repositori dan kelengkapan file README.

---

## 📋 Prosedur Final Push
1. Tag versi final Anda di Git: `git tag -a v1.0.0 -m "Final Release Capstone WARUNGku PRO"`.
2. Push seluruh perubahan dan tag ke GitHub: `git push origin main --tags`.
3. Serahkan URL GitHub, URL Landing Page, dan file AAB/APK kepada instruktur.
