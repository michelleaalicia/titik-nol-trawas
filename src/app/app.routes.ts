import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/beranda',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'berita',
        loadComponent: () =>
          import('./pages/berita/berita.page').then((m) => m.BeritaPage),
      },
      {
        path: 'beranda',
        loadComponent: () =>
          import('./pages/beranda/beranda.page').then((m) => m.BerandaPage),
      },
      {
        path: 'wisata',
        loadComponent: () =>
          import('./pages/wisata/wisata.page').then((m) => m.WisataPage),
      },
      {
        path: 'event',
        loadComponent: () =>
          import('./pages/event/event.page').then((m) => m.EventPage),
      },
      {
        path: 'virtual-tour',
        loadComponent: () =>
          import('./pages/virtual-tour/virtual-tour.page').then(
            (m) => m.VirtualTourPage,
          ),
      },
      {
        path: 'info',
        loadComponent: () =>
          import('./pages/info/info.page').then((m) => m.InfoPage),
      },
      {
        path: '',
        redirectTo: 'beranda',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'detail-wisata/:id',
    loadComponent: () =>
      import('./pages/detail-wisata/detail-wisata.page').then(
        (m) => m.DetailWisataPage,
      ),
  },
  {
    path: 'detail-event/:id',
    loadComponent: () =>
      import('./pages/detail-event/detail-event.page').then(
        (m) => m.DetailEventPage,
      ),
  },
  {
    path: 'daftar-berita',
    redirectTo: 'tabs/berita',
    pathMatch: 'full',
  },
  {
    path: 'detail-berita/:id',
    loadComponent: () =>
      import('./pages/detail-berita/detail-berita.page').then(
        (m) => m.DetailBeritaPage,
      ),
  },
  { path: '**', redirectTo: 'tabs/beranda' },
];
