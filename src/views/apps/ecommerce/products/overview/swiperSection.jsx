import React, { useState } from 'react'

import img4 from '@assets/images/products/img-04.png'
import img5 from '@assets/images/products/img-05.png'
import img6 from '@assets/images/products/img-06.png'
import img25 from '@assets/images/products/img-25.png'
import img26 from '@assets/images/products/img-26.png'
import img27 from '@assets/images/products/img-27.png'
import img28 from '@assets/images/products/img-28.png'
import img29 from '@assets/images/products/img-29.png'
import img30 from '@assets/images/products/img-30.png'
import { BadgeCheck, Check, ShoppingBasket, Store } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const swipeData = [
  { id: 1, pic: img25 },
  { id: 2, pic: img26 },
  { id: 3, pic: img27 },
  { id: 4, pic: img28 },
  { id: 5, pic: img29 },
  { id: 6, pic: img30 },
]
const SwiperSection = () => {
  const [activeLink, setActiveLink] = useState('blue')
  const colorOptions = [
    { color: 'blue', bgColor: 'bg-blue-500' },
    { color: 'pink', bgColor: 'bg-pink-500' },
    { color: 'green', bgColor: 'bg-green-500' },
    { color: 'red', bgColor: 'bg-red-500' },
  ]
  const [activeSize, setActiveSize] = useState('s')
  const sizes = ['s', 'm', 'l', 'xl', '2xl']

  return (
    <React.Fragment>
      <div className="sticky mb-5 top-24">
        <div className="card">
          <div className="card-body">
            <div className="bg-gray-100 dark:bg-dark-850">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  type: 'fraction',
                  el: '.swiper-pagination',
                }}
                className="previewImages"
                dir="ltr">
                {swipeData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.pic} alt="itemImg" />
                  </SwiperSlide>
                ))}

                <div className="swiper-button-next after:!content-['\ea6e'] after:!font-['remixicon'] after:bg-white dark:after:bg-dark-900 size-10 after:!text-4xl after:!size-10 after:flex after:justify-center after:align-center after:rounded-full"></div>
                <div className="swiper-button-prev after:!content-['\ea64'] after:!font-['remixicon'] after:bg-white dark:after:bg-dark-900 size-10 after:!text-4xl after:!size-10 after:flex after:justify-center after:align-center after:rounded-full"></div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-wrap items-center gap-3 card-body">
            <div className="flex items-center justify-center border border-gray-200 rounded-full dark:border-dark-800 shrink-0 size-14">
              <Store className="text-sky-500 fill-sky-500/10"></Store>
            </div>
            <div className="grow">
              <h6 className="mb-1">
                <Link to="#!">
                  <span className="align-middle">SRBThemes</span>
                  <BadgeCheck className="inline-block ml-1 size-4 text-sky-500 fill-sky-500/10"></BadgeCheck>
                </Link>
              </h6>
              <p>
                <i className="text-yellow-500 align-bottom ri-star-half-line"></i>{' '}
                4.8
              </p>
            </div>
            <button className="btn btn-purple shrink-0">View Store</button>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <h6 className="grow">Recent Product</h6>
          <Link to="#!" className="link link-primary">
            View All
          </Link>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="relative p-5 bg-gray-100 dark:bg-dark-850">
              <Link
                to="#!"
                className="absolute z-10 flex items-center justify-center bg-white rounded-full link link-red size-10 shrink-0 top-5 ltr:right-5 rtl:left-5">
                <i className="text-lg ri-heart-line"></i>
              </Link>

              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                className="productSlider"
                dir="ltr">
                <SwiperSlide>
                  <img src={img6} alt="img6" className="w-3/4 mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img4} alt="img4" className="w-3/4 mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img5} alt="img5" className="w-3/4 mx-auto" />
                </SwiperSlide>

                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
            <div className="mt-5">
              <h5 className="mb-2">$36.87</h5>
              <h6 className="mb-1">
                <Link to="#!" className="text-current link link-primary">
                  Bra Lace Crop top
                </Link>
              </h6>
              <p className="text-gray-500 dark:text-dark-500">Fashion</p>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 mt-3 grow">
                  {colorOptions.map(({ color, bgColor }) => (
                    <Link
                      key={color}
                      to="#!"
                      className={`flex items-center justify-center text-white ${bgColor} rounded-sm size-5 group/item ${activeLink === color ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveLink(color)
                      }}>
                      <Check
                        className={`size-4 ${activeLink === color ? 'block' : 'hidden'}`}></Check>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-row-reverse items-center gap-2 mt-3 font-medium shrink-0">
                  {sizes.map((size) => (
                    <Link
                      key={size}
                      to="#!"
                      className={`text-gray-500 dark:text-dark-500 [&.active]:text-green-500 ${activeSize === size ? 'active text-green-500' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveSize(size)
                      }}>
                      {size.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button type="button" className="w-full btn btn-primary">
                  Buy Now
                </button>
                <Link to="#!" className="btn btn-sub-gray btn-icon shrink-0">
                  <ShoppingBasket className="size-5"></ShoppingBasket>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SwiperSection
