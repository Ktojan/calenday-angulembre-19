import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EventScheduleComponent } from '../events-schedule/event-schedule.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatCardModule,
    EventScheduleComponent,
    DatePipe
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  selectedDate: Date | null = null;
  route = inject(ActivatedRoute);
  currentRouteParams$ = this.route.params;

  ngOnInit() {
    this.currentRouteParams$.subscribe((numericDate: { id?: string }) => {
      if (numericDate['id']) this.selectedDate = new Date(numericDate['id'])
    });
  }
}
