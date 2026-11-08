import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonIcon,
  IonButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBack,
  pricetagOutline,
  timeOutline,
  locationOutline,
  mapOutline,
} from 'ionicons/icons';
import { DATA_WISATA, DataWisata } from '../wisata/wisata.page';

@Component({
  selector: 'app-detail-wisata',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonContent,
    IonIcon,
    IonButton,
  ],
  templateUrl: './detail-wisata.page.html',
  styleUrls: ['./detail-wisata.page.scss'],
})
export class DetailWisataPage {
  wisata: DataWisata | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {
    addIcons({
      'arrow-back': arrowBack,
      'pricetag-outline': pricetagOutline,
      'time-outline': timeOutline,
      'location-outline': locationOutline,
      'map-outline': mapOutline,
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wisata = DATA_WISATA.find((item) => item.id === id);
  }

  formatHarga(harga: number): string {
    return 'Rp' + harga.toLocaleString('id-ID');
  }

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/tabs/wisata');
    }
  }

  bukaMaps(): void {
    if (!this.wisata) return;

    const koordinat = `${this.wisata.latitude},${this.wisata.longitude}`;
    const url =
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(koordinat);

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
