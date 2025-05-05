import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

// CircleProgress Component
const CircleProgress = ({ percent }) => {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    // Animate progress
    const progressValue = 100 - percent
    setProgress(progressValue)
  }, [percent])

  return (
    <React.Fragment>
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
            className="stroke-current text-sky-500/15"
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
          <span className="text-xs font-bold text-center text-gray-800 dark:text-white">{`${percent}%`}</span>
        </div>
      </div>
    </React.Fragment>
  )
}

// Main Component
const PendingQuiz = () => {
  const quizzes = [
    {
      title: 'Trivia Time: Fun Facts and Figures',
      expertRating: 3,
      percent: 32,
    },
    {
      title: 'Chemistry Conundrums: Elemental Quiz',
      expertRating: 2,
      percent: 52,
    },
    { title: 'A Mathematics Challenge', expertRating: 3, percent: 10 },
    { title: 'The Digital World Quiz', expertRating: 3, percent: 95 },
  ]

  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-header">
          <h6 className="card-title">Pending Quiz</h6>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            {quizzes.map((quiz, index) => (
              <div key={index} className="flex items-center gap-3">
                <CircleProgress percent={quiz.percent} />
                <div className="overflow-hidden grow">
                  <h6 className="mb-1 truncate">
                    <Link to="#!">{quiz.title}</Link>
                  </h6>
                  <div className="flex items-center gap-3">
                    <p className="text-gray-500 grow dark:text-dark-500">
                      Expert:{' '}
                      {[...Array(3)].map((_, i) => (
                        <i
                          key={i}
                          className={`${
                            i < quiz.expertRating ? 'text-yellow-500' : ''
                          } ri-star-s-fill`}></i>
                      ))}
                    </p>
                    <button
                      type="button"
                      className="btn btn-green px-2 py-0.5 text-11">
                      <i className="ri-play-line"></i> Start
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PendingQuiz
