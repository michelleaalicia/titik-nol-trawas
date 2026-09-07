import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonIcon,
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  calendarOutline,
  locationOutline,
  arrowForwardOutline,
  searchOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSearchbar,
    IonIcon,
  ],
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage {
  filterList = ['Semua', 'Minggu Ini', 'Bulan Ini'];

  selectedFilter = 'Semua';

  searchTerm = '';
  showSearch = false;

  eventList = [
    {
      id: 1,
      judul: 'Senja Akustik di Titik Nol',
      tanggal: '20 Agustus 2026',
      lokasi: 'Amfiteater Titik Nol Trawas',
      gratis: false,
      periode: 'Bulan Ini',
      gambar: 'assets/images/event/senja-akustik.jpg',
    },
    {
      id: 2,
      judul: 'Yoga Pagi di Alam',
      tanggal: '25 Agustus 2026',
      lokasi: 'Taman Ghanjaran Trawas',
      gratis: true,
      periode: 'Bulan Ini',
      gambar: 'assets/images/event/yoga-pagi.jpg',
    },
    {
      id: 3,
      judul: 'Festival Kuliner Tradisional',
      tanggal: '7 September 2026',
      lokasi: 'Alun-alun Trawas',
      gratis: false,
      periode: 'Bulan Ini',
      gambar: 'assets/images/event/festival-kuliner.jpg',
    },
  ];

  constructor() {
    addIcons({
      'calendar-outline': calendarOutline,
      'location-outline': locationOutline,
      'arrow-forward-outline': arrowForwardOutline,
      'search-outline': searchOutline,
    });
  }

  get filteredEvents() {
    const search = this.searchTerm.trim().toLowerCase();

    return this.eventList.filter((event) => {
      const cocokFilter =
        this.selectedFilter === 'Semua' ||
        event.periode === this.selectedFilter;

      const cocokSearch =
        !search ||
        event.judul.toLowerCase().includes(search) ||
        event.lokasi.toLowerCase().includes(search);

      return cocokFilter && cocokSearch;
    });
  }

  pilihFilter(filter: string) {
    this.selectedFilter = filter;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;

    if (!this.showSearch) {
      this.searchTerm = '';
    }
  }

  onSearch(event: any) {
    this.searchTerm = event.detail.value || '';
  }
}
