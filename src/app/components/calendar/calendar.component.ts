import {CommonModule, DatePipe} from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EventScheduleComponent } from '../events-schedule/event-schedule.component';
import { ActivatedRoute } from '@angular/router';
import { MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatCardModule,
    EventScheduleComponent,
    MatProgressBarModule,
    DatePipe,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  selectedDate: Date | null = null;
  route = inject(ActivatedRoute);
  currentRouteParams$ = this.route.params;
  motivImageNumber: number = getRandomInt(4);

  constructor() {
    this.currentRouteParams$.subscribe((numericDate: { id?: string }) => {
      if (numericDate['id']) this.selectedDate = new Date(numericDate['id']);
    });
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
