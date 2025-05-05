import React from 'react'

import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Installation } from './prismInstall'
import { Style } from './prismStyle'
import { Usage } from './prismUsage'

const AwesomeIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="flex flex-col gap-2 md:items-center md:flex-row card-header">
          <h6 className="text-15 grow">Line Awesome Icons</h6>
          <Link
            to="https://icons8.com/line-awesome"
            target="_blank"
            className="font-medium text-red-500 underline transition duration-200 ease-linear hover:text-red-600 shrink-0">
            View All Icons{' '}
            <MoveRight className="inline-block ml-1 size-4"></MoveRight>
          </Link>
        </div>
        <div className="card-body">
          <p className="mb-3 text-gray-500 dark:text-dark-500">
            Line Awesome can be loaded via CDN or downloaded as zip archive. You
            can read more about this options on Line Awesome how-to page.
          </p>

          <h6 className="mb-2 text-16">Installation</h6>
          <p className="text-gray-500 dark:text-dark-500">
            Alternatively, Line Awesome can be installed as npm package:
          </p>

          <Installation />

          <p className="text-gray-500 dark:text-dark-500">
            import CSS to your <code className="text-pink-500">icons.scss</code>
          </p>

          <Style />

          <h6 className="mb-1">Usage</h6>
          <p className="text-gray-500 dark:text-dark-500">
            Use the preview page to quickly find the name of the icon you want
            to use.
          </p>

          <Usage />

          <p className="mb-0 text-gray-500 dark:text-dark-500">
            For more details, see the{' '}
            <Link
              to="https://icons8.com/line-awesome/howto"
              target="_blank"
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
export default AwesomeIcons
