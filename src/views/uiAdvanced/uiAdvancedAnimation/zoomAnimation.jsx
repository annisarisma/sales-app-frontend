import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const ZoomAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <React.Fragment>
      <h5 className="mb-5 underline">Zoom Animation:</h5>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-in"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-in"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-in-up"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-in-up"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-in-down"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-in-down"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-in-left"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-in-left"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-in-right"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-in-right"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-out"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-out"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-out-up"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-out-up"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-out-down"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-out-down"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-out-right"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-out-right"</code>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div
              className="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
              data-aos="zoom-out-left"></div>
            <div className="mt-3 text-center">
              <code className="text-pink-500">data-aos="zoom-out-left"</code>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ZoomAnimation
