# Pertemuan 02 - Design System & Komponen UI Brand

## 🏭 Konteks Industri
Dalam tim developer profesional, kita tidak membuat tombol atau teks dari nol setiap saat. Kita membangun **Design System**. Mengapa? Karena jika klien tiba-tiba ingin mengubah warna "Hijau" menjadi "Biru" di seluruh aplikasi, kita hanya perlu mengubahnya di satu tempat (Konstanta), bukan di 50 halaman berbeda.

Design system memastikan aplikasi terlihat konsisten (pixel-perfect) dan mempercepat waktu pengembangan hingga **60%**. Developer yang paham Design System jauh lebih dihargai daripada yang hanya bisa coding "asal jalan".

## 🎯 Sprint Goal
Membangun library komponen UI dasar yang akan digunakan di seluruh layar aplikasi WARUNGku.

## 📦 Product Increment
- [x] File konstanta tema (`colors.js`, `spacing.js`).
- [x] Komponen `MyButton` (Primary, Secondary, Outline).
- [x] Komponen `MyText` (Heading, Subheading, Body, Caption).
- [x] Komponen `ProductCard` (Kerangka kartu untuk daftar produk).

## 💰 Nilai Bisnis
Membangun Design System internal perusahaan adalah investasi besar. Developer yang bisa menyiapkan ini di awal proyek membantu perusahaan menghemat biaya *maintenance* jangka panjang senilai **puluhan juta rupiah**.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Splash Screen & Planning Design System.
- **30 menit**: Teori: Atomic Design & UI Consistency.
- **150 menit**: Coding Sesi: Membuat folder `components/` dan file tema.
- **30 menit**: Peer Review: Cek konsistensi warna dan spacing.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Folder `src/theme` dan `src/components` terstruktur.
- [ ] Komponen Button bisa berubah warna berdasarkan properti (props).
- [ ] Typography memiliki ukuran font yang standar (tidak acak).
- [ ] Semua komponen menggunakan warna dari `colors.js`.
