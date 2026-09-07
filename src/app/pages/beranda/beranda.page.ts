import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonButton,
  IonIcon,
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  home,
  mapOutline,
  calendarOutline,
  compassOutline,
  informationCircleOutline,
  locationOutline,
  heartOutline,
  star,
  cameraOutline,
  searchOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-beranda',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonButton,
    IonIcon,
  ],
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {
  beritaTerbaru = [
    {
      id: 1,
      judul: 'Trawas Culture Fest 2026 Kembali Digelar',
      tanggal: '5 Ags 2026',
      excerpt:
        'Trawas, sebuah permata tersembunyi di lereng Gunung Penanggungan...',
      gambar: 'assets/images/berita/news-1.jpg',
    },
    {
      id: 2,
      judul: '5 Rekomendasi Spot Nongkrong Baru di Kaki Gunung Arjuno',
      tanggal: '1 Ags 2026',
      excerpt:
        'Menjelajahi tempat-tempat bersantai terbaru yang menawarkan perpaduan kopi nikmat...',
      gambar: 'assets/images/berita/news-2.jpg',
    },
  ];

  eventTerdekat = [
    {
      id: 1,
      judul: 'Senja Akustik di Titik Nol',
      lokasi: 'Amfiteater Titik Nol Trawas',
      tanggal: '20',
      bulan: 'Ags',
      gambar: 'assets/images/event/event-1.jpg',
    },
    {
      id: 2,
      judul: 'Yoga Pagi di Alam Bike Fun Ride',
      lokasi: 'Taman Ghanjaran Trawas',
      tanggal: '25',
      bulan: 'Ags',
      gambar: 'assets/images/event/event-2.jpg',
    },
  ];

  destinasiPopuler = [
    {
      id: 1,
      nama: 'Air Terjun Dlundung',
      rating: 4.8,
      harga: 'Rp 15.000',
      gambar: 'assets/images/destinasi/destinasi-1.jpg',
    },
    {
      id: 2,
      nama: 'Candi Jolotundo',
      rating: 4.6,
      harga: 'Gratis',
      gambar: 'assets/images/destinasi/destinasi-2.jpg',
    },
  ];

  constructor() {
    addIcons({
      home,
      'map-outline': mapOutline,
      'calendar-outline': calendarOutline,
      'compass-outline': compassOutline,
      'information-circle-outline': informationCircleOutline,
      'location-outline': locationOutline,
      'heart-outline': heartOutline,
      star,
      'camera-outline': cameraOutline,
      'search-outline': searchOutline,
    });
  }
}
