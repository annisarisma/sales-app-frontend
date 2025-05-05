import React from 'react'

const ColorIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Color Icons</h6>
        </div>
        <div className="card-body">
          <div className="*:size-10 *:flex *:items-center *:justify-center flex-wrap flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md text-xl">
            <div>
              <i className="bx bxs-balloon"></i>
            </div>
            <div>
              <i className="bx bx-color"></i>
            </div>
            <div>
              <i className="bx bx-qr"></i>
            </div>
            <div>
              <i className="bx bxl-unity"></i>
            </div>
            <div>
              <i className="bx bx-chat"></i>
            </div>
            <div>
              <i className="bx bx-search-alt-2"></i>
            </div>
            <div>
              <i className="bx bx-receipt"></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ColorIcons
