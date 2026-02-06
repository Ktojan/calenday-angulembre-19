import { Component, inject, Inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CalendarService } from '../../shared/calendar.service';
import { IEvent, ISlot } from '../../shared/interfaces';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-event-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    DatePipe
  ],
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class EventModalComponent implements OnInit {
  eventForm: FormGroup;
  isEditingMode = false;
  calendarService = inject(CalendarService);
  timeOptions = [
    { value: 1, label: '15 min' },
    { value: 2, label: '30 min' },
    { value: 3, label: '45 min' },
    { value: 4, label: '1 hour' },
    { value: 5, label: '1 h 15 min' },
    { value: 6, label: '1 h 30 min' },
    { value: 7, label: '1 h 45 min' },
    { value: 8, label: '2 hours' }
  ]

  constructor(
    private dialogRef: MatDialogRef<EventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEvent & ISlot )
  {
      this.eventForm = new FormGroup({
        title: new FormControl(this.data.title || '', [Validators.required]),
        duration: new FormControl(this.timeOptions[1], [Validators.required]),
        allDay: new FormControl(this.data.allDay || false)
      });
      if ((this.data as IEvent)['id']) this.isEditingMode = true; // means we open existing event
      if(this.data.allDay) return;
      if((this.data as IEvent).timeRange && (this.data as IEvent).timeRange.start>87) {
        this.timeOptions = this.timeOptions?.slice(0, 96 - (this.data as IEvent).timeRange?.start)
      } //to limit available durations at the edge of a day
      if (this.isEditingMode) {
        const dur = (this.data as IEvent).timeRange?.end - (this.data as IEvent).timeRange?.start;
        this.eventForm.get('duration').setValue(this.timeOptions?.find(el => el.value === dur).value);
      }
  }

  get allDayControl(): FormControl {
    return this.eventForm.get('allDay') as FormControl;
  }

  ngOnInit(): void {
    this.allDayControl.valueChanges.subscribe(allDay => {
      if(allDay) this.eventForm.get('duration').reset();
    });
  }

  saveEvent() {
    const title = this.eventForm.get('title')?.value.trim(),
      slotsNumber = this.eventForm.get('duration')!.value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventObject: IEvent | any = {
      date: this.data.date,
      title
    };
    if(this.allDayControl.value) {
      eventObject.allDay = true;
    }
    else {
      eventObject.timeRange = this.isEditingMode ? { // editing existing case
        start: (this.data as IEvent).timeRange?.start,
        end: (this.data as IEvent).timeRange?.start + slotsNumber
      } : { // create new one case
        start: (this.data as ISlot)['timeSlot'],
        end: (this.data as ISlot)['timeSlot'] + slotsNumber,
      };
    };
    if (this.isEditingMode) eventObject.id = (this.data as IEvent).id;
    this.calendarService.saveEvent(eventObject as IEvent).subscribe();
    this.closeDialog();
  }

  delete() {
    const id = (this.data as IEvent).id;
    if (id) this.calendarService.removeEvent(id).subscribe();
    this.closeDialog();
  }

  closeDialog = () => this.dialogRef.close();
}
