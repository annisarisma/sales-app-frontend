import React from 'react'

import { Link } from 'react-router-dom'

import { Style } from './prismStyle'
import { Usage } from './prismUsage'
import { Installation } from './remixIconsPrism'

const RemixIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="flex items-center card-header">
          <h6 className="text-15 grow">Remix Icons</h6>
          <Link
            to="https://remixicon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-red-500 underline transition duration-200 ease-linear hover:text-red-600 shrink-0">
            View All Icons
          </Link>
        </div>
        <div className="card-body">
          <p className="mb-3 text-gray-500 dark:text-dark-500">
            Open-source neutral-style system symbols elaborately crafted for
            designers and developers. All of the icons are free for both
            personal and commercial use.
          </p>

          <h6 className="mb-2 text-16">Installation</h6>
          <p className="text-gray-500 dark:text-dark-500">
            If you&apos;d like to use Remix Icon with a CDN, you can skip this
            installation step.
          </p>

          <Installation />

          <p className="text-gray-500 dark:text-dark-500">
            import CSS to your <code className="text-pink-500">icons.scss</code>
          </p>

          <Style />

          <h6 className="mb-1">Usage</h6>
          <p className="text-gray-500 dark:text-dark-500">
            Add icon with className name, className name rule: ri-{`name`}-
            {`style`}
          </p>

          <Usage />

          <p className="mt-5 mb-0 text-gray-500 dark:text-dark-500">
            For more details, see the &nbsp;
            <Link
              to="#!"
              className="transition duration-200 ease-linear hover:text-primary-600 text-primary-500">
              documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RemixIcons
