import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addCalendarData, editCalendarData } from '@src/slices/thunk'
import { CalendarCheck, Clock } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const colorOptions = [
  { label: 'Blue', value: 'primary' },
  { label: 'Green', value: 'green' },
  { label: 'Purple', value: 'purple' },
]

const AddEditCalendar = ({
  open,
  handleClose,
  calendarList,
  editMode = false,
  currentCalendar = null,
  onClickDelete,
  selectedNewDay,
  onAddEvent,
  onEditEvent,
}) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm()
  const [color, setColor] = useState(null)
  const [guests, setGuests] = useState([])
  const [guestEmail, setGuestEmail] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const flatRefs = useRef(null)

  const handleColorChange = (selected) => {
    setColor(selected)
    setValue(
      'classNames',
      selected
        ? [
            `bg-${selected.value}-500`,
            `border-${selected.value}-500`,
            `text-${selected.value}-50`,
            `hover:bg-${selected.value}-500`,
          ]
        : []
    )
  }

  const addGuest = () => {
    if (guestEmail && validateField('guestEmail', guestEmail)) {
      const randomImage = `/assets/images/avatar/user-${Math.floor(Math.random() * 10) + 1}.png`
      setGuests((prevGuests) => [...prevGuests, randomImage])
      setValue('extendedProps.guests', [...guests, guestEmail])
      setGuestEmail('')
    }
  }

  const validateField = (field, value) => {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    return field === 'guestEmail' && emailPattern.test(value)
  }

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index))
  }

  const resetForm = useCallback(() => {
    reset({
      title: '',
      start: selectedNewDay
        ? selectedNewDay[0]?.toISOString().slice(0, 16)
        : '',
      end: selectedNewDay ? selectedNewDay[1]?.toISOString().slice(0, 16) : '',
      eventTime: selectedNewDay
        ? selectedNewDay[0]?.toTimeString().slice(0, 5)
        : '12:00',
      extendedProps: {
        guests: [],
        location: '',
      },
      classNames: [],
    })
    setSelectedDate(null)
    setSelectedEndDate(null)
    setSelectedTime(null)
    setColor(null)
    setGuests([])
  }, [reset, selectedNewDay])

  useEffect(() => {
    if (editMode && currentCalendar) {
      // Set form values from currentCalendar
      Object.keys(currentCalendar).forEach((key) => {
        setValue(key, currentCalendar[key])
      })
      // Set selected date and end date
      setSelectedDate(
        currentCalendar.start ? new Date(currentCalendar.start) : null
      )
      setSelectedEndDate(
        currentCalendar.end ? new Date(currentCalendar.end) : null
      )
      setSelectedTime(currentCalendar.eventTime || null)

      // Set color
      const currentColor =
        colorOptions.find(
          (option) =>
            currentCalendar.classNames &&
            option.value === currentCalendar.classNames[0]?.split('-')[1]
        ) || null
      setColor(currentColor) // Set the color based on currentCalendar

      // Set guests
      const guestsList = currentCalendar.extendedProps?.guests || []
      setGuests(guestsList)
      setValue('extendedProps.guests', guestsList)
    } else {
      resetForm()
    }
  }, [editMode, currentCalendar, setValue, reset, resetForm])

  const submitForm = (data, onClose) => {
    const formattedData = {
      ...data,
      start: selectedDate ? selectedDate.toString() : new Date().toString(),
      end: selectedEndDate
        ? selectedEndDate.toString()
        : selectedDate
          ? selectedDate.toString()
          : new Date().toString(),
      extendedProps: {
        ...data.extendedProps,
        guests: guests,
        location: data.extendedProps?.location || '',
      },
      classNames: [
        `bg-${color?.value}-500`,
        `border-${color?.value}-500`,
        `text-${color?.value}-50`,
        `hover:bg-${color?.value}-500`,
      ],
    }

    if (editMode && currentCalendar) {
      // Update Redux state
      dispatch(editCalendarData(formattedData))

      // Call the onEditEvent callback for immediate UI update
      if (onEditEvent) {
        onEditEvent(formattedData)
      }
    } else {
      // For new events, add an ID
      const newEvent = { ...formattedData, id: calendarList.length + 1 }

      // Update Redux state
      dispatch(addCalendarData(newEvent))

      // Call the onAddEvent callback for immediate UI update
      if (onAddEvent) {
        onAddEvent(newEvent)
      }
    }

    onClose()
  }

  const handleDeleteEvent = (onClose) => {
    onClickDelete()
    onClose()
  }
  return (
    <>
      <Modal
        isOpen={open}
        onClose={() =>
          handleClose(editMode ? 'editEventModal' : 'addEventModal')
        }
        position="modal-center"
        title={editMode ? 'Edit Event' : 'Add Event'}
        id={editMode ? 'editEventModal' : 'addEventModal'}
        contentClass="modal-content"
        size="modal-lg"
        content={(onClose) => (
          <>
            <form
              id="eventForm"
              onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-space">
                <div className="col-span-12">
                  <label htmlFor="eventNameInput" className="form-label">
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="eventNameInput"
                    className="form-input"
                    placeholder="Enter event name"
                    {...register('title', {
                      required: 'Event Name is required.',
                    })}
                  />
                  {errors.title && (
                    <span className="text-red-500">{errors.title.message}</span>
                  )}
                </div>
                <div className="col-span-4">
                  <label htmlFor="eventDateInput" className="form-label">
                    Event Date
                  </label>
                  <div className="relative group/form right">
                    <Flatpickr
                      ref={flatRefs}
                      id="eventDateInput"
                      className="ltr:pl-9 rtl:pr-9 form-input"
                      placeholder="Select due date"
                      value={selectedDate || undefined}
                      options={{ mode: 'single', dateFormat: 'Y-m-d' }}
                      onChange={(date) => {
                        if (date.length > 0) {
                          setSelectedDate(date[0])
                          setValue('start', date[0].toISOString().slice(0, 16))
                        }
                      }}
                    />

                    <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                      <CalendarCheck className="size-4" />
                    </button>
                  </div>
                  {errors.start && (
                    <span className="text-red-500">{errors.start.message}</span>
                  )}
                </div>
                <div className="col-span-4">
                  <label htmlFor="endEventDateInput" className="form-label">
                    End Date
                  </label>
                  <div className="relative group/form right">
                    <Flatpickr
                      id="endEventDateInput"
                      className="ltr:pl-9 rtl:pr-9 form-input"
                      placeholder="Select end date"
                      value={selectedEndDate || undefined}
                      options={{ mode: 'single' }}
                      onChange={(date) => {
                        setSelectedEndDate(date[0])
                        setValue('end', date[0].toISOString().slice(0, 16))
                      }}
                    />
                    <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                      <CalendarCheck className="size-4" />
                    </button>
                  </div>
                  {errors.end && (
                    <span className="text-red-500">{errors.end.message}</span>
                  )}
                </div>
                <div className="col-span-4">
                  <label htmlFor="eventTimeInput" className="form-label">
                    Event Time
                  </label>
                  <div className="relative group/form right">
                    <Flatpickr
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'H:i',
                        time_24hr: true,
                      }}
                      className="ltr:pl-9 rtl:pr-9 form-input"
                      placeholder="Select time"
                      value={selectedTime || undefined}
                      onChange={(date) => {
                        const formattedTime = date[0].toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false,
                        })
                        setSelectedTime(
                          date[0].toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                        )
                        setValue('eventTime', formattedTime)
                      }}
                    />
                    <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                      <Clock className="size-4" />
                    </button>
                  </div>
                  {errors.eventTime && (
                    <span className="text-red-500">
                      {errors.eventTime.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="colorSelect" className="form-label">
                    Color
                  </label>
                  <Controller
                    name="classNames"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={colorOptions}
                        value={color} // Ensure that this is set correctly
                        onChange={(selected) => {
                          handleColorChange(selected)
                          onChange(selected ? selected.value : null) // Update form state
                        }}
                        placeholder="Select..."
                        id="colorSelect"
                      />
                    )}
                  />
                  {errors.classNames && (
                    <span className="text-red-500">Class is required</span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="locationInput" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    id="locationInput"
                    className="form-input"
                    placeholder="Enter location"
                    {...register('extendedProps.location', {
                      required: 'Location is required.',
                    })}
                  />
                  {errors.extendedProps?.location && (
                    <span className="text-red-500">
                      {errors.extendedProps.location.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="guestInput" className="form-label">
                    Add Guests
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="guestInput"
                      className="ltr:pr-14 rtl:pl-14 form-input"
                      placeholder="example@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                    />
                    <button
                      type="button"
                      id="addGuestButton"
                      className="absolute btn ltr:right-1.5 rtl:left-1.5 top-1.5 btn-sub-primary btn-sm"
                      onClick={addGuest}>
                      Add
                    </button>
                  </div>
                  <div className="flex gap-2 mt-2" id="guestList">
                    {guests.map((guest, index) => (
                      <div key={index} className="relative rounded-full size-9">
                        <img
                          src={guest}
                          alt="Guest Avatar"
                          className="w-8 h-8 rounded-full"
                          height={20}
                          width={20}
                        />
                        <Link
                          href="#!"
                          className="absolute flex items-center justify-center text-white bg-gray-500 border-2 border-white rounded-full dark:bg-dark-500 dark:border-dark-900 size-4 -top-1 -right-1"
                          onClick={() => removeGuest(index)}>
                          <i className="text-xs ri-close-line"></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      id="closebutton"
                      className="btn btn-active-red"
                      onClick={onClose}>
                      Cancel
                    </button>
                    {!!editMode && (
                      <button
                        type="button"
                        id="closebutton"
                        className="btn btn-red"
                        onClick={() => {
                          handleDeleteEvent(onClose)
                        }}>
                        Delete
                      </button>
                    )}
                    <button type="submit" className="btn btn-primary">
                      {editMode ? 'Update Event' : 'Add Event'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      />
    </>
  )
}

export default AddEditCalendar
