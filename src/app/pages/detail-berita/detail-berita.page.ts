import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DATA_BERITA } from '../data/konten.data';

import { IonHeader, IonButton, IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBack, calendarOutline, checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-detail-berita',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonContent,
    IonIcon,
    IonButton,
  ],
  templateUrl: './detail-berita.page.html',
  styleUrls: ['./detail-berita.page.scss'],
})
export class DetailBeritaPage {
  berita: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    addIcons({
      arrowBack,
      calendarOutline,
      checkmarkCircle,
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.berita = DATA_BERITA.find((item) => item.id === id);
  }

  goBack() {
    this.location.back();
  }
}
