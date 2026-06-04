# 🤖 AI Generation Guide - WARUNGku TEFA

Dokumen ini adalah panduan bagi AI (Gemini) untuk menghasilkan materi pertemuan secara konsisten. **Ikuti template ini untuk setiap instruksi "Buat Pertemuan [X]".**

## 📝 Prinsip Generasi Materi
1. **Bahasa**: Indonesia yang profesional namun mudah dimengerti siswa SMK.
2. **Konteks Industri**: Selalu mulai dengan "Mengapa fitur ini penting bagi bisnis?".
3. **Surgical Code**: Berikan potongan kode yang spesifik dan terorganisir sesuai folder.
4. **Teaching Style**: Jelaskan *Why* (mengapa pakai cara ini), bukan hanya *What*.

---

## 📋 Template Output Pertemuan

### 1. File `README.md` di Folder Pertemuan
- **Konteks Industri**: Urgensi fitur di dunia nyata.
- **Sprint Goal**: Target konkret hari ini.
- **Nilai Bisnis**: Berapa harga fitur ini jika dijual.
- **Langkah Kerja**: Step-by-step instruksi untuk siswa.
- **Definition of Done**: Checklist keberhasilan.

### 2. File `materi.md`
- **Konsep Inti**: Penjelasan teori singkat.
- **Analogi**: Perumpamaan dunia nyata.
- **Common Mistakes**: Apa yang sering salah dilakukan pemula.
- **Senior Tips**: Best practice industri.

### 3. Folder `kode/`
- Berikan struktur file yang harus dibuat/diedit.
- Sertakan komentar `// [TEFA]` untuk penjelasan logika penting.

---

## 🛠 Task Sequence (Untuk AI)
Saat diminta membuat materi pertemuan:
1. Baca `SILABUS.md` untuk memahami konteks pertemuan.
2. Generate file sesuai template di atas.
3. Pastikan kode kompatibel dengan pertemuan sebelumnya (incremental).
4. Fokus pada **SATU** pertemuan saja agar tidak melebihi limit token dan menjaga kualitas.

---

## 🚦 Status Eksekusi
- [x] Tahap 1: Setup Repository & Docs
- [ ] Tahap 2: Semester Ganjil (P01 - P18)
- [ ] Tahap 3: Semester Genap (Backend & P01 - P18)
