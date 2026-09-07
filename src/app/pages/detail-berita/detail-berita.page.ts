import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack, calendarOutline, checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-detail-berita',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonIcon,
  ],
  templateUrl: './detail-berita.page.html',
  styleUrls: ['./detail-berita.page.scss'],
})
export class DetailBeritaPage {
  berita: any;

  beritaList = [
    {
      id: 1,
      kategori: 'Event Budaya',
      tanggal: '5 Agustus 2026',
      judul: 'Trawas Culture Fest 2026 Kembali Digelar',
      penulis: 'Tim Titik Nol Trawas',
      penulisInisial: 'T',
      waktuBaca: '5 menit membaca',
      cover: 'assets/images/berita/culture-fest-cover.jpg',
      paragraf1:
        'Trawas, sebuah permata tersembunyi di lereng Gunung Penanggungan, bersiap kembali menyambut ribuan pengunjung dalam gelaran tahunan "Trawas Culture Fest 2026". Festival yang telah menjadi ikon pariwisata budaya di kawasan ini menjanjikan pengalaman yang lebih meriah dan mendalam dibandingkan tahun-tahun sebelumnya.',
      subjudul: 'Merayakan Warisan, Menyambut Masa Depan',
      paragraf2:
        'Mengusung tema "Harmoni Alam dan Tradisi", festival tahun ini tidak hanya fokus pada pertunjukan seni tradisional, tetapi juga mengintegrasikan kesadaran lingkungan. Berbagai komunitas lokal, pengrajin, dan seniman akan berkolaborasi menyajikan pameran yang menonjolkan kekayaan budaya Majapahit yang masih lestari di Trawas.',
      quote:
        'Kami ingin Trawas Culture Fest bukan sekadar tontonan, tapi juga ruang edukasi bagi generasi muda untuk mencintai budaya dan merawat alam sekitar. - Ketua Panitia TCF 2026.',
      pengantarList:
        'Pengunjung dapat menantikan ragam acara unggulan seperti:',
      list: [
        {
          judul: 'Pawai Budaya Nusantara',
          deskripsi:
            'Menampilkan kostum dan tarian dari berbagai daerah yang selaras dengan kearifan lokal.',
        },
        {
          judul: 'Bazar Kuliner Tradisional',
          deskripsi:
            'Jelajahi rasa otentik jajanan pasar dan hidangan khas Trawas.',
        },
        {
          judul: 'Workshop Kriya',
          deskripsi:
            'Belajar langsung membuat kerajinan bambu dan batik ciprat dari para ahlinya.',
        },
      ],
      penutup:
        'Jangan lewatkan kesempatan untuk menjadi bagian dari perayaan budaya terbesar di Trawas. Siapkan agenda Anda dan mari bersama-sama merayakan pesona alam dan tradisi di Trawas Culture Fest 2026!',
    },

    {
      id: 2,
      kategori: 'Kuliner & Lifestyle',
      tanggal: '1 Agustus 2026',
      judul: '5 Rekomendasi Spot Nongkrong Baru di Kaki Gunung Arjuno',
      penulis: 'Tim Titik Nol Trawas',
      penulisInisial: 'T',
      waktuBaca: '4 menit membaca',
      cover: 'assets/images/berita/cafe-baru.jpg',
      paragraf1:
        'Trawas tidak hanya menawarkan keindahan alam dan udara pegunungan yang sejuk. Dalam beberapa waktu terakhir, semakin banyak tempat nongkrong baru bermunculan dengan konsep unik yang memadukan suasana alam, kuliner, dan pemandangan pegunungan.',
      subjudul: 'Nongkrong dengan Pemandangan Pegunungan',
      paragraf2:
        'Berbagai kafe dan tempat santai di kawasan Trawas hadir dengan konsep yang berbeda-beda. Mulai dari tempat dengan desain minimalis, area outdoor yang menghadap pegunungan, hingga tempat yang cocok untuk menikmati kopi sambil melihat matahari terbenam.',
      quote:
        'Suasana Trawas memang berbeda. Duduk santai sambil menikmati kopi dengan udara sejuk membuat waktu terasa lebih tenang. - Pengunjung salah satu kafe di Trawas.',
      pengantarList:
        'Berikut beberapa hal yang bisa kamu cari saat memilih tempat nongkrong di Trawas:',
      list: [
        {
          judul: 'Pemandangan Alam',
          deskripsi:
            'Pilih tempat dengan area outdoor agar bisa menikmati panorama pegunungan dan suasana hijau Trawas.',
        },
        {
          judul: 'Menu Lokal',
          deskripsi:
            'Selain kopi dan makanan kekinian, beberapa tempat juga menawarkan kuliner khas yang menarik untuk dicoba.',
        },
        {
          judul: 'Spot Foto',
          deskripsi:
            'Banyak tempat baru menyediakan area foto yang menarik dan cocok untuk mengabadikan momen bersama teman.',
        },
      ],
      penutup:
        'Jadi, kalau kamu sedang berkunjung ke Trawas dan ingin mencari tempat untuk bersantai, tidak ada salahnya mencoba berbagai spot nongkrong baru yang ada di kawasan kaki Gunung Arjuno.',
    },

    {
      id: 3,
      kategori: 'Lingkungan',
      tanggal: '25 Juli 2026',
      judul: 'Program Penghijauan Kawasan Wisata Selesai Tahap Pertama',
      penulis: 'Tim Titik Nol Trawas',
      penulisInisial: 'T',
      waktuBaca: '4 menit membaca',
      cover: 'assets/images/berita/penghijauan.jpg',
      paragraf1:
        'Upaya menjaga kelestarian lingkungan di kawasan wisata Trawas terus dilakukan. Program penghijauan yang melibatkan komunitas lokal, pengelola wisata, dan masyarakat sekitar telah menyelesaikan tahap pertamanya dengan penanaman ratusan bibit pohon.',
      subjudul: 'Bersama Menjaga Alam Trawas',
      paragraf2:
        'Program ini menjadi salah satu langkah untuk menjaga kawasan wisata agar tetap hijau dan nyaman bagi masyarakat maupun wisatawan. Selain melakukan penanaman pohon, kegiatan ini juga diisi dengan edukasi mengenai pentingnya menjaga kebersihan dan kelestarian lingkungan.',
      quote:
        'Wisata yang baik bukan hanya tentang tempat yang indah, tetapi juga bagaimana kita menjaga tempat tersebut agar tetap indah untuk generasi berikutnya.',
      pengantarList:
        'Beberapa kegiatan yang dilakukan dalam program penghijauan ini antara lain:',
      list: [
        {
          judul: 'Penanaman Bibit Pohon',
          deskripsi:
            'Ratusan bibit pohon ditanam di beberapa titik kawasan wisata dan ruang terbuka yang membutuhkan penghijauan.',
        },
        {
          judul: 'Edukasi Lingkungan',
          deskripsi:
            'Masyarakat dan pengunjung diberikan pemahaman mengenai pentingnya menjaga lingkungan kawasan wisata.',
        },
        {
          judul: 'Aksi Bersih Kawasan',
          deskripsi:
            'Kegiatan dilengkapi dengan aksi membersihkan area wisata dari sampah untuk menciptakan lingkungan yang lebih nyaman.',
        },
      ],
      penutup:
        'Program penghijauan ini diharapkan dapat terus berlanjut ke tahap berikutnya sehingga kawasan Trawas tetap menjadi destinasi wisata yang asri, nyaman, dan berkelanjutan.',
    },
  ];

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

    this.berita =
      this.beritaList.find((item) => item.id === id) || this.beritaList[0];
  }

  goBack() {
    this.location.back();
  }
}
