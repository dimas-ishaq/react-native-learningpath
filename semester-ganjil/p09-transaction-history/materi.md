# Materi P09: Riwayat Transaksi & Filter

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memiliki **Buku Kas Besar**.
- **Layar Riwayat** = Setiap baris di buku kas yang mencatat transaksi dari pagi sampai sore.
- **Filter Tanggal** = Anda menggunakan pembatas buku (bookmark) atau langsung membuka halaman "Juni 2026" untuk melihat catatan bulan tersebut.
- **Detail Transaksi** = Saat Anda melihat satu baris catatan, lalu Anda mencari nota fisiknya di lemari arsip untuk melihat detail belanjaannya.

## 💡 Konsep Inti
1. **Filtering Logic**: Menggunakan fungsi `.filter()` pada array data berdasarkan kriteria waktu.
2. **Descending Sort**: Mengurutkan data dari yang terbaru ke yang terlama (biasanya berdasarkan timestamp/ID).
3. **Date Comparison**: Membandingkan objek `Date` di JavaScript untuk menentukan apakah sebuah transaksi masuk dalam rentang waktu tertentu.
4. **Read-Only UI**: Desain layar yang khusus untuk menampilkan informasi (tidak bisa diedit) untuk menjaga integritas data historis.

## 🏗 Cara Kerja di WARUNGku
Data transaksi yang sebelumnya disimpan di "Database" akan ditarik ke layar History. Kita akan menggunakan **State** untuk menyimpan "Kriteria Filter" yang aktif. Jika user klik "Hari ini", maka fungsi filter akan dijalankan ulang dan memperbarui daftar yang tampil di layar.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak menangani data kosong (List kosong tanpa pesan apapun).
- Salah membandingkan tanggal (misal: jam ikut dibandingkan sehingga data hari ini tidak muncul).
- Performa lambat karena melakukan filter di dalam fungsi render (seharusnya gunakan `useMemo` atau filter saat data ditarik).

## 🔥 Tips Senior Developer
Gunakan format tanggal yang ramah user Indonesia (misal: `14:30 | 05 Jun 2026`). Berikan ringkasan total omzet dari hasil filter yang sedang ditampilkan agar pemilik warung langsung tahu performa penjualan di periode tersebut.
