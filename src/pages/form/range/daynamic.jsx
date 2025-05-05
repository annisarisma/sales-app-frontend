import React, { useState } from 'react'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const DynamicBounds = () => {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [step, setStep] = useState(10)
  const [value, setValue] = useState(1)

  const onSliderChange = (newValue) => {
    setValue(newValue)
  }

  const onMinChange = (e) => {
    setMin(+e.target.value || 0)
  }

  const onMaxChange = (e) => {
    setMax(+e.target.value || 100)
  }

  const onStepChange = (e) => {
    setStep(+e.target.value || 1)
  }

  const labelStyle = { minWidth: '60px', display: 'inline-block' }
  const inputStyle = { marginBottom: '10px' }

  return (
    <div>
      <label className="form-label" style={labelStyle}>
        Min:{' '}
      </label>
      <input
        className="form-input"
        type="number"
        value={min}
        onChange={onMinChange}
        style={inputStyle}
      />
      <br />
      <label className="form-label" style={labelStyle}>
        Max:{' '}
      </label>
      <input
        className="form-input"
        type="number"
        value={max}
        onChange={onMaxChange}
        style={inputStyle}
      />
      <br />
      <label className="form-label" style={labelStyle}>
        Step:{' '}
      </label>
      <input
        className="form-input"
        type="number"
        value={step}
        onChange={onStepChange}
        style={inputStyle}
      />
      <br />
      <br />
      <label style={labelStyle}>Value: </label>
      <span>{value}</span>
      <br />
      <br />
      <Slider
        min={min}
        max={max}
        step={step}
        onChange={(e) => onSliderChange(e)}
      />
    </div>
  )
}

export default DynamicBounds
