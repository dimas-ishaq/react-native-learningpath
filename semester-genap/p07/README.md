# Pertemuan 07 - Struk Digital via WhatsApp & QR Code

## 🏭 Konteks Industri
Efisiensi operasional adalah kunci keuntungan UMKM. Di industri modern, penggunaan printer thermal fisik mulai dikurangi demi penghematan biaya kertas dan perawatan. Sebagai gantinya, **Struk WhatsApp** menjadi standar baru karena langsung sampai ke tangan pelanggan secara digital dan bisa disimpan selamanya.

Selain itu, teknologi **QR Code** mempercepat proses pencarian barang. Daripada kasir mengetik nama produk satu per satu, mereka cukup melakukan *scanning*. Kecepatan transaksi yang meningkat 2x lipat adalah nilai jual yang sangat menggiurkan bagi pemilik warung yang ramai pembeli.

## 🎯 Sprint Goal
Membangun fitur pengiriman bukti bayar via WhatsApp dan sistem identifikasi produk berbasis QR Code.

## 📦 Product Increment
- [x] Generator format teks struk otomatis (Professional WhatsApp Format).
- [x] Fitur Deep Linking ke aplikasi WhatsApp dengan nomor tujuan dinamis.
- [x] Generator QR Code unik untuk setiap ID produk.
- [x] Fitur QR Scanner menggunakan kamera HP untuk menambah barang ke keranjang.

## 💰 Nilai Bisnis
Fitur WhatsApp Integration memungkinkan pemilik warung membangun database nomor HP pelanggan untuk keperluan promosi di masa depan (Mini CRM). Sistem QR Code memberikan kesan bahwa warung tersebut sudah "Go Digital" dan sangat profesional, meningkatkan *brand image* UMKM di mata masyarakat.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Multi-device Dashboard.
- **30 menit**: Teori: Deep Linking & Computer Vision (QR Scanning).
- **150 menit**: Coding Sesi: Integrasi WhatsApp & Setup QR Scanner.
- **30 menit**: Peer Review: Tes kirim struk ke nomor teman dan scan label QR.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Klik tombol "Kirim WhatsApp" membuka aplikasi WA dengan teks struk yang rapi.
- [ ] Muncul gambar QR Code yang benar saat melihat detail produk.
- [ ] Kamera berhasil mengenali kode produk dan otomatis memasukkannya ke cart.
- [ ] Penanganan izin (permission) kamera dilakukan secara benar.
