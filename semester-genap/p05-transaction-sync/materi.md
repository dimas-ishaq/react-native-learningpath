# Materi P05: Sinkronisasi Transaksi & Laporan Cloud

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Restoran Cabang**.
- **Transaksi Lokal** = Kasir mencatat pesanan di nota kertas dan memberikan kembalian ke pelanggan.
- **Sync Transaksi** = Di akhir shift atau saat kurir datang, nota kertas diserahkan ke kantor pusat untuk dihitung total uangnya.
- **Atomicity** = Jika ada nota yang sobek setengah (hanya ada total harga tanpa daftar makanan), kantor pusat akan menolak nota tersebut karena tidak bisa diaudit. Nota harus utuh atau tidak dianggap sama sekali.

## 💡 Konsep Inti
1. **Database Transactions**: Fitur database untuk memastikan sekumpulan perintah (misal: simpan transaksi + kurangi stok) berhasil semuanya. Jika salah satu gagal, maka semuanya dibatalkan (*Rollback*).
2. **Master-Detail Relationship**: Hubungan antara tabel `transactions` (induk) dan `transaction_items` (anak).
3. **Payload Structure**: Format pengiriman data yang kompleks (mengirim array item di dalam satu objek transaksi).
4. **Queueing Strategy**: Menyimpan daftar ID transaksi yang gagal sync ke dalam array `sync_queue` di storage lokal untuk dicoba lagi nanti.

## 🏗 Cara Kerja di WARUNGku PRO
Alur transaksi Cloud:
1. Layar Bayar klik **Proses**.
2. Simpan ke SQLite lokal (Kecepatan utama).
3. Panggil fungsi `syncCurrentTransaction`.
4. Laravel menerima data, membuka `DB::beginTransaction()`.
5. Laravel menyimpan header transaksi, lalu melooping item untuk disimpan satu per satu.
6. Jika semua ok, `DB::commit()`. Jika ada error, data dibersihkan kembali.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak mengurangi stok di server (stok di HP berkurang, tapi di database cloud tetap penuh).
- Mengirim satu per satu item ke server melalui endpoint berbeda (Sangat lambat dan berisiko data tidak konsisten).
- Lupa menambahkan pengaman `store_id` pada transaksi (transaksi Toko A masuk ke laporan Toko B).

## 🔥 Tips Senior Developer
Selalu gunakan **UUID** atau ID unik dari sisi mobile jika memungkinkan, agar saat sinkronisasi kita bisa mengecek apakah transaksi tersebut sudah pernah masuk atau belum (mencegah data ganda/duplikat).
