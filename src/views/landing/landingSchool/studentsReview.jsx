import React from 'react'

import { studentReviewData } from '@src/data'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import { Autoplay, Controller, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const StudentsReview = () => {
  return (
    <React.Fragment>
      <section className="relative pt-14 md:py-24 bg-gradient-to-b from-orange-500/10">
        <div className="container mx-auto px-4">
          <div className="grid items-center grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6">
              <h2 className="mb-4 leading-normal capitalize">
                What Our Beloved Students Say About
              </h2>
              <p className="mb-5 text-gray-500 dark:text-dark-500 text-16">
                These testimonials reflect the profound impact our school has on
                its students, fostering an environment and achieve their dreams.
                Our students&apos; experiences speak volumes about the impact of
                our school. Here are some heartfelt testimonials from those who
                have thrived in our community:
              </p>
              <Link
                to="#!"
                className="text-orange-500 underline link hover:text-orange-600">
                View All Reviews
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="p-3 swiper-container mySwiper group/swiper"
                dir="ltr"
                autoplay={true}
                loop={true}
                speed={300}
                modules={[Navigation, Autoplay, Controller]}>
                {studentReviewData.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className="card">
                      <div className="p-8 card-body">
                        <img
                          src={data.image}
                          alt="studentImg"
                          className="rounded-modern size-20"
                        />
                        <div className="mt-5 text-lg text-gray-500 dark:text-dark-500">
                          {Array(data.rating)
                            .fill(0)
                            .map((_, index) => (
                              <i
                                key={index}
                                className="text-yellow-500 ri-star-fill"></i>
                            ))}
                        </div>
                        <h6 className="mt-3 mb-3">{data.title}</h6>
                        <p className="text-gray-500 text-16 dark:text-dark-500">
                          “ {data.text} ”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-next after:font-remix after:!text-base after:font-semibold after:text-orange-500 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']"></div>
                <div className="swiper-button-prev after:font-remix after:!text-base after:font-semibold after:text-orange-500 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea64']"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default StudentsReview
