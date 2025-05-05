import React from 'react'

import { performance } from '@data/index'
import { Link } from 'react-router-dom'

const PerformanceComponent = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space">
        {performance.map((item, index) => (
          <div className="card" key={index}>
            <div className="flex items-center gap-3 card-header">
              <h6 className="card-title grow">{item.title}</h6>
              <Link to="#!" className={item.badge.className}>
                <item.badge.icon
                  className={`inline-block ${item.badge.iconSize}`}
                />
                {item.badge.text}
              </Link>
            </div>
            <div className="card-body">
              <p className="mb-2 text-sm text-gray-500 dark:text-dark-500">
                {item.content.subtitle}
              </p>
              <div className="flex items-center gap-2">
                <h5>{item.content.value}</h5>
                <item.content.trendIcon
                  className={`size-5 ${item.content.trendIconColor}`}
                />
                {item.content.trendDescription}
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default PerformanceComponent
