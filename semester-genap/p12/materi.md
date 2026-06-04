# Materi P12: Keamanan & Optimasi Produksi

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memiliki **Truk Pengantar Uang (Aplikasi)**.
- **HTTPS** = Jalur perjalanan yang rahasia agar tidak ada yang tahu truk lewat mana.
- **SSL Pinning** = Sopir truk hanya boleh menyerahkan uang ke orang yang punya wajah/sidik jari yang sudah didaftarkan (Sertifikat Server). Orang lain yang menyamar tidak akan dilayani.
- **Obfuscation** = Seluruh dokumen di dalam truk ditulis dalam bahasa sandi yang hanya dimengerti oleh kantor pusat. Jika perampok berhasil membobol truk, mereka tidak bisa membaca isinya.

## 💡 Konsep Inti
1. **SSL Pinning**: Teknik mengunci sertifikat digital server di dalam kode aplikasi mobile untuk mencegah serangan *Man-in-the-Middle*.
2. **Obfuscation**: Proses mengubah kode program menjadi sulit dimengerti manusia (mengganti nama variabel `password` menjadi `a`, `totalHarga` menjadi `b`) tanpa mengubah fungsinya.
3. **Environment Variables (.env)**: Memisahkan data konfigurasi sensitif dari kode utama agar tidak ikut ter-upload ke repositori publik.
4. **Minification**: Menghapus spasi, komentar, dan karakter tidak perlu untuk mengecilkan ukuran file APK dan mempercepat loading.

## 🏗 Cara Kerja di WARUNGku PRO
Kita akan menggunakan library `react-native-dotenv` untuk menyembunyikan URL Server. Kita juga akan menambahkan *interceptor* pada Axios untuk memastikan setiap request memiliki tanda tangan keamanan (Signature) jika diperlukan. Terakhir, kita mengonfigurasi Metro Bundler agar otomatis membuang semua `console.log` saat kita melakukan build APK final.

## ⚠️ Kesalahan Umum Junior Developer
- Menyimpan API Key atau Secret langsung di dalam kode (Hardcoded).
- Lupa mematikan mode Debug saat rilis, sehingga performa lambat dan celah keamanan terbuka.
- Tidak mengenkripsi data lokal yang sensitif (hanya pakai AsyncStorage polos).

## 🔥 Tips Senior Developer
Gunakan alat seperti **Charles Proxy** atau **Flipper** untuk mengetes apakah data Anda bisa diintip. Jika Anda bisa melihat isi JSON saat melakukan transaksi, berarti aplikasi Anda belum aman (butuh SSL Pinning). Selalu gunakan standar keamanan terbaru (misal: TLS 1.3).
