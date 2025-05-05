import React from 'react'

import user10 from '@assets/images/avatar/user-10.png'
import user11 from '@assets/images/avatar/user-11.png'
import user14 from '@assets/images/avatar/user-14.png'
import user16 from '@assets/images/avatar/user-16.png'
import user17 from '@assets/images/avatar/user-17.png'
import Pattern from '@assets/images/dashboards/ecommerce/pattern.png'
import fileManager from '@assets/images/dashboards/file-manager.png'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Favorites = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4">
        <h6 className="mb-3">My Favorites</h6>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper group/swiper"
          dir="ltr">
          <SwiperSlide>
            <div className="flex items-center gap-3 p-3 card bg-sky-100 dark:bg-sky-500/15 dark:border-sky-500/20 border-sky-200">
              <div className="grow">
                <h6 className="mb-1">
                  <Link to="#!">Images</Link>
                </h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  2471 Files
                </p>
              </div>
              <div>
                <div className="flex ml-3 -space-x-3 grow">
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user14Image"
                      src={user14}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user16Image"
                      src={user16}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user17Image"
                      src={user17}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-3 p-3 bg-pink-100 border-pink-200 dark:border-pink-500/20 card dark:bg-pink-500/15">
              <div className="grow">
                <h6 className="mb-1">
                  <Link to="#!">Download</Link>
                </h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  547 Files
                </p>
              </div>
              <div>
                <div className="flex ml-3 -space-x-3 grow">
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user14Image"
                      src={user14}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user17Image"
                      src={user17}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-3 p-3 bg-purple-100 border-purple-200 dark:border-purple-500/20 card dark:bg-purple-500/15">
              <div className="grow">
                <h6 className="mb-1">
                  <Link to="#!">Domiex Project</Link>
                </h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  1479 Files
                </p>
              </div>
              <div>
                <div className="flex ml-3 -space-x-3 grow">
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user14Image"
                      src={user14}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user16Image"
                      src={user16}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user10Image"
                      src={user10}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user11Image"
                      src={user11}
                    />
                  </Link>
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      alt="user17Image"
                      src={user17}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next after:font-remix after:!text-2xl after:text-primary-500 !size-6 bg-white rounded-full opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']"></div>
          <div className="swiper-button-prev after:font-remix after:!text-2xl after:text-primary-500 !size-6 bg-white rounded-full opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea64']"></div>
        </Swiper>
        <div className="relative card">
          <div className="absolute bottom-0 right-0 opacity-45">
            <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-900"></div>
            <img src={Pattern} alt="patternImage" className="h-40" />
          </div>
          <div className="relative card-body">
            <img
              src={fileManager}
              alt="fileManagerImage"
              className="h-32 mx-auto"
              width={128}
              height={128}
            />
            <h6 className="mt-5 mb-1">Upgrade to Pro</h6>
            <p className="mb-5 text-gray-500 dark:text-dark-500">
              Unlock your plan to Pro to get access all features!
            </p>
            <Link
              to="/page/pricing"
              type="button"
              className="w-full btn btn-primary">
              Upgrade Now
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Favorites
