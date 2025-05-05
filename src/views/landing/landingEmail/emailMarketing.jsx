import React, { useEffect } from 'react'

import darkImage from '@assets/images/email/email-dark.png'
import mainImage from '@assets/images/email/main.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MoveRight } from 'lucide-react'

const EmailMarketing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  })
  return (
    <React.Fragment>
      <section className="relative pt-40 pb-20 overflow-hidden xl:pb-48 2xl:pt-80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 lg:gap-x-16">
            <div className="col-span-12 xl:col-span-5" data-aos="fade-up">
              <h2 className="mb-2 leading-normal capitalize xl:leading-normal xl:text-5xl">
                Customers with the <span className="text-primary-500">#1</span>{' '}
                email marketing and automation.
              </h2>
              <p className="mb-5 text-lg text-gray-500 dark:text-dark-500">
                With AI-powered threat defenses, enterprise-grade security and
                privacy controls, and Google&apos;s security-by-design cloud
                infrastructure, Gmail helps keep your data protected,
                confidential, and compliant.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" className="btn btn-primary">
                  Request Demo{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </button>
                <button
                  type="button"
                  className="border-gray-200 dark:border-dark-800 btn btn-outline-gray">
                  Open in you browser
                </button>
              </div>
            </div>
            <div className="col-span-12 mt-8 xl:col-span-6 xl:col-start-7 md:mt-10 xl:mt-0">
              <div>
                <img
                  src={mainImage}
                  alt="mainImage"
                  className="relative dark:hidden xl:scale-[1.8] object-cover border border-gray-200 dark:border-dark-800 rounded-lg ltr:xl:-right-44 rtl:xl:-left-44 xl:top-16 2xl:top-auto"
                />
                <img
                  src={darkImage}
                  alt="mainImage"
                  className="relative hidden dark:block xl:scale-[1.8] object-cover border border-gray-200 dark:border-dark-800 rounded-lg ltr:xl:-right-44 rtl:xl:-left-44 xl:top-16 2xl:top-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EmailMarketing
