import React from 'react'

import { Clipboard, MoveLeft, MoveRight, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const IconLinks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Icon with Links</h6>
        </div>
        <div className="flex items-center gap-4 card-body">
          <Link to="#!" className="link link-primary group/item">
            Read More{' '}
            <MoveRight className="inline-block rtl:hidden transition duration-200 ease-linear size-4 group-hover/item:translate-x-0.5" />
            <MoveLeft className="rtl:inline-block transition duration-200 ease-linear size-4 group-hover/item:-translate-x-0.5 ltr:hidden" />
          </Link>
          <Link to="#!" className="link link-red group/item">
            <Trash2 className="inline-block transition duration-200 ease-linear size-4 group-hover/item:animate-bounce" />{' '}
            Delete
          </Link>

          <Link to="#!" className="link link-primary group/item">
            <Clipboard className="inline-block transition duration-200 ease-linear size-4 group-hover/item:-translate-y-0.5" />{' '}
            Copy Content
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default IconLinks
