# Pertemuan 05 - Manajemen Produk (Tambah & Tampil)

## 🏭 Konteks Industri
Data produk adalah **nyawa** dari aplikasi kasir. Tanpa data produk yang akurat, transaksi tidak bisa dilakukan. Di industri, manajemen produk harus dirancang seefisien mungkin. Bayangkan sebuah warung yang memiliki 500+ jenis barang; aplikasi tidak boleh "lag" saat menampilkan daftar tersebut.

Kemampuan menampilkan ribuan data dengan lancar (*Smooth List Rendering*) dan menyimpan data secara lokal (*Offline-first*) adalah skill yang sangat dicari oleh perusahaan yang membangun aplikasi untuk area dengan koneksi internet tidak stabil.

## 🎯 Sprint Goal
Membangun modul manajemen produk dasar yang memungkinkan pengguna mencatat dan melihat daftar aset barang mereka.

## 📦 Product Increment
- [x] Layar Daftar Produk dengan `FlatList` (Performa tinggi).
- [x] Tombol Floating Action Button (FAB) untuk tambah produk.
- [x] Form Tambah Produk (Nama, Harga, Stok, Kategori).
- [x] Logika penyimpanan data sementara (State) dan pengenalan SQLite.
- [x] Placeholder gambar produk default.

## 💰 Nilai Bisnis
Fitur inventaris adalah alasan utama UMKM beralih dari pencatatan buku manual ke aplikasi. Dengan fitur ini, pemilik warung bisa melihat total aset barang mereka dalam hitungan detik. Modul CRUD (Create, Read, Update, Delete) produk adalah standar minimal aplikasi POS yang bernilai jutaan rupiah.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Auth & Validasi.
- **30 menit**: Teori: Performa List (FlatList) vs ScrollView.
- **150 menit**: Coding Sesi: Membuat List Produk & Form Tambah.
- **30 menit**: Peer Review: Input data produk dummy (10+ item).
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Daftar produk bisa di-scroll dengan lancar.
- [ ] Produk baru yang ditambah muncul otomatis di daftar teratas.
- [ ] Harga produk menggunakan format Rupiah (Rp).
- [ ] Validasi form: Nama produk tidak boleh kosong.
