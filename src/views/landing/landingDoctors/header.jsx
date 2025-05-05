import React, { useEffect, useState } from 'react'

import whiteLogo from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import { LAYOUT_MODE_TYPES } from '@src/components/Constants/layout'
import { changeLayoutMode } from '@src/slices/thunk'
import { Headset, Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const { layoutMode } = useSelector((state) => state.Layout)
  const dispatch = useDispatch()
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
//scroll section active class
useEffect(() => {
    const sectionIds = ['home', 'about-us', 'services', 'doctors', 'feedback']
    const sectionElements = sectionIds.map((id) => document.getElementById(id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id)
            setActiveTab(index + 1)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust for more or less sensitivity
      }
    )

    sectionElements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // change layout mode
  const handleChangeLayoutMode = (value) => {
    dispatch(changeLayoutMode(value))
  }

  return (
    <React.Fragment>
      <header
        className={`landing-navbar h-20 top-0 [&.scroll-sticky]:top-0 [&.scroll-sticky]:shadow-gray-200/50 [&.scroll-sticky]:shadow-lg [&.scroll-sticky]:bg-white dark:[&.scroll-sticky]:shadow-dark-850 dark:[&.scroll-sticky]:bg-dark-900 ${isSticky ? 'scroll-sticky' : ''}`}>
        <div className="container mx-auto px-4 flex items-center gap-5 xl:px-20">
          {/* Logo */}
          <Link to="/" title="logo">
            <img
              src={whiteLogo}
              alt="White logo"
              className="hidden h-7 dark:inline-block"
              width={153}
              height={28}
            />
            <img
              src={mainLogo}
              alt="Main logo"
              className="inline-block h-7 dark:hidden"
              width={153}
              height={28}
            />
          </Link>

          {/* Navbar Links */}
          <div
            className={`navbar-collapase ltr:ml-auto rtl:mr-auto ${isMenuOpen ? '' : 'hidden xl:flex'}`}>
            <div className="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
              <a
                href="#home"
                onClick={() => setActiveTab(1)}
                className={`leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear ${activeTab === 1 ? 'active' : ''}`}>
                Home
              </a>
              <a
                href="#about-us"
                onClick={() => setActiveTab(2)}
                className={`leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear ${activeTab === 2 ? 'active' : ''}`}>
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setActiveTab(3)}
                className={`leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear ${activeTab === 3 ? 'active' : ''}`}>
                Our Service
              </a>
              <a
                href="#doctors"
                onClick={() => setActiveTab(4)}
                className={`leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear ${activeTab === 4 ? 'active' : ''}`}>
                Our Doctors
              </a>
              <a
                href="#feedback"
                onClick={() => setActiveTab(5)}
                className={`leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear ${activeTab === 5 ? 'active' : ''}`}>
                Feedback
              </a>
            </div>
          </div>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="menu toggle"
            type="button"
            className="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
            <i
              className={`text-lg ${isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}`}
            />
          </button>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              type="button"
              title="light & dark btn"
              onClick={() =>
                handleChangeLayoutMode(
                  layoutMode === LAYOUT_MODE_TYPES.LIGHT
                    ? LAYOUT_MODE_TYPES.DARK
                    : LAYOUT_MODE_TYPES.LIGHT
                )
              }
              className="rounded-full btn btn-sub-gray btn-icon">
              {layoutMode === LAYOUT_MODE_TYPES.LIGHT ||
              layoutMode === LAYOUT_MODE_TYPES.DEFAULT ||
              layoutMode === LAYOUT_MODE_TYPES.BLACKWHITE ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
            <button type="button" className="btn btn-sky">
              <span className="hidden lg:inline-block ltr:mr-1 rtl:ml-1">
                Let&apos;s Talk
              </span>
              <Headset className="inline-block size-4" />
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
