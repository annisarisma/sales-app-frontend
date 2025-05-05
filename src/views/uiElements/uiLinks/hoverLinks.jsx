import React from 'react'

import { Link } from 'react-router-dom'

const HoverLinks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Hover Links</h6>
        </div>
        <div className="flex flex-wrap items-center gap-3 card-body">
          <Link
            to="#!"
            className="underline link link-primary hover:no-underline">
            hover No Underline Links
          </Link>
          <Link
            to="#!"
            className="text-gray-800 underline link hover:no-underline dark:text-dark-50 hover:text-primary-500">
            hover No Underline Links
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HoverLinks
