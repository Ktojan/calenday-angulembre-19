export interface IEvent {
  title: string;
  date: Date | string;
  timeRange: {
    start: number;
    end: number;
  };
  id?: string;
  intersectionSiblings?: number;
}

export interface ISlot {
  timeSlot: number;
  date: Date;
  title?: string;
}
