import React from 'react'

import { TrackRecord } from '@data/index'
import { Link } from 'react-router-dom'

const TopTrack = () => {
  return (
    <React.Fragment>
      <div className="col-span-12">
        <div className="mb-space">
          <div className="flex items-center mb-5">
            <h6 className="text-15 grow">Weekly Top Track</h6>
            <Link to="#!" className="btn btn-primary">
              <i className="ri-add-circle-line ltr:mr-1 rtl:ml-1"></i> Add Track
            </Link>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 2xl:grid-cols-9 gap-space">
            {TrackRecord.map((items, index) => {
              return (
                <div key={index} className="relative">
                  <img
                    src={items.image}
                    alt="recordImg"
                    className="rounded-xl"
                  />
                  <div className="mt-3 text-center">
                    <h6 className="mb-1">
                      <Link to="#!" className="before:absolute before:inset-0">
                        {items.musicName}
                      </Link>
                    </h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      {items.type}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TopTrack
