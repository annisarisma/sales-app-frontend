import React, { useEffect } from 'react'

import img6 from '@assets/images/school/landing/img-06.png'
import img7 from '@assets/images/school/landing/img-07.png'
import img8 from '@assets/images/school/landing/img-08.png'
import img9 from '@assets/images/school/landing/img-09.png'
import img10 from '@assets/images/school/landing/img-10.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurMentors = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <React.Fragment>
      <section className="relative py-14 md:py-24" id="mentors">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-3 leading-normal capitalize">
              Meet with our mentors
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              Ask your potential mentor if he or she can make time for an hour
              meeting with you. You don&apos;t want to be rushed, and you want
              for the ask you questions about your goals, etc.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8">
            <div className="relative bg-transparent border-0 shadow-none dark:bg-transparent card thumbnail">
              <div className="relative pb-0 card-body before:absolute before:inset-x-0 before:bottom-0 before:bg-gray-100 dark:before:bg-gray-900/40 before:h-[80%] before:rounded-t-full">
                <img
                  src={img6}
                  alt="landingImg"
                  className="relative mx-auto max-h-80"
                  width={229}
                  height={320}
                />
              </div>
              <div className="text-center card-body">
                <h6 className="mb-1 text-16">John B. Gilliam</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Senior Instructor
                </p>
              </div>
            </div>
            <div className="relative bg-transparent border-0 shadow-none dark:bg-transparent card thumbnail">
              <div className="relative pb-0 card-body before:absolute before:inset-x-0 before:bottom-0 before:bg-gray-100 dark:before:bg-gray-900/40 before:h-[80%] before:rounded-t-full">
                <img
                  src={img7}
                  alt="landingImg"
                  className="relative mx-auto max-h-80"
                  width={229}
                  height={320}
                />
              </div>
              <div className="text-center card-body">
                <h6 className="mb-1 text-16">Patricia J. Dillon</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Junior Instructor
                </p>
              </div>
            </div>
            <div className="relative bg-transparent border-0 shadow-none dark:bg-transparent card thumbnail">
              <div className="relative pb-0 card-body before:absolute before:inset-x-0 before:bottom-0 before:bg-gray-100 dark:before:bg-gray-900/40 before:h-[80%] before:rounded-t-full">
                <img
                  src={img8}
                  alt="landingImg"
                  className="relative mx-auto max-h-80"
                  width={231}
                  height={320}
                />
              </div>
              <div className="text-center card-body">
                <h6 className="mb-1 text-16">Marian J. Martin</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Senior Instructor
                </p>
              </div>
            </div>
            <div className="relative bg-transparent border-0 shadow-none dark:bg-transparent card thumbnail">
              <div className="relative pb-0 card-body before:absolute before:inset-x-0 before:bottom-0 before:bg-gray-100 dark:before:bg-gray-900/40 before:h-[80%] before:rounded-t-full">
                <img
                  src={img9}
                  alt="landingImg"
                  className="relative mx-auto max-h-80"
                  width={231}
                  height={320}
                />
              </div>
              <div className="text-center card-body">
                <h6 className="mb-1 text-16">Theresa W. Berry</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Senior Instructor
                </p>
              </div>
            </div>
            <div className="relative bg-transparent border-0 shadow-none dark:bg-transparent card thumbnail">
              <div className="relative pb-0 card-body before:absolute before:inset-x-0 before:bottom-0 before:bg-gray-100 dark:before:bg-gray-900/40 before:h-[80%] before:rounded-t-full">
                <img
                  src={img10}
                  alt="landingImg"
                  className="relative mx-auto max-h-80"
                  width={229}
                  height={320}
                />
              </div>
              <div className="text-center card-body">
                <h6 className="mb-1 text-16">Jacklyn A. Keith</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Junior Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OurMentors
