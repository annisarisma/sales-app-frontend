import React, { useCallback, useEffect, useState } from 'react'

import medal from '@assets/images/school/medal.png'
import trophy from '@assets/images/school/trophy.png'
import winner from '@assets/images/school/winner.png'
import { GraduationCap } from 'lucide-react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const StudentAchievements = () => {
  // Array of exams
  const exams = [
    { subject: 'Vector Algebra (Mathematics)', date: '15 July, 2024' },
    { subject: 'Biomolecules (Chemistry)', date: '20 August, 2024' },
    { subject: 'Human Reproduction (Biology)', date: '10 September, 2024' },
  ]

  const [currentExamIndex, setCurrentExamIndex] = useState(0)
  const [show, setShow] = useState(true)

  const nextExam = useCallback(() => {
    setShow(false)
    setTimeout(() => {
      setCurrentExamIndex((currentExamIndex + 1) % exams.length)
      setShow(true)
    }, 500)
  }, [currentExamIndex, exams.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextExam()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextExam])

  const currentExam = exams[currentExamIndex]
  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
        <div className="card">
          <div className="flex items-center gap-4 card-body">
            <div className="grow">
              <div className="flex items-center gap-3 mb-2.5">
                <h6 className="grow">Complete Your Profile</h6>
                <h6 className="text-xs font-semibold text-red-500">67.98%</h6>
              </div>
              <div className="bg-green-100 progress-bar progress-1">
                <div className="w-[67.98%] text-white bg-green-500 progress-bar-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
        <div className="card">
          <div className="card-body">
            <h6 className="mb-6">My Achievements and Milestones</h6>
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              loop={true}
              className="group/swiper">
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

              <div className="swiper-button-next after:font-remix after:!text-2xl after:text-gray-800 dark:after:text-dark-100 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']"></div>
              <div className="swiper-button-prev after:font-remix after:!text-2xl after:text-gray-800 dark:after:text-dark-100 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea64']"></div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-body">
          <div className="flex items-center justify-center mb-5 text-gray-500 bg-gray-100 rounded-md dark:text-dark-500 dark:bg-dark-850 size-14">
            <GraduationCap />
          </div>
          <h6 className="mb-1">Upcoming Test</h6>
          <div
            className={`${
              show ? 'opacity-100' : 'opacity-0'
            } transition-opacity ease-out duration-500`}>
            <p className="text-gray-500 dark:text-dark-500">
              Your <span className="font-semibold">{currentExam.subject}</span>{' '}
              Test will be on
              <span className="font-semibold"> {currentExam.date}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button type="button" className="w-full btn btn-sub-gray">
              Learn More
            </button>
            <button type="button" className="w-full btn btn-primary">
              Next Exam
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentAchievements
