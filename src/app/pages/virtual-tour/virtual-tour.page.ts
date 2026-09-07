import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  add,
  remove,
  expandOutline,
  informationCircleOutline,
  locationOutline,
  arrowBack,
  cafeOutline,
  flowerOutline,
  walkOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-virtual-tour',
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
  templateUrl: './virtual-tour.page.html',
  styleUrls: ['./virtual-tour.page.scss'],
})
export class VirtualTourPage {
  scenes = [
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

  selectedScene = this.scenes[0];

  zoom = 1;

  isDragging = false;

  private startX = 0;
  private currentOffset = 0;
  offset = 0;

  constructor() {
    addIcons({
      add,
      remove,
      'expand-outline': expandOutline,
      'information-circle-outline': informationCircleOutline,
      'location-outline': locationOutline,
      'arrow-back': arrowBack,
      'cafe-outline': cafeOutline,
      'flower-outline': flowerOutline,
      'walk-outline': walkOutline,
    });
  }

  pilihScene(scene: any) {
    this.selectedScene = scene;
    this.zoom = 1;
    this.offset = 0;
  }

  zoomIn() {
    if (this.zoom < 1.6) {
      this.zoom += 0.1;
    }
  }

  zoomOut() {
    if (this.zoom > 0.8) {
      this.zoom -= 0.1;
    }
  }

  mulaiDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;

    if (event instanceof MouseEvent) {
      this.startX = event.clientX;
    } else {
      this.startX = event.touches[0].clientX;
    }

    this.currentOffset = this.offset;
  }

  saatDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) {
      return;
    }

    let currentX = 0;

    if (event instanceof MouseEvent) {
      currentX = event.clientX;
    } else {
      currentX = event.touches[0].clientX;
    }

    const difference = currentX - this.startX;

    this.offset = this.currentOffset + difference;
  }

  selesaiDrag() {
    this.isDragging = false;
  }

  resetView() {
    this.zoom = 1;
    this.offset = 0;
  }
}
