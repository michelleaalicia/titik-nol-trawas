import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DATA_EVENT } from '../data/konten.data';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonModal,
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  calendarOutline,
  locationOutline,
  pricetagOutline,
  chevronDownOutline,
  closeOutline,
  checkmarkCircle,
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
    IonButton,
    IonModal,
  ],
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage {
  searchTerm = '';

  selectedKategori = 'semua';
  selectedHarga = 'semua';
  selectedWaktu = 'semua';

  panelTerbuka = false;
  jenisFilter = 'kategori';

  hargaList = [
    {
      id: 'semua',
      label: 'Semua harga',
      min: 0,
      max: Infinity,
    },
    {
      id: 'gratis',
      label: 'Gratis',
      min: 0,
      max: 0,
    },
    {
      id: 'dibawah10',
      label: 'Di bawah Rp10.000',
      min: 1,
      max: 9999,
    },
    {
      id: '10-20',
      label: 'Rp10.000 - <Rp20.000',
      min: 10000,
      max: 19999,
    },
    {
      id: '20-25',
      label: 'Rp20.000 - <Rp25.000',
      min: 20000,
      max: 24999,
    },
    {
      id: '25-30',
      label: 'Rp25.000 - <Rp30.000',
      min: 25000,
      max: 29999,
    },
    {
      id: '30-40',
      label: 'Rp30.000 - <Rp40.000',
      min: 30000,
      max: 39999,
    },
    {
      id: '40-50',
      label: 'Rp40.000 - Rp50.000',
      min: 40000,
      max: 50000,
    },
    {
      id: 'diatas50',
      label: 'Di atas Rp50.000',
      min: 50001,
      max: Infinity,
    },
  ];

  waktuList = [
    { id: 'semua', label: 'Semua tanggal' },
    { id: 'hari', label: 'Hari ini' },
    { id: 'minggu', label: 'Minggu ini' },
    { id: 'bulan', label: 'Bulan ini' },
  ];

  kategoriList = [
    { id: 'semua', label: 'Semua kategori' },
    { id: 'Kuliner', label: 'Kuliner' },
    { id: 'Budaya', label: 'Budaya' },
    { id: 'Kesehatan', label: 'Kesehatan' },
    { id: 'Lingkungan', label: 'Lingkungan' },
  ];

  eventList = DATA_EVENT;

  constructor() {
    addIcons({
      calendarOutline,
      locationOutline,
      pricetagOutline,
      chevronDownOutline,
      closeOutline,
      checkmarkCircle,
    });
  }

  get labelHarga() {
    const pilihan = this.hargaList.find(
      (item) => item.id === this.selectedHarga,
    );

    return pilihan?.label || '';
  }

  get labelWaktu() {
    const pilihan = this.waktuList.find(
      (item) => item.id === this.selectedWaktu,
    );

    return pilihan?.label || '';
  }

  get adaFilter() {
    return (
      this.selectedKategori !== 'semua' ||
      this.selectedHarga !== 'semua' ||
      this.selectedWaktu !== 'semua'
    );
  }

  get judulPanel() {
    if (this.jenisFilter === 'harga') {
      return 'Harga tiket';
    }

    if (this.jenisFilter === 'waktu') {
      return 'Waktu event';
    }

    return 'Kategori event';
  }

  get pilihanPanel() {
    if (this.jenisFilter === 'harga') {
      return this.hargaList;
    }

    if (this.jenisFilter === 'waktu') {
      return this.waktuList;
    }

    return this.kategoriList;
  }

  get nilaiPanel() {
    if (this.jenisFilter === 'harga') {
      return this.selectedHarga;
    }

    if (this.jenisFilter === 'waktu') {
      return this.selectedWaktu;
    }

    return this.selectedKategori;
  }

  get filteredEvents() {
    const keyword = this.searchTerm.trim().toLowerCase();

    const harga =
      this.hargaList.find((item) => item.id === this.selectedHarga) ||
      this.hargaList[0];

    const hariIni = this.tanggalHariIni();

    return this.eventList.filter((event) => {
      const cocokNama = event.judul.toLowerCase().includes(keyword);

      const cocokKategori =
        this.selectedKategori === 'semua' ||
        event.kategori === this.selectedKategori;

      const cocokHarga = event.harga >= harga.min && event.harga <= harga.max;

      const cocokWaktu = this.sesuaiWaktu(event.tanggalISO, hariIni);

      return cocokNama && cocokKategori && cocokHarga && cocokWaktu;
    });
  }

  tanggalHariIni() {
    return new Intl.DateTimeFormat('sv-SE', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
  }

  sesuaiWaktu(tanggal: string, hariIni: string) {
    if (this.selectedWaktu === 'semua') {
      return true;
    }

    if (!tanggal) return false;

    if (this.selectedWaktu === 'hari') {
      return tanggal === hariIni;
    }

    if (this.selectedWaktu === 'bulan') {
      return tanggal.slice(0, 7) === hariIni.slice(0, 7);
    }

    const senin = new Date(hariIni + 'T00:00:00Z');
    const selisih = (senin.getUTCDay() + 6) % 7;

    senin.setUTCDate(senin.getUTCDate() - selisih);

    const seninBerikutnya = new Date(senin.getTime());
    seninBerikutnya.setUTCDate(seninBerikutnya.getUTCDate() + 7);

    const awal = senin.toISOString().slice(0, 10);
    const akhir = seninBerikutnya.toISOString().slice(0, 10);

    return tanggal >= awal && tanggal < akhir;
  }

  formatHarga(harga: number) {
    return 'Rp' + harga.toLocaleString('id-ID');
  }

  bukaFilter(jenis: string) {
    this.jenisFilter = jenis;
    this.panelTerbuka = true;
  }

  pilihFilter(nilai: string) {
    if (this.jenisFilter === 'kategori') {
      this.selectedKategori = nilai;
    }

    if (this.jenisFilter === 'harga') {
      this.selectedHarga = nilai;
    }

    if (this.jenisFilter === 'waktu') {
      this.selectedWaktu = nilai;
    }

    this.panelTerbuka = false;
  }

  resetFilter() {
    this.selectedKategori = 'semua';
    this.selectedHarga = 'semua';
    this.selectedWaktu = 'semua';
  }

  resetSemua() {
    this.searchTerm = '';
    this.resetFilter();
  }
}
