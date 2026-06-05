# Materi P04: Sinkronisasi Produk & Stok ke Cloud

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memiliki **Buku Catatan Belanja** dan seorang **Asisten**.
- **SQLite (Lokal)** = Anda mencatat belanjaan di buku kecil yang Anda bawa. Anda bisa mencatat kapan saja meski asisten sedang tidak ada (Offline).
- **MySQL (Cloud)** = Papan tulis besar di kantor pusat yang dilihat semua orang.
- **Sync (Sinkronisasi)** = Saat Anda bertemu asisten, asisten menyalin catatan dari buku kecil Anda ke papan tulis besar. Jika catatan di buku lebih baru, papan tulis diupdate.

## 💡 Konsep Inti
1. **Multi-Tenancy Scoping**: Di server, kita harus memfilter data: `Product::where('store_id', Auth::user()->store->id)->get()`. Ini mencegah Toko A melihat barang Toko B.
2. **Sync Status**: Menambahkan kolom `is_synced` (boolean) di SQLite lokal.
3. **HTTP Verb (REST)**: 
   - `GET`: Ambil data dari server.
   - `POST`: Kirim data baru ke server.
   - `PUT`: Update data yang sudah ada di server.
4. **Timestamp Comparison**: Membandingkan `updated_at` untuk menentukan data mana yang paling baru jika terjadi perbedaan.

## 🏗 Cara Kerja di WARUNGku PRO
Alur kerja sinkronisasi:
1. User tambah produk -> Simpan ke **SQLite** dengan `is_synced = 0`.
2. Sistem mengecek koneksi internet.
3. Jika online, sistem mengirim data tersebut ke **Laravel API**.
4. Laravel menyimpan ke **MySQL** dan membalas "Sukses".
5. Aplikasi mobile mengubah status di SQLite menjadi `is_synced = 1`.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak melakukan scoping `store_id` di backend (Sangat berbahaya, data toko bisa bocor/tercampur).
- Sinkronisasi terlalu sering (setiap detik), yang memboroskan baterai dan kuota user.
- Menghapus data di lokal tapi lupa menghapus di server (data "hantu").

## 🔥 Tips Senior Developer
Gunakan library **React Query (TanStack Query)** untuk menangani caching dan sinkronisasi data secara otomatis di background. Ini akan membuat aplikasi jauh lebih stabil dan kodenya lebih bersih dibanding menulis `useEffect` dan `fetch` manual.
