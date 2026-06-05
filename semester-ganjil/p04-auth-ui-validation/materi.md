# Materi P04: Auth UI & Validasi Form

## 🌍 Analogi Dunia Nyata
Bayangkan Anda ingin mendaftar di **Bank**.
- **Form Input** = Formulir kertas yang Anda isi.
- **Validasi** = Satpam atau Customer Service yang mengecek apakah Anda sudah mengisi Nama, NIK, dan Alamat dengan benar sebelum menyerahkannya ke teller.
- **AsyncStorage (Remember Me)** = Kartu ATM. Anda tidak perlu menunjukkan KTP setiap kali ingin tarik tunai, cukup masukkan kartu yang sudah terdaftar.

## 💡 Konsep Inti
1. **Controlled Components**: Teknik di React di mana nilai input dikendalikan oleh *state* (`useState`).
2. **Regex (Regular Expression)**: Pola karakter untuk memvalidasi format (misal: format email harus mengandung `@` dan `.`).
3. **AsyncStorage**: Sistem penyimpanan data sederhana (Key-Value) di perangkat lokal yang tidak hilang saat aplikasi ditutup.
4. **Visual Feedback**: Memberikan tanda (warna merah, getaran, atau teks) saat terjadi kesalahan input.

## 🏗 Cara Kerja di WARUNGku
Di WARUNGku, kita akan menggunakan pendekatan **Instant Validation**. Begitu user selesai mengetik email, sistem langsung mengecek formatnya. Jika salah, tombol "Masuk" akan otomatis menjadi non-aktif (disabled) untuk mencegah pengiriman data sampah.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak memberikan pesan error yang jelas (hanya bilang "Error", tanpa penjelasan apa yang salah).
- Lupa menambahkan `secureTextEntry` pada input password (bahaya keamanan!).
- Menggunakan `AsyncStorage` untuk menyimpan password mentah (jangan lakukan ini di aplikasi asli, simpanlah token saja).

## 🔥 Tips Senior Developer
Gunakan library seperti `Formik` atau `React Hook Form` jika formulir Anda sudah sangat kompleks (lebih dari 10 input). Namun untuk Login/Register sederhana, menggunakan `useState` sudah cukup dan lebih ringan.
