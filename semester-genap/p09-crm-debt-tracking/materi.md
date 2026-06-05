# Materi P09: Fitur Hutang Pelanggan & CRM Mini

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Buku Tebal di Warung Pojok**.
- **CRM** = Halaman depan buku tempat mencatat Nama dan Alamat pelanggan tetap.
- **Hutang** = Halaman-halaman belakang tempat mencatat "Budi - Beras 1kg - Belum Bayar".
- **Tracking** = Setiap kali Budi lewat, pemilik warung melihat catatan tersebut dan mengingatkan: "Mas Budi, hutang yang kemarin belum ya".
- **CRM Modern** = Mengganti ingatan pemilik warung dengan notifikasi otomatis ke HP Mas Budi.

## 💡 Konsep Inti
1. **Customer Profiling**: Mengumpulkan data dasar pelanggan untuk membangun loyalitas.
2. **Accounts Receivable (Piutang)**: Uang yang merupakan hak kita tetapi masih berada di tangan orang lain.
3. **Transaction Status**: Menambahkan status `PAID`, `DEBT`, atau `PARTIAL` pada transaksi.
4. **Saldo Akumulatif**: Logika menjumlahkan seluruh transaksi hutang yang belum dibayar menjadi satu angka "Total Hutang".

## 🏗 Cara Kerja di WARUNGku PRO
Alur Transaksi Hutang:
1. Di layar Kasir, pilih produk.
2. Klik **Bayar**.
3. Di layar Pembayaran, ada pilihan: **Tunai** atau **Hutang**.
4. Jika pilih **Hutang**, user wajib memilih **Pelanggan** dari daftar.
5. Sistem menyimpan transaksi dengan `status = 'debt'`.
6. Sistem menambah nilai `balance` pada tabel `customers`.

## ⚠️ Kesalahan Umum Junior Developer
- Mengizinkan hutang tanpa memilih pelanggan (Data hutang jadi anonim dan tidak bisa ditagih).
- Tidak mencatat riwayat cicilan (Hanya mencatat Lunas/Belum, padahal pelanggan sering mencicil).
- Lupa menambahkan validasi nomor WA (Sehingga fitur tagih WA tidak berfungsi).

## 🔥 Tips Senior Developer
Selalu simpan **ID Transaksi** di dalam catatan hutang agar jelas hutang tersebut berasal dari belanjaan yang mana. Berikan batas maksimal hutang (Limit) per pelanggan untuk melindungi pemilik toko dari kerugian besar jika pelanggan tidak membayar.
