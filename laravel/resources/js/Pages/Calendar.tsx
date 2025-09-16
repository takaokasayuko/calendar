
import { Link, router, useForm, usePage } from '@inertiajs/react'
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

  const currentEvents: EventInput[] = calendars.map(function (calendar) {
    return {
      id: calendar.id.toString(),
      title: calendar.title,
      start: calendar.start,
      end: calendar.end
    }
  });

  const { setData, errors, post } = useForm({
    title: '',
    start: '',
    end: '',
  });

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("予定を入力してください");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      setData({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      });
      post(route('calendar.store'), {
        onSuccess: () => location.reload(),
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const newTitle = prompt(`新しい予定を入力してください。${clickInfo.event.title}`);

      if (newTitle && newTitle !== clickInfo.event.title) {

      setData('title', newTitle);
      router.put(route('calendar.update', clickInfo.event.id), {
      title: newTitle,
    }, {
      onSuccess: () => {
        clickInfo.event.setProp('title', newTitle);
      },
    });
    }
  }

    return (
      <div className="p-4">
        <p>ようこそ{auth.user.name}さん</p>
        <Link className="text-sky-600" href={route('logout')} method="post">ログアウト</Link>
        <p className="text-red-600" >{errors.title}</p>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          buttonText={{
            today: '今日',
            month: '月',
            week: '週',
            day: '日'
          }}
          allDayText="終日"
          locale={'ja'}
          editable
          selectable
          selectMirror
          dayMaxEvents
          moreLinkText={(num) => `+他 ${num} 件`}
          select={handleDateSelect}
          events={currentEvents}
          eventClick={handleEventClick}
          height="auto"
        />
      </div>
    );
  };


export default Calendar;
