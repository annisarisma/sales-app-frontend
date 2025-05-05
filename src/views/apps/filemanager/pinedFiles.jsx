import React from 'react'

import user from '@assets/images/avatar/user-17.png'
import feature2 from '@assets/images/email/features-2.png'
import { Link } from 'react-router-dom'

const PinedFiles = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space">
        <Link to="#!" className="block overflow-hidden card">
          <img
            src={user}
            alt="Profile Images"
            className="object-cover w-full h-32"
          />
          <div className="text-center border-t border-gray-200 card-body dark:border-dark-800">
            <h6 className="mb-1">Profile Images</h6>
            <p className="text-sm text-slate-500 dark:text-dark-500">245 KB</p>
          </div>
        </Link>
        <Link to="#!" className="block overflow-hidden card">
          <iframe
            className="w-full h-32"
            title="video"
            src="https://www.youtube.com/embed/UvF56fPGVt4?si=riMC3DQV0WQeBypD"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <div className="text-center border-t border-gray-200 card-body dark:border-dark-800">
            <h6 className="mb-1">The Utility-First Workflow</h6>
            <p className="text-sm text-slate-500 dark:text-dark-500">2.7 MB</p>
          </div>
        </Link>
        <Link to="#!" className="block overflow-hidden card">
          <img
            src={feature2}
            alt="Email Features PDF"
            className="object-cover w-full h-32"
          />
          <div className="text-center border-t border-gray-200 card-body dark:border-dark-800">
            <h6 className="mb-1">Email Features PDF</h6>
            <p className="text-sm text-slate-500 dark:text-dark-500">2.7 MB</p>
          </div>
        </Link>
        <Link to="#!" className="block overflow-hidden card">
          <iframe
            className="w-full h-32"
            title="video"
            src="https://www.youtube.com/embed/nOQyWbPO2Ds?si=pTFhrsaGUoSqMJ6g"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <div className="text-center border-t border-gray-200 card-body dark:border-dark-800">
            <h6 className="mb-1">TailwindCSS Setup</h6>
            <p className="text-sm text-slate-500 dark:text-dark-500">475 MB</p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default PinedFiles
