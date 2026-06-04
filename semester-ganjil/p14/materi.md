# Materi P14: Notifikasi & Pengingat Stok

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memiliki **Asisten Pribadi**.
- **Tanpa Notifikasi** = Asisten hanya diam di pojok ruangan. Anda harus bertanya setiap saat: "Apakah stok masih ada?", "Apakah sudah waktunya tutup toko?".
- **Dengan Notifikasi** = Asisten akan menghampiri Anda dan berkata: "Permisi Bos, barang A sudah mau habis" atau "Bos, ini sudah jam 9 malam, jangan lupa catat laporan ya". Anda bisa fokus mengerjakan hal lain sampai asisten memanggil.

## 💡 Konsep Inti
1. **Local Notifications**: Notifikasi yang dipicu langsung oleh aplikasi dari dalam HP, tanpa butuh koneksi internet atau server backend. Cocok untuk pengingat stok atau alarm.
2. **Push Notifications**: Notifikasi yang dikirim dari server internet ke HP user. Biasanya dipakai untuk promo atau info dari pusat.
3. **Permissions**: Aturan privasi ponsel di mana aplikasi harus meminta izin user sebelum bisa mengirimkan notifikasi.
4. **Triggers**: Syarat atau waktu kapan notifikasi harus berbunyi (misal: Saat angka stok < 5, atau Setiap hari Senin jam 08.00).

## 🏗 Cara Kerja di WARUNGku
Kita akan menggunakan library `expo-notifications`. Setiap kali kasir melakukan transaksi, sistem akan mengecek sisa stok. Jika sisa stok berada di bawah angka 5, fungsi `triggerStockAlert` akan dijalankan untuk memunculkan notifikasi di baris status ponsel.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak meminta izin (Permission) dulu, sehingga notifikasi tidak pernah muncul.
- Mengirim notifikasi terlalu sering (Spamming), yang membuat user kesal dan mematikan notifikasi aplikasi.
- Pesan notifikasi terlalu teknis (misal: `Error 404: Low Stock ID 99`), seharusnya gunakan bahasa manusia.

## 🔥 Tips Senior Developer
Gunakan suara notifikasi yang unik (jika memungkinkan) agar user langsung tahu itu notifikasi dari WARUNGku tanpa harus melihat layar. Selalu sediakan tombol "Matikan Notifikasi" di menu pengaturan (P12) agar user tetap merasa memegang kendali.
