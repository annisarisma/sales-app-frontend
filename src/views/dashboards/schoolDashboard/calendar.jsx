import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const Calendar = () => {
  const today = new Date().getDate()
  const [monthName, setMonthName] = useState('')
  const [year, setYear] = useState(new Date().getFullYear())
  const [daysInMonth, setDaysInMonth] = useState([])

  useEffect(() => {
    const date = new Date()
    setMonthName(date.toLocaleString('default', { month: 'long' }))
    setYear(date.getFullYear())

    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const daysArray = Array.from({ length: days }, (_, i) => i + 1)
    setDaysInMonth(daysArray)
  }, [])

  return (
    <div className="mb-5">
      <div>
        <h6 className="mb-3">{`${monthName}, ${year}`}</h6>
        <SimpleBar style={{ maxHeight: 200 }}>
          <div className="flex items-center gap-2">
            {daysInMonth.map((day) => (
              <Link
                key={day}
                to="#!"
                className={`flex items-center justify-center font-medium text-lg bg-gray-100 dark:bg-dark-850 rounded-md size-12 shrink-0 ${
                  day === today
                    ? 'bg-primary-500 text-primary-100 border-primary-500 dark:bg-primary-500'
                    : ''
                }`}>
                {day}
              </Link>
            ))}
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default Calendar
