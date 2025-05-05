import React, { useEffect } from 'react'

import aboutImage from '@assets/images/hospital/landing/about.jpg'
import 'aos/dist/aos.css'
import {
  CalendarPlus,
  Headset,
  MoveLeft,
  MoveRight,
  Pill,
  ShieldCheck,
} from 'lucide-react'

const OurDoctorsTeam = () => {
  return (
    <React.Fragment>
      <section className="relative py-14 md:py-28" id="about-us">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <div className="relative thumbnail before:absolute before:border ltr:before:-right-4 rtl:before:-left-4 before:size-full before:-bottom-4 before:border-sky-300 after:absolute after:size-full after:border ltr:after:-right-5 rtl:after:-left-5 after:-bottom-5 after:border-sky-300">
                <img
                  src={aboutImage}
                  alt="aboutImage"
                  className="relative z-10 rounded-xl"
                  width={648}
                  height={604}
                />
              </div>
            </div>
            <div data-aos="fade-up">
              <h1 className="mb-2 text-4xl leading-normal capitalize xl:text-4xl md:text-5xl">
                Professional Doctors with
                <span className="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">
                  15+ Years
                </span>
                of Experience
              </h1>
              <p className="mb-5 text-gray-500 dark:text-dark-500 text-16">
                Dr Jason Statham net worth has grown 68% this year, from $2.2
                billion (₹18,295 crore) in 2024, making him the richest doctor
                in USA. Comparative data indicates Dr Shopia is also the
                fastest-growing non-resident on the list.
              </p>
              <div className="grid grid-cols-1 gap-5 mb-6 sm:grid-cols-2 fs-16">
                <div className="relative flex gap-3">
                  <CalendarPlus className="mt-1 text-sky-500 size-5 shrink-0" />
                  <div>
                    <h6 className="mb-1">Make an Appointment</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      Schedule with your Favorite doctor anytime.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-3">
                  <ShieldCheck className="mt-1 text-sky-500 size-5 shrink-0" />
                  <div>
                    <h6 className="mb-1">Health Guarantee Forever</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      We stand behind our puppies with a two year genetic health
                      guarantee.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-3">
                  <Pill className="mt-1 text-sky-500 size-5 shrink-0" />
                  <div>
                    <h6 className="mb-1">Pharmacy Marketplace</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      Online pharmacy laws in India are still in nascent stage.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-3">
                  <Headset className="mt-1 text-sky-500 size-5 shrink-0" />
                  <div>
                    <h6 className="mb-1">24/7 Emergency Service</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      Expert team of doctors can handle any medical emergency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button type="button" className="py-3 btn btn-sky">
                  Learn More{' '}
                  <MoveRight className="inline-block ml-1 rtl:hidden size-4" />
                  <MoveLeft className="hidden mr-1 rtl:inline-block size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OurDoctorsTeam
