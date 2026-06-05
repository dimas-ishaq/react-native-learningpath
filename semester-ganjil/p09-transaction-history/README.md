# Pertemuan 09 - Riwayat Transaksi & Filter

## 🏭 Konteks Industri
Data adalah aset berharga, tetapi data historis adalah **guru terbaik**. Di industri, fitur "History" digunakan untuk melakukan audit. Pemilik warung perlu tahu: "Berapa banyak transaksi hari ini?", "Apakah ada transaksi yang mencurigakan?", atau "Siapa pelanggan yang paling sering belanja?".

Fitur Filter adalah penyelamat saat data sudah mencapai ribuan. Tanpa filter, mencari satu transaksi dari bulan lalu akan seperti mencari jarum dalam jerami. Developer yang hebat tahu cara menyajikan data yang padat menjadi informasi yang mudah dibaca (*Information Design*).

## 🎯 Sprint Goal
Membangun modul riwayat transaksi yang memungkinkan pengguna melacak aktivitas penjualan masa lalu dengan mudah.

## 📦 Product Increment
- [x] Layar Daftar Riwayat Transaksi (History).
- [x] Fitur Filter cepat (Hari ini, 7 Hari Terakhir, 30 Hari Terakhir).
- [x] Tampilan Ringkasan per baris (Waktu, No. TRX, Total).
- [x] Layar Detail Transaksi (Breakdown item yang dibeli).
- [x] Indikator status transaksi (Sukses/Batal).

## 💰 Nilai Bisnis
Fitur riwayat adalah dasar dari transparansi bisnis. UMKM bisa mendeteksi jika ada ketidaksinkronan antara stok fisik dan catatan penjualan. Kemampuan melihat riwayat per tanggal memberikan kontrol penuh bagi pemilik warung terhadap jalannya bisnis mereka tanpa harus selalu berada di lokasi.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Proses Transaksi & Struk.
- **30 menit**: Teori: Data Filtering & Pagination Concept.
- **150 menit**: Coding Sesi: Membuat layar History & Filter.
- **30 menit**: Peer Review: Test filter untuk tanggal yang berbeda.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Transaksi terbaru muncul di paling atas daftar.
- [ ] Klik salah satu riwayat membuka layar detail yang menampilkan item-itemnya.
- [ ] Filter "Hari ini" hanya menampilkan transaksi di tanggal yang sama.
- [ ] UI tetap rapi meskipun deskripsi item sangat panjang.
