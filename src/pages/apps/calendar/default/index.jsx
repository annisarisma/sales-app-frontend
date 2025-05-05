import React, { useEffect, useMemo, useState } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  addCalendarData,
  deleteCalendarData,
  editCalendarData,
  getCalendarData,
} from '@src/slices/thunk'
import { CirclePlus } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import AddEditCalendar from './addEditCalendar'

const CalendarDefault = () => {
  const dispatch = useDispatch()
  const { layoutMode, layoutDirection } = useSelector((state) => state.Layout)
  const { calendar } = useSelector((state) => state.Calendar)
  const [calendarList, setCalendarList] = useState([])
  const [open, setOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentCalendar, setCurrentCalendar] = useState(null)
  const [calendarRef, setCalendarRef] = useState(null)

  const updatedCalendarEvents = useMemo(() => {
    if (!calendar) return []

    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()

    return calendar.map((event) => {
      const startDate = new Date(event.start).getDate() + 1
      const endDate =
        new Date(event.end ? event.end : event.start).getDate() + 1

      const newStartDate = new Date(currentYear, currentMonth, startDate)
      const newEndDate = new Date(currentYear, currentMonth, endDate)

      return {
        ...event,
        start: newStartDate,
        end: newEndDate,
        extendedProps: event.extendedProps || {}, // Ensure extendedProps is always an object
      }
    })
  }, [calendar])

  useEffect(() => {
    if (!calendar) {
      dispatch(getCalendarData())
    } else {
      setCalendarList(updatedCalendarEvents)
    }
  }, [calendar, updatedCalendarEvents, dispatch])

  const handleOpenModal = (editMode = false, calendar = null) => {
    setEditMode(editMode)
    setCurrentCalendar(calendar)
    setOpen(true)
    setIsEditButton(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setEditMode(false)
    setCurrentCalendar(null)
  }

  const [selectedNewDay, setSelectedNewDay] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteEvent, setDeleteEvent] = useState()
  const [, setIsEditButton] = useState(true)

  const handleEventClick = (arg) => {
    const event = arg.event

    const startDate = event.start ? new Date(event.start) : new Date()
    const endDate = event.end ? new Date(event.end) : startDate

    const color = (event.classNames ?? [])
      .map((className) => {
        const match = className.match(/bg-(\w+)-500/)
        return match ? match[1] : null
      })
      .find((color) => color !== null)

    const updatedCalendarEvent = {
      id: Number(event.id),
      title: event.title,
      start: startDate.toISOString().slice(0, 16),
      end: endDate.toISOString().slice(0, 16),
      eventTime: startDate.toTimeString().slice(0, 5),
      classNames: [
        `bg-${color}-500`,
        `border-${color}-500`,
        `text-${color}-50`,
        `hover:bg-${color}-500`,
      ],
      extendedProps: {
        guests: event.extendedProps?.guests || [],
        location: event.extendedProps?.location || '',
      },
    }

    setCurrentCalendar(updatedCalendarEvent)
    setEditMode(true)
    setDeleteEvent({
      id: event.id,
      title: event.title,
      start: event.start?.toISOString() || '',
      end: event.end?.toISOString() || '',
      eventTime: event.start?.toTimeString().slice(0, 5) || '',
      classNames: event.classNames,
      extendedProps: {
        guests: event.extendedProps?.guests || [],
        location: event.extendedProps?.location || '',
      },
    })
    setIsEditButton(false)

    handleOpenModal(true, updatedCalendarEvent)
  }

  const handleDeleteEvent = async () => {
    if (deleteEvent) {
      try {
        // Dispatch the delete action
        await dispatch(deleteCalendarData([Number(deleteEvent.id)]))
        // Filter out the deleted event from the local list
        setCalendarList((prevList) =>
          prevList.filter((event) => event.id !== Number(deleteEvent.id))
        )

        // Close the delete modal
        setDeleteModal(false)

        // Refresh the calendar view
        if (calendarRef) {
          calendarRef.getApi().refetchEvents()
        }
      } catch (error) {
        console.error('Failed to delete event:', error)
      }
    } else {
      console.warn('No event selected for deletion.')
    }
  }

  const handleEventDrop = (dropInfo) => {
    const { event } = dropInfo

    const updatedEvent = {
      id: Number(event.id),
      title: event.title,
      start: event.start ? event.start.toISOString().slice(0, 16) : '',
      end: event.end
        ? event.end.toISOString().slice(0, 16)
        : event.start
          ? event.start.toISOString().slice(0, 16)
          : '',
      eventTime: event.start ? event.start.toTimeString().slice(0, 5) : '',
      classNames: event.classNames || [],
      extendedProps: {
        guests: event.extendedProps?.guests || [],
        location: event.extendedProps?.location || '',
      },
    }

    // Redux state update
    dispatch(editCalendarData(updatedEvent))

    // Update local state
    setCalendarList((prevList) =>
      prevList.map((item) =>
        item.id === updatedEvent.id ? updatedEvent : item
      )
    )

    // Ensure FullCalendar re-renders correctly
    setTimeout(() => {
      if (calendarRef) {
        calendarRef.getApi().refetchEvents()
      }
    }, 100)
  }
  useEffect(() => {
    if (calendar) {
      setCalendarList(updatedCalendarEvents)
    }
  }, [calendar, updatedCalendarEvents])
  useEffect(() => {
    setCalendarList(updatedCalendarEvents)
  }, [updatedCalendarEvents])
  // Handling date click on calendar
  const handleDateClick = (arg) => {
    if (arg) {
      setSelectedNewDay([arg.date, arg.date])
    }
    handleOpenModal()
  }
  const renderEventContent = (info) => {
    const containerEl = document.createElement('div')
    const titleEl = document.createElement('div')
    containerEl.style.padding = '5px'
    titleEl.classList.add('fc-event-title', 'grow')
    titleEl.innerText = info.event.title
    containerEl.appendChild(titleEl)
    if (info.event.extendedProps?.guests) {
      const guestsEl = document.createElement('div')
      guestsEl.classList.add('fc-event-guests', '-space-x-3', 'flex')
      info.event.extendedProps.guests.forEach((guest) => {
        const imgEl = document.createElement('img')
        imgEl.src = guest
        imgEl.alt = guest
        imgEl.style.width = '20px'
        imgEl.style.height = '20px'
        imgEl.style.borderRadius = '50%'
        imgEl.style.marginRight = '5px'
        guestsEl.appendChild(imgEl)
      })
      containerEl.appendChild(guestsEl)
    }
    containerEl.classList.add('flex', 'cursor-pointer')
    return { domNodes: [containerEl] }
  }

  const onDrag = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    const externalEvents = document.getElementById('external-events')
    if (externalEvents) {
      new Draggable(externalEvents, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
          return {
            title: eventEl.innerText.trim(),
            className: eventEl.classList.value,
          }
        },
      })
    }
  }, [])

  const onDrop = (info) => {
    if (info.draggedEl && !info.draggedEl.classList.contains('event-added')) {
      info.draggedEl.classList.add('event-added')
      // Prepare the new event data
      const newEvent = {
        _id: Math.floor(Math.random() * 1000),
        title: info.draggedEl.innerText.trim(),
        start: info.dateStr,
        end: info.dateStr,
        className: info.draggedEl.className,
        extendedProps: {
          guests: [],
          location: 'surat',
        },
      }
      const isDuplicate = calendarList.some(
        (event) =>
          event.title === newEvent.title && event.start === newEvent.start
      )

      if (!isDuplicate) {
        setCalendarList((prev) => [...prev, newEvent]) // Update the calendar state
        dispatch(addCalendarData(newEvent)) // Update Redux state
      } else {
        console.error('Duplicate event detected:', newEvent)
      }
    }
  }

  const handleAddEvent = (newEvent) => {
    // Update the local calendar list immediately
    setCalendarList((prevList) => [...prevList, newEvent])
    // Refresh the calendar view
    if (calendarRef) {
      calendarRef.getApi().refetchEvents()
    }
  }

  const handleEditEvent = (updatedEvent) => {
    setCalendarList((prevList) =>
      prevList.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    )

    if (calendarRef) {
      calendarRef.getApi().refetchEvents()
    }
  }

  return (
    <>
      <BreadCrumb title="Default" subTitle="Calendar" />
      <div>
        <div
          className="flex flex-wrap items-center gap-2 mb-space"
          id="external-events">
          <div id="external-events" className="flex items-center gap-2 grow">
            <div
              className="block !border-purple-500 !bg-purple-500 fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn btn-md"
              draggable="true"
              onDrag={(event) => {
                onDrag(event)
              }}>
              <div className="fc-event-main">Events</div>
            </div>
            <div
              className="block fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn !border-primary-500 !bg-primary-500 btn-md"
              draggable="true"
              onDrag={(event) => {
                onDrag(event)
              }}>
              <div className="fc-event-main">Personal</div>
            </div>
            <div
              className="block !bg-green-500 !border-green-500 fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn btn-md"
              draggable="true"
              onDrag={(event) => {
                onDrag(event)
              }}>
              <div className="fc-event-main">Meeting</div>
            </div>
            <div
              className="block fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn !border-sky-500 !bg-sky-500 btn-md"
              draggable="true"
              onDrag={(event) => {
                onDrag(event)
              }}>
              <div className="fc-event-main">Festival Function</div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            id="newEvent"
            onClick={() => handleDateClick({ date: new Date() })}>
            <CirclePlus className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> Add
            Event
          </button>
          <button
            className="hidden"
            id="editEvent"
            data-modal-target="addEventModal"
          />
        </div>
        <div className="card">
          <div className="card-body">
            <div id="calendar">
              {calendarList && (
                <>
                  <FullCalendar
                    ref={(ref) => setCalendarRef(ref)}
                    timeZone="America/New_York"
                    plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    handleWindowResize={true}
                    headerToolbar={{
                      left: 'title',
                      right: 'today prev,next',
                    }}
                    events={calendarList.map((event) => ({
                      ...event,
                      id: event.id,
                      extendedProps: event.extendedProps || {},
                    }))}
                    editable={true}
                    droppable={true}
                    selectable={true}
                    eventContent={renderEventContent}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    drop={onDrop}
                    eventDrop={handleEventDrop}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add, Edit and Delete Modal */}
      <AddEditCalendar
        open={open}
        handleClose={handleCloseModal}
        calendarList={calendarList}
        editMode={editMode}
        currentCalendar={currentCalendar}
        onClickDelete={() => {
          setOpen(false)
          setDeleteModal(true)
        }}
        setCalendarList={setCalendarList}
        selectedNewDay={selectedNewDay}
        onAddEvent={handleAddEvent}
        onEditEvent={handleEditEvent}
      />
      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />

      <DeleteModal
        show={deleteModal}
        handleHide={() => setDeleteModal(!deleteModal)}
        deleteModalFunction={handleDeleteEvent}
      />
    </>
  )
}

export default CalendarDefault
