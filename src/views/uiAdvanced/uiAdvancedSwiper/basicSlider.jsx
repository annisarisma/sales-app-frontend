import React from 'react'

import gallery1 from '@assets/images/gallery/img-01.jpg'
import gallery2 from '@assets/images/gallery/img-02.jpg'
import gallery3 from '@assets/images/gallery/img-03.jpg'
import gallery4 from '@assets/images/gallery/img-04.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'

const BasicSlider = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Basic Slider</h6>
        </div>
        <div className="card-body">
          {/* Swiper */}
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="mySwiper">
            <SwiperSlide>
              <img
                src={gallery1}
                alt="Slide 1"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery2}
                alt="Slide 2"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery3}
                alt="Slide 3"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery4}
                alt="Slide 4"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BasicSlider
