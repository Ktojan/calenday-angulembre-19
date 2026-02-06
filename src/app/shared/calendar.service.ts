import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, switchMap, tap } from 'rxjs';
import { v4 } from 'uuid';
import { IEvent } from './interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const eventsUrl = 'api/events/';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private http = inject(HttpClient);

  eventsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  events$: Observable<IEvent[]> = this.eventsSubject.pipe(  // to easy control get sub with subject
    switchMap(() => this.http.get<IEvent[]>(eventsUrl))
  )
  startPoints = {};

  getEventsByDate(requestedDate: string): Observable<IEvent[]> {
    return this.eventsSubject.pipe(switchMap(() =>
      this.http.get<IEvent[]>(eventsUrl).pipe(
        map((events: IEvent[]) => events.filter(ev =>
          (ev.date as string).slice(0, 10) === requestedDate)
        ),
        tap((events: IEvent[]) => {if(events && events.length > 0) this.recalculateStartPoints(events)}),
        map((events: IEvent[]) => events.map(ev => ({...ev, intersectionSiblings: this.startPoints[ev.timeRange?.start]-1 || 0}) )),
      ))
    )
  }

  private recalculateStartPoints(events: IEvent[] ) {
    const starts = events.map((ev:IEvent) => ev.timeRange?.start);
    this.startPoints = starts.reduce((acc, current) => {
      if (acc[current]) acc[current] = acc[current]+1; else acc[current] = 1;
      return acc;
    }, {});
  }

  saveEvent(event: IEvent): Observable<IEvent[]> {
    if (event.id) { // Update existing when edit from modal or drag-n-drop
      return this.http.put<IEvent[]>(`${eventsUrl}`, { ...event }).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return EMPTY
        }),
        tap(() => {
          this.eventsSubject.next(this.eventsSubject.value + 1); //trick to update getEventsByDate
        })
      );
    } else {  //Create new event
      return this.http.post<IEvent[]>(`${eventsUrl}`, { ...event, id: v4() }).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return EMPTY
        }),
        tap(() => {
          this.eventsSubject.next(this.eventsSubject.value + 1);
        })
      );
    }
  }

  removeEvent(id: string) {
    return this.http.delete<IEvent[]>(eventsUrl + id).pipe(
      tap(() => this.eventsSubject.next(this.eventsSubject.value + 1))
    );
}

}

export function DateToNumeric(inputDate: Date | string): string {
  const dRaw = inputDate.toLocaleString('en-GB');
  const dayFirstDate = dRaw.slice(0, dRaw.indexOf(','));
  return dayFirstDate.split('/').reverse().join('-'); //transform 17/02/2025 format to needed 2025-02-17
}

export function NumericToDate(numeric: string): Date {
  return new Date(numeric); //transform 2025-02-17 to Mon Feb 17 2025 02:00:00 GMT
}

export function timeToTimeString(hour: number, minute: number) {
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new Error('Invalid hour or minute value');
  }

  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinute = minute.toString().padStart(2, '0');

  return `${formattedHour} : ${formattedMinute}`;
}

export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}


