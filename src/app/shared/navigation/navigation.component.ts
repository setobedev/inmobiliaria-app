import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavbarMenu } from './components/navbar-menu/navbar-menu';
import { NavigationService } from '../../core/services/navigation.service';
import { BreakpointsService } from '../../core/services/breakpoints.service';
import { Header } from "../../layout/header/header";
import { Footer } from "../../layout/footer/footer";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NavbarMenu,
    Header,
    Footer
],
})
export class NavigationComponent {

  showNavigation = input<boolean>(true);

  service = inject(NavigationService);
  
  breakpointsService = inject(BreakpointsService);

  hoverMatToolbar = signal(false);
}
