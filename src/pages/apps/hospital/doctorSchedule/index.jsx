import { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { doctorSchedule } from '@src/data'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '../../../../components/CustomComponents/Dropdown/Dropdown'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const DatePicker = () => {
  const today = new Date()
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth())
  const [selectedYear, setSelectedYear] = useState(today.getFullYear())
  const [dates, setDates] = useState([])
  const [appointments, setAppointments] = useState(doctorSchedule)
  const [filteredAppointments, setFilteredAppointments] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)

  const updateAppointmentsToCurrentMonth = () => {
    const currentMonth = new Date().getMonth()
    const updatedAppointments = appointments.map((appointment) => {
      const appointmentDate = new Date(appointment.date)
      appointmentDate.setMonth(currentMonth)
      return {
        ...appointment,
        date: appointmentDate.toISOString(),
      }
    })
    setAppointments(updatedAppointments)
    filterAppointments(updatedAppointments)
  }

  const generateDates = () => {
    const year = selectedYear
    const month = selectedMonth
    const date = new Date(year, month, 1)
    const newDates = []

    while (date.getMonth() === month) {
      newDates.push({
        day: date.getDate(),
        name: dayNames[date.getDay()],
        isToday:
          date.getDate() === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear(),
        formattedDate: formatDate(date),
      })
      date.setDate(date.getDate() + 1)
    }
    setDates(newDates)
  }

  useEffect(() => {
    updateAppointmentsToCurrentMonth()
    generateDates()
  }, [selectedMonth, selectedYear])

  const formatDate = (date) => {
    const monthIndex = date.getMonth()
    const year = date.getFullYear()
    return `${monthNames[monthIndex]}, ${year}`
  }

  const filterAppointments = (appointmentsList = appointments) => {
    const filtered = appointmentsList.filter((appointment) => {
      const appointmentDate = new Date(appointment.date)
      return appointmentDate.getMonth() === selectedMonth
    })
    setFilteredAppointments(filtered)
  }

  const selectMonth = (index) => {
    setSelectedMonth(index)
  }

  const selectDate = (date) => {
    const selectedDate = new Date(selectedYear, selectedMonth, date.day)
    const filtered = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date)
      return appointmentDate.toDateString() === selectedDate.toDateString()
    })
    setFilteredAppointments(filtered)
    setSelectedDate(date)
  }

  return (
    <div>
      <BreadCrumb title="Doctor Schedule" subTitle="Hospital" />
      <Dropdown trigger="click" dropdownClassName="dropdown">
        <DropdownButton colorClass="flex items-center gap-2 btn-primary btn">
          <span>
            {monthNames[selectedMonth]} {selectedYear}
          </span>
        </DropdownButton>
        <DropdownMenu>
          {monthNames.map((month, index) => (
            <Link
              href="#"
              key={index}
              onClick={(e) => {
                e.preventDefault()
                selectMonth(index)
              }}
              className="dropdown-item">
              {month}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>

      {/* Dates Section */}
      <SimpleBar className="mt-5">
        <div className="flex gap-5">
          {dates.map((date, index) => (
            <Link
              key={index}
              href="#!"
              className={`flex items-center justify-center text-center border border-gray-200 rounded-md dark:border-dark-800 size-16 shrink-0 ${
                date.isToday ? 'active-date' : ''
              } ${
                selectedDate &&
                selectedDate.day === date.day &&
                selectedDate.name === date.name
                  ? 'bg-blue-500 text-white'
                  : ''
              }`}
              onClick={() => selectDate(date)}>
              <div>
                <h5>{date.day}</h5>
                <p>{date.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </SimpleBar>

      {filteredAppointments.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-space mt-space">
          {filteredAppointments.map((appointment, index) => (
            <div
              key={index}
              className={`relative card before:absolute ltr:before:-left-0.5 rtl:before:-right-0.5 before:rounded-full before:top-5 before:h-12 before:w-[2px] ${appointment.color}`}>
              <div className="card-body">
                <div className="flex items-center gap-2 mb-5">
                  <h3 className="flex items-center justify-center border border-gray-200 rounded-md dark:border-dark-800 size-12">
                    {new Date(appointment.date).getDate()}
                  </h3>
                  <div>
                    <h6 className="mb-0.5">
                      {formatDate(new Date(appointment.date))}
                    </h6>
                    <p className="text-xs text-gray-500 dark:text-dark-500">
                      {appointment?.monthYear}
                    </p>
                  </div>
                </div>
                <h6>{appointment.name}</h6>
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  {appointment.specialty}
                </p>
                <small className="text-gray-500 dark:text-dark-500">
                  Notes:
                </small>
                <p className="mb-2">{appointment.notes}</p>
                <h6>
                  <i className="text-lg font-normal text-gray-500 align-baseline dark:text-dark-500 ri-time-line"></i>
                  {appointment.time}
                </h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DatePicker
