# Pertemuan 07 - Layar Kasir POS - Keranjang Belanja

## 🏭 Konteks Industri
Layar Kasir (Point of Sale) adalah **jantung** dari bisnis ritel. Di industri, kecepatan adalah segalanya. Jika sistem kasir lambat atau sulit digunakan saat antrean panjang, pelanggan akan kecewa dan pemilik bisnis akan merugi. 

Fitur "Keranjang Belanja" (Shopping Cart) bukan hanya soal menyimpan item, tapi soal bagaimana mengelola data yang terus berubah secara instan (*Real-time State Management*). Developer harus memastikan kalkulasi harga, diskon, dan jumlah barang 100% akurat karena ini melibatkan uang.

## 🎯 Sprint Goal
Membangun sistem keranjang belanja yang intuitif dan akurat di layar Kasir.

## 📦 Product Increment
- [x] UI Katalog Produk di layar kasir (Grid/List).
- [x] Sistem tambah item ke keranjang dengan sekali klik.
- [x] Logika update jumlah (qty) di dalam keranjang.
- [x] Kalkulasi otomatis Subtotal dan Total belanja.
- [x] Badge counter pada ikon keranjang.

## 💰 Nilai Bisnis
Efisiensi kasir meningkatkan kapasitas transaksi harian sebuah warung. Aplikasi yang bisa memproses transaksi dengan cepat dan akurat adalah nilai jual utama yang membuat UMKM bersedia membayar biaya lisensi software. Sistem keranjang yang modern memberikan kesan profesional pada bisnis UMKM.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review CRUD Produk.
- **30 menit**: Teori: State Management untuk Keranjang Belanja.
- **150 menit**: Coding Sesi: Membuat layar Kasir & Logika Cart.
- **30 menit**: Peer Review: Simulasi belanja 5 item berbeda.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Klik produk otomatis menambah qty atau menambah item baru di cart.
- [ ] Tombol `+` dan `-` di cart berfungsi memperbarui total harga secara instan.
- [ ] Total belanja tidak boleh salah (akurasi matematika).
- [ ] Terdapat tombol "Kosongkan Keranjang" untuk membatalkan semua pilihan.
