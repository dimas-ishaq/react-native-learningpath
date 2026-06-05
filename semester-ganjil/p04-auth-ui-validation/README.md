# Pertemuan 04 - Auth UI & Validasi Form

## 🏭 Konteks Industri
Keamanan data dimulai dari **Validasi**. Di industri, kita tidak pernah mempercayai input pengguna begitu saja. Jika pengguna salah memasukkan email, kita harus memberitahu mereka secara instan (real-time), bukan menunggu server mengirimkan error. Ini disebut sebagai *User Experience (UX) of Error Handling*.

Halaman Login adalah "pintu masuk" aplikasi. Jika pintunya sulit dibuka (validasi membingungkan) atau terlihat tidak aman (UI berantakan), pengguna akan ragu untuk menyimpan data bisnis mereka di aplikasi kita.

## 🎯 Sprint Goal
Membangun sistem autentikasi lokal yang aman secara visual dan fungsional dengan validasi data yang ketat.

## 📦 Product Increment
- [x] Layar Login & Register dengan UI profesional.
- [x] Komponen `FormInput` kustom dengan pesan error.
- [x] Logika validasi email dan panjang password.
- [x] Fitur "Remember Me" menggunakan `AsyncStorage`.
- [x] Loading state saat tombol "Masuk" ditekan.

## 💰 Nilai Bisnis
Modul autentikasi yang solid adalah standar keamanan industri. Client UMKM akan merasa data mereka "aman" karena aplikasi memiliki aturan yang jelas (misal: password harus 8 karakter). Fitur "Remember Me" juga meningkatkan efisiensi pengguna karena tidak perlu login berulang kali setiap hari.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Navigasi.
- **30 menit**: Teori: UX Form & Client-side Validation.
- **150 menit**: Coding Sesi: Membuat form Login & logika validasi.
- **30 menit**: Peer Testing: Mencoba "menjebol" validasi form teman.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Pesan error muncul jika email tidak valid (tanpa simbol @).
- [ ] Tombol login menunjukkan *loading spinner* saat ditekan.
- [ ] Password bisa di-toggle (lihat/sembunyi).
- [ ] Status "Remember Me" tersimpan di storage lokal.
