// src/DButtonCard.js
import React from 'react'

import Button from '@custom/Buttons/Button'

const DButtonCard = () => {
  const DButtons = [
    { text: 'Primary', color: 'btn-3d-primary' },
    { text: 'Purple', color: 'btn-3d-purple' },
    { text: 'Green', color: 'btn-3d-green' },
    { text: 'Red', color: 'btn-3d-red' },
    { text: 'Yellow', color: 'btn-3d-yellow' },
    { text: 'Sky', color: 'btn-3d-sky' },
    { text: 'Pink', color: 'btn-3d-pink' },
    { text: 'Dark', color: 'btn-3d-gray' },
    { text: 'Indigo', color: 'btn-3d-indigo' },
    { text: 'Orange', color: 'btn-3d-orange' },
    {
      text: 'Light',
      color:
        'bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 hover:text-gray-800 hover:border-gray-300 focus:bg-gray-300 focus:text-gray-800 focus:border-gray-300 shadow-gray-400',
    },
  ]

  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">3D Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            {DButtons.map((button, index) => (
              <Button
                key={index}
                custom="btn"
                text={button.text}
                color={`btn-3d ${button.color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DButtonCard
