import React, { useEffect, useState } from 'react'

import whiteLogo from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('services')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`landing-navbar h-20 top-0 [&.scroll-sticky]:top-0 [&.scroll-sticky]:shadow-gray-200/50 [&.scroll-sticky]:shadow-lg [&.scroll-sticky]:bg-white dark:[&.scroll-sticky]:shadow-dark-850 dark:[&.scroll-sticky]:bg-dark-900 ${isSticky ? 'scroll-sticky' : ''}`}>
      <div className="container mx-auto px-4 flex items-center justify-between w-full gap-5">
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
          className={`navbar-collapase ltr:mr-auto rtl:ml-auto ${!isMenuOpen ? 'hidden xl:flex' : ''}`}>
          <div className="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
            <a
              href="#services"
              onClick={() => {
                setActiveTab('services')
                handleScrollToSection('services')
              }}
              className={`leading-normal ${activeTab === 'services' ? 'active' : ''} leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear`}>
              Service
            </a>

            <a
              href="#pricing"
              onClick={() => {
                setActiveTab('pricing')
                handleScrollToSection('pricing')
              }}
              className={`leading-normal ${activeTab === 'pricing' ? 'active' : ''} leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear`}>
              Pricing
            </a>

            <a
              href="#features"
              onClick={() => {
                setActiveTab('features')
                handleScrollToSection('features')
              }}
              className={`leading-normal ${activeTab === 'features' ? 'active' : ''} leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear`}>
              Features
            </a>

            <a
              href="#templates"
              onClick={() => {
                setActiveTab('templates')
                handleScrollToSection('templates')
              }}
              className={`leading-normal ${activeTab === 'templates' ? 'active' : ''} leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear`}>
              Templates
            </a>

            <a
              href="#faq"
              onClick={() => {
                setActiveTab('faq')
                handleScrollToSection('faq')
              }}
              className={`leading-normal ${activeTab === 'faq' ? 'active' : ''} leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear`}>
              FAQ&apos;s
            </a>

            <a
              href="#updates"
              onClick={() => {
                setActiveTab('updates')
                handleScrollToSection('updates')
              }}
              className={`leading-normal ${activeTab === 'updates' ? 'active' : ''} leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear`}>
              Updates
            </a>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
          <i
            className={`text-lg ${isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}`}></i>
        </button>
        <div>
          <Link to="/auth/signin-basic" className="btn btn-active-gray me-2">
            Sign In
          </Link>
          <button
            type="button"
            className="hidden btn btn-sub-primary md:inline-block">
            Get for free
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
