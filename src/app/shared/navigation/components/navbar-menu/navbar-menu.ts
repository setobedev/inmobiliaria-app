import {
  Component,
  computed,
  effect,
  inject,
  Input,
  input,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../../../core/services/navigation.service';
import { MenuSales } from '../menus/menu-sales/menu-sales';
import { MenuBuys } from '../menus/menu-buys/menu-buys';
import { MenuRent } from '../menus/menu-rent/menu-rent';
import { MenuRenting } from '../menus/menu-renting/menu-renting';
import { MenuSupport } from '../menus/menu-support/menu-support';
import { MenuContact } from '../menus/menu-contact/menu-contact';
import { MenuAboutUs } from '../menus/menu-about-us/menu-about-us';
import { NavbarSubmenu } from '../navbar-submenu/navbar-submenu';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { BreakpointsService } from '../../../../core/services/breakpoints.service';

const IMPORTS_COMMON = [NgClass];
const IMPORTS_ROUTER = [RouterLink, RouterLinkActive];
const IMPORTS_MAT = [MatToolbarModule, MatIconModule, MatButtonModule];
const IMPORTS_COMPONENTS = [
  MenuSales,
  MenuBuys,
  MenuRent,
  MenuRenting,
  MenuSupport,
  MenuContact,
  MenuAboutUs,
  NavbarSubmenu,
];

@Component({
  selector: 'app-navbar-menu',
  imports: [...IMPORTS_COMMON, ...IMPORTS_ROUTER, ...IMPORTS_COMPONENTS, ...IMPORTS_MAT],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.scss',
})
export class NavbarMenu {
  @Input({ required: true }) sidenavLeft!: MatSidenav;
  @Input({ required: true }) sidenavRight!: MatSidenav;

  @ViewChild('menuSales') menuSales!: TemplateRef<any>;
  @ViewChild('menuBuys') menuBuys!: TemplateRef<any>;
  @ViewChild('menuRent') menuRent!: TemplateRef<any>;
  @ViewChild('menuRenting') menuRenting!: TemplateRef<any>;
  @ViewChild('menuSupport') menuSupport!: TemplateRef<any>;
  @ViewChild('menuContact') menuContact!: TemplateRef<any>;
  @ViewChild('menuAboutUs') menuAboutUs!: TemplateRef<any>;

  breakpointsService = inject(BreakpointsService);

  navbarItems = [
    {
      label: 'Vender',
      route: '/venta',
      ariaLabel: 'Vender una propiedad',
    },
    {
      label: 'Comprar',
      route: '/compra',
      ariaLabel: 'Comprar una propiedad',
    },
    {
      label: 'Arriendo',
      route: '/arriendo',
      ariaLabel: 'Buscar propiedades en arriendo',
    },
    {
      label: 'Arrendar',
      route: '/arrendar',
      ariaLabel: 'Poner una propiedad en arriendo',
    },
    {
      label: 'Asesoria',
      route: '/asesoria',
      ariaLabel: 'Obtener asesoría inmobiliaria',
    },
    {
      label: 'Contáctanos',
      route: '/contacto',
      ariaLabel: 'Contactar con nosotros',
    },
    {
      label: 'Sobre-nosotros',
      route: '/sobre-nosotros',
      ariaLabel: 'Información sobre nuestra empresa',
    },
  ];

  service = inject(NavigationService);

  currentTemplate = signal<string>('');
  _currentTemplate = computed(() => {
    switch (this.currentTemplate()) {
      case '/venta':
        return this.menuSales;
      case '/compra':
        return this.menuBuys;
      case '/arriendo':
        return this.menuRent;
      case '/arrendar':
        return this.menuRenting;
      case '/asesoria':
        return this.menuSupport;
      case '/contacto':
        return this.menuContact;
      case '/sobre-nosotros':
        return this.menuAboutUs;
      default:
        return null;
    }
  });
}
