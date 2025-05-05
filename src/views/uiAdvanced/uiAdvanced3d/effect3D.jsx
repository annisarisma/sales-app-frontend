import React from 'react'

import TiltCard from './tiltCard'

const Effect3D = () => {
  return (
    <React.Fragment>
      {/* Basic Tilt */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Basic</h6>
        </div>
        <div className="card-body">
          <TiltCard
            options={{ max: 25, speed: 400 }}
            className="bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Glare effect</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will enable a glare effect. You can tweak the
            glare value with
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, glare: true, 'max-glare': 0.8 }}
            className="bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
          />
        </div>
      </div>

      {/* Reverse Tilt */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Reverse Tilt</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will reverse the tilt.
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, reverse: true }}
            className="bg-gradient-to-br from-sky-600 to-sky-800"
          />
        </div>
      </div>

      {/* Keep Floating */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Keep Floating</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will not reset the tilt element when the user
            mouse leaves the element.
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, reset: false }}
            className="bg-gradient-to-br from-primary-600 to-primary-800"
          />
        </div>
      </div>

      {/* Full Page Listening */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Full Page Listening</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will make the element respond to any mouse
            movements on page.
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, fullPageListening: true }}
            className="bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
          />
        </div>
      </div>

      {/* Scale on Hover */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Scale on Hover</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will scale tilt element on hover.
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, scale: 1.1 }}
            className="bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
          />
        </div>
      </div>

      {/* Start Tilt Position */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Start Tilt Position</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will tilt the element at specific degrees at
            page load.
          </p>
          <TiltCard
            options={{
              max: 25,
              speed: 400,
              startX: 20,
              startY: -20,
              reset: true,
            }}
            className="bg-gradient-to-br from-sky-600 to-sky-800"
          />
        </div>
      </div>

      {/* Disable X axis */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Disable X axis</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will disable the X-Axis on the tilt element.
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, axis: 'y' }}
            className="bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
          />
        </div>
      </div>

      {/* Disable Y axis */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Disable Y axis</h6>
        </div>
        <div className="card-body">
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            Setting this option will disable the Y-Axis on the tilt element.
          </p>
          <TiltCard
            options={{ max: 25, speed: 400, axis: 'x' }}
            className="bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Effect3D
