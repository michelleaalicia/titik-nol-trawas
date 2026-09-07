import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonSearchbar,
  IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBack,
  searchOutline,
  newspaperOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-daftar-berita',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonSearchbar,
    IonIcon,
  ],
  templateUrl: './daftar-berita.page.html',
  styleUrls: ['./daftar-berita.page.scss'],
})
export class DaftarBeritaPage {
  beritaList = [
    {
      id: 1,
      judul: 'Trawas Culture Fest 2026 Kembali Digelar',
      tanggal: '5 Ags 2026',
      excerpt:
        'Trawas, sebuah permata tersembunyi di lereng Gunung Penanggungan, bersiap kembali...',
      gambar: 'assets/images/berita/culture-fest.jpg',
    },
    {
      id: 2,
      judul: '5 Rekomendasi Spot Nongkrong Baru di Kaki Gunung Arjuno',
      tanggal: '1 Ags 2026',
      excerpt:
        'Menjelajahi tempat-tempat bersantai terbaru yang menawarkan perpaduan kopi nikmat...',
      gambar: 'assets/images/berita/cafe-baru.jpg',
    },
    {
      id: 3,
      judul: 'Program Penghijauan Kawasan Wisata Selesai Tahap Pertama',
      tanggal: '25 Jul 2026',
      excerpt:
        'Ratusan bibit pohon telah berhasil ditanam berkat kerja sama komunitas lokal dan pengelola.',
      gambar: 'assets/images/berita/penghijauan.jpg',
    },
  ];

  constructor(private location: Location) {
    addIcons({
      arrowBack,
      searchOutline,
      newspaperOutline,
      chevronForwardOutline,
    });
  }

  goBack() {
    this.location.back();
  }
}
