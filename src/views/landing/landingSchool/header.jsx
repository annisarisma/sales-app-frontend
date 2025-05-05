import { useEffect, useState } from 'react'

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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`landing-navbar h-20 top-10 [&.scroll-sticky]:top-0 [&.scroll-sticky]:shadow-gray-200/50 [&.scroll-sticky]:shadow-lg [&.scroll-sticky]:bg-white dark:[&.scroll-sticky]:shadow-dark-850 dark:[&.scroll-sticky]:bg-dark-900 ${isSticky ? 'scroll-sticky' : ''}`}>
      <div className="container mx-auto px-4 flex items-center">
        <Link to="/" title="Logo">
          <img
            src={mainLogo}
            alt="Main Logo"
            className="inline-block h-7 dark:hidden"
            width={153}
            height={40}
          />
          <img
            src={whiteLogo}
            alt="White Logo"
            className="hidden h-7 dark:inline-block"
            width={153}
            height={40}
          />
        </Link>
        <div
          className={`mx-auto navbar-collapase hidden xl:flex ${
            !isMenuOpen ? 'hidden xl:flex' : ''
          }`}>
          <div className="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
            <a
              href="#home"
              onClick={() => setActiveTab(1)}
              className={`leading-normal [&.active]:text-orange-500 hover:text-orange-500 transition duration-300 ease-linear ${
                activeTab === 1 ? 'active' : 'hover:text-orange-500'
              } transition duration-300 ease-linear`}>
              Home
            </a>
            <a
              href="#about-us"
              onClick={() => setActiveTab(2)}
              className={`leading-normal [&.active]:text-orange-500 hover:text-orange-500 transition duration-300 ease-linear ${
                activeTab === 2 ? 'active' : 'hover:text-orange-500'
              } transition duration-300 ease-linear`}>
              About Us
            </a>
            <a
              href="#courses"
              onClick={() => setActiveTab(3)}
              className={`leading-normal [&.active]:text-orange-500 hover:text-orange-500 transition duration-300 ease-linear ${
                activeTab === 3 ? 'active' : 'hover:text-orange-500'
              } transition duration-300 ease-linear`}>
              Courses
            </a>
            <a
              href="#mentors"
              onClick={() => setActiveTab(4)}
              className={`leading-normal [&.active]:text-orange-500 hover:text-orange-500 transition duration-300 ease-linear ${
                activeTab === 4 ? 'active' : 'hover:text-orange-500'
              } transition duration-300 ease-linear`}>
              Mentors
            </a>
            <a
              href="#blogs"
              onClick={() => setActiveTab(5)}
              className={`leading-normal [&.active]:text-orange-500 hover:text-orange-500 transition duration-300 ease-linear ${
                activeTab === 5 ? 'active' : 'hover:text-orange-500'
              } transition duration-300 ease-linear`}>
              Blogs
            </a>
            <a
              href="#contact-us"
              onClick={() => setActiveTab(6)}
              className={`leading-normal [&.active]:text-orange-500 hover:text-orange-500 transition duration-300 ease-linear ${
                activeTab === 6 ? 'active' : 'hover:text-orange-500'
              } transition duration-300 ease-linear`}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 ltr:ml-auto rtl:mr-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            title="menu toggle"
            className="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
            <i
              className={`text-lg ${isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}`}
            />
          </button>
          <button type="button" className="py-3 min-w-40 btn btn-orange">
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
