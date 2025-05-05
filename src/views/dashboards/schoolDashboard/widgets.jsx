import React from 'react'

import blog1 from '@assets/images/school/blog/img-01.jpg'
import blog2 from '@assets/images/school/blog/img-02.jpg'
import blog3 from '@assets/images/school/blog/img-03.jpg'
import blog4 from '@assets/images/school/blog/img-04.jpg'
import blog5 from '@assets/images/school/blog/img-05.jpg'
import blog6 from '@assets/images/school/blog/img-06.jpg'
import blog7 from '@assets/images/school/blog/img-07.jpg'
import blog8 from '@assets/images/school/blog/img-08.jpg'
import holiday from '@assets/images/school/holiday.png'
import {
  BookOpen,
  CircleDot,
  Computer,
  Ellipsis,
  GraduationCap,
  HandCoins,
  Medal,
  MoveRight,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '../../../components/CustomComponents/Dropdown/Dropdown'
import AnimatedCounter from '../analyticsDashboards/counter'
import Calendar from './calendar'
import { GradientDonutApp } from './schoolCharts'

const Widgets = () => {
  return (
    <React.Fragment>
      <div className="relative order-1 col-span-12 md:col-span-4 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-7">
            <div className="flex items-center justify-center rounded-md bg-primary-500 size-7 text-primary-50">
              <GraduationCap className="size-5" />
            </div>
            <p className="text-gray-500 dark:text-dark-500">Total Students</p>
          </div>
          <h5 className="relative inline-block mb-2 before:absolute before:border-b-2 before:border-primary-500 before:inset-x-0 before:-bottom-1">
            <AnimatedCounter start={500} end={1478} duration={3000} />
          </h5>
        </div>
      </div>
      <div className="relative order-2 col-span-12 md:col-span-4 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-7">
            <div className="flex items-center justify-center bg-orange-500 rounded-md size-7 text-orange-50">
              <UserRound className="size-5" />
            </div>
            <p className="text-gray-500 dark:text-dark-500">Total Teachers</p>
          </div>
          <h5 className="relative inline-block mb-2 before:absolute before:border-b-2 before:border-orange-500 before:inset-x-0 before:-bottom-1">
            <AnimatedCounter start={500} end={120} duration={3000} />
          </h5>
        </div>
      </div>
      <div className="relative order-3 col-span-12 md:col-span-4 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-7">
            <div className="flex items-center justify-center rounded-md bg-sky-500 size-7 text-sky-50">
              <BookOpen className="size-5" />
            </div>
            <p className="text-gray-500 dark:text-dark-500">Total Courses</p>
          </div>
          <h5 className="relative inline-block mb-2 before:absolute before:border-b-2 before:border-sky-500 before:inset-x-0 before:-bottom-1">
            <AnimatedCounter start={500} end={120} duration={3000} />
          </h5>
        </div>
      </div>
      <div className="relative order-7 col-span-12 2xl:order-4 2xl:col-span-3 2xl:row-span-2 card">
        <div className="flex justify-between items-center gap-5 card-header">
          <h6 className="card-title">Course Activities</h6>
          <Dropdown
            position="right"
            trigger="click"
            dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
              <Ellipsis className="size-5" />
            </DropdownButton>
            <DropdownMenu>
              <Link to="/apps/event/overview" className="dropdown-item">
                <span>Weekly</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <span>Monthly</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <GradientDonutApp
            chartColors="[bg-gray-200, bg-primary-500]"
            chartDarkColors="[bg-dark-800, bg-primary-500]"
            chartId="gradientDonutChart"
          />
        </div>
      </div>
      <div className="order-8 col-span-12 2xl:order-5 2xl:col-span-3 2xl:row-span-4 card">
        <div className="card-body">
          <Calendar />

          <div className="flex items-center gap-3 mb-4">
            <h6 className="grow">Holiday Lists</h6>
            <Link
              to="#!"
              className="shrink-0 text-13 link link-primary text-primary-500">
              View More <MoveRight className="inline-block size-4" />
            </Link>
          </div>

          <Swiper
            className="mySwiper"
            dir="ltr"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation, Autoplay]} // Include Autoplay in modules
            autoplay={{
              delay: 2000, // Autoplay delay in ms
              disableOnInteraction: false, // Keep autoplay even after interactions
            }}>
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="relative card">
                  <div className="flex items-center gap-3 card-body">
                    <div className="grow">
                      <h6 className="mb-1">
                        <CircleDot className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15" />{' '}
                        World Braille Day
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 text-13">
                        04 Jan, 2024
                      </p>
                    </div>
                    <img
                      src={holiday}
                      alt="holidayImg"
                      className="shrink-0 size-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card">
                  <div className="flex items-center gap-3 card-body">
                    <div className="grow">
                      <h6 className="mb-1">
                        <CircleDot className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15" />{' '}
                        Earth Hour
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 text-13">
                        23 March 2024
                      </p>
                    </div>
                    <img
                      src={holiday}
                      alt="holidayImg"
                      className="shrink-0 size-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card">
                  <div className="flex items-center gap-3 card-body">
                    <div className="grow">
                      <h6 className="mb-1">
                        <CircleDot className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15" />{' '}
                        Software Freedom Day
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 text-13">
                        15 Sep 2024
                      </p>
                    </div>
                    <img
                      src={holiday}
                      alt="holidayImg"
                      className="shrink-0 size-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card">
                  <div className="flex items-center gap-3 card-body">
                    <div className="grow">
                      <h6 className="mb-1">
                        <CircleDot className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15" />{' '}
                        Inventors Day
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 text-13">
                        29 Sep 2024
                      </p>
                    </div>
                    <img
                      src={holiday}
                      alt="holidayImg"
                      className="shrink-0 size-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card">
                  <div className="flex items-center gap-3 card-body">
                    <div className="grow">
                      <h6 className="mb-1">
                        <CircleDot className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15" />{' '}
                        World Teacher's Day
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 text-13">
                        05 Oct 2024
                      </p>
                    </div>
                    <img
                      src={holiday}
                      alt="holidayImg"
                      className="shrink-0 size-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card">
                  <div className="flex items-center gap-3 card-body">
                    <div className="grow">
                      <h6 className="mb-1">
                        <CircleDot className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15" />{' '}
                        Human Rights Day
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 text-13">
                        10 Dec 2024
                      </p>
                    </div>
                    <img
                      src={holiday}
                      alt="holidayImg"
                      className="shrink-0 size-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>

          <div className="relative">
            <h6 className="mb-4">Notice Board</h6>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={blog5}
                  alt="blog5Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Beginning or end of the school year
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Erwin Legros
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog3}
                  alt="blog3Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Motivational or inspirational quotes
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Ardith Bode
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog4}
                  alt="blog4Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Examination & Parent - Teacher Meeting
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Gerhard Boyle
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog2}
                  alt="blog2Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Elementary school student activities
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Maci Crist
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog1}
                  alt="blog1Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Random acts of kindness board compare and contrast
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Ruthie Blanda
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog6}
                  alt="blog6Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      A Book a Day Keeps the Monsters Away
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Magnus Miller
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog7}
                  alt="blog7Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Student Work Coming Bulletin Board
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Jeremie Thiel
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={blog8}
                  alt="blog8Img"
                  className="object-cover w-16 h-20 rounded-md"
                />
                <div>
                  <h6 className="mb-2 line-clamp-2">
                    <Link
                      to="#!"
                      className="text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                      Add a Little Sunshine to Someone’s Day
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    By Treva Trantow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative order-4 col-span-12 2xl:order-6 md:col-span-4 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-7">
            <div className="flex items-center justify-center bg-yellow-500 rounded-md size-7 text-yellow-50">
              <Computer className="size-5" />
            </div>
            <p className="text-gray-500 dark:text-dark-500">Class Rooms</p>
          </div>
          <h5 className="relative inline-block mb-2 before:absolute before:border-b-2 before:border-yellow-500 before:inset-x-0 before:-bottom-1">
            <AnimatedCounter start={500} end={65} duration={3000} />
          </h5>
        </div>
      </div>
      <div className="relative order-5 col-span-12 2xl:order-7 md:col-span-4 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-7">
            <div className="flex items-center justify-center bg-pink-500 rounded-md size-7 text-pink-50">
              <HandCoins className="size-5" />
            </div>
            <p className="text-gray-500 dark:text-dark-500">Total Earnings</p>
          </div>
          <h5 className="relative inline-block mb-2 before:absolute before:border-b-2 before:border-pink-500 before:inset-x-0 before:-bottom-1">
            $<AnimatedCounter start={500} end={487} duration={3000} />M
          </h5>
        </div>
      </div>
      <div className="relative order-6 col-span-12 2xl:order-8 md:col-span-4 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-7">
            <div className="flex items-center justify-center bg-purple-500 rounded-md size-7 text-purple-50">
              <Medal className="size-5" />
            </div>
            <p className="text-gray-500 dark:text-dark-500">Awards</p>
          </div>
          <h5 className="relative inline-block mb-2 before:absolute before:border-b-2 before:border-purple-500 before:inset-x-0 before:-bottom-1">
            <AnimatedCounter start={500} end={30} duration={3000} />+
          </h5>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Widgets
