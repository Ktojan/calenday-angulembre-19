import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IEvent } from './shared/interfaces';
import { EventsData } from './shared/events-data';
import { provideHttpClient } from '@angular/common/http';

const mimicHTTPDelaySec = 1.2;

const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./components/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'calendar/:id',
    loadComponent: () => import('./components/calendar/calendar.component').then(
      c => c.CalendarComponent),
  },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
]

class AppData implements InMemoryDbService {
  createDb(): { events: IEvent[] } {
    return { events: EventsData.events };
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: mimicHTTPDelaySec * 1000 })
    )
  ]
};


