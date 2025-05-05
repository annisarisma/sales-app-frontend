import { Link } from 'react-router-dom'

import { Installation } from './prismInstall'
import { Usage } from './prismUsage'

const LucideIcons = () => {
  return (
    <div className="col-span-12 card">
      <div className="flex items-center card-header">
        <h6 className="text-xl grow">Lucide Icons</h6>
        <Link
          to="https://lucide.dev/icons"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-red-500 underline transition duration-200 ease-linear hover:text-red-600 shrink-0">
          View All Icons
        </Link>
      </div>
      <div className="card-body">
        <p className="mb-3 text-gray-500 dark:text-dark-500">
          Lucide is an open-source icon library that provides
          <code className="text-pink-500"> 1000+</code> vector (svg) files for
          displaying icons and symbols in digital and non-digital projects. The
          library aims to make it easier for designers and developers to
          incorporate icons into their projects by providing several official
          packages to make it easier to use these icons in your project.
        </p>

        <h6 className="mb-2 text-xl">Installation</h6>

        <h6 className="mb-1">Package Managers</h6>
        <p className="text-gray-500 dark:text-dark-500">
          Implementation of the lucide icon library for web applications.
        </p>
        <Installation />

        <h6 className="mb-1">Usage</h6>
        <p className="text-gray-500 dark:text-dark-500">
          Here is a complete example with unpkg
        </p>

        <Usage />

        <p className="mb-0 text-gray-500 dark:text-dark-500">
          For more details, see the
          <Link
            to="#!"
            className="link hover:text-primary-600 text-primary-500">
            documentation
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default LucideIcons
