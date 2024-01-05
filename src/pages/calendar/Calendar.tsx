import React, { useState } from 'react'
import './Calendar.css'
import { DateSelectArg, EventApi, EventClickArg, formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Header } from '../../components/header/Header'
import { List } from 'antd'

export const Calendar = () => {

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
  
  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter the name of your event')
    const calendarAPI = selected.view.calendar
    calendarAPI.unselect()

    if(title) {
      calendarAPI.addEvent({
        id: `${selected.startStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (eventClick: EventClickArg) => {
    if (window.confirm(`Are you sure you want to delete event ${eventClick.event.title}?`)) {
      eventClick.event.remove()
    } 
  }

  return (
    <div className='fullcalendar-wrapper' >
      <Header title={'Calendar'} subtitle='Full calendar interactive page' />
      <div className='calendar-container'>
          
          {/* CALENDAR SIDEBAR */}

          <div className='calendar-sidebar'>
              <h5>Events</h5>
              <List>
              {currentEvents.map((event) => (
                <List.Item key={event.id} className='calendar-list-item'>
                  <List.Item.Meta description={formatDate(event.startStr, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })} title={event.title}></List.Item.Meta>
                </List.Item>
              ))}
              </List>
          </div>

          {/* CALENDAR */}
          <div className='calendar-box'>
            <FullCalendar 
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin
              ]} 
              height={'75vh'}
              headerToolbar={{
                left: "prev, next today",
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {id: '123', title: 'Meeting call', date: '2024-05-25'},
                {id: '1234', title: 'Call grandpa', date: '2024-06-01'}
              ]}
            />
          </div>
      </div>
    </div>
  )
}
