# Materi P03: Integrasi Auth Laravel dari React Native

## 🌍 Analogi Dunia Nyata
Bayangkan Anda memesan makanan lewat **Aplikasi Ojek Online**.
- **Axios** = Motor si driver ojek. Ia yang membawa pesanan Anda dari restoran (Backend) ke rumah Anda (HP).
- **Base URL** = Alamat restoran yang sudah pasti lokasinya.
- **SecureStore** = Brankas rahasia di rumah Anda untuk menyimpan kunci rumah (Token). Anda tidak menaruh kunci di keset depan (AsyncStorage) karena tidak aman.
- **Loading State** = Animasi "Driver sedang menuju restoran" di aplikasi agar Anda tidak bingung kenapa makanan belum sampai.

## 💡 Konsep Inti
1. **Axios**: Library populer untuk melakukan HTTP Request. Lebih sakti dari `fetch` bawaan karena mendukung interseptor dan konfigurasi global.
2. **SecureStore**: Penyimpanan data di HP yang terenkripsi di level sistem (Keychain di iOS / Keystore di Android). Wajib untuk data sensitif seperti Token.
3. **Async/Await**: Cara modern menangani proses yang butuh waktu (seperti menunggu balasan server) agar aplikasi tidak membeku.
4. **Environment Variables**: Menyimpan alamat IP server agar mudah diubah saat pindah dari mode latihan ke mode produksi (Live).

## 🏗 Cara Kerja di WARUNGku PRO
Kita akan membuat file `api.js` yang menyimpan konfigurasi IP Server Laravel. Karena kita menjalankan Laravel secara lokal, aplikasi di HP/Emulator harus menembak IP komputer kita (misal: `http://192.168.1.10:8000`). Begitu login sukses, token yang didapat akan langsung dikunci di dalam `SecureStore`.

## ⚠️ Kesalahan Umum Junior Developer
- Menggunakan `localhost` sebagai URL API (HP tidak bisa mengenali localhost komputer, harus pakai IP Lokal).
- Tidak menggunakan blok `try...catch`, sehingga aplikasi langsung crash jika internet mati.
- Lupa mengirimkan Header `Accept: application/json`, menyebabkan Laravel membalas dengan halaman HTML error bukannya pesan JSON.

## 🔥 Tips Senior Developer
Selalu gunakan **Axios Interceptors**. Fitur ini memungkinkan Anda otomatis menyisipkan Token ke setiap request ke server tanpa harus menulisnya manual di setiap fungsi. Ini sangat menghemat waktu dan mengurangi risiko kesalahan kode.
