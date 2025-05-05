import React, { useState } from 'react'

import { RiAlertLine, RiSpam2Line } from 'react-icons/ri'

// Sample JSON data
const alertsData = [
  {
    id: 1,
    title: 'Info',
    description: 'The pdf is getting ready for you, just sit back and relax.',
    color: 'bg-sky-500',
    icon: <RiSpam2Line className="text-white size-5" />,
    primaryButtonText: 'Close',
    secondaryButtonText: 'Great',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-sky',
  },
  {
    id: 2,
    title: 'Attention',
    description: 'Your are about to delete 40 Posts. Are you sure?',
    color: 'bg-red-500',
    icon: <RiSpam2Line className="text-white size-5" />,
    primaryButtonText: 'Close',
    secondaryButtonText: 'Delete Now',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-red',
  },
  {
    id: 3,
    title: 'Success',
    description: 'The action you done was a success! Great success.',
    color: 'bg-green-500',
    icon: <RiAlertLine className="text-white size-5" />,
    primaryButtonText: 'Close',
    secondaryButtonText: 'Successful Login',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-green',
  },
  {
    id: 4,
    title: 'Warning',
    description:
      'The action you are doing will change the process in some ways.',
    color: 'bg-yellow-500',
    icon: <RiAlertLine className="text-white size-5" />,
    primaryButtonText: 'Close',
    secondaryButtonText: 'Warning',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-yellow',
  },
]

const BasicAlerts = () => {
  const [alerts, setAlerts] = useState(alertsData)

  const removeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Basic Alerts</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`relative overflow-hidden text-sm border border-gray-200 rounded-md dark:border-dark-800`}>
                <div className={`h-9 ${alert.color}`}></div>
                <div className="relative p-5 text-center">
                  <div
                    className={`absolute flex items-center justify-center w-10 h-10 text-lg text-white -translate-x-1/2 ${alert.color} border-4 border-white rounded-full dark:border-dark-900 -top-5 left-1/2`}>
                    {alert.icon}
                  </div>
                  <h6 className="mt-4 mb-1">{alert.title}</h6>
                  <p className="mb-4 text-gray-500 dark:text-dark-500">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => removeAlert(alert.id)}
                      className={`btn ${alert.primaryButtonClass}`}>
                      {alert.primaryButtonText}
                    </button>
                    <button className={`btn ${alert.secondaryButtonClass}`}>
                      {alert.secondaryButtonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BasicAlerts
