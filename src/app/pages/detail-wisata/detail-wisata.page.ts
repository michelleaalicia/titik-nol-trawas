import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { IonContent, IonButton, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  arrowBack,
  star,
  pricetagOutline,
  timeOutline,
  locationOutline,
  carOutline,
  waterOutline,
  restaurantOutline,
  homeOutline,
  triangleOutline,
  cameraOutline,
  mapOutline,
  imagesOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-detail-wisata',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton, IonIcon],
  templateUrl: './detail-wisata.page.html',
  styleUrls: ['./detail-wisata.page.scss'],
})
export class DetailWisataPage {
  wisata: any;

  wisataList = [
    {
      id: 1,
      nama: 'Air Terjun Dlundung',
      rating: 4.8,
      kategori: 'Alam',
      harga: 'Rp 15.000 / orang',
      jamBuka: '07:00 - 16:00 WIB',
      alamat: 'Ketapanrame, Trawas, Mojokerto, Jawa Timur 61375',
      deskripsi:
        'Air Terjun Dlundung menawarkan pesona keindahan alam pegunungan yang asri dan udara sejuk khas Trawas. Dengan ketinggian sekitar 14 meter, aliran airnya tidak terlalu deras sehingga aman bagi pengunjung untuk bermain air di bawahnya. Dikelilingi hutan pinus yang rimbun, area ini sangat cocok untuk melepas penat dan menikmati ketenangan alam bersama keluarga.',
      gambarUtama: 'assets/images/wisata/dlundung.jpg',
      galeri: [
        'assets/images/wisata/dlundung.jpg',
        'assets/images/wisata/dlundung.jpg',
        'assets/images/wisata/dlundung.jpg',
      ],
      jumlahFotoLain: 5,
      fasilitas: [
        { icon: 'car-outline', label: 'Area Parkir' },
        { icon: 'water-outline', label: 'Toilet' },
        { icon: 'restaurant-outline', label: 'Warung Makan' },
        { icon: 'home-outline', label: 'Mushola' },
        { icon: 'triangle-outline', label: 'Area Camping' },
      ],
    },
    {
      id: 2,
      nama: 'Candi Jolotundo',
      rating: 4.6,
      kategori: 'Sejarah',
      harga: 'Rp 10.000 / orang',
      jamBuka: '24 Jam',
      alamat: 'Seloliman, Trawas, Mojokerto, Jawa Timur',
      deskripsi:
        'Candi Jolotundo merupakan situs bersejarah peninggalan Kerajaan Kahuripan yang berada di kawasan pegunungan Trawas. Tempat ini dikenal dengan sumber mata airnya yang jernih serta suasana alam yang tenang. Pengunjung dapat menikmati perpaduan antara peninggalan sejarah, udara sejuk, dan lingkungan hijau yang asri.',
      gambarUtama: 'assets/images/wisata/jolotundo.jpg',
      galeri: [
        'assets/images/wisata/jolotundo.jpg',
        'assets/images/destinasi/destinasi-2.jpg',
        'assets/images/wisata/jolotundo.jpg',
      ],
      jumlahFotoLain: 3,
      fasilitas: [
        { icon: 'car-outline', label: 'Area Parkir' },
        { icon: 'water-outline', label: 'Sumber Air' },
        { icon: 'restaurant-outline', label: 'Warung Makan' },
        { icon: 'home-outline', label: 'Mushola' },
      ],
    },
    {
      id: 3,
      nama: 'Bumi Perkemahan Trawas',
      rating: 4.7,
      kategori: 'Camping',
      harga: 'Mulai Rp 50.000 / malam',
      jamBuka: '24 Jam',
      alamat: 'Kawasan Trawas, Mojokerto, Jawa Timur',
      deskripsi:
        'Bumi Perkemahan Trawas menjadi pilihan bagi pengunjung yang ingin menikmati suasana alam dengan pengalaman camping yang nyaman. Area perkemahan menawarkan udara sejuk, pemandangan hijau, dan panorama Gunung Penanggungan yang cocok untuk kegiatan bersama keluarga maupun teman.',
      gambarUtama: 'assets/images/wisata/bumi-perkemahan.jpg',
      galeri: [
        'assets/images/wisata/bumi-perkemahan.jpg',
        'assets/images/wisata/bumi-perkemahan.jpg',
        'assets/images/wisata/bumi-perkemahan.jpg',
      ],
      jumlahFotoLain: 3,
      fasilitas: [
        { icon: 'car-outline', label: 'Area Parkir' },
        { icon: 'water-outline', label: 'Toilet' },
        { icon: 'restaurant-outline', label: 'Warung Makan' },
        { icon: 'triangle-outline', label: 'Area Camping' },
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    addIcons({
      'arrow-back': arrowBack,
      star,
      'pricetag-outline': pricetagOutline,
      'time-outline': timeOutline,
      'location-outline': locationOutline,
      'car-outline': carOutline,
      'water-outline': waterOutline,
      'restaurant-outline': restaurantOutline,
      'home-outline': homeOutline,
      'triangle-outline': triangleOutline,
      'camera-outline': cameraOutline,
      'map-outline': mapOutline,
      'images-outline': imagesOutline,
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.wisata =
      this.wisataList.find((item) => item.id === id) || this.wisataList[0];
  }

  goBack() {
    this.location.back();
  }

  bukaGaleri() {
    console.log('Galeri:', this.wisata.nama);
  }

  bukaMaps() {
    console.log('Buka lokasi:', this.wisata.alamat);
  }
}
