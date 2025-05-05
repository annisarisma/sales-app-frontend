import React from 'react'

import logoWhite from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <React.Fragment>
      <footer className="pb-8 pt-36 bg-slate-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="grid grid-cols-12 gap-space">
            <div className="col-span-12 xl:col-span-4">
              <Link to="/" title="logo">
                <img
                  src={mainLogo}
                  alt="logo"
                  className="inline-block h-8 dark:hidden"
                  width={175}
                  height={32}
                />
                <img
                  src={logoWhite}
                  alt="logo"
                  className="hidden h-8 dark:inline-block"
                  width={175}
                  height={32}
                />
              </Link>
              <p className="mb-5 text-gray-500 dark:text-dark-500 mt-7 text-16">
                Create a superior website for your medical and healthcare
                business today.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  to="#!"
                  title="facebook"
                  className="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-primary">
                  <i className="ri-facebook-fill text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  title="twitch"
                  className="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-purple">
                  <i className="ri-twitch-line text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  title="twitter"
                  className="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-sky">
                  <i className="ri-twitter-line text-[20px]"></i>
                </Link>
                <Link
                  to="#!"
                  title="instagram"
                  className="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-pink">
                  <i className="ri-instagram-line text-[20px]"></i>
                </Link>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 xl:col-span-2 xl:col-start-7">
              <h6 className="text-16">Product Pages</h6>
              <ul className="mt-8 flex flex-col gap-5 text-16">
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Contacts Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-4 xl:col-span-2">
              <h6 className="text-16">Links</h6>
              <ul className="mt-8 flex flex-col gap-5 text-16">
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Insta by Domiex
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Domiex Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Domiex Reach
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Domiex Drive
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Domiex Bot
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-4 xl:col-span-2">
              <h6 className="text-16">More Pages</h6>
              <ul className="mt-8 flex flex-col gap-5 text-16">
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Video Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Cookie Setting
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">
                    Healthcare Directory
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 text-center xl:px-20">
          <p className="text-gray-500 dark:text-dark-500 text-16">
            &copy; <span>{currentYear}</span> Domiex. Crafted & Design by
            <Link to="#!" className="ml-1 font-semibold link link-sky">
              SRBThemes
            </Link>
          </p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
