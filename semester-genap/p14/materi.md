# Materi P14: Onboarding & Help Center In-App

## 🌍 Analogi Dunia Nyata
Bayangkan Anda membeli **Mesin Cuci Baru**.
- **Onboarding** = Stiker instruksi cepat yang menempel di tutup mesin (1. Masukkan baju, 2. Tuang sabun, 3. Tekan Start).
- **FAQ** = Buku manual di dalam kotak yang berisi daftar "Bagaimana jika air tidak keluar?".
- **Video Tutorial** = QR Code di mesin cuci yang jika di-scan menampilkan video cara mencuci bed cover.
- **Support** = Nomor telepon layanan servis yang ada di kartu garansi.

## 💡 Konsep Inti
1. **User Activation**: Momen ketika pengguna pertama kali merasakan manfaat utama produk Anda (*Aha! Moment*).
2. **Onboarding Overlay**: Lapisan semi-transparan di atas UI asli untuk memberikan instruksi tanpa berpindah layar.
3. **Knowledge Base**: Gudang informasi berupa teks atau video untuk menjawab kendala umum pengguna.
4. **First-Run Logic**: Menggunakan `AsyncStorage` untuk menyimpan tanda (flag) apakah user sudah pernah melihat panduan atau belum.

## 🏗 Cara Kerja di WARUNGku PRO
Alur Onboarding:
1. User login untuk pertama kali.
2. App mengecek `isFirstTime` di storage.
3. Jika `true`, jalankan rangkaian animasi tour yang menyoroti: (a) Katalog Produk, (b) Cara Transaksi, (c) Laporan.
4. Setelah selesai, set `isFirstTime = false`.
5. Di menu Profil, sediakan tombol "Pusat Bantuan" yang berisi FAQ statis dan link ke Video YouTube resmi WARUNGku.

## ⚠️ Kesalahan Umum Junior Developer
- Onboarding terlalu panjang (User bosan dan ingin langsung pakai).
- Tidak bisa di-skip (Memaksa user melihat tour setiap saat akan membuat mereka kesal).
- Link bantuan rusak atau video tutorial tidak bisa dibuka.

## 🔥 Tips Senior Developer
Gunakan library seperti `react-native-copilot` atau `react-native-walkthrough-tooltip` untuk membuat tour yang profesional. Pastikan Onboarding berfokus pada **Manfaat**, bukan hanya cara klik tombol (misal: "Klik di sini untuk melihat keuntungan harianmu" lebih baik daripada "Ini adalah tombol Laporan").
