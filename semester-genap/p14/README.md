# Pertemuan 14 - Onboarding & Help Center In-App

## 🏭 Konteks Industri
Dalam bisnis SaaS massal, Anda tidak mungkin mendatangi setiap warung satu per satu untuk mengajarkan cara pakai aplikasi. Jika aplikasi sulit dipahami dalam 5 menit pertama, user akan langsung menghapusnya. Ini disebut sebagai masalah **Churn Rate** (tingkat pengguna yang berhenti memakai produk).

Solusinya adalah **Self-service Onboarding**. Aplikasi harus bisa "mengajar diri sendiri" melalui panduan interaktif (*Guided Tour*) dan menyediakan **Help Center** yang lengkap. Developer yang hebat membangun aplikasi yang memandu user layaknya seorang guru yang sabar, sehingga biaya dukungan pelanggan (*Support Cost*) bisa ditekan seminimal mungkin.

## 🎯 Sprint Goal
Membangun sistem panduan pengguna interaktif dan pusat bantuan mandiri di dalam aplikasi.

## 📦 Product Increment
- [x] Fitur "Guided Tour" (Sorotan fitur saat pertama kali dibuka).
- [x] Layar FAQ (Frequently Asked Questions) dengan kategori.
- [x] Integrasi Video Tutorial (Thumbnail + YouTube Deep Linking).
- [x] Fitur Umpan Balik (Feedback & Rating).
- [x] Tombol Cepat "Hubungi Support via WhatsApp".

## 💰 Nilai Bisnis
Onboarding yang baik meningkatkan tingkat aktivasi pengguna hingga **50%**. Klien UMKM akan merasa nyaman karena aplikasi Anda "mudah" dan "pintar". Fitur bantuan mandiri memungkinkan bisnis Anda berjalan secara otomatis (Autopilot), di mana Anda tetap mendapatkan uang langganan tanpa harus melayani pertanyaan teknis dasar berulang kali.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Sistem Langganan & PRO.
- **30 menit**: Teori: User Psychology (Friction & Activation) & Self-service Design.
- **150 menit**: Coding Sesi: Membuat Guided Tour & Help Center UI.
- **30 menit**: Peer Testing: Mintalah teman yang belum pernah pakai aplikasi Anda untuk mencoba fitur kasir dipandu oleh Onboarding.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Panduan tour muncul otomatis hanya saat pertama kali login.
- [ ] Klik salah satu pertanyaan FAQ menampilkan jawaban yang relevan.
- [ ] Tombol Video Tutorial berhasil membuka aplikasi YouTube atau Browser.
- [ ] Data feedback yang diinput user terkirim ke server Laravel.
