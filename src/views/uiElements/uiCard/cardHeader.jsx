import React from 'react'

const CreadHeader = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Card Header</h6>
          </div>
          <div className="card-body">
            <p className="text-gray-500 dark:text-dark-500">
              Business Content means any sound recordings, musical works, album
              cover artwork, photographs, images, audiovisual works, third party
              metadata (including editorial content) and other copyrighted
              materials made available by Seller through the Business Products,
              but excluding the Business Product Software and Incorporated
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default CreadHeader
