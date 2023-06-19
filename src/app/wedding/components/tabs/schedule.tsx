import * as React from 'react';
import s from '../../../styles/main.module.scss';

type Event = {
  time: string;
  title: string;
};

type Day = {
  date: string;
  events: Event[];
};

const DAYS: Day[] = [
  {
    date: 'Sunday, May 21',
    events: [
      {
        time: '2-6PM',
        title: 'Guests Arrive',
      },
      {
        time: '6PM',
        title: 'Wine Tasting + Castle Tour',
      },
      {
        time: '7PM',
        title: "Welcome Dinner, Courtesy of Andrea's Parents",
      },
    ],
  },
  {
    date: 'Monday, May 22',
    events: [
      {
        time: '9AM',
        title: 'American Breakfast at Sosta del Gusto',
      },
      {
        time: '1PM',
        title: 'Lunch of Grilled Italian Meats at Villa Faltignano',
      },
      {
        time: '7PM',
        title: 'Wood-Fired Pizza Dinner at Villa Faltignano',
      },
    ],
  },
  {
    date: 'Tuesday, May 23',
    events: [
      {
        time: '10AM',
        title: 'Italian Breakfast at Sosta del Gusto',
      },
      {
        time: '1PM',
        title: 'Take-away Paninis',
      },
      {
        time: '5PM',
        title: 'Wedding Ceremony in the Castle Courtyard',
      },
      {
        time: '6PM',
        title: 'Aperitivo in the Castle Gardens',
      },
      {
        time: '7PM',
        title: 'Wedding Dinner',
      },
      {
        time: '10PM',
        title: 'Drinks and Dancing',
      },
    ],
  },
  {
    date: 'Wednesday, May 24',
    events: [
      {
        time: '11AM',
        title: 'Brunch at Sosta del Gusto',
      },
      {
        time: '3PM',
        title: 'Gelato Dessert',
      },
      {
        time: '5PM',
        title: 'Fiesole Excursion',
      },
    ],
  },
  {
    date: 'Thursday, May 25',
    events: [
      {
        time: '9AM',
        title: 'Guests Check Out at the Wine Shop',
      },
    ],
  },
];

const Schedule = (): JSX.Element => (
  <div className={s.ScheduleWrapper}>
    <h1>Schedule</h1>
    <div className={s.Schedule}>
      {DAYS.map((day) => (
        <div className={s.ScheduleDay} key={day.date.toLowerCase()}>
          <h2>{day.date}</h2>
          <div className={s.ScheduleDetails}>
            {day.events.map((event) => (
              <div key={event.title.toLowerCase()}>
                <div>
                  <span className={s.EventHour}>{event.time}: </span>
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Schedule;
