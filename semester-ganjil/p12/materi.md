# Materi P12: Pengaturan Aplikasi & Profil Toko

## 🌍 Analogi Dunia Nyata
Bayangkan Anda menjual **Kaos Polos**.
- **Codebase** = Bahan kaos dan jahitannya yang berkualitas tinggi.
- **Settings** = Alat sablon. Anda bisa menyablon logo "Warung Mak Mur" atau "Toko Kelontong Berkah" di atas kaos polos yang sama sesuai permintaan pembeli.
- **White-label** = Bisnis Anda menjual kaos polos bersablon kustom tersebut ke berbagai brand berbeda.

## 💡 Konsep Inti
1. **White-labeling**: Praktik menyediakan produk atau layanan yang diproduksi oleh satu perusahaan tetapi diberi merek oleh perusahaan lain agar tampak seolah-olah mereka yang memproduksinya.
2. **Global Settings State**: Menggunakan context atau state global agar perubahan di layar pengaturan (misal: Nama Toko) langsung berdampak ke seluruh bagian aplikasi (Dashboard, History, Struk).
3. **Persisting Preferences**: Konsep menyimpan pilihan user (seperti Dark Mode) agar tetap aktif setiap kali aplikasi dibuka.
4. **Dynamic Strings**: Menggunakan variabel, bukan teks mentah (hardcoded), agar konten bisa berubah sesuai input user.

## 🏗 Cara Kerja di WARUNGku
Kita akan membuat sebuah objek `storeSettings` yang berisi data profil. Data ini akan disimpan di `AsyncStorage`. Saat aplikasi pertama kali dibuka (Splash Screen), data ini ditarik. Jika user mengubah nama toko di layar Settings, kita akan memicu fungsi `saveSettings` yang memperbarui memori lokal.

## ⚠️ Kesalahan Umum Junior Developer
- Melakukan *hardcoding* (menulis manual) nama toko di setiap layar (Sangat sulit diubah nanti).
- Tidak memberikan validasi pada input pajak (misal: membiarkan user mengisi pajak 1000% yang tidak masuk akal).
- Lupa memberikan tombol "Simpan", sehingga user bingung apakah perubahan mereka sudah tercatat atau belum.

## 🔥 Tips Senior Developer
Selalu sediakan tombol "Reset ke Default" jika pengaturan sudah terlalu banyak. Untuk aplikasi POS, berikan pilihan "Ukuran Kertas Struk" (58mm atau 80mm) di pengaturan agar aplikasi kompatibel dengan berbagai printer thermal di pasar.
