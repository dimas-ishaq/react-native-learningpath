# Checklist Kesiapan Capstone - WARUNGku PRO

Pastikan poin-pirin di bawah ini sudah siap 100% sebelum hari ujian.

### ✅ 1. Backend API (Laravel)
- [ ] Server API sudah online atau dapat diakses secara lokal tanpa hambatan.
- [ ] Seluruh endpoint (`/auth`, `/products`, `/transactions`, `/dashboard`) berfungsi.
- [ ] Middleware `auth:sanctum` dan `CheckPremium` sudah aktif.
- [ ] Database MySQL sudah berisi data dummy awal melalui Seeder.

### ✅ 2. Frontend Mobile (React Native)
- [ ] Login/Register berhasil menyimpan token di `SecureStore`.
- [ ] Fitur Sinkronisasi (Sync) berjalan otomatis saat koneksi internet aktif.
- [ ] Fitur QR Scanner berhasil mengenali produk dan masuk keranjang.
- [ ] Fitur Struk WhatsApp berhasil mengirim pesan sesuai format.
- [ ] Fitur Laporan PDF berhasil dibuat dan dapat dibagikan.

### ✅ 3. Bisnis & Marketing
- [ ] Landing Page sudah menampilkan fitur utama dan tabel harga.
- [ ] Pitch Deck sudah mencakup slide Masalah, Solusi, USP, dan ROI.
- [ ] Strategi Harga (Monthly/Yearly) sudah ditentukan dan masuk akal.

### ✅ 4. Technical Hardening
- [ ] Seluruh `console.log` sudah dibersihkan.
- [ ] File `.env` sudah dikonfigurasi dan dipisahkan dari Git.
- [ ] Notifikasi Offline Mode muncul saat internet dimatikan.
