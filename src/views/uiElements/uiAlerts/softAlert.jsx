import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const SoftAlert = () => {
  const [alerts, setAlerts] = useState([
    {
      text: 'Primary Alerts',
      color: 'alert-sub-primary',
      closeBtn: 'text-primary-400 hover:text-primary-500',
    },
    {
      text: 'Purple Alerts',
      color: 'alert-sub-purple',
      closeBtn: 'text-purple-400 hover:text-purple-500',
    },
    {
      text: 'Green Alerts',
      color: 'alert-sub-green',
      closeBtn: 'text-green-400 hover:text-green-500',
    },
    {
      text: 'Red Alerts',
      color: 'alert-sub-red',
      closeBtn: 'text-red-400 hover:text-red-500',
    },
    {
      text: 'Yellow Alerts',
      color: 'alert-sub-yellow',
      closeBtn: 'text-yellow-400 hover:text-yellow-500',
    },
    {
      text: 'Sky Alerts',
      color: 'alert-sub-sky',
      closeBtn: 'text-sky-400 hover:text-sky-500',
    },
    {
      text: 'Pink Alerts',
      color: 'alert-sub-pink',
      closeBtn: 'text-pink-400 hover:text-pink-500',
    },
    {
      text: 'Indigo Alerts',
      color: 'alert-sub-indigo',
      closeBtn: 'text-indigo-400 hover:text-indigo-500',
    },
    {
      text: 'Orange Alerts',
      color: 'alert-sub-orange',
      closeBtn: 'text-orange-400 hover:text-orange-500',
    },
    {
      text: 'Dark Alerts',
      color: 'alert-sub-gray',
      closeBtn: 'text-gray-400 hover:text-gray-500',
    },
  ])

  // Function to remove an alert
  const removeAlert = (index) => {
    setAlerts(alerts.filter((_, i) => i !== index))
  }
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Soft Alerts</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-col gap-2">
            {alerts.map((alert, index) => (
              <div key={index} className={`${alert.color} alert`}>
                <span>{alert.text}</span>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault()
                    removeAlert(index)
                  }}
                  className={`btn-close ${alert.closeBtn}`}>
                  <i className="ri-close-fill"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SoftAlert
