import React, { useEffect, useState } from 'react'

import whiteLogo from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <React.Fragment>
      <header
        className={`landing-navbar top-0 h-20 z-[1002] [&.scroll-sticky]:bg-white dark:[&.scroll-sticky]:bg-body-invoice [&.scroll-sticky]:shadow-lg [&.scroll-sticky]:shadow-gray-200/50 dark:[&.scroll-sticky]:shadow-purple-100/5 ${isSticky ? 'scroll-sticky' : ''}`}>
        <div className="container mx-auto px-4 max-w-[1350px] flex justify-between items-center">
          <Link to="/" title="logo">
            <img
              src={mainLogo}
              alt="Main Logo"
              className="inline-block h-7 dark:hidden"
              width={153}
              height={28}
            />
            <img
              src={whiteLogo}
              alt="White Logo"
              className="hidden h-7 dark:inline-block"
              width={153}
              height={28}
            />
          </Link>
          <div
            className={`mx-auto navbar-collapase dark:bg-body-invoice dark:shadow-purple-100/5 dark:xl:bg-transparent ${isMenuOpen ? '' : 'hidden xl:flex'}`}>
            <ul className="flex flex-col xl:flex-row xl:items-center *:inline-block *:text-16 *:tracking-wide">
              <li>
                <a
                  href="#home"
                  onClick={() => setActiveTab(1)}
                  className={`inline-block px-5 py-2 font-normal tracking-wide transition-all duration-300 ease-linear dark:text-muted-invoice dark:hover:text-purple-500 [&.active]:text-purple-500 text-gray-500 hover:text-purple-500 ${activeTab === 1 ? ' active text-purple-500' : ''}`}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  onClick={() => setActiveTab(2)}
                  className={`inline-block px-5 py-2 font-normal tracking-wide transition-all duration-300 ease-linear dark:text-muted-invoice dark:hover:text-purple-500 [&.active]:text-purple-500 text-gray-500 hover:text-purple-500 ${activeTab === 2 ? 'active text-purple-500' : ''}`}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#case"
                  onClick={() => setActiveTab(3)}
                  className={`inline-block px-5 py-2 font-normal tracking-wide transition-all duration-300 ease-linear dark:text-muted-invoice dark:hover:text-purple-500 [&.active]:text-purple-500 text-gray-500 hover:text-purple-500 ${activeTab === 3 ? 'active text-purple-500' : ''}`}>
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={() => setActiveTab(4)}
                  className={`inline-block px-5 py-2 font-normal tracking-wide transition-all duration-300 ease-linear dark:text-muted-invoice dark:hover:text-purple-500 [&.active]:text-purple-500 text-gray-500 hover:text-purple-500 ${activeTab === 4 ? 'active text-purple-500' : ''}`}>
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  onClick={() => setActiveTab(5)}
                  className={`inline-block px-5 py-2 font-normal tracking-wide transition-all duration-300 ease-linear dark:text-muted-invoice dark:hover:text-purple-500 [&.active]:text-purple-500 text-gray-500 hover:text-purple-500 ${activeTab === 5 ? 'active text-purple-500' : ''}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="menu toggle"
              type="button"
              className="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-purple btn-icon xl:!hidden">
              <i
                className={`text-lg ${isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}`}
              />
            </button>
            <button className="btn btn-outline-purple">Get Started</button>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
