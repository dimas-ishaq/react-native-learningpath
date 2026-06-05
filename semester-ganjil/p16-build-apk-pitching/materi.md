# Materi P16: Build APK & Persiapan Demo Klien

## 🌍 Analogi Dunia Nyata
Bayangkan Anda adalah seorang **Koki Restoran**.
- **Coding** = Memasak makanan di dapur (Proses internal).
- **Build APK** = Membungkus makanan ke dalam kotak *takeaway* yang rapi dan menarik.
- **Pitching/Demo** = Menyajikan makanan ke pelanggan dan menjelaskan mengapa masakan Anda lebih enak dan sehat dibanding restoran sebelah. Pelanggan hanya peduli rasa dan penyajian, bukan bumbu apa yang Anda pakai di dapur.

## 💡 Konsep Inti
1. **Production Build**: Proses mengonversi kode JavaScript menjadi kode mesin yang dioptimalkan (Minified & Obfuscated) agar aplikasi cepat dan sulit dibajak.
2. **EAS (Expo Application Services)**: Layanan cloud dari Expo untuk membangun (build) APK Android atau IPA iOS tanpa butuh komputer spek tinggi.
3. **App Signing**: Memberikan "tanda tangan digital" pada APK agar Android tahu bahwa aplikasi ini dibuat oleh pengembang yang sah.
4. **Value Proposition**: Nilai unik yang Anda tawarkan ke klien (misal: "Dengan WARUNGku, Anda hemat kertas struk Rp 50rb/bulan").

## 🏗 Cara Kerja di WARUNGku
Kita akan menggunakan perintah `eas build --platform android --profile preview`. Proses ini akan mengirimkan kode kita ke server Expo, lalu server akan mengembalikan file `.apk`. Sambil menunggu proses build, kita akan menyusun slide presentasi menggunakan template yang menekankan pada kemudahan penggunaan untuk pemilik warung.

## ⚠️ Kesalahan Umum Junior Developer
- Mengirimkan aplikasi mode *Development* ke klien (Aplikasi akan lambat dan butuh koneksi ke laptop).
- Demo tanpa persiapan (Aplikasi tiba-tiba error karena data dummy belum diisi).
- Terlalu banyak bicara teknis saat presentasi (Klien tidak peduli Anda pakai React Navigation atau SQLite, mereka hanya peduli "Bisa cetak struk tidak?").

## 🔥 Tips Senior Developer
Selalu bawa HP cadangan saat demo. Pastikan data produk di dalam aplikasi demo adalah data barang yang relevan dengan bisnis klien (misal: jika demo ke warung, isi dengan data Beras, Telur, dsb, bukan data asal-asalan).
