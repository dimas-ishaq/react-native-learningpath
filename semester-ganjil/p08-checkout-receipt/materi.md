# Materi P08: Proses Transaksi & Struk Digital

## 🌍 Analogi Dunia Nyata
Bayangkan Anda sedang di **Kasir Minimarket**.
- **Checkout** = Saat kasir bertanya "Mau bayar pakai apa?".
- **Input Tunai** = Saat Anda menyerahkan uang Rp 50.000 untuk total belanja Rp 45.500.
- **Kembalian** = Saat kasir memberikan uang Rp 4.500 kembali ke Anda.
- **Struk** = Kertas yang keluar dari mesin sebagai bukti sah transaksi Anda.

## 💡 Konsep Inti
1. **Transaction ID Generator**: Membuat kode unik (misal: `TRX-20260605-001`) agar setiap transaksi bisa dilacak.
2. **Date Handling**: Mengambil waktu saat ini (`new Date()`) untuk mencatat kapan transaksi terjadi.
3. **Number Manipulation**: Mengubah input teks uang dari user menjadi angka agar bisa dikurangi total belanja.
4. **Modality & Navigation Reset**: Menampilkan struk di atas semua layar dan mengosongkan keranjang setelah transaksi selesai.

## 🏗 Cara Kerja di WARUNGku
Alur transaksi di aplikasi kita:
1. Klik **Bayar Sekarang** di layar Cart.
2. Masuk ke **Layar Pembayaran**.
3. Input jumlah uang tunai.
4. Jika uang cukup, klik **Proses**.
5. Muncul **Struk Digital** (Modal).
6. Klik **Selesai**, keranjang di-reset, kembali ke halaman awal.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak memvalidasi jumlah uang (uang kurang tapi transaksi tetap sukses).
- Format tanggal yang sulit dibaca manusia (misal: `1623456789000` bukannya `05 Juni 2026`).
- Lupa mengosongkan keranjang setelah sukses, sehingga user tidak sengaja membayar barang yang sama dua kali.

## 🔥 Tips Senior Developer
Gunakan `keyboardType="numeric"` dan pastikan input fokus otomatis saat layar pembayaran dibuka agar kasir tidak perlu klik manual. Berikan pesan suara atau getaran (Haptics) saat transaksi sukses agar kasir tahu proses selesai tanpa harus melihat layar terus-menerus.
