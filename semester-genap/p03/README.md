# Pertemuan 03 - Integrasi Auth Laravel dari React Native

## 🏭 Konteks Industri
Membangun API di sisi server barulah setengah jalan. Tantangan sebenarnya adalah bagaimana aplikasi mobile bisa berkomunikasi dengan server tersebut secara lancar dan aman. Di industri, kita tidak menulis kode pemanggilan API secara berantakan di dalam file UI. Kita membangun **Service Layer**.

Service Layer bertindak sebagai "Kurir Spesialis" yang tugasnya hanya satu: mengirim data ke server dan membawa pulang balasannya. Selain itu, penyimpanan Token harus menggunakan standar keamanan tinggi seperti **SecureStore**, bukan storage biasa, agar akun pengguna tidak mudah dibajak oleh aplikasi jahat lain di HP yang sama.

## 🎯 Sprint Goal
Menghubungkan layar Login/Register React Native ke API Laravel menggunakan Axios dan SecureStore.

## 📦 Product Increment
- [x] Konfigurasi Axios Instance (Base URL & Headers).
- [x] Implementasi `authService.js` (Login, Register, Logout functions).
- [x] Integrasi `expo-secure-store` untuk penyimpanan token terenkripsi.
- [x] Update `LoginScreen` untuk menggunakan data real dari server.
- [x] Penanganan Error API (misal: "Email atau Password Salah").

## 💰 Nilai Bisnis
Kemampuan menghubungkan aplikasi ke internet meningkatkan nilai jual produk dari jutaan menjadi **puluhan juta rupiah**. Aplikasi berbasis Cloud memungkinkan fitur sinkronisasi antar perangkat, yang merupakan kebutuhan utama bisnis skala menengah ke atas. Skill *Full-stack Integration* ini adalah standar gaji tertinggi bagi developer mobile di pasar kerja.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review API Auth di Laravel.
- **30 menit**: Teori: Axios Interceptors & Secure Storage.
- **150 menit**: Coding Sesi: Membuat Auth Service & Update UI Login.
- **30 menit**: Peer Testing: Mencoba login dengan akun yang dibuat di P02.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] User bisa login menggunakan email/password yang terdaftar di database MySQL.
- [ ] Token tersimpan di SecureStore setelah login sukses.
- [ ] Aplikasi menampilkan pesan error yang sesuai jika server offline atau data salah.
- [ ] Muncul loading spinner selama proses komunikasi ke server berlangsung.
