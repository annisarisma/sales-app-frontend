import React from 'react'

import { Link } from 'react-router-dom'

const BasicLinks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Basic Links</h6>
        </div>
        <div className="flex flex-wrap items-center gap-3 card-body">
          <Link to="#!" className="link link-primary">
            Basic Links
          </Link>
          <Link
            to="#!"
            className="text-gray-800 link dark:text-dark-50 hover:text-primary-500 dark:hover:text-primary-500">
            Basic Links
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BasicLinks
