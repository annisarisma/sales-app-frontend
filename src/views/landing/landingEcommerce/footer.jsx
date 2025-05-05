import React from 'react'

import card1 from '@assets/images/payment/american.png'
import card2 from '@assets/images/payment/mastercard.png'
import card3 from '@assets/images/payment/visa.png'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <React.Fragment>
      <footer className="relative">
        <div className="container mx-auto px-4 lg:max-w-[1350px]">
          <div className="grid grid-cols-12 py-16 md:gap-x-8">
            <div className="col-span-12 lg:col-span-5 lg:pr-10">
              <h5 className="drop-shadow-lg">Stay Connected</h5>
              <div className="relative mt-5">
                <input
                  type="text"
                  className="border-0 border-b-2 rounded-none dark:bg-transparent ltr:pr-8 rtl:pl-8 form-input"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  title="submit"
                  className="absolute ltr:right-0 rtl:left-0 link link-primary top-2">
                  <MoveRight className="ltr:inline-block rtl:hidden" />
                  <MoveLeft className="ltr:hidden rtl:inline-block" />
                </button>
              </div>
              <p className="mt-5 text-gray-500 dark:text-dark-500">
                Enjoy 15% off your first purchase as a thank you for staying in
                touch.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <h5 className="mb-5 drop-shadow-lg">Quick Links</h5>
              <ul className="flex flex-col gap-5">
                <li>
                  <Link to="#!" className="link link-primary">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Product Overview
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <h5 className="mb-5 drop-shadow-lg">Services</h5>
              <ul className="flex flex-col gap-5">
                <li>
                  <Link to="#!" className="link link-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Shipping & Return
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Term & Condition
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="link link-primary">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <h5 className="mb-5 drop-shadow-lg">Our Store</h5>
              <p className="mb-4 text-gray-500 dark:text-dark-500">
                Find the nearest location to you.
                <Link
                  to="#!"
                  className="text-gray-900 underline dark:text-dark-50">
                  Visit our Stores
                </Link>
              </p>
              <p className="mb-1">
                <Link to="tel:241012345678">+241 01234 5678</Link>
              </p>
              <p>
                <Link to="mailto:support@example.com">support@example.com</Link>
              </p>
            </div>
          </div>
          <div className="grid flex-wrap justify-between grid-cols-1 gap-5 py-6 text-center border-t border-gray-200 border-dashed md:grid-cols-3 dark:border-dark-800">
            <div className="flex justify-center gap-6 text-lg md:justify-start">
              <Link to="#!" title="twitter" className="link link-sky">
                <i className="ri-twitter-x-line"></i>
              </Link>
              <Link to="#!" title="instagram" className="link link-pink">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link to="#!" title="amazon" className="link link-green">
                <i className="ri-amazon-line"></i>
              </Link>
              <Link to="#!" title="chrome" className="link link-red">
                <i className="ri-chrome-line"></i>
              </Link>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-dark-500">
                &copy; {currentYear} Domiex. Crafted by
                <Link to="#!" title="SRBThemes" className="ml-1 font-semibold">
                  SRBThemes
                </Link>
              </p>
            </div>
            <div className="flex justify-center gap-5 text-lg md:justify-end">
              <Link to="#!" title="Payment">
                <img
                  src={card1}
                  alt="cardImg"
                  className="h-6"
                  width={38}
                  height={24}
                />
              </Link>
              <Link to="#!" title="Payment">
                <img
                  src={card2}
                  alt="cardImg"
                  className="h-6"
                  width={37}
                  height={24}
                />
              </Link>
              <Link to="#!" title="Payment">
                <img
                  src={card3}
                  alt="cardImg"
                  className="h-6"
                  width={38}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
