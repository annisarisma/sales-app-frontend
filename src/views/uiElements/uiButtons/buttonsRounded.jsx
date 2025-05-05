import React from 'react'

import Button from '@custom/Buttons/Button'

const ButtonRounded = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">rounded-sm Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <Button
              text="Primary"
              custom="btn rounded-full"
              color={`btn-primary`}
            />
            <Button
              text="Primary"
              custom="btn rounded-full"
              color={`btn-sub-primary`}
            />
            <Button
              text="Primary"
              custom="btn rounded-full"
              color={`btn-outline-primary`}
            />
            <Button
              text="Primary"
              custom="btn rounded-full"
              color={`border-dashed btn-dashed-primary`}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ButtonRounded
