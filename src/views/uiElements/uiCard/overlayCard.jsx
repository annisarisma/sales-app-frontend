import React from 'react'

import { overlayCard } from '@data/index'

const OverlayCard = () => {
  return (
    <React.Fragment>
      {overlayCard.map((items, index) => {
        return (
          <div
            key={index}
            className="relative col-span-12 overflow-hidden border-0 sm:col-span-6 xl:col-span-4 card">
            <img src={items.image} alt="Gallery" />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${items.color}`}></div>
            <div className="absolute inset-0 z-10 flex items-end card-body">
              <div>
                <h3 className="mt-3 text-white">{items.label}</h3>
                <p className="text-white/75">{items.famous}</p>
              </div>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
export default OverlayCard
