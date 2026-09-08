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
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  star,
  pricetagOutline,
  timeOutline,
  locationOutline,
} from 'ionicons/icons';

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
  ],
  templateUrl: './wisata.page.html',
  styleUrls: ['./wisata.page.scss'],
})
export class WisataPage {
  kategoriList = ['Semua', 'Alam', 'Sejarah', 'Kuliner', 'Edukasi', 'Camping'];

  selectedKategori = 'Semua';
  searchTerm = '';

  destinasiList = [
    {
      id: 1,
      nama: 'Air Terjun Dlundung',
      kategori: 'Alam',
      rating: 4.8,
      deskripsi:
        'Wisata alam air terjun yang sejuk dengan area camping ground yang luas dan menarik.',
      harga: 'Rp 15.000 / orang',
      jam: '07:00 - 16:00 WIB',
      gambar: 'assets/images/wisata/dlundung.jpg',
    },
    {
      id: 2,
      nama: 'Candi Jolotundo',
      kategori: 'Sejarah',
      rating: 4.6,
      deskripsi:
        'Situs bersejarah peninggalan Kerajaan Kahuripan dengan sumber mata air murni.',
      harga: 'Rp 10.000 / orang',
      jam: '24 Jam',
      gambar: 'assets/images/wisata/jolotundo.jpg',
    },
    {
      id: 3,
      nama: 'Bumi Perkemahan Trawas',
      kategori: 'Camping',
      rating: 4.7,
      deskripsi:
        'Area camping premium dengan pemandangan Gunung Penanggungan yang indah.',
      harga: 'Mulai Rp 50.000 / malam',
      jam: '24 Jam',
      gambar: 'assets/images/wisata/bumi-perkemahan.jpg',
    },
  ];

  constructor() {
    addIcons({
      star,
      'pricetag-outline': pricetagOutline,
      'time-outline': timeOutline,
      'location-outline': locationOutline,
    });
  }

  get destinasiFiltered() {
    const search = this.searchTerm.trim().toLowerCase();

    return this.destinasiList.filter((dest) => {
      const cocokKategori =
        this.selectedKategori === 'Semua' ||
        dest.kategori === this.selectedKategori;

      const cocokSearch =
        !search ||
        dest.nama.toLowerCase().includes(search) ||
        dest.deskripsi.toLowerCase().includes(search) ||
        dest.kategori.toLowerCase().includes(search);

      return cocokKategori && cocokSearch;
    });
  }

  pilihKategori(kategori: string) {
    this.selectedKategori = kategori;
  }

  onSearch(event: any) {
    this.searchTerm = event.detail.value || '';
  }
}
