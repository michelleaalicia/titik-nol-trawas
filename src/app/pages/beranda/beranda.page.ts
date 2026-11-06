import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DATA_WISATA } from '../wisata/wisata.page';
import { DATA_BERITA, DATA_EVENT } from '../data/konten.data';

import {
  IonHeader,
  IonToolbar,
  IonContent,
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
  arrowForwardOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-beranda',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButton,
    IonIcon,
  ],
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {
  bannerAktif = 0;
  bannerList = [
    {
      kategori: 'Titik Nol Trawas',
      judul: 'Jelajahi Titik Nol Trawas',
      deskripsi: 'Geser untuk melihat tempat menarik di sekitarnya.',
      gambar: 'assets/images/banner/titik-nol-cover.jpg',
      link: '/tabs/wisata',
      cover: true,
    },
    ...DATA_WISATA.slice(0, 3).map((tempat) => ({
      kategori: tempat.kategori,
      judul: tempat.nama,
      deskripsi: 'Lihat informasi tempat dan lokasi di Maps.',
      gambar: tempat.gambar,
      link: '/detail-wisata/' + tempat.id,
      cover: false,
    })),
  ];

  onBannerScroll(event: Event) {
    const slider = event.target as HTMLElement;
    this.bannerAktif = Math.round(
      slider.scrollLeft / (slider.clientWidth + 12),
    );
  }

  pilihBanner(index: number, slider: HTMLElement) {
    slider.scrollTo({ left: index * (slider.clientWidth + 12) });
  }

  bannerBerikutnya(slider: HTMLElement) {
    const indexBerikutnya = (this.bannerAktif + 1) % this.bannerList.length;

    this.pilihBanner(indexBerikutnya, slider);
  }

  beritaTerbaru = DATA_BERITA.slice(0, 3);

  eventTerdekat = DATA_EVENT.slice(0, 3).map((event) => ({
    ...event,
    tanggal: event.tanggalAngka,
  }));

  destinasiPopuler = DATA_WISATA.slice(0, 3);

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
      'arrow-forward-outline': arrowForwardOutline,
    });
  }
}
