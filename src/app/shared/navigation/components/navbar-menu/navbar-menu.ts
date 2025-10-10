import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-navbar-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.scss',
})
export class NavbarMenu {

  service = inject(NavigationService);
}
