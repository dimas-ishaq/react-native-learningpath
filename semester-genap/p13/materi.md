# Materi P13: Subscription & Monetisasi In-App

## 🌍 Analogi Dunia Nyata
Bayangkan sebuah **Gym (Tempat Olahraga)**.
- **Member FREE** = Boleh masuk dan pakai alat dasar (seperti treadmill sederhana), tapi tidak boleh ikut kelas zumba atau pakai kolam renang.
- **Member PRO** = Boleh pakai semua fasilitas 24/7 dan dapat handuk gratis.
- **Masa Berlaku** = Kartu member harus diperpanjang setiap bulan. Jika tidak, akses ke kolam renang otomatis terkunci.

## 💡 Konsep Inti
1. **Freemium**: Gabungan dari "Free" dan "Premium". Strategi pemasaran dengan memberikan layanan dasar gratis dan membebankan biaya untuk fitur tambahan.
2. **Paywall**: Layar atau penghalang digital yang meminta user membayar sebelum bisa melanjutkan akses ke fitur tertentu.
3. **Grace Period**: Masa tenggang di mana user masih bisa akses meskipun langganan baru saja habis (biasanya 1-3 hari).
4. **Subscription Logic**: Menggunakan tanggal kedaluwarsa (`expired_at`) untuk menentukan apakah sebuah fitur boleh diakses atau tidak.

## 🏗 Cara Kerja di WARUNGku PRO
Sistem Lisensi kita:
1. Laravel menyimpan field `plan` (free, trial, pro) di tabel `stores`.
2. Saat login, aplikasi React Native mendownload status plan tersebut.
3. Di sisi UI, kita menggunakan *Conditional Rendering*:
   `{ store.plan === 'pro' ? <ExportPDFButton /> : <UpgradeBanner /> }`
4. Di sisi Server, kita pasang Middleware agar user 'free' tidak bisa menembak API laporan meskipun mereka tahu URL-nya.

## ⚠️ Kesalahan Umum Junior Developer
- Melakukan pengecekan PRO hanya di HP (Hacker bisa dengan mudah mengubah kode HP agar jadi PRO. Pengecekan UTAMA harus di Server).
- Tidak memberitahu user kenapa fitur tidak bisa diakses (User mengira aplikasi error/bug).
- Membuat proses upgrade yang terlalu rumit (Upgrade harus semudah satu kali klik).

## 🔥 Tips Senior Developer
Gunakan sistem **Trial**. Memberikan user kesempatan mencoba fitur premium secara gratis selama beberapa hari meningkatkan kemungkinan mereka untuk membeli hingga **400%**. Selalu tampilkan benefit/keuntungan yang didapat (misal: "Hemat waktu 5 jam seminggu") daripada hanya daftar fitur teknis.
