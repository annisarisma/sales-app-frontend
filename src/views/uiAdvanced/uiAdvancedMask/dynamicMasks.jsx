import React from 'react'

import { InputMask } from '@react-input/mask'

const DynamicMasks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Dynamic Masks</h6>
        </div>
        <div className="card-body">
          <InputMask
            mask="9999 9999 9999 9999"
            replacement={{ 9: /\d/ }}
            placeholder="0000 0000 0000 0000"
            className="form-input"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DynamicMasks
