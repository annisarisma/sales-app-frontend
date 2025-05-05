import React, { useEffect, useRef } from 'react'

import error from '@assets/images/others/404.png'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt'

const FourZeroFour = () => {
  const tiltRef = useRef(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        'full-page-listening': true,
      })
    }
  }, [])

  return (
    <React.Fragment>
      <div className="relative flex items-center justify-center min-h-screen py-20 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3">
              <div className="relative inline-block" ref={tiltRef}>
                <img
                  src={error}
                  alt="errorImg"
                  className="relative mx-auto h-96"
                />
              </div>
              <h1 className="pb-5 text-4xl font-bold leading-relaxed text-transparent md:text-6xl drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                Opp! Page Not Found
              </h1>
              <p className="max-w-2xl mx-auto mb-5 text-gray-500 dark:text-dark-500 text-16">
                This page doesn't exist or was removed. We suggest you contact
                the admin or return to the homepage.
              </p>
              <Link to="/index" className="btn btn-primary">
                <Home className="inline-block size-4 ltr:mr-0.5 rtl:ml-0.5" />
                <span className="align-middle">Back to Home</span>
              </Link>
              <div className="flex items-center justify-center gap-2 mt-7">
                <Link
                  to="#!"
                  className="inline-flex items-center justify-center text-white rounded-full shadow-lg bg-sky-500 shadow-gray-200 dark:shadow-dark-800 size-10">
                  <i className="ri-linkedin-fill text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  className="inline-flex items-center justify-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                  <i className="ri-dribbble-fill text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  className="inline-flex items-center justify-center text-white rounded-full shadow-lg bg-primary-500 shadow-gray-200 dark:shadow-dark-800 size-10">
                  <i className="ri-facebook-fill text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  className="inline-flex items-center justify-center text-white bg-purple-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                  <i className="ri-twitch-line text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  className="inline-flex items-center justify-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                  <i className="ri-instagram-line text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  className="inline-flex items-center justify-center text-white bg-orange-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                  <i className="ri-gitlab-line text-[20px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FourZeroFour
