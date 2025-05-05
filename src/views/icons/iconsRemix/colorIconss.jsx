import React from 'react'

const ColorIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Color Icons</h6>
        </div>
        <div className="card-body">
          <div className="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md">
            <div>
              <i className="ri-building-line"></i>
            </div>
            <div>
              <i className="text-gray-500 dark:text-dark-500 ri-archive-line"></i>
            </div>
            <div>
              <i className="ri-pencil-ruler-2-line text-primary-500"></i>
            </div>
            <div>
              <i className="text-green-500 ri-briefcase-line"></i>
            </div>
            <div>
              <i className="text-yellow-500 ri-customer-service-line"></i>
            </div>
            <div>
              <i className="text-purple-500 ri-discuss-line"></i>
            </div>
            <div>
              <i className="text-red-500 ri-brush-3-line"></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ColorIcons
