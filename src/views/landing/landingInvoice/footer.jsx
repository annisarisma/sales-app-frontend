import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <React.Fragment>
      <footer className="relative py-5 border-t border-purple-200 border-dashed bg-purple-50 dark:bg-purple-500/10 dark:border-purple-500/20">
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="flex flex-wrap justify-between gap-5">
            <div>
              <p className="text-gray-500 dark:text-muted-invoice">
                &copy; <span>{year}</span> Domiex. Crafted by
                <Link to="#!" className="ml-1 font-semibold">
                  SRBThemes
                </Link>
              </p>
            </div>
            <div>
              <div className="flex justify-end gap-6 text-lg">
                <Link
                  to="#!"
                  title="twitter"
                  className="link link-sky dark:text-muted-invoice ">
                  <i className="ri-twitter-x-line"></i>
                </Link>
                <Link
                  to="#!"
                  title="instagram"
                  className="link link-pink dark:text-muted-invoice">
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link
                  to="#!"
                  title="amazon"
                  className="link link-green dark:text-muted-invoice">
                  <i className="ri-amazon-line"></i>
                </Link>
                <Link
                  to="#!"
                  title="chrome"
                  className="link link-red dark:text-muted-invoice">
                  <i className="ri-chrome-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
