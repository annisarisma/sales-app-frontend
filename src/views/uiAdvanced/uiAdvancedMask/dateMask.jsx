import React from 'react'

import { InputMask } from '@react-input/mask'

const DateMask = ({ placeholder = 'MM/DD/YYYY' }) => {
  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Date Mask</h6>
        </div>
        <div className="card-body">
          <InputMask
            mask="dd/mm/yyyy"
            replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
            placeholder={placeholder}
            className="form-input"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DateMask
