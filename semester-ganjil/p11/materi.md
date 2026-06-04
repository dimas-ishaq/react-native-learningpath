# Materi P11: Export Laporan & Backup Data

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memiliki **Buku Tabungan**.
- **Export CSV** = Anda meminta "Rekening Koran" dari bank. Anda membawa pulang data transaksi Anda dalam lembaran kertas agar bisa Anda hitung sendiri di rumah menggunakan kalkulator.
- **Backup Data** = Anda memfotokopi buku tabungan tersebut dan menyimpannya di brankas rumah. Jika buku tabungan asli hilang, Anda masih punya salinannya.

## 💡 Konsep Inti
1. **CSV (Comma Separated Values)**: Format file teks sederhana di mana setiap data dipisahkan oleh koma. Format ini sangat populer karena ringan dan bisa dibuka oleh Microsoft Excel atau Google Sheets.
2. **FileSystem (FS)**: API untuk berinteraksi dengan penyimpanan file di HP (membuat file, membaca file).
3. **Sharing API**: Fitur standar ponsel untuk mengirim file atau teks antar aplikasi (misal: kirim dari WARUNGku ke WhatsApp).
4. **Data Formatting**: Mengubah objek JavaScript menjadi baris teks mentah.

## 🏗 Cara Kerja di WARUNGku
Kita akan mengambil array `transactions`, lalu menggabungkan setiap propertinya menjadi satu baris teks panjang dengan koma sebagai pemisah.
Contoh: `TRX-001, 2026-06-05, 45000`.
File teks ini kemudian kita simpan sementara di folder `cache` ponsel dan kita panggil menu `Sharing` agar user bisa mengirimnya.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak menambahkan "Header" pada CSV (Nama kolom di baris pertama), sehingga user bingung angka apa yang mereka lihat di Excel.
- Lupa menangani karakter koma di dalam nama produk (bisa merusak struktur CSV).
- Menggunakan path file yang salah sehingga file tidak ditemukan saat ingin di-share.

## 🔥 Tips Senior Developer
Gunakan ekstensi `.csv` agar otomatis dikenali oleh Excel. Untuk fitur backup, ingatkan pengguna secara berkala (misal seminggu sekali) untuk melakukan backup data ke Google Drive atau penyimpanan awan lainnya.
