import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor() {}

  show = signal(false);

  showMenu() {
    this.show.set(true);
  }

  hideMenu() {
    this.show.set(false);
  }

}
