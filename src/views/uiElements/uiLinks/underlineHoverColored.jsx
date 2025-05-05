import React from 'react'

import { Link } from 'react-router-dom'

const UnderlineHoverColored = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Underline Hover Colored Links</h6>
        </div>
        <div className="flex flex-col gap-3 card-body">
          <Link to="#!" className="link link-line-primary">
            Primary Basic Links
          </Link>
          <Link to="#!" className="link link-line-purple">
            Purple Basic Links
          </Link>
          <Link to="#!" className="link link-line-green">
            Green Basic Links
          </Link>
          <Link to="#!" className="link link-line-red">
            Red Basic Links
          </Link>
          <Link to="#!" className="link link-line-yellow">
            Yellow Basic Links
          </Link>
          <Link to="#!" className="link link-line-sky">
            Sky Basic Links
          </Link>
          <Link to="#!" className="link link-line-pink">
            Pink Basic Links
          </Link>
          <Link to="#!" className="link link-line-indigo">
            Indigo Basic Links
          </Link>
          <Link to="#!" className="link link-line-orange">
            Orange Basic Links
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default UnderlineHoverColored
