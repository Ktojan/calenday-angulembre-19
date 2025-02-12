import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  template: `
  <mat-card appearance="outlined">
    <mat-card-content style="font-size: large;">
        <p><i>It's a calendar SPA on Angular 19 written in 2025 by <b><a href="https://github.com/Ktojan">Andrey Karpovich</a></b>.
          The app is desktop first and frontend-only, means doesn't keep the state.</i></p>
        <p>When picking a date in the calendar at the right, you'll see time slots for the events.
          Now you can rather:</p>
          <ul>
            <li>create new event (15min .. 2hours) on free slots (15 min each),</li>
            <li>click any slot to edit/delete</li>
            <li>drag one and drop to reschedule it</li>
            <li>set few events in parallel (with time intersections)</li>
          </ul>
          <p>There should be (if no errors - I'm not the Alphabet) some preloaded events for your current day</p>
    </mat-card-content>
  </mat-card>
  `
})
export class AboutComponent {}
