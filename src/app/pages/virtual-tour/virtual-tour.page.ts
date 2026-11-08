import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonHeader, IonToolbar, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-virtual-tour',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonContent],
  templateUrl: './virtual-tour.page.html',
  styleUrls: ['./virtual-tour.page.scss'],
})
export class VirtualTourPage {
  panoramaUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.panoramaUrl = this.createPanoramaUrl();
  }

  private createPanoramaUrl(): SafeResourceUrl {
    const viewerUrl =
      'https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg&autoLoad=true';

    return this.sanitizer.bypassSecurityTrustResourceUrl(viewerUrl);
  }
}
