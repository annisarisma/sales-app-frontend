import React from 'react'

import { InputMask } from '@react-input/mask'

const PhoneNumberMasks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Phone Number Masks</h6>
        </div>
        <div className="card-body">
          <InputMask
            mask="___ ____ ___"
            replacement={{ _: /\d/ }}
            className="form-input"
            placeholder="000 00000 000"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default PhoneNumberMasks
