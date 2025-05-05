import React from 'react'

import Button from '@custom/Buttons/Button'
import { Trash, User, Wrench } from 'lucide-react'

const ButtonIcon = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Icon Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <Button
              text=""
              custom="btn btn-icon"
              color={`btn-red`}
              icon={Trash}
            />
            <Button
              text=""
              custom="btn btn-icon"
              color={`btn-outline-green`}
              icon={Wrench}
            />
            <Button
              text=""
              custom="btn btn-icon"
              color={`btn-sub-sky`}
              icon={User}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ButtonIcon
