import React from 'react'

import medal from '@assets/images/school/medal.png'
import trophy from '@assets/images/school/trophy.png'
import winner from '@assets/images/school/winner.png'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Achievements = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3">
        <div className="card">
          <div className="card-body">
            <h6 className="mb-6">My Achievements and Milestones</h6>

            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}>
              <SwiperSlide>
                <div className="py-3 text-center">
                  <div className="flex items-center justify-center p-2 mx-auto rounded-full bg-gradient-to-t from-yellow-500/10 ring-offset-2 dark:ring-offset-dark-900 size-28 ring-2 ring-yellow-500/10">
                    <img
                      src={trophy}
                      alt="Academic Excellence Awards"
                      className="size-20"
                    />
                  </div>
                  <h6 className="mt-6">Academic Excellence Awards</h6>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="py-3 text-center">
                  <div className="flex items-center justify-center p-2 mx-auto rounded-full bg-gradient-to-t from-green-500/10 ring-offset-2 dark:ring-offset-dark-900 size-28 ring-2 ring-green-500/10">
                    <img
                      src={medal}
                      alt="Special Recognition Awards"
                      className="size-20"
                    />
                  </div>
                  <h6 className="mt-6">Special Recognition Awards</h6>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="py-3 text-center">
                  <div className="flex items-center justify-center p-2 mx-auto rounded-full bg-gradient-to-t from-yellow-500/10 ring-offset-2 dark:ring-offset-dark-900 size-28 ring-2 ring-yellow-500/10">
                    <img
                      src={winner}
                      alt="Arts and Sports Awards"
                      className="size-20"
                    />
                  </div>
                  <h6 className="mt-6">Arts and Sports Awards</h6>
                </div>
              </SwiperSlide>

              {/* Navigation Buttons */}
              <div className="swiper-button-next after:font-remix after:!text-2xl after:text-gray-800 dark:after:text-dark-50 opacity-0 group-hover:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']"></div>
              <div className="swiper-button-prev after:font-remix after:!text-2xl after:text-gray-800 dark:after:text-dark-50 opacity-0 group-hover:opacity-100 transition ease-linear duration-300 after:content-['\ea64']"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Achievements
