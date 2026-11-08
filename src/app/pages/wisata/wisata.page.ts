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
  pricetagOutline,
  timeOutline,
  locationOutline,
  chevronDownOutline,
  closeOutline,
  checkmarkCircle,
} from 'ionicons/icons';

export interface DataWisata {
  id: number;
  nama: string;
  kategori: string;
  deskripsi: string;
  harga: number;
  jam: string;
  jamBuka: string;
  jamTutup: string;
  alamat: string;
  gambar: string;
  latitude: number;
  longitude: number;
}

export const DATA_WISATA: DataWisata[] = [
  {
    id: 1,
    nama: 'dCabin Jati Trawas',
    kategori: 'Penginapan',
    deskripsi:
      'Penginapan bernuansa alam di kawasan Desa Duyung, Trawas. Tempat ini cocok untuk beristirahat bersama keluarga atau teman sambil menikmati suasana sejuk dan pemandangan alam pegunungan.',
    harga: 500000,
    jam: 'Check-in 14.00 WIB · Check-out 12.00 WIB',
    jamBuka: '08:00',
    jamTutup: '22:00',
    alamat: 'Titik Nol Trawas, Desa Duyung, Kecamatan Trawas.',
    gambar: 'assets/images/wisata/dcabin-jati-trawas.jpg',
    latitude: -7.6481057577627976,
    longitude: 112.60841593873901,
  },
  {
    id: 2,
    nama: 'Elok Cafe',
    kategori: 'Kuliner',
    deskripsi:
      'Kafe di kawasan persawahan Desa Duyung yang menawarkan suasana pedesaan dan pemandangan alam Trawas. Pengunjung dapat menikmati aneka makanan dan minuman sambil bersantai bersama keluarga atau teman.',
    harga: 20000,
    jam: 'Senin - Jumat 09.00 - 18.00 WIB · Sabtu - Minggu 08.00 - 20.00 WIB',
    jamBuka: '09:00',
    jamTutup: '18:00',
    alamat: 'Titik Nol Trawas, Desa Duyung, Kecamatan Trawas.',
    gambar: 'assets/images/wisata/elok-cafe.jpg',
    latitude: -7.647244790473612,
    longitude: 112.61012226757515,
  },
  {
    id: 3,
    nama: 'Durian DUREN DEWA',
    kategori: 'Kuliner',
    deskripsi:
      'Tempat penjualan durian di kawasan Desa Duyung, salah satu kawasan yang dikenal dengan kampung wisata durian di Trawas. Pengunjung dapat membeli durian lokal sesuai jenis dan ketersediaan dari penjual.',
    harga: 100000,
    jam: '08.00 - 17.00 WIB',
    jamBuka: '08:00',
    jamTutup: '17:00',
    alamat: 'Kampung Durian, Desa Duyung, Kecamatan Trawas.',
    gambar: 'assets/images/wisata/durian-duren-dewa.jpg',
    latitude: -7.646218856426906,
    longitude: 112.6112975117526,
  },
  {
    id: 4,
    nama: 'La Verde Cafe',
    kategori: 'Kuliner',
    deskripsi:
      'Kafe dengan suasana santai di kawasan Desa Duyung. La Verde Cafe menawarkan pemandangan persawahan dan alam pegunungan, serta pilihan makanan dan minuman untuk menemani waktu bersantai.',
    harga: 15000,
    jam: '08.00 - 20.00 WIB setiap hari',
    jamBuka: '08:00',
    jamTutup: '20:00',
    alamat: 'Desa Duyung, Kecamatan Trawas.',
    gambar: 'assets/images/wisata/la-verde-cafe.jpg',
    latitude: -7.647420433538123,
    longitude: 112.60773553835841,
  },
  {
    id: 5,
    nama: 'Gunung Bale Resort',
    kategori: 'Penginapan',
    deskripsi:
      'Resort di kawasan Trawas dengan suasana alam pegunungan. Tempat ini dapat menjadi pilihan untuk berlibur, menginap, maupun melakukan kegiatan bersama keluarga dan rombongan.',
    harga: 250000,
    jam: '08.00 - 17.00 WIB (layanan reservasi)',
    jamBuka: '08:00',
    jamTutup: '17:00',
    alamat: 'Duyung, Tamiajeng, Kecamatan Trawas.',
    gambar: 'assets/images/wisata/gunung-bale-resort.jpg',
    latitude: -7.6446416237045725,
    longitude: 112.60588222532556,
  },
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

  kategoriList = ['Semua', 'Kuliner', 'Penginapan'];

  hargaList = [
    { id: 'semua', label: 'Semua harga', min: 0, max: Infinity },
    { id: 'dibawah10', label: 'Di bawah Rp10.000', min: 0, max: 9999 },
    { id: '10-20', label: 'Rp10.000 - Rp19.999', min: 10000, max: 19999 },
    { id: '20-50', label: 'Rp20.000 - Rp49.999', min: 20000, max: 49999 },
    { id: '50-100', label: 'Rp50.000 - Rp99.999', min: 50000, max: 99999 },
    { id: '100-250', label: 'Rp100.000 - Rp249.999', min: 100000, max: 249999 },
    { id: '250-500', label: 'Rp250.000 - Rp500.000', min: 250000, max: 500000 },
    { id: 'diatas500', label: 'Di atas Rp500.000', min: 500001, max: Infinity },
  ];

  jamList = [
    { id: 'semua', label: 'Semua jam', detail: 'Tanpa filter waktu' },
    { id: 'pagi', label: 'Pagi', detail: '06.00 - 13.00 WIB' },
    { id: 'siang', label: 'Siang', detail: '13.00 - 18.00 WIB' },
    { id: 'malam', label: 'Malam', detail: '18.00 - 06.00 WIB' },
  ];

  destinasiList = DATA_WISATA;

  constructor() {
    addIcons({
      pricetagOutline,
      timeOutline,
      locationOutline,
      chevronDownOutline,
      closeOutline,
      checkmarkCircle,
    });
  }

  get labelHarga(): string {
    return (
      this.hargaList.find((item) => item.id === this.selectedHarga)?.label || ''
    );
  }

  get labelJam(): string {
    return (
      this.jamList.find((item) => item.id === this.selectedJam)?.label || ''
    );
  }

  get adaFilter(): boolean {
    return (
      this.selectedKategori !== 'Semua' ||
      this.selectedHarga !== 'semua' ||
      this.selectedJam !== 'semua'
    );
  }

  get destinasiFiltered(): DataWisata[] {
    const keyword = this.searchTerm.trim().toLowerCase();
    const harga =
      this.hargaList.find((item) => item.id === this.selectedHarga) ||
      this.hargaList[0];

    return this.destinasiList.filter((dest) => {
      const cocokNama =
        dest.nama.toLowerCase().includes(keyword) ||
        dest.kategori.toLowerCase().includes(keyword);
      const cocokKategori =
        this.selectedKategori === 'Semua' ||
        dest.kategori === this.selectedKategori;
      const cocokHarga = dest.harga >= harga.min && dest.harga <= harga.max;
      const cocokJam = this.sesuaiJam(dest.jamBuka, dest.jamTutup);
      return cocokNama && cocokKategori && cocokHarga && cocokJam;
    });
  }

  formatHarga(harga: number): string {
    return 'Rp' + harga.toLocaleString('id-ID');
  }

  bukaFilter(jenis: string): void {
    this.jenisFilter = jenis;
    this.panelTerbuka = true;
  }

  pilihFilter(nilai: string): void {
    if (this.jenisFilter === 'kategori') this.selectedKategori = nilai;
    if (this.jenisFilter === 'harga') this.selectedHarga = nilai;
    if (this.jenisFilter === 'jam') this.selectedJam = nilai;
    this.panelTerbuka = false;
  }

  private keMenit(waktu: string): number {
    const [jam, menit] = waktu.split(':').map(Number);
    return jam * 60 + menit;
  }

  private sesuaiJam(jamBuka: string, jamTutup: string): boolean {
    if (this.selectedJam === 'semua') return true;

    const buka = this.keMenit(jamBuka);
    const tutup = this.keMenit(jamTutup);
    const rentang =
      buka < tutup
        ? [[buka, tutup]]
        : [
            [buka, 1440],
            [0, tutup],
          ];

    let periode: number[][];
    if (this.selectedJam === 'pagi') periode = [[360, 780]];
    else if (this.selectedJam === 'siang') periode = [[780, 1080]];
    else
      periode = [
        [1080, 1440],
        [0, 360],
      ];

    return rentang.some((r) => periode.some((p) => r[0] < p[1] && r[1] > p[0]));
  }

  resetFilter(): void {
    this.selectedKategori = 'Semua';
    this.selectedHarga = 'semua';
    this.selectedJam = 'semua';
  }

  resetSemua(): void {
    this.searchTerm = '';
    this.resetFilter();
  }
}
