# Materi P06: Multi-Device & Real-time Dashboard

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Stadion Sepak Bola**.
- **Papan Skor (Dashboard)** = Selalu terupdate otomatis setiap kali ada gol masuk, tanpa penonton harus bertanya ke panitia.
- **Pemain (Kasir)** = Fokus mencetak gol (melakukan transaksi).
- **Penonton (Owner)** = Memantau dari tribun (Dashboard) dan melihat skor berubah secara real-time.
- **Tiket (Role)** = Penonton tidak boleh masuk ke lapangan (Kasir), dan pemain tidak boleh duduk di tribun VIP (Laporan Keuangan).

## 💡 Konsep Inti
1. **RBAC (Role-Based Access Control)**: Membatasi akses fitur berdasarkan peran user (misal: `kasir` hanya bisa `POST transactions`, `owner` bisa semuanya).
2. **Polling**: Teknik di mana aplikasi mobile bertanya ke server setiap beberapa detik sekali ("Ada data baru?") untuk mendapatkan update.
3. **Optimistic UI**: Menampilkan perubahan di UI seolah-olah sudah sukses sambil menunggu respon server yang sebenarnya.
4. **Data Aggregation**: Laravel menghitung total omzet hari ini secara cepat melalui query database `SUM()` agar respons API ringan.

## 🏗 Cara Kerja di WARUNGku PRO
Kita akan membuat endpoint `/api/dashboard/stats` yang mengembalikan total omzet, jumlah transaksi, dan stok kritis dalam satu paket JSON. Di sisi React Native, kita akan menggunakan `setInterval` (atau React Query `refetchInterval`) untuk memanggil API tersebut setiap 30 detik. Jika ada perubahan angka, UI akan beranimasi memperbarui tampilannya.

## ⚠️ Kesalahan Umum Junior Developer
- Melakukan polling terlalu sering (misal: tiap 1 detik), yang bisa membuat server "meledak" jika ada ribuan user.
- Tidak membatasi akses di level API (Hanya menyembunyikan tombol di UI, padahal endpoint-nya masih bisa ditembak manual).
- Mengambil seluruh data transaksi hanya untuk menghitung omzet (Harusnya gunakan query `SUM` di database).

## 🔥 Tips Senior Developer
Gunakan **WebSockets** (lewat Laravel Reverb atau Pusher) jika Anda ingin aplikasi yang benar-benar instan (tanpa delay polling). Namun untuk level UMKM, polling 30-60 detik sudah sangat cukup dan jauh lebih hemat baterai serta biaya server.
