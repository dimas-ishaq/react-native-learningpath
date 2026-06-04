# Materi P06: Manajemen Produk (Edit, Hapus & Stok)

## 🌍 Analogi Dunia Nyata
Bayangkan Anda adalah **Pemilik Toko**.
- **Edit Produk** = Mengganti label harga di rak karena ada kenaikan harga dari supplier.
- **Konfirmasi Hapus** = Sebelum membuang barang rusak, Anda mengecek kembali apakah barang itu benar-benar tidak bisa diperbaiki atau dijual lagi.
- **Quick Stock Update** = Menambahkan barang langsung ke rak saat mobil supplier datang, tanpa harus membongkar seluruh gudang.

## 💡 Konsep Inti
1. **Array Manipulation (Map & Filter)**: Cara React memperbarui data dalam list. `map` digunakan untuk Edit, dan `filter` digunakan untuk Hapus.
2. **Conditional Rendering**: Menampilkan elemen tertentu hanya jika kondisi terpenuhi (misal: tombol "Simpan" hanya muncul saat mode Edit aktif).
3. **Alert API**: Menyediakan dialog pop-up standar sistem untuk interaksi penting dengan pengguna.
4. **Validation Logic**: Mencegah data tidak logis (misal: stok negatif atau harga Rp 0).

## 🏗 Cara Kerja di WARUNGku
Kita akan menggunakan satu komponen Form yang sama untuk "Tambah" dan "Edit". Perbedaannya hanya pada **Mode**. Jika ada data produk yang dikirim ke form, maka mode-nya adalah Edit (Update). Jika tidak, mode-nya adalah Tambah (Create). Ini disebut prinsip **DRY (Don't Repeat Yourself)** dalam industri.

## ⚠️ Kesalahan Umum Junior Developer
- Menghapus data langsung tanpa konfirmasi (Sangat berbahaya!).
- Tidak memperbarui *state* setelah edit, sehingga user harus menutup aplikasi dulu baru data berubah.
- Lupa memvalidasi input saat edit (misal: mengosongkan nama produk saat edit).

## 🔥 Tips Senior Developer
Gunakan warna yang kontras untuk tombol hapus (biasanya merah/danger). Untuk fitur stok, berikan tombol `+` dan `-` yang cukup besar karena jari pemilik warung mungkin sedang sibuk atau berkeringat saat melayani pembeli.
