# Pertemuan 06 - Manajemen Produk (Edit, Hapus & Stok)

## 🏭 Konteks Industri
Di dunia nyata, data produk bersifat dinamis. Harga barang bisa naik, stok berkurang karena terjual, atau produk ditarik dari peredaran. Di industri, menghapus data adalah tindakan **berisiko tinggi**. Oleh karena itu, kita harus menyediakan "Jaring Pengaman" berupa Dialog Konfirmasi sebelum data benar-benar hilang.

Selain itu, manajemen stok harus dibuat secepat mungkin. Pemilik warung tidak ingin menghabiskan 5 menit hanya untuk menambah stok 1 dus mie instan. Fitur "Quick Update Stock" adalah nilai tambah yang membuat aplikasi kita lebih unggul dari kompetitor.

## 🎯 Sprint Goal
Melengkapi siklus CRUD produk dengan fitur Edit, Hapus, dan Manajemen Stok cepat.

## 📦 Product Increment
- [x] Fitur Edit Produk (Pre-fill data ke form).
- [x] Dialog Konfirmasi sebelum menghapus produk.
- [x] Fitur Tambah/Kurang Stok cepat dari daftar produk.
- [x] Indikator visual untuk stok menipis (Warna teks berubah merah).
- [x] Swipe-to-Action (Opsional/Konsep) untuk menghapus produk dengan cepat.

## 💰 Nilai Bisnis
Kemudahan dalam memperbarui stok dan harga membantu UMKM menjaga akurasi laporan keuangan mereka. Fitur konfirmasi hapus melindungi bisnis dari kehilangan data penting yang tidak sengaja. Ini adalah fitur "Reliability" yang membangun kepercayaan klien terhadap software kita.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review List & Create Produk.
- **30 menit**: Teori: UX Konfirmasi & Manajemen State untuk Update.
- **150 menit**: Coding Sesi: Implementasi Edit & Hapus.
- **30 menit**: Peer Review: Test alur edit harga & cek apakah daftar terupdate.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Data yang diedit tersimpan dan langsung terlihat perubahannya di list.
- [ ] Muncul peringatan (Alert) "Apakah Anda yakin?" saat klik tombol hapus.
- [ ] Produk benar-benar hilang dari list setelah dikonfirmasi hapus.
- [ ] Stok tidak bisa dikurangi hingga angka negatif (Minimal 0).
