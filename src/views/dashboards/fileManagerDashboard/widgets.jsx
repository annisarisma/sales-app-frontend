import React from 'react'

import { WidgetData } from '@data/index'
import { Link } from 'react-router-dom'

const Widgets = () => {
  return (
    <React.Fragment>
      {WidgetData.map((widget, index) => (
        <div
          key={index}
          className={`relative col-span-12  ${widget.cardColor}`}>
          <div className="card-body">
            <div
              className={`flex items-center justify-center mx-auto rounded-full ${widget.iconRound} size-16`}>
              <widget.icon className={`${widget.color} size-7`} />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <h6 className="grow">
                <Link to="#!" className="before:absolute before:inset-0">
                  {widget.label}
                </Link>
              </h6>
              <p className="text-gray-500 dark:text-dark-500 shrink-0">
                {widget.number}
              </p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}
export default Widgets
