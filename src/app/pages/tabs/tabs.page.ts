import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  home,
  mapOutline,
  calendarOutline,
  newspaperOutline,
  scanOutline,
  informationCircleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  ],
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
  constructor() {
    addIcons({
      home,
      mapOutline,
      calendarOutline,
      newspaperOutline,
      scanOutline,
      informationCircleOutline,
    });
  }
}
