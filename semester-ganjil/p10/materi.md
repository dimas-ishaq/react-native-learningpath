# Materi P10: Dashboard Laporan & Statistik Visual

## 🌍 Analogi Dunia Nyata
Bayangkan Anda adalah **Pilot Pesawat**.
- **Data Transaksi** = Ribuan kabel dan sensor di dalam mesin pesawat.
- **Dashboard** = Panel instrumen di depan Pilot. Pilot tidak perlu melihat kabel satu per satu; cukup lihat jarum kecepatan, ketinggian, dan sisa bahan bakar.
- **Grafik** = Radar cuaca yang menunjukkan apakah di depan ada badai atau langit cerah (Tren Bisnis).

## 💡 Konsep Inti
1. **Aggregating Data**: Menjumlahkan (`sum`) atau menghitung (`count`) data mentah menjadi satu angka ringkasan.
2. **Data Visualisation**: Mengubah angka menjadi bentuk visual (Batang, Garis, Lingkaran) agar pola lebih mudah dikenali.
3. **Information Hierarchy**: Menempatkan informasi paling penting (Omzet) di bagian paling atas dan paling besar.
4. **Conditional Styling**: Menggunakan warna untuk memberikan sinyal (misal: Merah untuk stok kritis agar pemilik segera belanja stok).

## 🏗 Cara Kerja di WARUNGku
Kita akan mengolah data dari array `transactions` dan `products`. Kita akan menghitung total uang yang masuk hari ini dan mencari tahu produk mana yang paling sering muncul di daftar transaksi. Data ini kemudian kita "umpan" ke komponen kartu statistik yang sudah kita buat di Design System (P02).

## ⚠️ Kesalahan Umum Junior Developer
- Menampilkan terlalu banyak angka (Information Overload) sehingga user bingung.
- Menggunakan warna grafik yang membingungkan (terlalu banyak warna warni).
- Tidak memberikan label/keterangan pada angka (Hanya angka "1.000.000" tanpa tulisan "Omzet Hari Ini").

## 🔥 Tips Senior Developer
Gunakan library seperti `react-native-chart-kit` untuk grafik profesional. Selalu berikan konteks waktu (misal: "vs Kemarin" atau "Bulan ini") agar pemilik warung tahu apakah bisnis mereka sedang tumbuh atau menurun.
