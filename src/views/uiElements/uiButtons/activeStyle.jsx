// src/ActiveStyleButtonCard.js
import React from 'react'

import Button from '@custom/Buttons/Button'

const ActiveStyleButtonCard = () => {
  const activeStyleButtons = [
    { text: 'Primary', color: 'btn-active-primary' },
    { text: 'Purple', color: 'btn-active-purple' },
    { text: 'Green', color: 'btn-active-green' },
    { text: 'Red', color: 'btn-active-red' },
    { text: 'Yellow', color: 'btn-active-yellow' },
    { text: 'Sky', color: 'btn-active-sky' },
    { text: 'Pink', color: 'btn-active-pink' },
    { text: 'Indigo', color: 'btn-active-indigo' },
    { text: 'Orange', color: 'btn-active-orange' },
    { text: 'Dark', color: 'btn-active-gray' },
  ]

  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Active Style</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            {activeStyleButtons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                color={`btn-active ${button.color}`}
                custom="btn"
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ActiveStyleButtonCard
