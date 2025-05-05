import React from 'react'

import school from '@assets/images/dashboards/school.png'

const Explore = () => {
  return (
    <React.Fragment>
      <div className="order-last col-span-12 text-center bg-gray-100 dark:bg-dark-850 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-body">
          <h5 className="mb-2">
            Join the community and find out more information
          </h5>
          <button type="button" className="btn btn-green">
            Explore Now
          </button>
          <div className="mt-5">
            <img
              src={school}
              alt="schoolImg"
              className="mx-auto h-44"
              width={242}
              height={176}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Explore
