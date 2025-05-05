import React from 'react'

const ColorIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Color Icons</h6>
        </div>
        <div className="card-body">
          <div className="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md text-xl">
            <div>
              <i className="las la-battery-three-quarters text-primary-500"></i>
            </div>
            <div>
              <i className="text-gray-500 dark:text-dark-500 las la-radiation"></i>
            </div>
            <div>
              <i className="text-green-500 las la-angle-double-right"></i>
            </div>
            <div>
              <i className="text-purple-500 las la-photo-video"></i>
            </div>
            <div>
              <i className="text-yellow-500 las la-campground"></i>
            </div>
            <div>
              <i className="lab la-modx text-sky-500"></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ColorIcons
