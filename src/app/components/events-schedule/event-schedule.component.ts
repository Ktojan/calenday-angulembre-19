import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnChanges } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPreview,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarService, DateToNumeric, timeToTimeString } from '../../shared/calendar.service';
import { IEvent } from '../../shared/interfaces';
import { map, Observable, of, Subscription, tap } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'event-schedule',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
    AsyncPipe,
    MatProgressSpinnerModule
  ],
  templateUrl: './event-schedule.component.html',
  styleUrl: './event-schedule.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventScheduleComponent implements OnChanges {
  @Input() selectedDate!: Date;
  events$: Observable<IEvent[]> = of([]);
  allDayEvents$: Observable<IEvent[]> = of([]);
  calendarService = inject(CalendarService);
  dialog = inject(MatDialog);
  hours = Array.from({ length: 24 }, (el, index) => index);
  timeSlots = Array.from({ length: 96 }, (el, index) => index); // 4 slots in each hour
  currentSub!: Subscription;
  currentSiblingShift = 0;
  isLoading = false;
  loaderSize = 20;
  updatedId = '';
  timeToTimeString = timeToTimeString;

  ngOnChanges() {
    this.events$ = this.calendarService.getEventsByDate(DateToNumeric(this.selectedDate)).pipe(
      map(events => events.filter(ev => !ev.allDay)),
      tap(events => {
        this.isLoading = false;
      })
    );
    this.allDayEvents$ = this.calendarService.getEventsByDate(DateToNumeric(this.selectedDate)).pipe(
      map(events => events.filter(ev => ev.allDay)),
    );
  }

  clickScheduleArea(slot?: IEvent | number, isEditing?: boolean) { //method for both create new and edit existing
    let modalObject;
    if(!slot) {
      modalObject = { data: { allDay: true,  date: this.selectedDate } }
    } else {
      modalObject = isEditing ?
        { data: slot as IEvent }
        : {
          data: {
            timeSlot: slot as number,
            date: this.selectedDate
          }
        };
    }
    //lazy-load component for modal
    import('../event-modal/event-modal.component').then(({ EventModalComponent }) => {
      this.dialog.open(EventModalComponent, modalObject as MatDialogConfig<IEvent> | undefined)
        .afterClosed().pipe(filter(Boolean))
        .subscribe(_ => this.showLoaderForUpdatedEvent(slot as IEvent));
    })
  }

  showLoaderForUpdatedEvent(event: IEvent) {
    this.updatedId = event.id;
    const slotsCount = event.timeRange?.end - event.timeRange?.start || 1;
    this.loaderSize = slotsCount < 2 ? 15 : 12 * slotsCount - 6; //15 px is minimum to see
    this.isLoading = true;
  }

  drop(event: CdkDragDrop<number[], IEvent>) {
    if (event.previousContainer.id !== event.container.id && event.container.id === 'cdk-container') {
      const sample = (event.previousContainer.data as IEvent);
      const duration = sample.timeRange?.end - sample.timeRange?.start;
      this.showLoaderForUpdatedEvent(sample as IEvent);
      this.currentSub = this.calendarService.saveEvent({
        ...event.previousContainer.data,
        timeRange: {
          start: event.currentIndex,
          end: event.currentIndex + duration,
        },
      } as IEvent).subscribe(_ => this.isLoading = false);
    }
  }

  defineStyle(event: IEvent): object {
    const slotsCount = Number(event.timeRange?.end - event.timeRange?.start) || 1;
    const elemWidth: number = !event.intersectionSiblings ? 95 :
     Math.round(95 / (1 + event.intersectionSiblings))-1;

    let rightValue;
    if(!event.intersectionSiblings) { rightValue = 'unset' }
    else {
      rightValue = this.currentSiblingShift;
      this.currentSiblingShift += elemWidth + 1;
      if (this.currentSiblingShift > 80) this.currentSiblingShift = 0; //todo
    }

    const eventStyle = {
      top: `${event.timeRange?.start * 13 - 1}px`,
      height:  `${12*slotsCount}px`,
      width: elemWidth - 1 + '%',
      right: rightValue + '%'
    }
    if(event.intersectionSiblings) eventStyle['z-index'] = 1;
    return eventStyle;
  }
  canDragEventEnter() {
    return false;
  }
}
