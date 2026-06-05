# Materi P07: Struk Digital via WhatsApp & QR Code

## 🌍 Analogi Dunia Nyata
Bayangkan Anda sedang di **Kantin Sekolah**.
- **Deep Linking WA** = Anda menitip pesan ke teman untuk disampaikan ke orang lain. Anda tidak perlu menemui orang tersebut langsung; cukup kirim "kurir" (WhatsApp).
- **QR Code** = Seperti label harga atau barcode di minimarket. Anda tidak perlu hafal harga 1000 barang; cukup arahkan "mata elektronik" (Kamera) ke label tersebut, dan komputer akan tahu itu barang apa.

## 💡 Konsep Inti
1. **Deep Linking**: Cara aplikasi mobile memicu pembukaan aplikasi lain (seperti WhatsApp) dengan parameter tertentu (misal: pesan teks).
2. **URL Encoding**: Mengubah karakter spesial (seperti spasi atau enter) menjadi format yang bisa dibaca oleh link internet (misal: spasi menjadi `%20`).
3. **QR Generation**: Mengubah string teks (seperti ID produk) menjadi pola kotak-kotak hitam putih.
4. **Camera Vision**: Menggunakan modul kamera untuk memproses gambar secara real-time dan menerjemahkan pola visual menjadi data.

## 🏗 Cara Kerja di WARUNGku PRO
Alur Struk WhatsApp:
1. Transaksi selesai.
2. Muncul tombol "WhatsApp Struk".
3. Sistem mengambil data transaksi, memformatnya menjadi teks cantik (pake *bold*, *italic*, dan *newline*).
4. Sistem membuka URL: `whatsapp://send?phone=...&text=...`.

Alur QR Scanner:
1. Buka layar Kasir.
2. Klik ikon Kamera.
3. Scan kode di label produk.
4. Aplikasi mencari ID produk tersebut di database lokal dan menambahkannya ke keranjang.

## ⚠️ Kesalahan Umum Junior Developer
- Tidak melakukan URL Encoding (pesan WhatsApp terputus atau error jika ada karakter khusus).
- Lupa meminta izin kamera (`Camera Permissions`), menyebabkan aplikasi crash saat buka scanner.
- Ukuran QR Code terlalu kecil sehingga sulit di-scan oleh kamera HP spek rendah.

## 🔥 Tips Senior Developer
Gunakan format teks yang profesional untuk WhatsApp (Gunakan pemisah garis `----------` dan emoji yang relevan). Untuk QR Scanner, berikan feedback getaran (Haptic) atau suara "Beep" saat scan berhasil agar user tahu barang sudah masuk tanpa melihat layar.
