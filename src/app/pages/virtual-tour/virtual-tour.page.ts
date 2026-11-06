import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IonHeader, IonToolbar, IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  informationCircleOutline,
  locationOutline,
  cafeOutline,
  flowerOutline,
  walkOutline,
} from 'ionicons/icons';

interface TourScene {
  id: number;
  nama: string;
  deskripsi: string;
  icon: string;
  posisi: {
    left: string;
    top: string;
  };
  gambar: string;
}

@Component({
  selector: 'app-virtual-tour',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonContent, IonIcon],
  templateUrl: './virtual-tour.page.html',
  styleUrls: ['./virtual-tour.page.scss'],
})
export class VirtualTourPage {
  private readonly demoPanorama = 'https://pannellum.org/images/alma.jpg';

  panoramaUrl: SafeResourceUrl;

  scenes: TourScene[] = [
    {
      id: 1,
      nama: 'Cafe Hutan',
      deskripsi: 'Nikmati suasana santai di tengah kawasan hijau Trawas.',
      icon: 'cafe-outline',
      posisi: {
        left: '36%',
        top: '46%',
      },
      gambar: 'assets/images/virtual-tour/virtual-tour-bg.jpg',
    },
    {
      id: 2,
      nama: 'Taman Bunga',
      deskripsi: 'Area taman dengan suasana sejuk dan pemandangan pegunungan.',
      icon: 'flower-outline',
      posisi: {
        left: '68%',
        top: '40%',
      },
      gambar: 'assets/images/virtual-tour/virtual-tour-bg.jpg',
    },
    {
      id: 3,
      nama: 'Jalur Trekking',
      deskripsi: 'Jelajahi jalur trekking dengan panorama alam Trawas.',
      icon: 'walk-outline',
      posisi: {
        left: '52%',
        top: '62%',
      },
      gambar: 'assets/images/virtual-tour/virtual-tour-bg.jpg',
    },
  ];

  selectedScene: TourScene = this.scenes[0];

  constructor(private sanitizer: DomSanitizer) {
    addIcons({
      'information-circle-outline': informationCircleOutline,
      'location-outline': locationOutline,
      'cafe-outline': cafeOutline,
      'flower-outline': flowerOutline,
      'walk-outline': walkOutline,
    });

    this.panoramaUrl = this.createPanoramaUrl();
  }

  private createPanoramaUrl(): SafeResourceUrl {
    const viewerUrl =
      'https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg';

    return this.sanitizer.bypassSecurityTrustResourceUrl(viewerUrl);
  }

  pilihScene(scene: TourScene): void {
    this.selectedScene = scene;

    // Memuat ulang viewer saat berpindah lokasi.
    this.panoramaUrl = this.createPanoramaUrl();
  }
}
