# Pertemuan 12 - Keamanan & Optimasi Produksi

## 🏭 Konteks Industri
Data finansial adalah data paling sensitif. Di industri, aplikasi yang menangani uang (seperti WARUNGku PRO) menjadi target utama serangan siber. Developer harus memahami bahwa rilis ke Play Store bukan hanya soal fungsionalitas, tapi soal **Pertahanan**. Tanpa pengamanan ekstra, hacker bisa mengintip lalu lintas data (Man-in-the-Middle attack) atau mencuri algoritma bisnis Anda.

Dua senjata utama industri adalah **SSL Pinning** (memastikan aplikasi hanya bicara dengan server asli Anda) dan **Obfuscation** (mengacak kode agar tidak bisa dibaca manusia setelah dibongkar). Developer yang paham keamanan memiliki nilai tawar yang jauh lebih tinggi karena mereka melindungi aset perusahaan dari kerugian hukum dan finansial.

## 🎯 Sprint Goal
Meningkatkan standar keamanan aplikasi dan melakukan optimasi kode untuk rilis produksi.

## 📦 Product Increment
- [x] Implementasi Enkripsi pada `SecureStore` untuk data sensitif tambahan.
- [x] Konfigurasi HTTPS & Konsep SSL Pinning pada Axios.
- [x] Setup Obfuscation menggunakan `metro-minify` / Proguard Concept.
- [x] Audit Log sederhana: Mencatat aktivitas login/logout di server.
- [x] Pembersihan kode: Menghapus seluruh `console.log` otomatis saat build release.

## 💰 Nilai Bisnis
Keamanan adalah fitur "Invisible" yang membangun **Reputasi Trust**. Klien perusahaan besar atau instansi pemerintah hanya mau bekerja sama dengan software yang lolos audit keamanan. Dengan menerapkan standar industri ini, aplikasi Anda naik kelas dari sekadar "proyek sekolah" menjadi "produk enterprise" yang reliabel.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Offline Architecture.
- **30 menit**: Teori: MITM Attack, Reverse Engineering, & Security Standards.
- **150 menit**: Coding Sesi: Hardening API & Setup Obfuscation.
- **30 menit**: Peer Review: Coba bongkar APK teman (konsep) & cek lalu lintas data.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Seluruh endpoint API menggunakan HTTPS (SSL).
- [ ] Tidak ada token atau password yang tersimpan dalam teks mentah di storage HP.
- [ ] Pesan `console.log` tidak muncul saat aplikasi dijalankan dalam mode Production.
- [ ] File konfigurasi sensitif (seperti API Keys) telah dipindah ke `.env`.
