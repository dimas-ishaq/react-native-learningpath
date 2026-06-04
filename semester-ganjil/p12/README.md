# Pertemuan 12 - Pengaturan Aplikasi & Profil Toko

## 🏭 Konteks Industri
Di dunia software development, ada strategi bisnis yang disebut **White-Labeling**. Ini berarti Anda membangun satu aplikasi "mentah", lalu Anda bisa menjualnya ke Toko A, Toko B, dan Toko C dengan identitas yang berbeda-beda tanpa mengubah kode inti. Agar ini bisa terjadi, aplikasi harus memiliki sistem **Pengaturan (Settings)** yang dinamis.

Pemilik warung ingin struk belanja mereka menampilkan Nama Toko dan Alamat mereka sendiri, bukan nama aplikasi kita. Memberikan kendali penuh atas identitas toko kepada pengguna adalah langkah awal menjadikan aplikasi Anda sebuah produk profesional yang siap dipasarkan secara massal.

## 🎯 Sprint Goal
Membangun sistem pengaturan aplikasi yang memungkinkan kustomisasi profil toko dan preferensi fitur.

## 📦 Product Increment
- [x] Layar Pengaturan Profil Toko (Nama, Alamat, No. HP).
- [x] Konfigurasi Pajak (%) dan Diskon Default.
- [x] Toggle Pengaturan UI (Dark Mode, Suara Kasir).
- [x] Penyimpanan pengaturan secara permanen (AsyncStorage).
- [x] Informasi Versi Aplikasi & Link Support.

## 💰 Nilai Bisnis
Fitur kustomisasi identitas toko adalah syarat mutlak agar aplikasi bisa dijual. Dengan fitur ini, Anda bisa menawarkan jasa "Aplikasi Kasir Kustom" ke UMKM lokal hanya dengan mengubah pengaturan di satu layar. Ini meningkatkan efisiensi Anda sebagai developer karena tidak perlu membuat aplikasi baru untuk klien baru.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Export & Backup.
- **30 menit**: Teori: White-labeling Concept & Global Configuration.
- **150 menit**: Coding Sesi: Membuat Layar Settings & State Management.
- **30 menit**: Peer Review: Mengubah nama toko dan cek apakah nama di Struk berubah.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Nama toko yang diubah di Settings muncul otomatis di Dashboard dan Struk.
- [ ] Pengaturan Pajak mempengaruhi kalkulasi di layar Kasir.
- [ ] Status toggle (ON/OFF) tersimpan meskipun aplikasi dikeluarkan (restart).
- [ ] Layout form pengaturan bersih dan mudah dioperasikan.
