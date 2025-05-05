import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const CircleProgress = ({ initialPercent }) => {
  const [percent, setPercent] = useState(initialPercent)
  const circumference = 2 * Math.PI * 16 // Based on r=16 from SVG circle
  const progress = circumference - (percent / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercent(initialPercent)
    }, 100)
    return () => clearTimeout(timer)
  }, [initialPercent])

  return (
    <div className="relative size-12 shrink-0" dir="ltr">
      <svg
        className="size-full"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-sky-500/10"
          strokeWidth="3"></circle>
        <g className="origin-center transform -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-sky-500"
            strokeWidth="3"
            strokeDasharray="100"
            strokeDashoffset={progress}
            style={{ transition: 'stroke-dashoffset 1s ease-out' }}></circle>
        </g>
      </svg>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 start-1/2">
        <span className="text-xs font-bold text-center text-gray-800 dark:text-dark-50">{`${percent}%`}</span>
      </div>
    </div>
  )
}

const Quiz = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-header">
          <h6 className="card-title">Create Quiz</h6>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CircleProgress initialPercent={32} />
              <div className="overflow-hidden grow">
                <h6 className="mb-1 truncate">
                  <Link to="#!">Trivia Time: Fun Facts and Figures</Link>
                </h6>
                <div className="flex items-center gap-3">
                  <p className="text-gray-500 dark:text-dark-500 grow">
                    Expert:
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                  </p>
                  <button
                    type="button"
                    className="btn btn-green px-2 py-0.5 text-11">
                    <i className="ri-play-line"></i> Start
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CircleProgress initialPercent={52} />
              <div className="overflow-hidden grow">
                <h6 className="mb-1 truncate">
                  <Link to="#!">Chemistry Conundrums: Elemental Quiz</Link>
                </h6>
                <div className="flex items-center gap-3">
                  <p className="text-gray-500 dark:text-dark-500 grow">
                    Expert:
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </p>
                  <button
                    type="button"
                    className="btn btn-green px-2 py-0.5 text-11">
                    <i className="ri-play-line"></i> Start
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CircleProgress initialPercent={10} />
              <div className="overflow-hidden grow">
                <h6 className="mb-1 truncate">
                  <Link to="#!">A Mathematics Challenge</Link>
                </h6>
                <div className="flex items-center gap-3">
                  <p className="text-gray-500 dark:text-dark-500 grow">
                    Expert:
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </p>
                  <button
                    type="button"
                    className="btn btn-green px-2 py-0.5 text-11">
                    <i className="ri-play-line"></i> Start
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CircleProgress initialPercent={95} />
              <div className="overflow-hidden grow">
                <h6 className="mb-1 truncate">
                  <Link to="#!">The Digital World Quiz</Link>
                </h6>
                <div className="flex items-center gap-3">
                  <p className="text-gray-500 dark:text-dark-500 grow">
                    Expert:
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="text-yellow-500 ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </p>
                  <button
                    type="button"
                    className="btn btn-green px-2 py-0.5 text-11">
                    <i className="ri-play-line"></i> Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Quiz
