# Pertemuan 08 - Proses Transaksi & Struk Digital

## 🏭 Konteks Industri
Sebuah transaksi dianggap **sah** jika ada bukti pembayaran. Di industri modern, struk fisik (kertas) mulai digantikan oleh **Struk Digital**. Mengapa? Karena lebih hemat biaya bagi UMKM (tidak perlu beli kertas/printer thermal) dan lebih ramah lingkungan.

Proses checkout harus menangani berbagai skenario pembayaran (tunai atau transfer) dan memberikan kemudahan bagi kasir untuk menghitung kembalian. Kesalahan sekecil apapun dalam pencatatan transaksi akan merusak laporan keuangan bulanan klien.

## 🎯 Sprint Goal
Menyelesaikan alur transaksi dari keranjang belanja hingga munculnya struk digital.

## 📦 Product Increment
- [x] Layar Pembayaran dengan input nominal uang (Cash).
- [x] Kalkulasi kembalian otomatis.
- [x] Simulasi penyimpanan data transaksi (Nomor Transaksi, Waktu, Item).
- [x] UI Struk Digital yang bersih dan profesional.
- [x] Animasi "Success" untuk meningkatkan kepuasan pengguna (UX).

## 💰 Nilai Bisnis
Fitur struk digital meningkatkan prestise warung di mata pelanggan. Kemampuan aplikasi menghitung kembalian secara otomatis mengurangi risiko kesalahan manusia oleh kasir. Data transaksi yang tersimpan rapi adalah dasar untuk fitur "Laporan" yang merupakan fitur premium.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Keranjang Belanja.
- **30 menit**: Teori: Transaksi Atomik & UX Bukti Bayar.
- **150 menit**: Coding Sesi: Membuat layar Bayar & Struk.
- **30 menit**: Peer Review: Tes pembayaran dengan uang pas, kurang, dan lebih.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Kasir bisa memasukkan jumlah uang tunai yang diterima.
- [ ] Sistem menampilkan kembalian secara tepat.
- [ ] Struk menampilkan Nama Toko, Daftar Item, Total, dan Waktu.
- [ ] Terdapat tombol "Transaksi Baru" untuk mereset keranjang.
