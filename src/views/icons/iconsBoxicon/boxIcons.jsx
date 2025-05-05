import React from 'react'

import { Link } from 'react-router-dom'

import { Installation } from './prismInstall'
import { Style } from './prismStyle'
import { Usage } from './prismUsage'

const BoxIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="flex items-center card-header">
          <h6 className="text-15 grow">Box Icons</h6>
          <Link
            to="https://boxicons.com/"
            target="_blank"
            className="font-medium text-red-500 underline transition duration-200 ease-linear hover:text-red-600 shrink-0">
            View All Icons
          </Link>
        </div>
        <div className="card-body">
          <p className="mb-3 text-gray-500 dark:text-dark-500">
            &apos;Boxicons&apos; is a carefully designed open source iconset
            with
            <code className="text-pink-500">1500+</code> icons. It&apos;s
            crafted to look enrich your website/app experience.
          </p>

          <h6 className="mb-2 text-16">Installation</h6>
          <p className="text-gray-500 dark:text-dark-500">
            To install via npm, simply do the following:
          </p>

          <Installation />

          <p className="text-gray-500 dark:text-dark-500">
            import CSS to your <code className="text-pink-500">icons.scss</code>
          </p>

          <Style />

          <h6 className="mb-1">Usage</h6>
          <p className="text-gray-500 dark:text-dark-500">
            To use an icon on your page, add a className &apos;
            <code className="text-pink-500">bx</code>&apos; and seperate class
            with the icons name with a prefix &apos;
            <code className="text-pink-500">bx-</code>&apos; for regular icons ,
            &apos;
            <code className="text-pink-500">bxs-</code>&apos; for solid icons
            and &apos;
            <code className="text-pink-500">bxl-</code>&apos; for logos:
          </p>

          <Usage />

          <p className="mb-0 text-gray-500 dark:text-dark-500">
            For more details, see the
            <Link
              to="https://github.com/atisawd/boxicons"
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
export default BoxIcons
