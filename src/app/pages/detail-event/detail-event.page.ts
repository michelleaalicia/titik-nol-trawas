import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DATA_EVENT } from '../data/konten.data';

import { IonHeader, IonContent, IonIcon, IonButton } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  arrowBack,
  calendarOutline,
  locationOutline,
  informationCircleOutline,
  timeOutline,
  mapOutline,
  musicalNotesOutline,
  leafOutline,
  restaurantOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-detail-event',
  standalone: true,
  imports: [CommonModule, IonHeader, IonContent, IonIcon, IonButton],
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})
export class DetailEventPage {
  event: any;

  eventList = DATA_EVENT;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    addIcons({
      'arrow-back': arrowBack,
      'calendar-outline': calendarOutline,
      'location-outline': locationOutline,
      'information-circle-outline': informationCircleOutline,
      'time-outline': timeOutline,
      'map-outline': mapOutline,
      'musical-notes-outline': musicalNotesOutline,
      'leaf-outline': leafOutline,
      'restaurant-outline': restaurantOutline,
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.event = this.eventList.find((item) => item.id === id);
  }

  goBack() {
    this.location.back();
  }

  formatHarga(harga: number) {
    return 'Rp' + harga.toLocaleString('id-ID');
  }

  lihatLokasi() {
    if (!this.event) return;
    const titik = this.event.latitude + ',' + this.event.longitude;
    window.open(
      'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(titik),
      '_blank',
      'noopener,noreferrer',
    );
  }
}
