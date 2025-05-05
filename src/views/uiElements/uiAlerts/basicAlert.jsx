import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const BasicAlert = () => {
  const [alerts, setAlerts] = useState([
    {
      text: 'Primary Alerts',
      color: 'alert-primary',
      closeBtn: 'text-primary-400 hover:text-primary-500',
    },
    {
      text: 'Purple Alerts',
      color: 'alert-purple',
      closeBtn: 'text-purple-400 hover:text-purple-500',
    },
    {
      text: 'Green Alerts',
      color: 'alert-green',
      closeBtn: 'text-green-400 hover:text-green-500',
    },
    {
      text: 'Red Alerts',
      color: 'alert-red',
      closeBtn: 'text-red-400 hover:text-red-500',
    },
    {
      text: 'Yellow Alerts',
      color: 'alert-yellow',
      closeBtn: 'text-yellow-400 hover:text-yellow-500',
    },
    {
      text: 'Sky Alerts',
      color: 'alert-sky',
      closeBtn: 'text-sky-400 hover:text-sky-500',
    },
    {
      text: 'Pink Alerts',
      color: 'alert-pink',
      closeBtn: 'text-pink-400 hover:text-pink-500',
    },
    {
      text: 'Indigo Alerts',
      color: 'alert-indigo',
      closeBtn: 'text-indigo-400 hover:text-indigo-500',
    },
    {
      text: 'Orange Alerts',
      color: 'alert-orange',
      closeBtn: 'text-orange-400 hover:text-orange-500',
    },
    {
      text: 'Dark Alerts',
      color: 'alert-gray',
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
          <h6 className="card-title">Basic Alerts</h6>
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
export default BasicAlert
