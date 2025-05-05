import React from 'react'

import { ourExpertDoctorsData } from '@src/data/landingPage/doctors'
import { CalendarRange, MoveLeft, MoveRight, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const OurExpertDoctors = () => {
  return (
    <React.Fragment>
      <section className="relative py-14 md:py-28" id="doctors">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-2 text-4xl leading-normal capitalize md:text-5xl">
              Meet our
              <span className="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">
                Doctors
              </span>
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              Discover the expertise and compassion of our dedicated doctors at
              Meet. Your health is in caring hands with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-space">
            {ourExpertDoctorsData.map((item, index) => (
              <div
                className="relative overflow-hidden transition duration-300 ease-linear card hover:-translate-y-2 "
                key={index}>
                <span className="absolute rounded-xs ltr:-left-0.5 rtl:-right-0.5 top-6 badge badge-sub-orange text-13 px-5 py-1.5">
                  <Star className="inline-block ltr:mr-1 rtl:ml-1 size-3" />{' '}
                  {item.rating}
                </span>
                <div className="p-8">
                  <div className="mx-auto mt-6 overflow-hidden rounded-full shadow-lg size-24 ring-1 shadow-slate-200 ring-offset-2 ring-sky-500/20 dark:shadow-dark-800 dark:ring-offset-dark-900">
                    <img src={item.image} alt="doctorImg" />
                  </div>
                  <div className="mt-5 text-center">
                    <h6 className="mb-1">
                      <Link
                        to="#!"
                        className="link link-sky text-slate-800 dark:text-dark-100 dark:text-dark-100">
                        {item.name}
                      </Link>
                    </h6>
                    <p className="mb-3 text-gray-500 dark:text-dark-500">
                      {item.dutyPlace}
                    </p>
                    <span className="!rounded-xs min-w-32 badge badge-sky text-13">
                      {item.specialist}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-t border-gray-200 dark:border-dark-800">
                  <div className="p-4 text-center">
                    <Link to="#!" className="link link-sky">
                      <CalendarRange className="inline-block ltr:mr-1 rtl:ml-1 size-4 mb-0.5" />
                      Availability
                    </Link>
                  </div>
                  <div className="p-4 text-center border-l border-gray-200 dark:border-dark-800">
                    <Link to="#!" className="link link-sky">
                      <Phone className="inline-block ltr:mr-1 rtl:ml-1 size-4 mb-0.5" />{' '}
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <button type="button" className="btn btn-sky">
              View All Doctors
              <MoveRight className="inline-block ml-1 rtl:hidden size-4" />
              <MoveLeft className="hidden mr-1 rtl:inline-block size-4" />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OurExpertDoctors
