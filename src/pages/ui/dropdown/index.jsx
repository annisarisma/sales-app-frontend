import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BaseDropdown from '@views/uiElements/uiDropdown/baseDropdown'
import ColoredDropdown from '@views/uiElements/uiDropdown/coloredDropdown'
import PositionDropdown from '@views/uiElements/uiDropdown/positionDropdown'
import ProfileDropdown from '@views/uiElements/uiDropdown/profileDropdown'

const Dropdowns = () => {
  const data = [
    { id: 1, text: 'New Task', textColor: 'dropdown-primary' },
    { id: 2, text: 'Edit Task', textColor: 'dropdown-primary' },
    {
      id: 3,
      text: 'Delete Task',
      textColor: 'dropdown-primary',
      spanTextColor: 'text-red-500',
    },
  ]

  useEffect(() => {
    document.title = 'Dropdown | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Dropdown" subTitle="UI" />
      {/* ============================BaseDropdown========================= */}

      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Base Dropdown</h6>
          </div>
          <div className="card-body">
            <div className="flex flex-wrap items-center gap-4">
              <BaseDropdown data={data} />
            </div>
          </div>
        </div>
        {/* ================Position Dropdown============== */}

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Position Dropdown</h6>
          </div>
          <div className="card-body">
            <div className="flex flex-wrap items-center gap-4">
              <PositionDropdown data={data} />
            </div>
          </div>
        </div>

        {/* =======================ColoredDropdown==================== */}

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Colored Dropdown</h6>
          </div>
          <div className="card-body">
            <div className="flex flex-wrap items-center gap-4">
              <ColoredDropdown data={data} />
            </div>
          </div>
        </div>

        {/* =====================================Profile================================ */}

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Profile Dropdown</h6>
          </div>
          <div className="card-body">
            <div className="flex flex-wrap items-center gap-4">
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dropdowns
