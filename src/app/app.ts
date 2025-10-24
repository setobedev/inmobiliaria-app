import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BreakpointsService } from './core/services/breakpoints.service';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('inmobiliaria-app');
  protected readonly breakpointsService = inject(BreakpointsService);
  protected readonly navigationService = inject(NavigationService);
}
