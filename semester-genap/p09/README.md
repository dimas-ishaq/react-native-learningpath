# Pertemuan 09 - Fitur Hutang Pelanggan & CRM Mini

## 🏭 Konteks Industri
Di dunia UMKM tradisional Indonesia, fitur **"Kasbon" atau Hutang** adalah hal yang sangat umum. Namun, pemilik warung seringkali rugi karena catatan hutang di buku fisik hilang, sobek, atau lupa ditagih. Di industri software, kita menyebut pengelolaan data pelanggan ini sebagai **CRM (Customer Relationship Management)**.

Membangun fitur hutang yang terintegrasi dengan sistem kasir adalah **Killer Feature** yang sangat dicari. Dengan fitur ini, aplikasi kita membantu pemilik warung menyelamatkan arus kas mereka. Selain mencatat hutang, data nomor HP pelanggan juga menjadi aset berharga untuk mengirimkan pengingat tagihan secara otomatis.

## 🎯 Sprint Goal
Membangun sistem pendataan pelanggan dan fitur pencatatan serta pelunasan hutang.

## 📦 Product Increment
- [x] CRUD Data Pelanggan (Nama, Nomor WhatsApp).
- [x] Opsi Pembayaran "Hutang" di layar Checkout.
- [x] Tabel `debts` di database untuk melacak hutang yang belum lunas.
- [x] Layar Daftar Piutang (Siapa hutang berapa).
- [x] Fitur "Bayar Cicil/Lunas" untuk mengurangi saldo hutang.

## 💰 Nilai Bisnis
Fitur ini memberikan nilai jual yang unik dibanding aplikasi kasir luar negeri. Anda bisa memasarkan aplikasi ini dengan jargon: *"Tidak perlu takut buku kasbon hilang lagi"*. Data pelanggan yang tersimpan rapi juga memungkinkan pemilik toko melakukan promosi tertarget, yang merupakan strategi untuk meningkatkan omzet hingga **30%**.

## ⏱ Alokasi Waktu (240 menit)
- **15 menit**: Standup - Review Manajemen Karyawan.
- **30 menit**: Teori: Konsep CRM & Piutang Usaha (Accounts Receivable).
- **150 menit**: Coding Sesi: Membuat API Pelanggan & Logika Hutang di POS.
- **30 menit**: Peer Review: Tes transaksi hutang dan cek sisa saldo pelanggan.
- **15 menit**: Sprint Review.

## 📋 Definition of Done
- [ ] Bisa memilih nama pelanggan saat melakukan transaksi di Kasir.
- [ ] Transaksi berstatus "Hutang" tidak menambah omzet tunai hari ini tapi menambah saldo hutang.
- [ ] Layar Piutang menampilkan daftar pelanggan yang memiliki saldo hutang > 0.
- [ ] Tombol "Tagih via WA" memicu pengiriman pesan pengingat otomatis.
