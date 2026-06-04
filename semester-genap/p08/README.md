# Pertemuan 08 - Manajemen Karyawan & Laporan Shift

## 🏭 Konteks Industri
Saat sebuah warung berkembang menjadi toko besar, pemiliknya tidak lagi bisa melayani sendiri setiap saat. Mereka mulai merekrut **Kasir**. Di industri, tantangan terbesarnya adalah **Kepercayaan** dan **Akuntabilitas**. Pemilik perlu tahu: "Siapa yang bertugas jam 2 siang tadi?", "Berapa total uang yang terkumpul saat Kasir A bertugas?", dan "Apakah ada selisih uang di laci kasir?".

Sistem **Login PIN** adalah standar industri untuk kasir karena jauh lebih cepat daripada mengetik email/password. Fitur **Laporan Shift** memastikan setiap rupiah yang masuk dapat dipertanggungjawabkan oleh individu yang bertugas.

## 🎯 Sprint Goal
Membangun sistem manajemen data karyawan dan pelacakan aktivitas shift kerja.

## 📦 Product Increment
- [x] CRUD Data Karyawan (Nama, Role, PIN 4 Digit).
- [x] Fitur Login Kasir cepat menggunakan PIN.
- [x] Tabel `shifts` di database untuk mencatat waktu masuk/keluar kasir.
- [x] Laporan Ringkasan per Shift (Total Penjualan saat shift aktif).
- [x] Fitur "Tutup Shift" (Clock-out) untuk serah terima uang.

## 💰 Nilai Bisnis
Fitur Manajemen Karyawan adalah alasan utama warung tradisional upgrade ke sistem POS profesional. Ini memberikan ketenangan bagi pemilik bisnis (Owner) untuk memantau usahanya tanpa harus hadir secara fisik. Aplikasi yang memiliki audit log per karyawan bernilai jual tinggi bagi segmen UMKM menengah.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review WhatsApp & QR.
- **30 menit**: Teori: Akuntabilitas Sistem & Keamanan berbasis PIN.
- **150 menit**: Coding Sesi: API Karyawan & Logika Clock-in/Clock-out.
- **30 menit**: Peer Review: Tes ganti kasir tanpa harus logout akun owner.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Berhasil menambah karyawan baru dengan PIN unik.
- [ ] Layar Kasir terkunci jika belum melakukan "Buka Shift" (Clock-in).
- [ ] Laporan shift menampilkan nama kasir dan total uang yang harus ada di laci.
- [ ] PIN salah sebanyak 3 kali akan memberikan jeda waktu tunggu (Security basic).
