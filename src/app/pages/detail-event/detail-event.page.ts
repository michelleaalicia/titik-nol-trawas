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
  timeOutline,
  mapOutline,
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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    addIcons({
      'arrow-back': arrowBack,
      'calendar-outline': calendarOutline,
      'location-outline': locationOutline,
      'time-outline': timeOutline,
      'map-outline': mapOutline,
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.event = DATA_EVENT.find((item) => item.id === id);
  }

  goBack(): void {
    this.location.back();
  }

  lihatLokasi(): void {
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
