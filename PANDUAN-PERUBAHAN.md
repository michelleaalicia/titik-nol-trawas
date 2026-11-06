# Titik Nol Trawas — tahap 2

## Memakai versi ini
Ekstrak ZIP ke folder baru, buka terminal di folder package.json, lalu jalankan:

```bash
npm ci
npm start
```

Kalau tetap memakai proyek lama, cadangkan dulu lalu salin folder `src` dari ZIP ini. Versi ini tidak menambah dependensi. `angular.json` menyertakan penyesuaian budget stylesheet dari tahap pertama (warning 6 kB, error 10 kB).

## Perubahan sesuai permintaan
- Search bar di BERANDA dihapus. Pencarian di Wisata, Event, dan Berita tetap tersedia.
- Banner beranda menjadi tiga kartu horizontal. Geser ke kiri/kanan pada ponsel atau klik titik di bawah banner. Tidak ada autoplay atau library tambahan.
- Banner pertama membuka detail wisata Dlundung, kedua detail event Senja Akustik, ketiga detail berita Culture Fest. Data banner ada di `bannerList` pada beranda.page.ts.
- Tab Berita dengan ikon koran ditambahkan. Enam menu: Beranda, Wisata, Event, Berita, Virtual Tour, Info.
- Berita berada di `/tabs/berita`. URL lama `/daftar-berita` diarahkan ke sana. Link Lihat Semua berita memakai rute tab.
- Header hitam halaman berita diganti header putih dengan logo dan teks hijau, seragam dengan halaman utama lain. Tombol kembali di halaman daftar dihapus karena sekarang menjadi tab; halaman detail tetap punya tombol kembali.
- Pencarian berita bekerja dengan judul dan menampilkan pesan bila hasil kosong.
- Gambar Culture Fest yang sebelumnya memakai filename yang tidak ada telah diperbaiki.
- Lihat Semua ditambahkan di Destinasi Populer, menuju `/tabs/wisata`.
- Outlet tambahan di tabs dihapus karena IonTabs sudah membuat outlet internal. `:host` halaman memakai flex, bukan block. Fullscreen dihapus agar konten mengikuti batas header/tab. Konten mendapat jarak bawah dan kartu Virtual Tour mengikuti tinggi isinya.
- Teks splash mengikuti revisi terakhir: Informasi wisata Trawas, Memuat…, tanpa tulisan footer.

## Style bersama
Pengaturan utama di `src/theme/variables.scss`:
- Hijau utama #0d631b, putih #ffffff, latar #f7f9f6.
- Teks utama #20231f dan teks sekunder #626861.
- Font Arial, Helvetica, sans-serif pada seluruh aplikasi.
- Ukuran teks 12 px (keterangan), 14 px (isi), 16 px (judul kartu), 18 px (judul bagian), 22 px (judul halaman). Label tab 10 px agar enam menu muat. Ukuran ikon dan logo terpisah dari skala teks.
- `src/global.scss` mengatur toolbar, judul, tombol, pencarian, header merek, dan jarak bawah.
- CSS tiap halaman tetap menangani susunan kartu/layout dan memakai variabel tersebut.

Syntax tetap sederhana: array, ngFor, routerLink, fungsi scroll pendek, CSS flex dan scroll-snap. Tidak menambahkan library carousel atau framework styling.

## Validasi yang dilakukan
- Build produksi berhasil (`npm run build`). Di lingkungan pemeriksaan dipakai shim statistik memori Node karena statistik RSS tidak tersedia; shim tidak disertakan dalam proyek.
- Semua path gambar lokal pada kode ditemukan.
- Rute berita baru, redirect rute lama, dan penghapusan pencarian beranda diperiksa.
- Warning budget CSS beranda, virtual tour, dan detail wisata masih ada; tidak menggagalkan build. Konfigurasi Browserslist awal juga masih mencantumkan browser lama.
- Browser pengujian tidak berhasil dijalankan di lingkungan ini. Tampilan, swipe, jarak bawah, dan transisi navigasi belum diverifikasi melalui browser/perangkat nyata.

## Cek di browser/ponsel
1. Buka beranda: tidak ada search bar dan banner pertama menampilkan Dlundung.
2. Geser tiga banner dan klik masing-masing: tujuan detail sesuai isi banner; tombol kembali kembali ke beranda.
3. Klik tab Berita: header putih, ikon koran aktif, tiga berita tampil dan semua gambar termuat.
4. Cari judul berita, coba kata yang tidak ada, lalu hapus pencarian.
5. Buka berita, kembali, kemudian pindah seluruh enam tab.
6. Klik Lihat Semua pada Destinasi Populer dan Berita Terbaru.
7. Scroll beranda sampai paling bawah: tombol Mulai Virtual Tour harus terlihat penuh di atas tab bawah.
8. Cek lebar 320, 390, dan 430 px, posisi landscape, serta dark mode perangkat (aplikasi tetap memakai palet terang).

API/database belum terhubung. Data dummy asli tetap digunakan. Favorit beranda dan panorama 360 asli belum termasuk perubahan ini.
