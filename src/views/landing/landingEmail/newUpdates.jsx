import React, { useEffect } from 'react'

import emailDark from '@assets/images/email/email-dark.png'
import emailImage from '@assets/images/email/email.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Apple, MoveRight } from 'lucide-react'

const NewUpdates = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    })
  }, [])

  return (
    <React.Fragment>
      <section
        className="relative pt-12 overflow-hidden md:pt-24 bg-gray-50 dark:bg-dark-900/50"
        id="updates">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="mb-3 leading-normal capitalize">
              Customers can easily receive new updates
            </h2>
            <p className="text-gray-500 dark:text-dark-500 mb-7 text-16">
              Domiex enables seamless collaboration with clients and team
              members.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button type="button" className="btn btn-primary">
                <Apple className="inline-block mb-0.5 mr-1 size-4" /> Download
                For Mac
              </button>
              <button type="button" className="btn btn-sub-gray">
                Open Live Demos{' '}
                <MoveRight className="inline-block ml-1 mb-0.5 size-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <img
                src={emailImage}
                alt="emailImage"
                className="relative border-2 border-gray-200 rounded-lg dark:border-dark-800 -bottom-5 dark:hidden"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <img
                src={emailDark}
                alt="emailImage"
                className="relative border-2 border-gray-200 rounded-lg dark:border-dark-800 -bottom-5 hidden dark:block"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default NewUpdates
