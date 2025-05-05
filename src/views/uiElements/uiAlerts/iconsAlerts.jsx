import React, { useState } from 'react'

import { TriangleAlert } from 'lucide-react'

// Sample JSON data
const alertsData = [
  {
    id: 1,
    title: 'New update available!',
    description:
      'Some new updates are available. Refresh this page to get the new updates now. It is recommended to always have the latest version available.',
    color: 'sky',
    icon: (
      <TriangleAlert className="size-5 text-sky-500 fill-sky-100 dark:fill-sky-900" />
    ),
    primaryButton: 'Close',
    secondaryButton: 'Refresh',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-primary',
  },
  {
    id: 2,
    title: 'Ready to publish?',
    description:
      'Publishing this project will make it publicly visible. You can reverse this action anytime here.',
    color: 'green',
    icon: <TriangleAlert className="text-green-500 size-5" />,
    primaryButton: 'Close',
    secondaryButton: 'Publish Now',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-green',
  },
  {
    id: 3,
    title: 'Are you sure?',
    description:
      'This will bulk update all the names of the tasks selected. You can reverse this action in the activity log.',
    color: 'yellow',
    icon: <TriangleAlert className="text-yellow-500 size-5" />,
    primaryButton: 'Close',
    secondaryButton: 'Yes, Update',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-yellow',
  },
  {
    id: 4,
    title: 'Are you Sure?',
    description:
      "This will delete all your latest tasks and other important information. If you don't want this you can always archive this.",
    color: 'red',
    icon: <TriangleAlert className="text-red-500 size-5" />,
    primaryButton: 'Close',
    secondaryButton: 'Yes, Delete',
    primaryButtonClass: 'btn-active-gray',
    secondaryButtonClass: 'btn-red',
  },
]

const IconsAlerts = () => {
  const [alerts, setAlerts] = useState(alertsData)

  const removeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Icons Alerts</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`border-gray-200 alert alert-border dark:border-dark-800 border-t-${alert.color}-500 dark:border-t-${alert.color}-500`}>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className={`btn-close link link-${alert.color}`}>
                  <i className="ri-close-fill"></i>
                </button>
                <div
                  className={`flex items-center justify-center border border-${alert.color}-500 rounded-full border-opacity-20 size-11 shrink-0`}>
                  {alert.icon}
                </div>
                <div className="mt-3 grow sm:mt-0">
                  <h6 className="mb-1">{alert.title}</h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-end gap-3 mt-3">
                    <button
                      onClick={() => removeAlert(alert.id)}
                      className={`btn ${alert.primaryButtonClass}`}>
                      {alert.primaryButton}
                    </button>
                    <button className={`btn ${alert.secondaryButtonClass}`}>
                      {alert.secondaryButton}
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

export default IconsAlerts
