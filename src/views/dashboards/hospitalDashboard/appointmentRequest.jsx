import React, { useState } from 'react'

import user11 from '@assets/images/avatar/user-11.png'
import user13 from '@assets/images/avatar/user-13.png'
import user15 from '@assets/images/avatar/user-15.png'
import { Link } from 'react-router-dom'

const appointmentData = [
  {
    name: 'Jerry Kizer',
    status: 'pending',
    time: '11:49 AM - 12 Jun, 2024',
    image: user15,
  },
  {
    name: 'Thomas Maloney',
    status: 'pending',
    time: '04:44 PM - 18 Jul, 2024',
    image: user11,
  },
  {
    name: 'Dawn Beebe',
    status: 'accepted',
    time: '01:24 PM - 12 Jun, 2024',
    image: user13,
  },
]

const AppointmentRequest = () => {
  const [appointmentItems, setAppointmentItems] = useState(appointmentData)

  const setStatus = (index, status) => {
    setAppointmentItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, status } : item))
    )
  }

  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 xl:row-span-2 card">
      <div className="flex items-center gap-3 card-header">
        <h6 className="card-title grow">Appointment Request</h6>
        <Link to="#!" className="link link-primary shrink-0">
          Create
          <i className="ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
          <i className="ri-arrow-right-line ltr:hidden rtl:inline-block"></i>
        </Link>
      </div>
      <div className="card-body">
        {appointmentItems.map((item, index) => (
          <div className="flex items-center gap-3 mb-3 last:mb-0" key={index}>
            <img
              src={item.image} // Use .src for StaticImageData
              alt={item.name}
              className="rounded-full size-10 shrink-0"
              width={40}
              height={40}
            />
            <div className="grow">
              <h6 className="mb-1">{item.name}</h6>
              <p className="text-xs text-gray-500 dark:text-dark-500">
                <i className="align-baseline ri-calendar-line"></i>{' '}
                <span>{item.time}</span>
              </p>
            </div>
            {item.status === 'pending' && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setStatus(index, 'accepted')}
                  className="btn btn-icon btn-sub-green !size-8">
                  <i className="ri-check-line"></i>
                </button>
                <button
                  onClick={() => setStatus(index, 'rejected')}
                  className="btn btn-icon btn-sub-red !size-8">
                  <i className="ri-close-line"></i>
                </button>
              </div>
            )}
            {item.status === 'accepted' && (
              <div className="flex items-center gap-2 shrink-0">
                <span className="badge badge-green">Accepted</span>
              </div>
            )}
            {item.status === 'rejected' && (
              <div className="flex items-center gap-2 shrink-0">
                <span className="badge badge-red">Rejected</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppointmentRequest
