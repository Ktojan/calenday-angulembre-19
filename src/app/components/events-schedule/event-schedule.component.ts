import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  OnChanges, signal,
  Signal,
} from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragPreview, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarService, DateToNumeric, timeToTimeString } from '../../shared/calendar.service';
import { IEvent } from '../../shared/interfaces';
import { Observable, of, Subscription } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'event-schedule',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
    AsyncPipe
  ],
  templateUrl: './event-schedule.component.html',
  styleUrl: './event-schedule.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventScheduleComponent implements OnChanges {
  @Input() selectedDate: Date = new Date();
  calendarService = inject(CalendarService);
  events$ = toSignal(this.calendarService.getEventsByDate(DateToNumeric(this.selectedDate)));
  dialog = inject(MatDialog);
  hours = Array.from({ length: 24 }, (el, index) => index);
  timeSlots = Array.from({ length: 96 }, (el, index) => index); // 4 slots in each hour
  currentSub!: Subscription;
  currentSiblingShift = 0;
  timeToTimeString = timeToTimeString;

  ngOnChanges() {
    // this.events$ = toSignal(this.calendarService.getEventsByDate(DateToNumeric(this.selectedDate)));
  }

  clickScheduleArea(target: IEvent | number, isEditing?: boolean) { //method for both create new and edit existing
    const modalObject = isEditing ?
      { data: target as IEvent }
      : {
        data: {
          timeSlot: target as number,
          date: this.selectedDate
        }
      }; //lazy-load component for modal
    import('../event-modal/event-modal.component').then(({ EventModalComponent }) => {
      this.dialog.open(EventModalComponent, modalObject as MatDialogConfig<IEvent> | undefined);
    })
  }

  drop(event: CdkDragDrop<number[], IEvent>) {
    if (event.previousContainer.id !== event.container.id && event.container.id === 'cdk-container') {
      const sample = (event.previousContainer.data as IEvent);
      const duration = sample.timeRange.end - sample.timeRange.start;
      this.currentSub = this.calendarService.saveEvent({
        ...event.previousContainer.data,
        timeRange: {
          start: event.currentIndex,
          end: event.currentIndex + duration,
        },
      } as IEvent).subscribe()
    }
  }

  defineStyle(event: IEvent): object {
    const slotsCount = Number(event.timeRange.end - event.timeRange.start) || 1;
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
      top: `${event.timeRange.start * 13 - 1}px`,
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
