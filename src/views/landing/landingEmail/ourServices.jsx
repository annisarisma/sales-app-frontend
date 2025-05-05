import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Fan, GalleryVerticalEnd, Gem, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <section
      className="relative py-12 md:py-24 bg-gray-50 dark:bg-dark-900/50"
      id="services">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space">
          <div data-aos="fade-up">
            <div className="p-4 mb-4 bg-white rounded-lg text-primary-500 size-14 dark:bg-dark-900">
              <Fan className="fill-primary-500/20" />
            </div>
            <h5 className="mb-1">Stay Professional</h5>
            <p className="mb-4 text-gray-500 dark:text-dark-500 text-16">
              To most people, acting like a professional means working and
              behaving in such a way that others think of them as competent,
              reliable, and respectful.
            </p>
            <Link to="#!" className="link link-primary text-16">
              Read More <MoveRight className="inline-block ml-1 size-4" />
            </Link>
          </div>
          <div data-aos="fade-up">
            <div className="p-4 mb-4 bg-white rounded-lg text-primary-500 size-14 dark:bg-dark-900">
              <GalleryVerticalEnd className="fill-primary-500/20" />
            </div>
            <h5 className="mb-1">Notes & Documents</h5>
            <p className="mb-4 text-gray-500 dark:text-dark-500 text-16">
              A mortgage note document is a legally binding instrument that
              outlines the terms of a loan agreement between a borrower and a
              lender, specifying.
            </p>
            <Link to="#!" className="link link-primary text-16">
              Read More <MoveRight className="inline-block ml-1 size-4" />
            </Link>
          </div>
          <div data-aos="fade-up">
            <div className="p-4 mb-4 bg-white rounded-lg text-primary-500 size-14 dark:bg-dark-900">
              <Gem className="fill-primary-500/20" />
            </div>
            <h5 className="mb-1">Automation</h5>
            <p className="mb-4 text-gray-500 dark:text-dark-500 text-16">
              Automation is the application of technology, programs, robotics,
              or processes to achieve outcomes with minimal human input.
            </p>
            <Link to="#!" className="link link-primary text-16">
              Read More <MoveRight className="inline-block ml-1 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
