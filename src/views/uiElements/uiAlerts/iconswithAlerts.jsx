import React, { useState } from 'react'

import { SquareCheckBig, TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

const IconsWithAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      text: 'Primary Alerts',
      color: 'alert-primary',
      icon: <TriangleAlert className="size-4" />,
    },
    {
      id: 2,
      text: 'Green Alerts',
      color: 'alert-green',
      icon: <SquareCheckBig className="size-4" />,
    },
    {
      id: 3,
      text: 'Purple Alerts',
      color: 'alert-solid-purple',
      icon: <SquareCheckBig className="size-4" />,
    },
    {
      id: 4,
      text: 'Yellow Alerts',
      color: 'alert-sub-yellow',
      icon: <SquareCheckBig className="size-4" />,
    },
  ])

  // Function to hide an alert based on its ID
  const removeAlert = (index) => {
    setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index))
  }
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Icons with Alerts</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            {alerts.map((alert, index) => (
              <div key={index} className={`alert ${alert.color} alert-icon`}>
                <div
                  className={`icon border-${alert.color.replace('alert-', '')}-200 dark:border-${alert.color.replace('alert-', '')}-500 dark:border-opacity-30`}>
                  {alert.icon}
                </div>
                <span>{alert.text}</span>
                <Link
                  to="#"
                  onClick={() => removeAlert(index)}
                  className={`btn-close text-${alert.color.replace('alert-', '')}-400 hover:text-${alert.color.replace('alert-', '')}-500`}>
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

export default IconsWithAlerts
