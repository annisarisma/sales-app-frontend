import React, { useEffect, useRef, useState } from 'react'

import user17 from '@assets/images/avatar/user-17.png'
import giftImage from '@assets/images/ecommerce/landing/gift.png'
import whiteLogo from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import { Search, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownRef])

  return (
    <React.Fragment>
      <header
        className={`container mx-auto px-4 lg:max-w-[1300px] [&.scroll-sticky]:max-w-full landing-navbar top-0 h-20 bg-white rounded-b-lg [&.scroll-sticky]:rounded-none shadow-lg shadow-gray-200/50 dark:bg-dark-950 dark:shadow-dark-850 ${isSticky ? 'scroll-sticky' : ''}`}>
        <div className="flex items-center w-full gap-5">
          <Link to="/" title="Logo">
            <img
              src={mainLogo}
              alt="logo"
              className="inline-block h-7 dark:hidden"
              width={153}
              height={28}
            />
            <img
              src={whiteLogo}
              alt="logo"
              className="hidden h-7 dark:inline-block"
              width={153}
              height={28}
            />
          </Link>
          <div
            className={`mx-auto navbar-collapase  ${!isMenuOpen ? 'hidden xl:flex' : ''}`}>
            <div className="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
              <a
                href="#products"
                title="products"
                onClick={() => setActiveTab(1)}
                className={`leading-normal transition duration-300 ease-linear hover:text-primary-500 ${activeTab === 1 ? 'text-primary-500' : ''}`}>
                Products
              </a>
              <a
                href="#new-arrivals"
                title="new-arrivals"
                onClick={() => setActiveTab(2)}
                className={`leading-normal transition duration-300 ease-linear hover:text-primary-500 ${activeTab === 2 ? 'text-primary-500' : ''}`}>
                New Arrivals
              </a>
              <a
                href="#service"
                title="service"
                onClick={() => setActiveTab(3)}
                className={`leading-normal transition duration-300 ease-linear hover:text-primary-500 ${activeTab === 3 ? 'text-primary-500' : ''}`}>
                Service
              </a>
              <a
                href="#cta"
                title="cta"
                onClick={() => setActiveTab(4)}
                className={`leading-normal transition duration-300 ease-linear hover:text-primary-500 ${activeTab === 4 ? 'text-primary-500' : ''}`}>
                CTA
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 ltr:ml-auto rtl:mr-auto xl:ltr:ml-0 xl:rtl:mr-0">
            <button
              title="menu toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
              <i
                className={`text-lg ${isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}`}></i>
            </button>
            <button
              type="button"
              title="search"
              className="rounded-full btn btn-icon btn-active-gray">
              <Search className="size-4" />
            </button>
            <button
              type="button"
              title="shopping-cart"
              className="rounded-full btn btn-icon btn-active-gray">
              <ShoppingCart className="size-4" />
            </button>
            <div className="dropdown" ref={dropdownRef}>
              <button
                type="button"
                title="profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="rounded-full btn btn-icon btn-active-gray">
                <img src={user17} alt="Profile" className="rounded-full" />
              </button>

              {dropdownOpen && (
                <div
                  className="dropdown-menu dropdown-right !w-72"
                  style={{ display: 'block' }}>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={user17}
                        alt="userImg"
                        className="rounded-md size-11"
                      />
                      <div>
                        <h6 className="mb-0.5">Jason Statham</h6>
                        <p className="flex items-center gap-2 text-gray-500 dark:text-dark-500">
                          <span className="inline-block align-baseline bg-green-500 rounded-full size-2"></span>
                          Active
                        </p>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-dark-850">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-user-line"></i>{' '}
                      Profile
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-dark-850">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-shopping-cart-2-line"></i>
                      Shopping Cart
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-dark-850">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-bookmark-line"></i>{' '}
                      Wish List
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-dark-850">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-customer-service-2-line"></i>
                      Help Center
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-dark-850">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-settings-3-line"></i>
                      Account Settings
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 p-4 border-purple-500/20 border-y bg-purple-500/10">
                    <img
                      src={giftImage}
                      alt="giftImage"
                      className="size-8 shrink-0"
                    />
                    <div className="grow">
                      <h6 className="mb-0.5">Refer a friend</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        7 invitations remaining
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link
                      to="#"
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-dark-850">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-logout-circle-r-line"></i>
                      Sign Out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
