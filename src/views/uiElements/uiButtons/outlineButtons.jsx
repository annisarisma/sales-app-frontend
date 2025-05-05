// src/OutlineButtonCard.js
import React from 'react'

import Button from '@custom/Buttons/Button'

const OutlineButtonCard = () => {
  const outlineButtons = [
    {
      text: 'Primary',
      color: 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    },
    {
      text: 'Purple',
      color:
        'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
    },
    {
      text: 'Green',
      color:
        'border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    },
    {
      text: 'Red',
      color: 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    },
    {
      text: 'Yellow',
      color:
        'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white',
    },
    {
      text: 'Sky',
      color: 'border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white',
    },
    {
      text: 'Pink',
      color: 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white',
    },
    {
      text: 'Indigo',
      color:
        'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white',
    },
    {
      text: 'Orange',
      color:
        'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    },
    {
      text: 'Dark',
      color: 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
    },
    {
      text: 'Light',
      color:
        'border-gray-200 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-500',
    },
  ]

  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Outline Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            {outlineButtons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                custom="btn"
                color={`border ${button.color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OutlineButtonCard
