
import { Link, usePage } from '@inertiajs/react'
import React, { useState } from 'react';
import dayjs from 'dayjs';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { DateSelectArg, EventApi, EventClickArg, EventInput } from '@fullcalendar/core';
import { PageProps, User } from '@/types';

type ServerEvent = {
  id: number;
  userId: number;
  title: string;
  start: string;
  end?: string;
}

type Props = PageProps<{
  calendars: ServerEvent[];
}>;

function Calendar() {
  const { auth, calendars } = usePage<Props>().props;

  const initialEvents: EventInput[] = calendars.map(function (calendar) {
    return {
      title: calendar.title,
      start: calendar.start,
      end: calendar.end
    }
  });

    return (
      <div className="p-4">
        <p>ようこそ{auth.user.name}さん</p>
        <Link className="text-sky-600" href={route('logout')} method="post">ログアウト</Link>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          locale={'ja'}
          selectable={true}

          events={initialEvents}
          height="auto"
        />

      </div>
    );
  };

export default Calendar;

