import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// Define the alert data
const alertsData = [
  {
    id: 1,
    text: 'Primary Gradient Alerts',
    gradient: 'bg-gradient-to-r from-primary-500 to-primary-700',
    textColor: 'text-primary-400',
    hoverColor: 'hover:text-primary-200',
  },
  {
    id: 2,
    text: 'Purple Gradient Alerts',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-700',
    textColor: 'text-purple-400',
    hoverColor: 'hover:text-purple-200',
  },
  {
    id: 3,
    text: 'Gradient Alerts',
    gradient: 'bg-gradient-to-r from-primary-500 to-green-500',
    textColor: 'text-green-300',
    hoverColor: 'hover:text-green-100',
  },
  {
    id: 4,
    text: 'Gradient Alerts',
    gradient: 'bg-gradient-to-r from-primary-950 to-red-950',
    textColor: 'text-red-400',
    hoverColor: 'hover:text-red-200',
  },
]

const GradientAlerts = () => {
  const [alerts, setAlerts] = useState(alertsData)
  const removeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Gradient Alerts</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`text-white border-none ${alert.gradient} alert`}>
                <span>{alert.text}</span>
                <Link
                  to=""
                  onClick={() => removeAlert(alert.id)}
                  className={`btn-close ${alert.textColor} ${alert.hoverColor}`}>
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

export default GradientAlerts
