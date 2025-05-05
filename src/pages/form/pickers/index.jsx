import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import Flatpickr from 'react-flatpickr'

const Pickers = () => {
  useEffect(() => {
    document.title = 'Pickers | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Pickers" subTitle="Forms" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                }}
                placeholder="YYYY-MM-DD"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Human-friendly Dates</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'F j, Y',
                }}
                placeholder="YYYY-MM-DD"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Date Picker with Min and Max Date</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                  minDate: '2024-01-01',
                  maxDate: '2024-02-13',
                }}
                className="form-input"
                type="text"
                placeholder="DD MMM, YYYY"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Default Date</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                }}
                defaultValue="today"
                value="today"
                placeholder="YYYY-MM-DD"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Disabling Date</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'Y-m-d',
                  disable: ['2024-08-17'],
                }}
                placeholder="DD MMM, YYYY"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Short Date</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'm/d/y',
                }}
                placeholder="MM/DD/YY"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Selecting multiple dates</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                  mode: 'multiple',
                }}
                placeholder="MM/DD/YY"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Full Date with Time</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y H:i',
                  enableTime: true,
                }}
                placeholder="DD MMM, YYYY HH:MM"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Range Picker</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                  mode: 'range',
                }}
                placeholder="Select Date Range"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Week Numbers</h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                  weekNumbers: true,
                }}
                className="form-input"
                placeholder="Select a date"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Timepickr </h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: false,
                  inline: false,
                }}
                placeholder="Select a time"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">24 Hours Timepickr </h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: true,
                  minuteIncrement: 1,
                }}
                placeholder="Select a time"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Time Picker w/ Limits </h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: true,
                  minTime: '10:30',
                  maxTime: '12:30',
                }}
                placeholder="Select a time"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Preloading Time </h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: true,
                  defaultHour: 12,
                  defaultMinute: 20,
                }}
                className="form-input"
                placeholder="Select a time"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Inline </h6>
          </div>
          <div className="card-body">
            <div>
              <Flatpickr
                options={{
                  dateFormat: 'd M, Y',
                  defaultDate: 'today',
                  inline: true,
                }}
                placeholder="Select a date"
                className="form-input"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Pickers
