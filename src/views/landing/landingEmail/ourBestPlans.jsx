import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { CornerDownRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const OurBestPlans = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])

  return (
    <React.Fragment>
      <section className="relative py-12 md:py-24" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-3 leading-normal capitalize">
              Choose the plan that suits you best
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              A pricing strategy is a model or method used to establish the best
              price for a product or service. It helps you choose prices to
              maximize profits and shareholder value while considering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden card" data-aos="fade-up">
              <div className="absolute border-[40px] border-gray-100 dark:border-dark-850 size-64 -bottom-16 -right-16 rounded-creative"></div>
              <div className="relative lg:p-8 card-body">
                <div className="mb-8 text-center">
                  <h5 className="mb-1">Free</h5>
                  <p className="mb-6 text-gray-500 dark:text-dark-500">
                    Explore domiex mail together, for the
                  </p>
                  <h1>
                    $0
                    <sub className="text-sm text-gray-500 dark:text-dark-500">
                      /month
                    </sub>
                  </h1>
                </div>
                <Link
                  href="/page/pricing"
                  type="button"
                  className="w-full btn btn-sub-gray">
                  Get Started for free
                </Link>
                <ul className="flex flex-col gap-4 *:flex *:items-center *:gap-2 mt-7">
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    500 Emails
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    5 Automation Action
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    1 Products & Projects
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    Custom Permissions
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    Some Basic Integration
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    Up to 5 Team Members
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    24/7 Support
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative overflow-hidden card active group"
              data-aos="fade-up"
              data-aos-duration="2000">
              <div className="absolute border-[40px] border-gray-100 dark:border-dark-850 size-64 -bottom-16 -right-16 rounded-creative"></div>
              <div className="relative lg:p-8 card-body">
                <div className="absolute right-5 top-5 badge badge-pink">
                  Popular Plan
                </div>
                <div className="mb-8 text-center">
                  <h5 className="mb-1">Professional</h5>
                  <p className="mb-6 text-gray-500">
                    For professionals & small teams
                  </p>
                  <h1>
                    $29.99<sub className="text-sm text-gray-500">/month</sub>
                  </h1>
                </div>
                <Link
                  href="/page/pricing"
                  type="button"
                  className="w-full btn btn-primary">
                  Get Started
                </Link>
                <ul className="flex flex-col gap-4 *:flex *:items-center *:gap-2 mt-7">
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    2000 Emails
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    20 Automation Action
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    1 Products & Projects
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    Custom Permissions
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    Some Basic Integration
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    Up to 5 Team Members
                  </li>
                  <li>
                    <X className="inline-block text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850 size-4" />
                    24/7 Support
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative overflow-hidden card"
              data-aos="fade-up"
              data-aos-duration="2000">
              <div className="absolute border-[40px] border-gray-100 dark:border-dark-850 size-64 -bottom-16 -right-16 rounded-creative"></div>
              <div className="relative lg:p-8 card-body">
                <div className="mb-8 text-center">
                  <h5 className="mb-1">Organization</h5>
                  <p className="mb-6 text-gray-500 dark:text-dark-500">
                    Ideal for fastest growing businesses
                  </p>
                  <h1>Lat&apos;s Chat</h1>
                </div>
                <Link
                  href="/page/contact-us"
                  type="button"
                  className="w-full btn btn-sub-gray">
                  Contact Us
                </Link>
                <ul className="flex flex-col gap-4 *:flex *:items-center *:gap-2 mt-7">
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    Unlimited Emails
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    Unlimited automation
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    1 Products & Projects
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    Access All Features
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    Flexible Contract
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    Advanced Integration
                  </li>
                  <li>
                    <CornerDownRight className="inline-block text-green-500 fill-green-500/10 size-4" />
                    24/7 Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OurBestPlans
