import React from 'react'

import { WidgetsData } from '@data/index'

const Widgets = () => {
  return (
    <React.Fragment>
      <div className="order-1 col-span-12 2xl:order-2 lg:col-span-12 2xl:col-span-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 gap-x-space">
          {WidgetsData &&
            WidgetsData.map((item, index) => {
              if (!item) {
                return null // Skip rendering if item is undefined
              }
              return (
                <div key={index} className="card">
                  <div className="card-body">
                    <div
                      className={`flex items-center justify-center ${item.iconColor} rounded-md size-12`}>
                      <item.icon />
                    </div>

                    <h6 className="mt-6 mb-1.5">{item.label}</h6>
                    <p className={`font-medium ${item.color}`}>
                      <i className={item.arrowIcon}></i> {item.Percent}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </React.Fragment>
  )
}
export default Widgets
