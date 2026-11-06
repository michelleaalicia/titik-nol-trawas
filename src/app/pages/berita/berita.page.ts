import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DATA_BERITA } from '../data/konten.data';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonModal,
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  searchOutline,
  newspaperOutline,
  chevronDownOutline,
  closeOutline,
  checkmarkCircle,
} from 'ionicons/icons';

@Component({
  selector: 'app-berita',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSearchbar,
    IonIcon,
    IonButton,
    IonModal,
  ],
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaPage {
  searchTerm = '';
  selectedKategori = 'semua';
  panelTerbuka = false;

  beritaList = DATA_BERITA;

  kategoriList = [
    { id: 'semua', label: 'Semua kategori' },
    { id: 'Edukasi', label: 'Edukasi' },
    { id: 'Kesehatan', label: 'Kesehatan' },
    { id: 'Wisata & Kuliner', label: 'Wisata & Kuliner' },
    { id: 'Kuliner', label: 'Kuliner' },
    { id: 'Lingkungan', label: 'Lingkungan' },
  ];

  constructor() {
    addIcons({
      searchOutline,
      newspaperOutline,
      chevronDownOutline,
      closeOutline,
      checkmarkCircle,
    });
  }

  get labelKategori() {
    const kategori = this.kategoriList.find(
      (item) => item.id === this.selectedKategori,
    );

    return kategori?.label || '';
  }

  get beritaFiltered() {
    const keyword = this.searchTerm.trim().toLowerCase();

    return this.beritaList.filter((berita) => {
      const cocokJudul = berita.judul.toLowerCase().includes(keyword);

      const cocokKategori =
        this.selectedKategori === 'semua' ||
        berita.kategori === this.selectedKategori;

      return cocokJudul && cocokKategori;
    });
  }

  pilihKategori(kategori: string) {
    this.selectedKategori = kategori;
    this.panelTerbuka = false;
  }

  resetFilter() {
    this.searchTerm = '';
    this.selectedKategori = 'semua';
  }
}

export { BeritaPage as DaftarBeritaPage };
