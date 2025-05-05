import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const DifferentSettingsExamplesAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default duration for all animations
      once: true, // Whether animations should happen only once
    })
  }, [])
  return (
    <React.Fragment>
      <h5 className="mb-5 underline">Different settings examples Animation:</h5>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="fade-up"
              data-aos-duration="3000"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">
                data-aos="fade-up" data-aos-duration="3000"
              </code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">
                data-aos="fade-down" data-aos-easing="linear"
                data-aos-duration="1500"
              </code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">
                data-aos="fade-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              </code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">
                data-aos="fade-left" data-aos-anchor="#example-anchor"
                data-aos-offset="500" data-aos-duration="500"
              </code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">
                data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                data-aos-delay="300" data-aos-offset="0"
              </code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">
                data-aos="flip-left" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              </code>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DifferentSettingsExamplesAnimation
