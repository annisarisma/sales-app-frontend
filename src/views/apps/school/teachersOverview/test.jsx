import React, { useCallback, useEffect, useState } from 'react'

import { GraduationCap } from 'lucide-react'

const Test = () => {
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
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
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
            <button
              type="button"
              className="w-full btn btn-primary"
              onClick={nextExam}>
              Next Exam
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Test
