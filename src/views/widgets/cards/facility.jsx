import React from 'react'

import { facility } from '@data/index'
import { GalleryVerticalEnd, Headset, Shuffle, Truck } from 'lucide-react'

const Facility = () => {
  const getLucideIcon = (icon, className) => {
    const icons = {
      truck: <Truck className={className} />,
      'gallery-vertical-end': <GalleryVerticalEnd className={className} />,
      headset: <Headset className={className} />,
      shuffle: <Shuffle className={className} />,
    }
    return icons[icon]
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-space">
        {facility.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="flex items-center gap-3 p-3 mb-4 bg-gray-100 rounded-md dark:bg-dark-850">
                <div className="flex items-center justify-center text-xs rounded-md size-10">
                  {item.icon && getLucideIcon(item.icon, item.colorClass)}
                </div>
                <h6>{item.title}</h6>
              </div>
              <div className="grid grid-cols-2 gap-0 text-center divide-x divide-gray-200 dark:divide-dark-800 rtl:divide-x-reverse">
                {item.status.map((statusItem, index) => (
                  <div key={index}>
                    <h5>{statusItem.count}</h5>
                    <p className="text-gray-500 dark:text-dark-500">
                      {statusItem.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Facility
