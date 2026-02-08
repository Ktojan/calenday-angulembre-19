import { IEvent } from './interfaces';
import {addDays} from './calendar.service';

export class EventsData {
  static events: IEvent[] = [
    ////----------------------------------------  CURRENT (ZERO) DAY  --------------------------------////
    {
      date: new Date(),
      title: "all the morning preps + way to my job",
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
      title: "Email Avalanche: The Never-Ending Inbox",
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
      title: "Coffee Break: The Ultimate Power Nap",
      timeRange: {
        start: 44,
        end: 46
      },
      id: "43fff289-80c2-48d7-a7bb-a6ce8e0139d4",
    },
    {
      date: new Date(),
      title: "Meeting Marathon: Surviving the 3-Hour Agenda",
      timeRange: {
        start: 44,
        end: 47
      },
      id: "70f15be4-d329-4c01-abdf-b442f65766cf",
    },
    {
      date: new Date(),
      title: "Break Room Gossip: The Daily Soap Opera",
      timeRange: {
        start: 44,
        end: 49
      },
      id: "00848ac8-483f-4d44-aa1f-178ffc11a4b2",
    },
    {  //----------------------------------------  13:00 -14:00
      date: new Date(),
      title: "Launch with collegues at KFC",
      timeRange: {
        start: 52,
        end: 54
      },
      id: "b29d38ef-69c4-4d51-b125-f0580983f46c",
    },
    {
      timeRange: {
        start: 56,
        end: 59
      },
      title: "Snack Attack: Emergency Munching Session",
      date: new Date(),
      id: "325f5d9d-c726-49de-bbe9-51bdd62f713a",
    },
    {
      timeRange: {
        start: 56,
        end: 62
      },
      title: "PowerPoint Prowess: Mastering the Art of Bullet Points",
      date: new Date(),
      id: "777f5d9d-c726-49de-bbe9-51bdd62f713a",
    },
    {
      date: new Date(),
      title: "Sharing Deep Thoughts and Funny Memes",
      timeRange: {
        start: 62,
        end: 64
      },
      id: "b29d38ef-69c4-4d51-b125-f0580983777c",
    },
    {
      date: new Date(),
      title: "Boss's Surprise Visit: The Hidden Camera Show",
      timeRange: {
        start: 72,
        end: 73
      },
      id: "b29d38ef-69c4-4d51-b125-f0580983777c",
    },
    {
      timeRange: {
        start: 86,
        end: 93
      },
      title: "Finally few hours in peace",
      date: new Date(),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba36"
    },
    ////-------------  ALLDAY EVENTS ----------////
    {
      allDay: true,
      date: new Date(),
      title: 'Don`t surf world news!',
      id: '006e9d9e-12f7-4897-b0ea-23587136d0e1',
    },
    {
      allDay: true,
      title: 'Mouse Click Marathon: The Endless Scroll',
      date: new Date(),
      id: '006e9d9e-12f7-4897-b0ea-23587136d0e2',
    },
    ////----------------------------------------  SECOND DAY  --------------------------------////
    {
      timeRange: {
        start: 11,
        end: 14
      },
      title: "Some unplanned sex",
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

    ////----------------------------------------  MINUS 1 DAY (YESTERDAY) --------------------------------////
    {
      timeRange: {
        start: 13,
        end: 14
      },
      title: "Just check refrigerator's not empty",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba0-1"
    },
    {
      timeRange: {
        start: 31,
        end: 33
      },
      title: "Meeting Marathon Begins",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba01"
    },
    {
      timeRange: {
        start: 31,
        end: 34
      },
      title: "Desk Plant Care Day",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba02"
    },{
      timeRange: {
        start: 36,
        end: 41
      },
      title: "Printer Paper Jam Fest",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba03"
    },
    {
      timeRange: {
        start: 43,
        end: 44
      },
      title: "Deadline Dash Challenge",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba04"
    },{
      timeRange: {
        start: 43,
        end: 48
      },
      title: "PowerPoint Pileup",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba05"
    },
    {
      timeRange: {
        start: 60,
        end: 61
      },
      title: "Snack Theft Alert",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba06"
    },
    {
      timeRange: {
        start: 52,
        end: 55
      },
      title: "Break Room Banter",
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba07"
    },
    {
      timeRange: {
        start: 73,
        end: 74
      },
      title: "Deadline Panic Attack",
      date: addDays(new Date(), -1),
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
      date: new Date(),
      title: 'Keep the back straight',
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba95"
    },
    {
      allDay: true,
      title: 'Deadline Negotiation With Reality',
      date: addDays(new Date(), 1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba96"
    },
    {
      allDay: true,
      title: 'Memento Mori',
      date: addDays(new Date(), -1),
      id: "aca1670c-a6fb-4810-b919-5c1dba67ba96"
    },
  ]
}
