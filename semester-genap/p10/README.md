# Pertemuan 10 - Laporan Keuangan & Analitik Lanjut

## 🏭 Konteks Industri
Banyak pemilik warung merasa uang mereka "habis" tapi tidak tahu ke mana. Mereka mencatat penjualan, tapi lupa menghitung modal. Di industri, sebuah aplikasi POS profesional wajib memiliki fitur **Laporan Keuangan**. Fitur ini bukan sekadar mencatat uang masuk, tapi menghitung **Laba Bersih** secara otomatis.

Analitik lanjut membantu pemilik toko melihat performa bisnis dari sudut pandang investor. Produk mana yang paling untung? Kapan waktu paling sibuk? Fitur **Export PDF** juga menjadi standar profesional agar laporan bisa dicetak atau dikirim ke rekan bisnis sebagai dokumen resmi yang rapi dan tidak bisa diubah isinya.

## 🎯 Sprint Goal
Membangun modul perhitungan laba rugi dan fitur ekspor laporan keuangan ke format PDF.

## 📦 Product Increment
- [x] Penambahan kolom `cost_price` (HPP) pada tabel produk.
- [x] Endpoint API Laporan Laba Rugi (`GET /api/reports/profit-loss`).
- [x] Grafik tren keuntungan mingguan/bulanan.
- [x] Integrasi `expo-print` dan `expo-sharing` untuk generate PDF.
- [x] Template PDF laporan keuangan yang profesional.

## 💰 Nilai Bisnis
Fitur analitik keuangan adalah fitur **Premium** yang biasanya hanya ada di paket langganan paling mahal. Kemampuan menyajikan data keuangan yang akurat meningkatkan nilai jual aplikasi Anda di mata pengusaha UMKM yang serius ingin mengembangkan bisnisnya. Laporan PDF yang profesional membuat aplikasi Anda setara dengan software akuntansi ternama.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Fitur Hutang & CRM.
- **30 menit**: Teori: Konsep HPP (Harga Pokok Penjualan) & Gross Profit.
- **150 menit**: Coding Sesi: API Laba Rugi & Implementasi PDF Export.
- **30 menit**: Peer Review: Cek akurasi perhitungan Untung = Omzet - Modal.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Angka Laba Bersih muncul dengan benar (tidak boleh negatif jika penjualan > modal).
- [ ] Berhasil menghasilkan file PDF yang berisi ringkasan penjualan toko.
- [ ] File PDF dapat dibuka dan tampilannya rapi (ada header nama toko).
- [ ] Grafik menunjukkan pergerakan keuntungan dari hari ke hari.
