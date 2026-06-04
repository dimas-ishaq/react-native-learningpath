# Materi P02: Design System & UI Consistency

## 🌍 Analogi Dunia Nyata
Bayangkan **LEGO**.
- Jika Anda ingin membangun rumah, mobil, atau pesawat, Anda menggunakan balok-balok yang sama.
- Balok LEGO memiliki ukuran dan warna yang sudah standar.
- Anda tidak membuat balok baru setiap kali ingin membangun sesuatu; Anda cukup menyusun balok yang sudah ada.
- **Design System** adalah kumpulan "Balok LEGO" digital kita.

## 💡 Konsep Inti
1. **Atomic Design**: Membagi UI menjadi bagian terkecil (Atoms seperti Button) hingga bagian kompleks (Organisms seperti Header).
2. **Props (Properties)**: Cara kita mengirim data ke komponen agar komponen tersebut dinamis (misal: `<MyButton title="Simpan" color="green" />`).
3. **Style Sheets Composition**: Menggabungkan beberapa gaya objek untuk menciptakan tampilan yang fleksibel.

## 🏗 Cara Kerja di WARUNGku
Kita akan menyimpan semua rahasia visual kita di folder `theme/`.
- `colors.js`: Daftar semua warna (Primary, Success, Danger, Gray).
- `spacing.js`: Ukuran margin dan padding standar (Small: 8, Medium: 16, Large: 24).

## ⚠️ Kesalahan Umum Junior Developer
- Menggunakan angka "ajaib" (misal: `padding: 17`) daripada menggunakan standar spacing.
- Membuat komponen yang terlalu kaku sehingga tidak bisa diubah ukurannya lewat props.
- Tidak memberikan *feedback* visual (seperti warna redup saat tombol ditekan).

## 🔥 Tips Senior Developer
Gunakan `Opacity` atau `Pressable` untuk memberikan respon saat user menyentuh layar. Aplikasi yang tidak merespon saat disentuh terasa "mati" atau "hang" bagi pengguna.
