import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addEventGridData,
  editEventGridData,
} from '@src/slices/events/grid/thunk'
import { Upload } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const contributorsOptions = [
  {
    label: 'Declan Grieve',
    value: 'Declan Grieve',
    image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-1.png',
  },
  {
    label: 'Callum Burston',
    value: 'Callum Burston',
    image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-2.png',
  },
  {
    label: 'Liam White',
    value: 'Liam White',
    image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-3.png',
  },
  {
    label: 'Sophia Adams',
    value: 'Sophia Adams',
    image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-4.png',
  },
  {
    label: 'Ethan Thompson',
    value: 'Ethan Thompson',
    image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-5.png',
  },
  {
    label: 'Ava Wilson',
    value: 'Ava Wilson',
    image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-6.png',
  },
]

const eventType = [
  { label: 'Offline', value: 'Offline' },
  { label: 'Online', value: 'Online' },
]

const status = [
  { label: 'Published', value: 'Published' },
  { label: 'Coming Soon', value: 'Coming Soon' },
  { label: 'Expired', value: 'Expired' },
]

const AddEditEventGrid = ({
  modalState,
  closeModal,
  eventGridList,
  editMode = false,
  currentGridEvent = null,
}) => {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [categoryList, setCategoryList] = useState(null)
  const [statusOption, setStatusOption] = useState(null)
  const [selectedContributors, setSelectedContributors] = useState([])

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const handleEventTypeChange = (selected) => {
    setCategoryList(selected)
    setValue('eventType', selected ? selected.value : '')
    clearErrors('eventType')
  }

  const handleStatusChange = (selected) => {
    setStatusOption(selected)
    setValue('status', selected ? selected.value : '')
    clearErrors('status')
  }

  const handleContributorsChange = (selected) => {
    setSelectedContributors(selected)
    const contributors = selected.map((item) => ({
      image: item.image || '',
      name: item.label,
    }))
    clearErrors('contributors')
    setValue('contributors', contributors)
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (editMode && currentGridEvent) {
      Object.keys(currentGridEvent).forEach((key) => {
        setValue(key, currentGridEvent[key])
      })
      setPreview(currentGridEvent.mainImage)

      if (currentGridEvent.date) {
        setSelectedDate(new Date(currentGridEvent.date))
      } else {
        setSelectedDate(null)
      }

      if (currentGridEvent.time) {
        setValue('time', currentGridEvent.time)
      }

      if (currentGridEvent.eventType) {
        const selectedEvent = eventType.find(
          (item) => item.value === currentGridEvent.eventType
        )
        setCategoryList(selectedEvent || null)
      }

      if (currentGridEvent.status) {
        const selectedStatus = status.find(
          (item) => item.value === currentGridEvent.status
        )
        setStatusOption(selectedStatus || null)
      }

      if (currentGridEvent.contributors) {
        const selectedContributors = currentGridEvent.contributors.map(
          (contributor) => ({
            label: contributor.name,
            value: contributor.name,
            image: contributor.image,
          })
        )
        setSelectedContributors(selectedContributors)
      }
    } else {
      reset({
        _id: 0,
        name: '',
        username: 'Liam White',
        price: '',
        date: '',
        time: '',
        location: '',
        image:
          'https://images.kcubeinfotech.com/domiex/images/avatar/user-5.png',
        mainImage: '',
        contributors: [],
      })
      setSelectedDate(null)
      setCategoryList(null)
      setStatusOption(null)
    }
  }, [editMode, currentGridEvent, setValue, reset])

  const submitForm = (data, onClose) => {
    const finalData = { ...data, mainImage: preview || '' }
    if (editMode && currentGridEvent) {
      dispatch(editEventGridData(finalData))
    } else {
      dispatch(
        addEventGridData({ ...finalData, _id: eventGridList.length + 1 })
      )
    }
    reset()
    onClose()
  }

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    reset()
    clearErrors()
    setPreview(null)
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode == true
            ? modalState.showEditEventGridForm
            : modalState.showAddEventGridForm)
        }
        title={editMode ? 'Edit Event' : 'Add New Event'}
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditEventGridForm' : 'showAddEventGridForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditEventGridForm' : 'showAddEventGridForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <h6 className="form-label">Event Logo</h6>
                <div>
                  <label htmlFor="logo">
                    <span className="inline-flex items-center justify-center w-full h-32 overflow-hidden bg-gray-100 border border-gray-200 rounded-md cursor-pointer dark:bg-dark-850 dark:border-dark-800">
                      {preview ? (
                        <img
                          src={preview}
                          alt="preview"
                          width={292}
                          height={95}
                          className="object-cover h-24"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-gray-500">
                          <Upload />
                          <span className="block mt-3">
                            Upload Your Event Logo
                          </span>
                        </div>
                      )}
                    </span>
                  </label>
                  <div className="hidden">
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        name="logo"
                        id="logo"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
                <span className="text-red-500"></span>
              </div>
              <div className="col-span-12">
                <label htmlFor="nameInput" className="form-label">
                  Event Name
                </label>
                <input
                  type="text"
                  id="nameInput"
                  className="form-input"
                  placeholder="Event name"
                  {...register('name', { required: 'Event name is required.' })}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="col-span-6">
                <label htmlFor="dateInput" className="form-label">
                  Event Date
                </label>
                <Flatpickr
                  id="dueDateInput"
                  className="form-input"
                  placeholder="Select due date"
                  value={selectedDate || undefined}
                  options={{ mode: 'single' }}
                  onChange={(date) => {
                    const formattedDate = formatDate(date[0])
                    setValue('date', formattedDate)
                    clearErrors('date')
                  }}
                />
                <input
                  type="hidden"
                  {...register('date', { required: 'Event Date required.' })}
                />
                {errors.date && (
                  <span className="text-red-500">{errors.date.message}</span>
                )}
              </div>
              <div className="col-span-6">
                <label htmlFor="eventDurationInput" className="form-label">
                  Event Duration
                </label>
                <Flatpickr
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'h:i K',
                    time_24hr: false,
                  }}
                  placeholder="00:00"
                  className="form-input"
                  value={currentGridEvent?.time || ''}
                  onChange={(selectedDates) => {
                    const time = selectedDates[0]
                      ?.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })
                      .toLowerCase()
                    clearErrors('time')
                    setValue('time', time)
                  }}
                />
                <input
                  type="hidden"
                  {...register('time', { required: 'Time is required.' })}
                />
                {errors.time && (
                  <span className="text-red-500">{errors.time.message}</span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="peopleInput" className="form-label">
                  Total People
                </label>
                <input
                  type="text"
                  placeholder="0"
                  id="peopleInput"
                  className="form-input"
                  {...register('peopleSize', {
                    required: 'Total People is required.',
                  })}
                />
                {errors.peopleSize && (
                  <span className="text-red-500">
                    {errors.peopleSize.message}
                  </span>
                )}
              </div>
              <div className="col-span-6">
                <label htmlFor="priceInput" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  placeholder="$00.00"
                  id="priceInput"
                  className="form-input"
                  {...register('price', {
                    required: 'Total People is required.',
                  })}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price.message}</span>
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
                  placeholder="Event location"
                  {...register('location', {
                    required: 'Event location is required.',
                  })}
                />
                {errors.location && (
                  <span className="text-red-500">
                    {errors.location.message}
                  </span>
                )}
              </div>

              <div className="col-span-12">
                <label className="form-label">Contributors</label>
                <Select
                  classNamePrefix="select"
                  options={contributorsOptions}
                  isMulti
                  onChange={handleContributorsChange}
                  value={selectedContributors}
                />
                <input
                  type="hidden"
                  {...register('contributors', {
                    required: 'Contributors is required.',
                  })}
                />
                {errors.contributors && (
                  <span className="text-red-500">
                    {errors.contributors.message}
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label className="form-label">Event Type</label>
                <Select
                  classNamePrefix="select"
                  options={eventType}
                  onChange={handleEventTypeChange}
                  value={categoryList}
                />
                <input
                  type="hidden"
                  {...register('eventType', {
                    required: 'Event Type is required.',
                  })}
                />
                {errors.eventType && (
                  <span className="text-red-500">
                    {errors.eventType.message}
                  </span>
                )}
              </div>
              <div className="col-span-6">
                <label className="form-label">Status</label>
                <Select
                  classNamePrefix="select"
                  options={status}
                  onChange={handleStatusChange}
                  value={statusOption}
                />
                <input
                  type="hidden"
                  {...register('status', { required: 'status is required.' })}
                />
                {errors.status && (
                  <span className="text-red-500">{errors.status.message}</span>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button
                type="button"
                className="btn btn-active-red"
                onClick={() => onClose()}>
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                {editMode ? 'Edit Event' : 'Add Event'}
              </button>
            </div>
          </form>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditEventGrid
