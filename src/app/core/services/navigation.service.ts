import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  showSubmenu = signal(false);
  showNavigation = signal(true);

  showMenu() {
    this.showSubmenu.set(true);
  }

  hideMenu() {
    this.showSubmenu.set(false);
  }
}
