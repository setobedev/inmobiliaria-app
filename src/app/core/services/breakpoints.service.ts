import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, shareReplay } from 'rxjs';

export type ScreenSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  // private breakpointsMap = new Map<string, ScreenSize>([
  //   [Breakpoints.XSmall, 'XSmall'], // Extra small devices - phones - width < 600px
  //   [Breakpoints.Small, 'Small'], // Small devices - tablets - width ≥ 600px
  //   [Breakpoints.Medium, 'Medium'], // Medium devices - small laptops - width ≥ 960px
  //   [Breakpoints.Large, 'Large'], // Large devices - desktops - width ≥ 1280px
  //   [Breakpoints.XLarge, 'XLarge'], // Extra large devices - large desktops - width ≥ 1920px
  // ]);

  // /** Observable con el tamaño actual de pantalla */
  // screenSize$: Observable<ScreenSize>;

  // constructor(private breakpointObserver: BreakpointObserver) {
  //   this.screenSize$ = this.breakpointObserver.observe([...this.breakpointsMap.keys()]).pipe(
  //     map((result) => {
  //       const active = Object.keys(result.breakpoints).find((key) => result.breakpoints[key]);
  //       return this.breakpointsMap.get(active ?? Breakpoints.Large)!;
  //     }),
  //     shareReplay(1)
  //   );
  // }

  // /** Método para saber si el tamaño actual es móvil */
  // isMobile$(): Observable<boolean> {
  //   return this.screenSize$.pipe(map((size) => size === 'XSmall'));
  // }

  // /** Método para saber si el tamaño actual es tablet */
  // isTablet$(): Observable<boolean> {
  //   return this.screenSize$.pipe(map((size) => size === 'Small'));
  // }

  // /** Método para saber si el tamaño actual es portatil */
  // isLaptop$(): Observable<boolean> {
  //   return this.screenSize$.pipe(map((size) => size === 'Medium'));
  // }

  // /** Método para saber si el tamaño actual es portatil */
  // isDesktop$(): Observable<boolean> {
  //   return this.screenSize$.pipe(map((size) => size === 'Large'));
  // }

  // /** Método para saber si el tamaño actual es portatil */
  // isDesktopLarge$(): Observable<boolean> {
  //   return this.screenSize$.pipe(map((size) => size === 'XLarge'));
  // }

  private breakpointObserver = inject(BreakpointObserver);

  isPhone$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map(({ matches: isPhone }) => isPhone),
    shareReplay()
  );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small).pipe(
    map(({ matches: isTablet }) => isTablet),
    shareReplay()
  );

  isLaptop$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium).pipe(
    map(({ matches: isLaptop }) => isLaptop),
    shareReplay()
  );
  isDesktop$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large).pipe(
    map(({ matches: isDesktop }) => isDesktop),
    shareReplay()
  );
  isDesktopLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XLarge).pipe(
    map(({ matches: isDesktopLarge }) => isDesktopLarge),
    shareReplay()
  );

    /** Señal con el valor de si es móvil */
  isPhone = toSignal(this.isPhone$, { initialValue: false });
  /** Señal con el valor de si es tablet */
  isTablet = toSignal(this.isTablet$, { initialValue: false });
  /** Señal con el valor de si es laptop */
  isLaptop = toSignal(this.isLaptop$, { initialValue: false });
  /** Señal con el valor de si es desktop */
  isDesktop = toSignal(this.isDesktop$, { initialValue: false });
  /** Señal con el valor de si es desktop large */
  isDesktopLarge = toSignal(this.isDesktopLarge$, { initialValue: false });

  isMobile = computed(() => this.isPhone() || this.isTablet());
}
