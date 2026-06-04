# 📋 Lembar UAT & Test Scenarios - WARUNGku

Gunakan tabel ini untuk menguji aplikasi teman Anda. Beri tanda ✅ jika berhasil dan ❌ jika ditemukan bug.

| No | Fitur | Skenario Pengujian | Status (P/F) | Catatan Bug |
|----|-------|--------------------|--------------|-------------|
| 1 | **Auth** | Login dengan email salah format | | |
| 2 | **Auth** | Login dengan password kosong | | |
| 3 | **Produk** | Tambah produk dengan stok 0 | | |
| 4 | **Produk** | Hapus produk yang masih ada di list | | |
| 5 | **Kasir** | Tambah item yang sama berkali-kali ke cart | | |
| 6 | **Kasir** | Kurangi qty item di cart sampai 0 (Harus terhapus) | | |
| 7 | **Bayar** | Bayar dengan uang tunai < Total Harga | | |
| 8 | **Bayar** | Cek akurasi kembalian | | |
| 9 | **History** | Cek apakah transaksi barusan muncul di riwayat | | |
| 10| **Settings**| Ubah nama toko dan cek di struk | | |

---

## 🐞 Bug Report Template
Jika Anda menemukan ❌ (Fail), isi laporan ini untuk teman Anda:

- **ID Bug**: [P15-01]
- **Fitur**: [Misal: Kasir]
- **Langkah Reproduksi**: 
  1. Masukkan 2 barang ke cart.
  2. Klik tombol reset.
  3. Klik bayar.
- **Ekspektasi**: Tombol bayar tidak bisa diklik jika cart kosong.
- **Kenyataan**: Aplikasi crash dengan error "Cannot read property of null".
- **Tingkat Keparahan**: [Kritis / Sedang / Rendah]
