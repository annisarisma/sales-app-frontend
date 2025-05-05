import React from 'react'

import image5 from '@assets/images/school/landing/img-05.png'
import { BriefcaseBusiness, Feather, Gem, Handshake } from 'lucide-react'

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="relative py-14 md:py-24" id="about-us">
        <div className="hidden md:block size-[400px] lg:size-[480px] xl:size-[650px] border rounded-md border-orange-500 blur-xs absolute"></div>
        <div className="container mx-auto px-4">
          <div className="grid items-center grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-start-2">
              <div className="relative before:absolute before:inset-0 before:bg-orange-500/10 before:backdrop-blur-lg before:rounded-md before:top-20 thumbnail">
                <span className="absolute text-2xl font-bold tracking-wide uppercase -rotate-90 text-orange-500/30 -left-3 bottom-14">
                  Domiex
                </span>
                <img
                  src={image5}
                  alt="landingImg"
                  className="max-h-[36rem] relative mx-auto"
                  width={456}
                  height={576}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-start-8">
              <p className="mb-3 font-medium text-orange-500 text-16">
                About Us
              </p>
              <h2 className="mb-6 leading-normal capitalize">
                We are the best school and offer numerous advantages.
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-3 rounded-lg shadow-2xl shadow-gray-100 dark:shadow-dark-800/50">
                  <div className="flex items-center justify-center rounded-full size-12 bg-primary-500/10 text-primary-500">
                    <Gem className="size-6" />
                  </div>
                  <h6>Highlight Unique Programs and Curriculum</h6>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg shadow-2xl shadow-gray-100 dark:shadow-dark-800/50">
                  <div className="flex items-center justify-center rounded-full size-12 bg-primary-500/10 text-primary-500">
                    <Feather className="size-6" />
                  </div>
                  <h6>Qualified and Passionate Staff</h6>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg shadow-2xl shadow-gray-100 dark:shadow-dark-800/50">
                  <div className="flex items-center justify-center rounded-full size-12 bg-primary-500/10 text-primary-500">
                    <BriefcaseBusiness className="size-6" />
                  </div>
                  <h6>Modern Facilities and Technology</h6>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg shadow-2xl shadow-gray-100 dark:shadow-dark-800/50">
                  <div className="flex items-center justify-center rounded-full size-12 bg-primary-500/10 text-primary-500">
                    <Handshake className="size-6" />
                  </div>
                  <h6>Safe and Supportive Environment</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutUs
