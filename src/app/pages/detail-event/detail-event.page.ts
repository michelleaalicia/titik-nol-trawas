import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { IonContent, IonButton, IonIcon } from '@ionic/angular';

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
  imports: [CommonModule, RouterLink, IonContent, IonButton, IonIcon],
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})
export class DetailEventPage {
  event: any;

  eventList = [
    {
      id: 1,
      judul: 'Senja Akustik di Titik Nol',
      kategori: 'Live Music',
      tanggal: 'Kamis, 20 Agustus 2026',
      jam: '15:00 - 21:00 WIB',
      lokasi: 'Amfiteater Titik Nol Trawas',
      alamat: 'Jl. Raya Trawas KM 0, Mojokerto',
      gambar: 'assets/images/event/senja-akustik.jpg',
      icon: 'musical-notes-outline',
      deskripsi:
        'Nikmati suasana sore yang syahdu di Titik Nol Trawas dengan iringan musik akustik dari musisi lokal berbakat. Acara ini dirancang untuk memberikan pengalaman bersantai yang menyatu dengan alam, sembari menikmati panorama matahari terbenam dengan latar belakang Gunung Welirang.',
      catatan:
        'Tersedia berbagai stand kuliner khas Trawas dan area api unggun untuk menghangatkan malam Anda. Jangan lupa bawa jaket tebal!',
      rundown: [
        {
          waktu: '15:00',
          kegiatan: 'Open Gate & Registrasi Ulang',
        },
        {
          waktu: '16:30',
          kegiatan: 'Penampilan Akustik Sesi 1 (Senja)',
        },
        {
          waktu: '18:00',
          kegiatan: 'Break & Menikmati Kuliner',
        },
        {
          waktu: '19:00',
          kegiatan: 'Penampilan Utama & Api Unggun',
        },
      ],
    },
    {
      id: 2,
      judul: 'Yoga Pagi di Alam',
      kategori: 'Wellness',
      tanggal: 'Selasa, 25 Agustus 2026',
      jam: '06:00 - 09:00 WIB',
      lokasi: 'Taman Ghanjaran Trawas',
      alamat: 'Jl. Raya Trawas, Mojokerto',
      gambar: 'assets/images/event/yoga-pagi.jpg',
      icon: 'leaf-outline',
      deskripsi:
        'Awali pagi dengan sesi yoga santai di tengah suasana alam Trawas. Kegiatan ini cocok untuk kamu yang ingin melepas penat sekaligus menikmati udara segar dan pemandangan hijau pegunungan.',
      catatan:
        'Peserta disarankan membawa matras yoga, air minum, dan menggunakan pakaian yang nyaman untuk bergerak.',
      rundown: [
        {
          waktu: '06:00',
          kegiatan: 'Registrasi Peserta',
        },
        {
          waktu: '06:30',
          kegiatan: 'Pemanasan & Perkenalan',
        },
        {
          waktu: '07:00',
          kegiatan: 'Sesi Yoga Pagi',
        },
        {
          waktu: '08:30',
          kegiatan: 'Relaksasi & Foto Bersama',
        },
      ],
    },
    {
      id: 3,
      judul: 'Festival Kuliner Tradisional',
      kategori: 'Kuliner',
      tanggal: 'Senin, 7 September 2026',
      jam: '10:00 - 21:00 WIB',
      lokasi: 'Alun-alun Trawas',
      alamat: 'Alun-alun Trawas, Mojokerto',
      gambar: 'assets/images/event/festival-kuliner.jpg',
      icon: 'restaurant-outline',
      deskripsi:
        'Jelajahi beragam kuliner tradisional khas Trawas dan daerah sekitarnya dalam festival kuliner yang menghadirkan berbagai makanan, jajanan pasar, serta produk UMKM lokal.',
      catatan:
        'Pengunjung dapat menikmati kuliner sambil mengikuti berbagai aktivitas dan pertunjukan yang tersedia sepanjang acara.',
      rundown: [
        {
          waktu: '10:00',
          kegiatan: 'Festival Dibuka',
        },
        {
          waktu: '12:00',
          kegiatan: 'Demo Masak Kuliner Tradisional',
        },
        {
          waktu: '15:00',
          kegiatan: 'Pertunjukan Seni Lokal',
        },
        {
          waktu: '19:00',
          kegiatan: 'Panggung Hiburan & Kuliner Malam',
        },
      ],
    },
  ];

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

    this.event =
      this.eventList.find((item) => item.id === id) || this.eventList[0];
  }

  goBack() {
    this.location.back();
  }

  lihatLokasi() {
    const query = encodeURIComponent(
      `${this.event.lokasi}, ${this.event.alamat}`,
    );

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      '_blank',
    );
  }
}
