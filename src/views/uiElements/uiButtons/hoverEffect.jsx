import React from 'react'

import Button from '@custom/Buttons/Button'

const HoverEffect = () => {
  const hoverEffectButtons = [
    { text: 'Button Up', color: 'btn-primary hover:-translate-y-0.5' },
    { text: 'Button Down', color: 'btn-green hover:translate-y-0.5' },
    { text: 'Scale', color: 'btn-purple hover:scale-105' },
  ]
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Hover Effect</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            {hoverEffectButtons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                color={button.color}
                custom="btn"
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HoverEffect
