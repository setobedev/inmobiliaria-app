import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home'),
  },

  {
    path: 'venta',
    title: 'Vender mi inmueble',
    loadComponent: () => import('./sales/sales'),
  },
  {
    path: 'compra',
    title: 'Comprar inmueble',
    loadComponent: () => import('./buys/buys'),
  },
  {
    path: 'arriendo',
    title: 'Arriendar mi inmueble',
    loadComponent: () => import('./rent/rent'),
  },
  {
    path: 'arrendar',
    title: 'Arrendar inmueble',
    loadComponent: () => import('./renting/renting'),
  },
  {
    path: 'asesoria',
    title: 'Asesoria personalizada',
    loadComponent: () => import('./support/support'),
  },
  {
    path: 'contacto',
    title: 'Contácto',
    loadComponent: () => import('./contact/contact'),
  },
  {
    path: 'sobre-nosotros',
    title: 'Acerca de nosotros',
    loadComponent: () => import('./about-us/about-us'),
  },

  // Si queremos redirigir a la página de inicio
  { path: '**', redirectTo: '', pathMatch: 'full' },

  /**
   * * Si queremos redirigir a una página 404 personalizada
   * ! Deshabilitar la redirección a home y habilitar esta ruta
   */
  // {
  //     path: '**',
  //     loadComponent: () => import('./not-found/not-found')
  // }
];
