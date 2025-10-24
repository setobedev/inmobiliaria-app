import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavbarMenu } from './components/navbar-menu/navbar-menu';
import { NavigationService } from './navigation.service';
import { BreakpointsService } from '../../core/services/breakpoints.service';

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
  ],
})
export class NavigationComponent {
  service = inject(NavigationService);
  
  breakpointsService = inject(BreakpointsService);

  hoverMatToolbar = signal(false);
}
