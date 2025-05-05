// src/SoftButtonCard.js
import React from 'react'

import Button from '@custom/Buttons/Button'

const SoftButtonCard = () => {
  const softButtons = [
    { text: 'Primary', color: 'btn-sub-primary' },
    { text: 'Purple', color: 'btn-sub-purple' },
    { text: 'Green', color: 'btn-sub-green' },
    { text: 'Red', color: 'btn-sub-red' },
    { text: 'Yellow', color: 'btn-sub-yellow' },
    { text: 'Sky', color: 'btn-sub-sky' },
    { text: 'Pink', color: 'btn-sub-pink' },
    { text: 'Indigo', color: 'btn-sub-indigo' },
    { text: 'Orange', color: 'btn-sub-orange' },
    { text: 'Dark', color: 'btn-sub-gray' },
  ]

  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Soft Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            {softButtons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                custom="btn"
                color={`btn-sub ${button.color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SoftButtonCard
