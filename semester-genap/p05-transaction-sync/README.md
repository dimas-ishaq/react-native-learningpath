# Pertemuan 05 - Sinkronisasi Transaksi & Laporan Cloud

## 🏭 Konteks Industri
Jika data produk adalah "Aset", maka data transaksi adalah "Arus Kas". Di industri, data transaksi adalah data yang paling sering diaudit. Pemilik bisnis butuh kepastian bahwa setiap Rupiah yang masuk tercatat di server Cloud secara *real-time*.

Tantangan sinkronisasi transaksi lebih sulit dibanding produk karena melibatkan relasi data (misal: 1 Transaksi memiliki banyak Item). Kita harus memastikan proses pengiriman data bersifat **Atomik**; artinya, data transaksi dan daftar item yang dibeli harus tersimpan keduanya atau tidak sama sekali. Jika hanya transaksi yang tersimpan tanpa itemnya, maka laporan keuangan akan rusak.

## 🎯 Sprint Goal
Membangun sistem sinkronisasi data transaksi (Master-Detail) dari aplikasi mobile ke database pusat (Cloud).

## 📦 Product Increment
- [x] Endpoint API `POST /api/transactions` (Mendukung data array/nested items).
- [x] Middleware Transaction di Laravel (DB Transaction) untuk keamanan data.
- [x] Fitur otomatis push transaksi ke Cloud setelah pembayaran sukses (jika online).
- [x] Sinkronisasi "Laporan Cloud" sehingga Dashboard Owner selalu up-to-date.
- [x] Indikator status transaksi di Riwayat (Ikon awan).

## 💰 Nilai Bisnis
Sinkronisasi transaksi adalah fitur **Anti-Fraud** (Anti-Kecurangan). Pemilik warung bisa memantau transaksi dari jarak jauh tanpa harus bertanya ke kasir. Data transaksi di Cloud juga memungkinkan UMKM mendapatkan fitur "Analitik Lanjut" (seperti prediksi stok) yang merupakan fitur langganan paling mahal.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Sinkronisasi Produk.
- **30 menit**: Teori: Database Transactions & Nested API Requests.
- **150 menit**: Coding Sesi: Membuat Transaction API & Sync Logic di Cart.
- **30 menit**: Peer Review: Lakukan transaksi di HP, cek tabel `transactions` dan `transaction_items` di laptop.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Data transaksi di MySQL memiliki daftar item yang lengkap sesuai belanjaan di HP.
- [ ] Stok produk di database MySQL berkurang secara otomatis setelah transaksi tersinkron.
- [ ] Jika internet mati saat bayar, transaksi tetap tersimpan di lokal dan masuk antrean sync.
- [ ] Laporan omzet di Dashboard Cloud (Web/Owner HP) sama dengan total di HP Kasir.
