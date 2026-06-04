# Materi P15: Testing & Bug Fixing + UAT

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memproduksi **Mobil Baru**.
- **Unit Testing** = Mengecek apakah setiap baut kencang dan lampu menyala.
- **Integration Testing** = Mengecek apakah saat pedal gas diinjak, mesin berputar dan roda bergerak serasi.
- **UAT** = Mengajak calon pembeli untuk *test drive*. Jika mereka merasa setirnya berat atau AC tidak dingin, mereka tidak akan membeli mobil tersebut. Anda harus memperbaikinya sebelum mobil dipajang di showroom.

## 💡 Konsep Inti
1. **Manual Testing**: Proses menjalankan aplikasi dan mencoba fiturnya satu per satu sesuai skenario penggunaan manusia.
2. **Bug Report**: Laporan detail saat ditemukan kesalahan, mencakup: Apa yang dilakukan, apa yang diharapkan, dan apa yang sebenarnya terjadi (Actual Result).
3. **Regression Testing**: Mengecek kembali fitur-fitur lama setelah kita melakukan perbaikan bug, untuk memastikan perbaikan tersebut tidak merusak hal lain.
4. **Edge Cases**: Skenario tidak biasa (misal: memasukkan harga minus, atau nama produk sepanjang 1000 karakter).

## 🏗 Cara Kerja di WARUNGku
Kita akan melakukan **Peer Testing**. Anda akan menukar HP Anda dengan teman sebangku. Teman Anda akan mencoba melakukan transaksi seaneh mungkin (misal: menghapus produk yang sedang ada di keranjang). Jika aplikasi crash atau datanya salah, catat sebagai bug dan perbaiki segera.

## ⚠️ Kesalahan Umum Junior Developer
- Melakukan testing sendiri (Developer cenderung "lembut" pada aplikasinya sendiri, sehingga bug tidak ditemukan).
- Menyepelekan bug kecil (bug kecil yang menumpuk membuat aplikasi terasa amatir).
- Memperbaiki satu bug tapi menciptakan dua bug baru karena terburu-buru.

## 🔥 Tips Senior Developer
Selalu buat **Checklist**. Jangan hanya mengandalkan ingatan. Jika Anda memperbaiki bug pada fitur Hitung Kembalian, pastikan Anda juga mengecek ulang fitur Diskon dan Pajak, karena biasanya kodenya saling berhubungan.
