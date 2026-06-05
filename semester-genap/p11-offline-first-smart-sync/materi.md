# Materi P11: Offline-First Architecture & Smart Sync

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Kantor Pos**.
- **User (Pengirim)** = Orang yang membawa surat (Data).
- **HP (Kotak Pos)** = Anda menaruh surat di kotak pos depan rumah kapan saja (Offline). Anda tidak perlu menunggu mobil pos datang.
- **Internet (Mobil Pos)** = Secara berkala datang mengambil surat di kotak pos untuk dibawa ke kantor pusat.
- **Server (Kantor Pusat)** = Tempat surat dikumpulkan dan diproses.
- **Smart Sync** = Jika mobil pos mogok di tengah jalan, ia akan mencoba lagi besok tanpa menghilangkan surat Anda.

## 💡 Konsep Inti
1. **NetInfo**: Modul untuk mengetahui apakah perangkat terhubung ke Wi-Fi, Seluler, atau tidak ada koneksi sama sekali.
2. **Persistent Queue**: Daftar tugas (sync) yang disimpan di storage permanen agar tidak hilang meskipun HP mati.
3. **Idempotency**: Menjamin bahwa sebuah operasi (seperti simpan transaksi) jika dilakukan berkali-kali akan memberikan hasil yang sama, mencegah data duplikat jika sinyal putus-sambung.
4. **Conflict Resolution**: Aturan "Siapa yang Menang" jika data di HP dan Server berbeda (biasanya yang terbaru yang menang / *Latest Write Wins*).

## 🏗 Cara Kerja di WARUNGku PRO
Alur Smart Sync:
1. Klik **Bayar**.
2. Simpan Transaksi di SQLite.
3. Tambahkan ID Transaksi tersebut ke tabel `sync_queue` (status: pending).
4. `NetInfo` mendeteksi koneksi.
5. Jika `isConnected === true`, sistem memanggil fungsi `processQueue()`.
6. Fungsi tersebut melooping tabel `sync_queue` dan mengirim data ke Laravel.
7. Jika Laravel membalas 200 OK, hapus dari antrean.

## ⚠️ Kesalahan Umum Junior Developer
- Mengandalkan `try...catch` saja tanpa antrean (Jika app ditutup saat internet mati, data tersebut terlupakan selamanya).
- Melakukan sync berulang kali untuk ID yang sama saat sinyal tidak stabil (Data duplikat).
- UI tidak memberikan tanda sedang offline, sehingga user bingung kenapa data di Dashboard tidak berubah.

## 🔥 Tips Senior Developer
Gunakan **Exponential Backoff**. Jika sync gagal, jangan coba lagi setiap detik. Coba lagi dalam 5 detik, lalu 10 detik, lalu 30 detik. Ini menghemat baterai HP user dan mencegah server Anda kebanjiran request yang sia-sia saat gangguan jaringan massal.
