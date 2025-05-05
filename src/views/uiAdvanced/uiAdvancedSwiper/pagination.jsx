import React from 'react'

import gallery3 from '@assets/images/gallery/img-03.jpg'
// Import Swiper modules
import gallery4 from '@assets/images/gallery/img-04.jpg'
import gallery5 from '@assets/images/gallery/img-05.jpg'
import gallery6 from '@assets/images/gallery/img-06.jpg'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const PaginationSwiper = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Pagination</h6>
        </div>
        <div className="card-body">
          <Swiper
            className="pagination-swiper"
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Pagination]} // Include Pagination module
          >
            <SwiperSlide>
              <img
                src={gallery3}
                alt="Slide 1"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery4}
                alt="Slide 2"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery5}
                alt="Slide 3"
                className="object-cover w-full h-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery6}
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

export default PaginationSwiper
