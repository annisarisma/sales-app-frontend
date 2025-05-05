import React from 'react'

import { ourPatientData } from '@src/data/landingPage/doctors'
import { Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'

const OurClients = () => {
  return (
    <React.Fragment>
      <section
        className="relative py-14 md:py-28 bg-slate-50 dark:bg-dark-900/30"
        id="feedback">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="mb-2 text-4xl leading-normal capitalize md:text-5xl">
              Check what our
              <span className="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">
                Clients are saying
              </span>
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              Discover the expertise and compassion of our dedicated doctors at
              Meet. Your health is in caring hands with us.
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          className="py-2 mySwiper"
          dir="ltr"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}>
          <div className="swiper-wrapper">
            {ourPatientData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="relative p-6 mb-0 border-0 swiper-slide card">
                  <Quote className="absolute stroke-1 size-12 text-sky-400 fill-sky-500/15 ltr:right-5 rtl:left-5 top-5" />
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 overflow-hidden rounded-md size-12 shrink-0">
                      <img
                        src={data.image}
                        alt="PatientImg"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="grow">
                      <h6 className="mb-1">{data.name}</h6>
                      <p className="mb-4 text-gray-500 dark:text-dark-500">
                        {data.home}
                      </p>
                      <p className="text-17">
                        <q> {data.comment}</q>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </React.Fragment>
  )
}

export default OurClients
