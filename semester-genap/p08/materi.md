# Materi P08: Manajemen Karyawan & Laporan Shift

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Vila Mewah** dengan banyak tamu.
- **Owner** = Pemilik Vila yang punya kunci master untuk semua ruangan.
- **Kasir** = Resepsionis yang hanya punya kunci untuk laci uang dan pintu depan.
- **PIN** = Kode angka di loker gym. Cepat dimasukkan dan hanya diketahui pemilik loker.
- **Shift** = Tongkat estafet dalam lari lari sambung. Saat satu pelari (kasir) selesai, ia menyerahkan tongkat (tanggung jawab uang) ke pelari berikutnya.

## 💡 Konsep Inti
1. **User Sub-Accounts**: Membuat akun turunan di bawah satu Toko (Tenant) agar data tetap terpusat tapi operatornya berbeda.
2. **PIN Authentication**: Verifikasi identitas menggunakan kode numerik pendek. Lebih efisien untuk perangkat mobile di lingkungan ritel.
3. **Session State (Shift)**: Mencatat status `is_open` pada sebuah sesi kerja untuk menentukan kapan pencatatan transaksi dimulai dan diakhiri.
4. **Audit Trail**: Jejak digital yang mencatat siapa melakukan apa dan kapan (Who, What, When).

## 🏗 Cara Kerja di WARUNGku PRO
Alur Manajemen Karyawan:
1. **Owner** masuk ke menu Karyawan, menambah Nama Kasir dan set PIN (misal: `1234`).
2. Data tersimpan di server Cloud.
3. Di layar awal HP Kasir, muncul pilihan "Siapa yang bertugas?".
4. Kasir pilih namanya, masukkan PIN.
5. Jika benar, sistem membuat record baru di tabel `shifts` (status: OPEN).
6. Semua transaksi yang terjadi akan otomatis memiliki kolom `shift_id`.

## ⚠️ Kesalahan Umum Junior Developer
- Menggunakan PIN yang mudah ditebak (seperti `0000` atau `1111`).
- Tidak mencatat waktu "Clock-out", sehingga omzet kasir tersebut terus bertambah selamanya.
- Menampilkan PIN secara transparan di layar (Harusnya gunakan `secureTextEntry` atau bintang `****`).

## 🔥 Tips Senior Developer
Sediakan fitur "Uang Modal Awal" saat Buka Shift. Kasir harus menginput berapa uang yang ada di laci saat mulai bertugas agar di akhir shift pemilik bisa menghitung selisih (Uang di laci - Modal - Penjualan).
