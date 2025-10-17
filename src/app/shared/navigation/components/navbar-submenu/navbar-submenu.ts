import { NgTemplateOutlet } from '@angular/common';
import { Component, effect, inject, Input, input, TemplateRef } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-navbar-submenu',
  imports: [NgTemplateOutlet],
  template: ` <ng-container *ngTemplateOutlet="template()"></ng-container> `,
})
export class NavbarSubmenu {
  @Input() salesTemplate!: TemplateRef<any>;
  @Input() buysTemplate!: TemplateRef<any>;
  @Input() rentTemplate!: TemplateRef<any>;
  @Input() rentingTemplate!: TemplateRef<any>;
  @Input() supportTemplate!: TemplateRef<any>;
  @Input() contactTemplate!: TemplateRef<any>;
  @Input() aboutUsTemplate!: TemplateRef<any>;

  route = input<string>('');

  service = inject(NavigationService);

  template = input<TemplateRef<any> | null>(null);

  currentTemplate!: TemplateRef<any>;

  constructor() {
    effect(() => {
      switch (this.route()) {
        case '/venta':
          this.currentTemplate = this.salesTemplate;
          break;
        case '/compra':
          this.currentTemplate = this.buysTemplate;
          break;
        case '/arriendo':
          this.currentTemplate = this.rentTemplate;
          break;
        case '/arrendar':
          this.currentTemplate = this.rentingTemplate;
          break;
        case '/asesoria':
          this.currentTemplate = this.supportTemplate;
          break;
        case '/contacto':
          this.currentTemplate = this.contactTemplate;
          break;
        case '/sobre-nosotros':
          this.currentTemplate = this.aboutUsTemplate;
          break;
      }
    });
  }
}
