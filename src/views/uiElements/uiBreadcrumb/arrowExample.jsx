import React from 'react'

import { Link } from 'react-router-dom'

const ArrowExample = () => {
  return (
    <React.Fragment>
      <ul className="breadcrumb *:before:content-['\EA6E']">
        <li className="breadcrumb-item">
          <Link to="#!">Domiex</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="#!">UI</Link>
        </li>
        <li className="breadcrumb-item active">Breadcrumb</li>
      </ul>

      <ul className="breadcrumb *:before:content-['\EA6E']">
        <li className="breadcrumb-item">
          <Link to="#!">
            <i className="align-middle ri-home-4-line"></i>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="#!">Advance UI</Link>
        </li>
        <li className="breadcrumb-item active">Scrollbar</li>
      </ul>
    </React.Fragment>
  )
}
export default ArrowExample
