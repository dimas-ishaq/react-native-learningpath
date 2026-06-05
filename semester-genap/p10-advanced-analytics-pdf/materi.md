# Materi P10: Laporan Keuangan & Analitik Lanjut

## 🌍 Analogi Dunia Nyata
Bayangkan Anda berjualan **Es Teh**.
- **Omzet** = Total uang di laci kasir (misal: Rp 100.000).
- **HPP (Modal)** = Biaya teh, gula, es batu, dan plastik (misal: Rp 40.000).
- **Laba Bersih** = Uang yang benar-benar jadi milik Anda (Rp 100.000 - Rp 40.000 = Rp 60.000).
- **PDF Export** = Mencetak nota laporan tersebut untuk ditunjukkan kepada orang tua atau mitra bisnis sebagai bukti Anda untung.

## 💡 Konsep Inti
1. **HPP (Harga Pokok Penjualan)**: Total biaya yang dikeluarkan untuk memproduksi atau membeli barang yang dijual.
2. **Gross Profit (Laba Kotor)**: Omzet dikurangi HPP. Ini adalah indikator awal apakah harga jual Anda sudah benar atau terlalu murah.
3. **HTML to PDF**: Teknik populer di mobile dev di mana kita membuat desain laporan menggunakan HTML/CSS, lalu mesin *printer* ponsel mengubahnya menjadi dokumen PDF.
4. **Data Aggregation (Advanced)**: Melakukan join tabel antara `transactions` dan `products` untuk menghitung modal pada saat transaksi terjadi.

## 🏗 Cara Kerja di WARUNGku PRO
Alur Laporan Keuangan:
1. Kita menambahkan kolom `cost_price` di form Tambah Produk.
2. Setiap kali transaksi terjadi, sistem mencatat berapa modal barang saat itu.
3. Di layar Laporan, Laravel menghitung: `SUM(total_price) - SUM(qty * cost_price)`.
4. Untuk PDF, kita menyusun string HTML panjang yang berisi tabel laporan, lalu memanggil `Print.printToFileAsync`.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak menghitung HPP (Sehingga omzet dianggap sebagai keuntungan).
- Template PDF berantakan saat dibuka di layar HP yang berbeda ukuran.
- Menghitung laporan di sisi HP (Sangat lambat jika transaksi ribuan, harusnya di sisi Server/Laravel).

## 🔥 Tips Senior Developer
Selalu simpan HPP di tabel transaksi (`price_at_time` dan `cost_at_time`) karena harga modal barang dari supplier bisa berubah sewaktu-waktu. Jika tidak disimpan, laporan masa lalu Anda akan ikut berubah mengikuti harga modal terbaru, dan itu adalah kesalahan akuntansi yang fatal.
