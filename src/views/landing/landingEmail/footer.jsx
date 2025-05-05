import React, { useState } from 'react'

import logoWhite from '@assets/images/logo-white.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [year] = useState(new Date().getFullYear())

  return (
    <React.Fragment>
      <footer className="relative bg-gray-900 dark:bg-dark-900">
        <div className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 xl:col-span-6">
                <div className="max-w-lg">
                  <Link to="/" title="logo">
                    <img
                      src={logoWhite}
                      alt="logo"
                      className="h-7"
                      width={153}
                      height={28}
                    />
                  </Link>
                  <p className="mt-4 mb-6 text-gray-500 dark:text-dark-500 text-16">
                    This email and any attachments may contain confidential
                    information. If you are not the intended recipient, please
                    notify the sender immediately and delete this email.
                    Unauthorized use, disclosure, or copying of the contents is
                    strictly prohibited.
                  </p>
                  <div className="flex items-center gap-5">
                    <Link
                      to="#!"
                      title="facebook"
                      className="relative flex items-center justify-center transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10 text-primary-500">
                      <i className="ri-facebook-fill text-[20px] relative z-10"></i>
                    </Link>
                    <Link
                      to="#!"
                      title="dribbble"
                      className="relative flex items-center justify-center text-pink-500 transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10">
                      <i className="ri-dribbble-fill text-[20px] relative z-10"></i>
                    </Link>
                    <Link
                      to="#!"
                      title="twitter"
                      className="relative flex items-center justify-center transition duration-300 ease-linear hover:-translate-y-1 text-sky-500 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10">
                      <i className="ri-twitter-line text-[20px] relative z-10"></i>
                    </Link>
                    <Link
                      to="#!"
                      title="youtube"
                      className="relative flex items-center justify-center text-red-500 transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10">
                      <i className="ri-youtube-line text-[20px] relative z-10"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 xl:col-span-2">
                <h6 className="mb-4 text-gray-200 dark:text-dark-200 text-17">
                  Features
                </h6>
                <ul className="flex flex-col gap-5 text-16">
                  <li>
                    <Link to="#!" className="link link-primary">
                      Modern Inbox
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Send Later
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      All Features
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Dashboards
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-4 xl:col-span-2">
                <h6 className="mb-4 text-gray-200 text-17">Resource</h6>
                <ul className="flex flex-col gap-5 text-16">
                  <li>
                    <Link to="#!" className="link link-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      FAQ&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Systems Status
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-4 xl:col-span-2">
                <h6 className="mb-4 text-gray-200 text-17">Company</h6>
                <ul className="flex flex-col gap-5 text-16">
                  <li>
                    <Link to="#!" className="link link-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="link link-primary">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="py-6 text-gray-500 dark:text-dark-500 text-16">
            <p>
              &copy; {year} Domiex. Crafted & Designed by
              <Link
                to="#"
                className="ml-1 font-medium text-gray-200 dark:text-dark-200 link">
                SRBThemes
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
