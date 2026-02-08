import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <article class="about-content">
        <p><i>It's a calendar app on Angular by <b><a href="https://github.com/Ktojan">Andrey Karpovich</a></b>.
          The app is desktop first and frontend-only, means doesn't keep the state.</i></p>
        <p>When picking a date in the calendar at the right, you'll see time slots for the events.
          Now you can rather:</p>
          <ul>
            <li>create new event (15min .. 2hours) on free slots or All-day ones,</li>
            <li>click any slot to edit/delete</li>
            <li>drag one and drop to reschedule it</li>
            <li>set events with time intersections</li>
          </ul>
          <p>There are some preloaded funny events for closer days.</p>
    </article>
  `,
  styles: `

    .about-content {
      font-size: large;
      color: var(--color-violet);
      font-weight: 600;
      text-align: start;
      padding: 5%;
    }
  `
})
export class AboutComponent {}
