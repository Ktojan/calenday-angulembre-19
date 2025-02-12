import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateToNumeric } from './shared/calendar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatDatepickerModule,  MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
    selectedDate: Date | null = null;
    router = inject(Router);

    onSelect(pickedDate: Date){
      const numericDate = DateToNumeric(pickedDate); //transform 17/02/2025 format to needed 2025-02-17
      this.selectedDate= pickedDate;
      this.router.navigate(['./calendar/', numericDate])
    }
}
