import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationError, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IonApp, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  readonly launching = signal(true);
  readonly launchError = signal(false);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private minimumElapsed = false;
  private pageReady = false;

  constructor() {
    // Branding delay only: this is not a simulated API request.
    const timer = setTimeout(() => {
      this.minimumElapsed = true;
      this.finishLaunch();
    }, 1400);
    this.destroyRef.onDestroy(() => clearTimeout(timer));

    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageReady = true;
        this.finishLaunch();
      } else if (event instanceof NavigationError && this.launching()) {
        this.launchError.set(true);
      }
    });
  }

  private finishLaunch() {
    if (this.minimumElapsed && this.pageReady) {
      this.launching.set(false);
    }
  }

  retryLaunch() {
    window.location.reload();
  }
}
