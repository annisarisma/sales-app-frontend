import React from 'react'

import { Link } from 'react-router-dom'

const InformationAlert = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-10 text-center bg-pink-400 dark:bg-pink-700 text-pink-50 dark:text-pink-200">
        <div className="container mx-auto px-4">
          <p>
            Join new friends and embark on a New Year learning experience.
            <Link
              to="#!"
              className="underline transition duration-300 ease-linear hover:text-white">
              Click on the student list!
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default InformationAlert
