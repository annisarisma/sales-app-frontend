import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt'

const CountdownTimer = ({ deadline }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    document.title =
      'Coming Soon | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const t =
        Date.parse(deadline.toString()) - Date.parse(new Date().toString())
      const seconds = Math.floor((t / 1000) % 60)
      const minutes = Math.floor((t / 1000 / 60) % 60)
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
      const days = Math.floor(t / (1000 * 60 * 60 * 24))

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      })

      if (t <= 0) {
        clearInterval(intervalId)
      }
    }

    calculateTimeRemaining()
    const intervalId = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(intervalId)
  }, [deadline])

  return (
    <div className="flex items-center justify-center gap-5 mb-5">
      <div className="w-24 p-2">
        <h3 className="mb-1">{String(timeRemaining.days).padStart(2, '0')}</h3>
        <div className="text-gray-500 dark:text-dark-500 smalltext">Days</div>
      </div>
      <div className="w-24 p-2">
        <h3 className="mb-1">{String(timeRemaining.hours).padStart(2, '0')}</h3>
        <div className="text-gray-500 dark:text-dark-500 smalltext">Hours</div>
      </div>
      <div className="w-24 p-2">
        <h3 className="mb-1">
          {String(timeRemaining.minutes).padStart(2, '0')}
        </h3>
        <div className="text-gray-500 dark:text-dark-500 smalltext">
          Minutes
        </div>
      </div>
      <div className="w-24 p-2">
        <h3 className="mb-1">
          {String(timeRemaining.seconds).padStart(2, '0')}
        </h3>
        <div className="text-gray-500 dark:text-dark-500 smalltext">
          Seconds
        </div>
      </div>
    </div>
  )
}

const ComingSoon = () => {
  const tiltRef = useRef(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        'full-page-listening': true,
      })
    }
  }, [])

  const deadline = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000)

  return (
    <div className="relative flex items-center justify-center min-h-screen py-20 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3">
            <h1 className="pb-5 text-4xl font-bold text-transparent drop-shadow-lg md:text-6xl lg:text-7xl ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
              We're Coming Soon
            </h1>
            <CountdownTimer deadline={deadline} />
            <p className="max-w-2xl mx-auto mb-5 text-gray-500 dark:text-dark-500 text-16">
              Receive the latest articles and business updates you need to know,
              along with special weekly recommendations.
            </p>
            <form action="#!" className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="email"
                  className="h-12 bg-transparent ltr:pr-32 rtl:pl-32 dark:bg-transparent form-input"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="absolute ltr:right-1 rtl:left-1 top-1 btn btn-primary">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-gray-500 dark:text-dark-500">
                Sign up now to receive early notifications about our launch
                date!
              </p>
            </form>
            <div className="flex items-center justify-center gap-2 mt-5">
              <Link
                to="#!"
                className="inline-flex items-center justify-center text-white rounded-full shadow-lg bg-sky-500 shadow-gray-200 dark:shadow-dark-800 size-10">
                <i className="ri-linkedin-fill text-[20px]"></i>
              </Link>
              <Link
                to="#!"
                className="inline-flex items-center justify-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                <i className="ri-dribbble-fill text-[20px]"></i>
              </Link>
              <Link
                to="#!"
                className="inline-flex items-center justify-center text-white rounded-full shadow-lg bg-primary-500 shadow-gray-200 dark:shadow-dark-800 size-10">
                <i className="ri-facebook-fill text-[20px]"></i>
              </Link>
              <Link
                to="#!"
                className="inline-flex items-center justify-center text-white bg-purple-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                <i className="ri-twitch-line text-[20px]"></i>
              </Link>
              <Link
                to="#!"
                className="inline-flex items-center justify-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                <i className="ri-instagram-line text-[20px]"></i>
              </Link>
              <Link
                to="#!"
                className="inline-flex items-center justify-center text-white bg-orange-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
                <i className="ri-gitlab-line text-[20px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
