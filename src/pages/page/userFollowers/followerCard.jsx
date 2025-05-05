import React, { useState } from 'react'

import { Mail, MoveLeft, MoveRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const FollowerCard = ({
  name = '',
  email = '',
  phone = '',
  image = '',
  viewMoreLink = '',
  isFollowing = false,
}) => {
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(isFollowing)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setActive(!active)
    }, 2000)
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="flex flex-wrap items-center gap-3 card-body">
          <div className="shrink-0">
            <img
              src={image}
              alt="image"
              className="rounded-md size-20"
              width={80}
              height={80}
            />
          </div>
          <div className="grow">
            <h6 className="mb-1">{name}</h6>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <p className="text-gray-500 dark:text-dark-500">
                <Mail className="inline-block ltr:mr-1 rtl:ml-1 size-4"></Mail>
                <Link
                  to={`mailto:${email}`}
                  className="align-middle whitespace-nowrap">
                  {email}
                </Link>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                <Phone className="inline-block ltr:mr-1 rtl:ml-1 size-4"></Phone>
                <span className="align-middle whitespace-nowrap">{phone}</span>
              </p>
            </div>
            <Link to={viewMoreLink} className="text-primary-500">
              View More
              <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
              <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4"></MoveLeft>
            </Link>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn btn-sub-gray btn-icon-text">
              <span
                className="flex items-center gap-2"
                style={{ display: active ? 'none' : 'flex' }}>
                <i className="ri-user-add-line"></i> Follow
              </span>
              <span
                className="flex items-center gap-2"
                style={{ display: active ? 'flex' : 'none' }}>
                <i className="ri-user-unfollow-line"></i> UnFollow
              </span>
              <svg
                style={{ display: loading ? 'inline-block' : 'none' }}
                className="size-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-0"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FollowerCard
