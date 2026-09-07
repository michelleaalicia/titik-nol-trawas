import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonHeader, IonToolbar, IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  storefrontOutline,
  timeOutline,
  callOutline,
  logoInstagram,
  helpCircleOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonContent, IonIcon],
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {
  constructor() {
    addIcons({
      'storefront-outline': storefrontOutline,
      'time-outline': timeOutline,
      'call-outline': callOutline,
      'logo-instagram': logoInstagram,
      'help-circle-outline': helpCircleOutline,
      'chevron-forward-outline': chevronForwardOutline,
    });
  }
}
