import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonModal,
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  star,
  pricetagOutline,
  timeOutline,
  locationOutline,
  chevronDownOutline,
  closeOutline,
  checkmarkCircle,
} from 'ionicons/icons';

// Data bersama daftar, detail, dan beranda. Foto ditambahkan sendiri di assets.
// Rating null berarti belum terverifikasi; harga null bukan berarti gratis.
export interface DataWisata {
  id: number;
  nama: string;
  kategori: string;
  rating: number | null;
  deskripsi: string;
  harga: string;
  hargaAngka: number | null;
  jam: string;
  jamBuka: string | null;
  jamTutup: string | null;
  buka24Jam: boolean;
  alamat: string;
  gambar: string;
  latitude: number;
  longitude: number;
  sumber: string;
  catatan?: string;
}

export const DATA_WISATA: DataWisata[] = [
  {
    "rating": null,
    "hargaAngka": null,
    "jamBuka": null,
    "jamTutup": null,
    "buka24Jam": false,
    "id": 1,
    "nama": "dCabin Jati Trawas",
    "kategori": "Lainnya",
    "deskripsi": "Tempat di sekitar Titik Nol Trawas, Desa Duyung. Informasi layanan dan deskripsi lengkap sedang dilengkapi.",
    "harga": "Biaya belum tersedia",
    "jam": "Jam buka belum tersedia",
    "alamat": "Sekitar Desa Duyung, Kecamatan Trawas, Kabupaten Mojokerto, Jawa Timur. Ikuti titik lokasi pada peta.",
    "gambar": "assets/images/wisata/dcabin-jati-trawas.jpg",
    "latitude": -7.6481057577627976,
    "longitude": 112.60841593873901,
    "sumber": "Nama dan koordinat dari pemilik aplikasi; rincian tempat belum terverifikasi."
  },
  {
    "rating": null,
    "hargaAngka": 25000,
    "jamBuka": null,
    "jamTutup": null,
    "buka24Jam": false,
    "id": 2,
    "nama": "Elok Cafe",
    "kategori": "Kuliner",
    "deskripsi": "Kafe di area persawahan Desa Duyung untuk menikmati makanan dan minuman sambil bersantai. Perkiraan pengeluaran mengikuti pesanan, bukan harga tiket masuk.",
    "harga": "Perkiraan Rp25.000 - Rp50.000 / orang",
    "jam": "Konfirmasi jam buka ke pengelola",
    "alamat": "Desa Duyung, Kecamatan Trawas, Kabupaten Mojokerto, Jawa Timur.",
    "gambar": "assets/images/wisata/elok-cafe.jpg",
    "latitude": -7.647244790473612,
    "longitude": 112.61012226757515,
    "sumber": "https://restaurantguru.com/Elok-Cafe-Indonesia",
    "catatan": "Jam berbeda antarsumber sehingga tidak digunakan pada filter waktu. Filter harga memakai batas bawah perkiraan pengeluaran."
  },
  {
    "rating": null,
    "hargaAngka": null,
    "jamBuka": null,
    "jamTutup": null,
    "buka24Jam": false,
    "id": 3,
    "nama": "Durian DUREN DEWA",
    "kategori": "Kuliner",
    "deskripsi": "Tempat penjualan durian di Desa Duyung, Trawas. Pilihan buah dan biaya pembelian perlu ditanyakan langsung kepada penjual.",
    "harga": "Harga mengikuti pilihan durian",
    "jam": "Konfirmasi jam buka ke penjual",
    "alamat": "Desa Duyung, Kecamatan Trawas, Kabupaten Mojokerto, Jawa Timur.",
    "gambar": "assets/images/wisata/durian-duren-dewa.jpg",
    "latitude": -7.646218856426906,
    "longitude": 112.6112975117526,
    "sumber": "https://www.semuabis.com/durian-duren-dewa-0822-3343-0770",
    "catatan": "Direktori menyebut 24 jam, tetapi belum dikonfirmasi oleh pengelola; bukan otomatis buka 24 jam."
  },
  {
    "rating": null,
    "hargaAngka": 10000,
    "jamBuka": "08:00",
    "jamTutup": "19:00",
    "buka24Jam": false,
    "id": 4,
    "nama": "La Verde Cafe",
    "kategori": "Kuliner",
    "deskripsi": "Kafe di sekitar Titik Nol Trawas dengan pemandangan persawahan dan pegunungan. Tersedia makanan dan minuman untuk pengunjung yang ingin bersantai. Informasi harga dan jam dapat berubah.",
    "harga": "Minuman mulai Rp10.000; makanan Rp15.000",
    "jam": "08.00 - 19.00 WIB; cek jadwal terbaru",
    "alamat": "Desa Duyung, Kecamatan Trawas, Kabupaten Mojokerto, Jawa Timur 61375.",
    "gambar": "assets/images/wisata/la-verde-cafe.jpg",
    "latitude": -7.647420433538123,
    "longitude": 112.60773553835841,
    "sumber": "https://jatim.idntimes.com/travel/destination/tempat-ngopi-pagi-dengan-pemandangan-alam-terbaik-di-mojokerto-c1c2-01-81bk8-c09jpy",
    "catatan": "Jam dan harga berdasarkan artikel, bukan konfirmasi langsung. Filter harga menggunakan harga awal minuman."
  },
  {
    "rating": null,
    "hargaAngka": null,
    "jamBuka": null,
    "jamTutup": null,
    "buka24Jam": false,
    "id": 5,
    "nama": "Gunung Bale Resort",
    "kategori": "Penginapan",
    "deskripsi": "Tempat peristirahatan di kawasan Trawas yang juga digunakan untuk kegiatan kelompok dan outbound. Tarif menginap atau kegiatan perlu dikonfirmasi sesuai paket yang dipilih.",
    "harga": "Hubungi pengelola untuk tarif",
    "jam": "Sesuai reservasi; konfirmasi pengelola",
    "alamat": "Kawasan Duyung / Tamiajeng, Kecamatan Trawas, Kabupaten Mojokerto, Jawa Timur. Ikuti titik lokasi pada peta.",
    "gambar": "assets/images/wisata/gunung-bale-resort.jpg",
    "latitude": -7.6446416237045725,
    "longitude": 112.60588222532556,
    "sumber": "https://www.outboundpacet.co.id/2019/05/gbr-trawas.html",
    "catatan": "Nama kawasan berbeda antarsumber. Koordinat mengikuti kiriman pemilik aplikasi."
  }
];

@Component({
  selector: 'app-wisata',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSearchbar,
    IonButton,
    IonIcon,
    IonModal,
  ],
  templateUrl: './wisata.page.html',
  styleUrls: ['./wisata.page.scss'],
})
export class WisataPage {
  searchTerm = '';

  selectedKategori = 'Semua';
  selectedHarga = 'semua';
  selectedJam = 'semua';

  panelTerbuka = false;
  jenisFilter = 'kategori';

  kategoriList = ['Semua', 'Kuliner', 'Penginapan', 'Lainnya'];

  hargaList = [
    {
      id: 'semua',
      label: 'Semua harga',
      min: 0,
      max: Infinity,
    },
    {
      id: 'gratis',
      label: 'Gratis',
      min: 0,
      max: 0,
    },
    {
      id: 'dibawah10',
      label: 'Di bawah Rp10.000',
      min: 1,
      max: 9999,
    },
    {
      id: '10-20',
      label: 'Rp10.000 - <Rp20.000',
      min: 10000,
      max: 19999,
    },
    {
      id: '20-25',
      label: 'Rp20.000 - <Rp25.000',
      min: 20000,
      max: 24999,
    },
    {
      id: '25-30',
      label: 'Rp25.000 - <Rp30.000',
      min: 25000,
      max: 29999,
    },
    {
      id: '30-40',
      label: 'Rp30.000 - <Rp40.000',
      min: 30000,
      max: 39999,
    },
    {
      id: '40-50',
      label: 'Rp40.000 - Rp50.000',
      min: 40000,
      max: 50000,
    },
    {
      id: 'diatas50',
      label: 'Di atas Rp50.000',
      min: 50001,
      max: Infinity,
    },
  ];

  jamList = [
    {
      id: 'semua',
      label: 'Semua jam',
      detail: 'Tanpa filter waktu',
    },
    {
      id: 'pagi',
      label: 'Pagi',
      detail: '06.00 - 13.00 WIB',
    },
    {
      id: 'siang',
      label: 'Siang',
      detail: '13.00 - 18.00 WIB',
    },
    {
      id: 'malam',
      label: 'Malam',
      detail: '18.00 - 06.00 WIB',
    },
    {
      id: '24jam',
      label: 'Buka 24 jam',
      detail: 'Buka sepanjang hari',
    },
  ];

  destinasiList = DATA_WISATA;

  constructor() {
    addIcons({
      star,
      pricetagOutline,
      timeOutline,
      locationOutline,
      chevronDownOutline,
      closeOutline,
      checkmarkCircle,
    });
  }

  get labelHarga() {
    const pilihan = this.hargaList.find(
      (item) => item.id === this.selectedHarga,
    );

    return pilihan?.label || '';
  }

  get labelJam() {
    const pilihan = this.jamList.find((item) => item.id === this.selectedJam);

    return pilihan?.label || '';
  }

  get adaFilter() {
    return (
      this.selectedKategori !== 'Semua' ||
      this.selectedHarga !== 'semua' ||
      this.selectedJam !== 'semua'
    );
  }

  get destinasiFiltered() {
    const keyword = this.searchTerm.trim().toLowerCase();

    const harga =
      this.hargaList.find((item) => item.id === this.selectedHarga) ||
      this.hargaList[0];

    return this.destinasiList.filter((dest) => {
      const cocokNama = dest.nama.toLowerCase().includes(keyword);

      const cocokKategori =
        this.selectedKategori === 'Semua' ||
        dest.kategori === this.selectedKategori;

      const cocokHarga =
        this.selectedHarga === 'semua' ||
        (dest.hargaAngka !== null &&
          dest.hargaAngka >= harga.min && dest.hargaAngka <= harga.max);

      const cocokJam = this.sesuaiJam(
        dest.jamBuka,
        dest.jamTutup,
        dest.buka24Jam,
      );

      return cocokNama && cocokKategori && cocokHarga && cocokJam;
    });
  }

  bukaFilter(jenis: string) {
    this.jenisFilter = jenis;
    this.panelTerbuka = true;
  }

  pilihFilter(nilai: string) {
    if (this.jenisFilter === 'kategori') {
      this.selectedKategori = nilai;
    }

    if (this.jenisFilter === 'harga') {
      this.selectedHarga = nilai;
    }

    if (this.jenisFilter === 'jam') {
      this.selectedJam = nilai;
    }

    this.panelTerbuka = false;
  }

  ubahKeMenit(waktu: string) {
    const [jam, menit] = waktu.split(':').map(Number);
    return jam * 60 + menit;
  }

  sesuaiJam(jamBuka: string | null, jamTutup: string | null, buka24Jam: boolean) {
    if (this.selectedJam === 'semua') {
      return true;
    }

    if (this.selectedJam === '24jam') {
      return buka24Jam;
    }

    if (buka24Jam) {
      return true;
    }

    if (!jamBuka || !jamTutup) return false;

    const buka = this.ubahKeMenit(jamBuka);
    const tutup = this.ubahKeMenit(jamTutup);

    if (buka === tutup) {
      return false;
    }

    // Jadwal lewat tengah malam dibagi menjadi dua rentang.
    const jadwal =
      buka < tutup
        ? [[buka, tutup]]
        : [
            [buka, 1440],
            [0, tutup],
          ];

    // Pagi: 06.00–13.00.
    let periode = [[360, 780]];

    if (this.selectedJam === 'siang') {
      periode = [[780, 1080]];
    }

    if (this.selectedJam === 'malam') {
      periode = [
        [1080, 1440],
        [0, 360],
      ];
    }

    // Cek apakah jam operasional beririsan dengan periode pilihan.
    for (const jam of jadwal) {
      for (const waktu of periode) {
        if (jam[0] < waktu[1] && jam[1] > waktu[0]) {
          return true;
        }
      }
    }

    return false;
  }

  resetFilter() {
    this.selectedKategori = 'Semua';
    this.selectedHarga = 'semua';
    this.selectedJam = 'semua';
  }

  resetSemua() {
    this.searchTerm = '';
    this.resetFilter();
  }
}
