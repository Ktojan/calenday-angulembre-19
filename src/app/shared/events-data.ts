import { IEvent } from './interfaces';
import {addDays} from './calendar.service';

export class EventsData {
  static events: IEvent[] = [
    ////----------------------------------------  CURRENT (ZERO) DAY  --------------------------------////
    {
      timeRange: {
        start: 20,
        end: 23
      },
      title: "started meteor shower, cool!",
      date: new Date(),
      id: "325f5d9d-c726-49de-bbe9-51bdd62f713a",
    },
    {
      timeRange: {
        start: 20,
        end: 23
      },
      title: "live stream of meteor shower",
      date: new Date(),
      id: "777f5d9d-c726-49de-bbe9-51bdd62f713a",
    },
    {
      date: new Date(),
      title: "all the morning preparations + way to my job",
      timeRange: {
        start: 32,
        end: 40
      },
      id: "1fe53cb0-d855-4c68-bbe1-ac336eefd9c6",
    },
    {
      timeRange: {
        start: 32,
        end: 35
      },
      title: "teeth, shower, preparing breakfast",
      date: new Date(),
      id: "bb99ceb0-2b94-4fd3-a70c-8e40edeac390",
    },
    {
      timeRange: {
        start: 32,
        end: 36
      },
      title: "trying not to fall asleep or into depression",
      date: new Date(),
      id: "7dfded99-ef6a-42dc-be38-d28db4b26859",
    },
    {
      date: new Date(),
      title: "podcast of Joe Rogan",
      timeRange: {
        start: 32,
        end: 34
      },
      id: "71be5810-5195-45de-ac7d-7658b9e7dd82"
    },

    {
      date: new Date(),
      title: "flirt with boosty Megan from sales",
      timeRange: {
        start: 44,
        end: 46
      },
      id: "43fff289-80c2-48d7-a7bb-a6ce8e0139d4",
    },
    {
      date: new Date(),
      title: "Boss wants urgent task me to accomplish",
      timeRange: {
        start: 44,
        end: 47
      },
      id: "70f15be4-d329-4c01-abdf-b442f65766cf",
    },
    {
      date: new Date(),
      title: "other urgent stuff waiting for me in workplace...",
      timeRange: {
        start: 44,
        end: 49
      },
      id: "00848ac8-483f-4d44-aa1f-178ffc11a4b2",
    },
    {
      date: new Date(),
      title: "Launch with collegues at KFC",
      timeRange: {
        start: 52,
        end: 54
      },
      id: "b29d38ef-69c4-4d51-b125-f0580983f46c",
    },
    {
      date: new Date(),
      title: "Buy girlfriend`s favorite flowers for evening excuse",
      timeRange: {
        start: 72,
        end: 73
      },
      id: "b29d38ef-69c4-4d51-b125-f0580983777c",
    },
    {
      timeRange: {
        start: 92,
        end: 93
      },
      title: "15 min - finally some rest in peace (but not death!)",
      date: new Date(),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba36"
    },
    ////-------------  ALLDAY EVENTS ----------////
    {
      allDay: true,
      date: new Date(),
      title: 'Don`t surf world news',
      id: '006e9d9e-12f7-4897-b0ea-23587136d0e1',
    },
    {
      allDay: true,
      title: 'Be gentle with girlfriend',
      date: new Date(),
      id: '006e9d9e-12f7-4897-b0ea-23587136d0e2',
    },
    ////----------------------------------------  SECOND DAY  --------------------------------////
    {
      timeRange: {
        start: 11,
        end: 14
      },
      title: "Some unplanned sex with girlfriend. Yeah",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba0-1"
    },
    {
      timeRange: {
        start: 31,
        end: 33
      },
      title: "Strategic Coffee Refill & Email Avoidance Session",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba01"
    },
    {
      timeRange: {
        start: 31,
        end: 34
      },
      title: "Quarterly “We’re Still Aligned” Alignment Check",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba02"
    },{
      timeRange: {
        start: 36,
        end: 41
      },
      title: "Productive Nodding During Video Call",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba03"
    },
    {
      timeRange: {
        start: 43,
        end: 44
      },
      title: "Status Update: Status Unchanged",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba04"
    },{
      timeRange: {
        start: 43,
        end: 48
      },
      title: "Professional Staring at Spreadsheet",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba05"
    },
    {
      timeRange: {
        start: 58,
        end: 61
      },
      title: "Weekly Optimism Sync",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba06"
    },
    {
      timeRange: {
        start: 52,
        end: 55
      },
      title: "Metrics Review: Numbers with Feelings",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba07"
    },
    {
      timeRange: {
        start: 72,
        end: 74
      },
      title: "End-of-Day Productivity Victory Lap",
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba08"
    },
    ////-------------  ALLDAY EVENTS ----------////
    {
      allDay: true,
      date: addDays(new Date(), 1),
      title: 'Calendar Tetris: Fitting +1 Meeting',
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba95"
    },
    {
      allDay: true,
      title: 'Deadline Negotiation With Reality',
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba96"
    },
  ]
}
