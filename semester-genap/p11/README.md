# Pertemuan 11 - Offline-First Architecture & Smart Sync

## 🏭 Konteks Industri
Di dunia nyata, koneksi internet tidak pernah 100% stabil. Bayangkan jika aplikasi kasir berhenti bekerja hanya karena sinyal 4G hilang selama 5 menit; antrean pelanggan akan menumpuk dan pemilik bisnis akan sangat marah. Di industri software profesional, kita menerapkan prinsip **Offline-First**.

Aplikasi harus menganggap internet sebagai "Bonus", bukan "Syarat Utama". Data harus disimpan di memori lokal (SQLite) terlebih dahulu, baru kemudian "didamaikan" (sync) dengan server saat internet tersedia. Kemampuan membangun sistem yang tahan banting terhadap kegagalan sinyal adalah skill level Senior yang sangat dihargai tinggi.

## 🎯 Sprint Goal
Membangun sistem antrean sinkronisasi otomatis (Sync Queue) yang cerdas dan tahan terhadap gangguan koneksi.

## 📦 Product Increment
- [x] Deteksi status internet real-time menggunakan `@react-native-community/netinfo`.
- [x] Sistem Antrean (Sync Queue) di SQLite untuk menyimpan ID transaksi yang gagal dikirim.
- [x] Background Sync: Otomatis mengirim data saat koneksi terdeteksi kembali.
- [x] UI Indicator: Status bar kecil (Offline Mode / Online Mode).

## 💰 Nilai Bisnis
Fitur Offline-First adalah **Unique Selling Point (USP)** yang sangat kuat. UMKM di pelosok daerah atau pasar tradisional yang sinyalnya sering hilang-timbul akan memilih aplikasi Anda dibanding kompetitor yang harus selalu online. Ini memberikan jaminan kelangsungan operasional bisnis klien tanpa hambatan teknis.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Laporan Keuangan & PDF.
- **30 menit**: Teori: State of Connectivity & Conflict Resolution.
- **150 menit**: Coding Sesi: Implementasi NetInfo & Sync Queue.
- **30 menit**: Peer Testing: Matikan Wi-Fi, lakukan transaksi, nyalakan Wi-Fi, cek data di server.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Bar notifikasi merah muncul saat internet mati.
- [ ] Transaksi tetap bisa diproses hingga muncul struk meskipun HP dalam Mode Pesawat.
- [ ] Data otomatis terkirim ke server (MySQL) segera setelah internet tersambung kembali tanpa klik tombol apapun.
- [ ] Tidak ada data ganda (duplikat) di server jika proses sync terputus di tengah jalan.
