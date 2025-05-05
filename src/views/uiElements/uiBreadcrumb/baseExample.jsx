import React from 'react'

import { Link } from 'react-router-dom'

const BaseExample = () => {
  return (
    <React.Fragment>
      <ul className="breadcrumb *:before:content-['\f2e5']">
        <li className="breadcrumb-item">
          <Link to="#!">Domiex</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="#!">UI</Link>
        </li>
        <li className="breadcrumb-item active">Breadcrumb</li>
      </ul>

      <ul className="breadcrumb *:before:content-['\f2e5']">
        <li className="breadcrumb-item">
          <Link to="#!">
            <i className="align-middle ri-home-4-line"></i>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="#!">UI</Link>
        </li>
        <li className="breadcrumb-item active">Breadcrumb</li>
      </ul>
    </React.Fragment>
  )
}
export default BaseExample
