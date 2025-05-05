import React from 'react'

import { InputMask } from '@react-input/mask'

const PinCodeMasks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Pin Code Masks</h6>
        </div>
        <div className="card-body">
          <InputMask
            mask="____"
            replacement={{ _: /\d/ }}
            className="form-input"
            placeholder="0000"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default PinCodeMasks
