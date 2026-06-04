# Pertemuan 11 - Export Laporan & Backup Data

## 🏭 Konteks Industri
Data yang terkunci di dalam aplikasi adalah data yang "mati". Di industri, klien seringkali membutuhkan data mereka dalam format yang bisa diolah lebih lanjut (seperti **Excel**) untuk keperluan pajak, akuntansi mendalam, atau sekadar dicetak. Fitur **Export CSV** adalah standar wajib aplikasi bisnis.

Selain itu, ponsel bisa hilang atau rusak. Tanpa fitur **Backup**, semua catatan bisnis UMKM selama berbulan-bulan bisa hilang dalam sekejap. Memberikan fitur backup dan restore adalah bentuk tanggung jawab developer terhadap keamanan aset digital klien.

## 🎯 Sprint Goal
Membangun sistem pengeluaran data (Export) dan pengamanan data (Backup) sederhana.

## 📦 Product Increment
- [x] Fungsi konversi data transaksi (Array) menjadi format CSV.
- [x] Integrasi `Sharing` API untuk mengirim file CSV via WhatsApp/Email.
- [x] Konsep Backup database lokal ke file teks.
- [x] Tombol "Export Laporan Bulan Ini" di layar Laporan.

## 💰 Nilai Bisnis
Fitur export memudahkan pemilik warung bekerja sama dengan akuntan atau pihak bank (saat mengajukan pinjaman). Fitur backup memberikan "Ketenangan Pikiran" (Peace of Mind) bagi klien. Aplikasi yang menjamin keamanan data memiliki nilai jual lebih tinggi karena dianggap reliabel dan profesional.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Dashboard & Statistik.
- **30 menit**: Teori: Data Portability & File System Access.
- **150 menit**: Coding Sesi: Membuat fungsi Export CSV & Sharing.
- **30 menit**: Peer Review: Mencoba export data dan membukanya di aplikasi lain.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] File CSV yang dihasilkan bisa dibuka dan dibaca isinya (No. TRX, Tanggal, Total).
- [ ] Muncul menu Sharing (pilihan aplikasi) setelah tombol Export ditekan.
- [ ] Nama file export mengandung tanggal (misal: `Laporan_2026-06-05.csv`).
- [ ] Pesan sukses muncul setelah proses export selesai.
