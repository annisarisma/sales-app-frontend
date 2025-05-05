import React from 'react'

import { lectures } from '@src/data'
import {
  Atom,
  FlaskConical,
  HeartPulse,
  JapaneseYen,
  Scale,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const UpcomingLecture = () => {
  const getLucideIcon = (icon, className) => {
    const icons = {
      'flask-conical': <FlaskConical className={className} />,
      scale: <Scale className={className} />,
      atom: <Atom className={className} />,
      'heart-pulse': <HeartPulse className={className} />,
      'japanese-yen': <JapaneseYen className={className} />,
    }
    return icons[icon]
  }

  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-header">
          <h6 className="card-title">Upcoming Lecture</h6>
        </div>
        <div className="card-body">
          <div className="space-y-3">
            {lectures.map((lecture, index) => (
              <div key={index} className="flex gap-3 item-center">
                <div
                  className={`flex items-center justify-center rounded-md shrink-0 size-10 ${lecture.color}`}>
                  {lecture.icon &&
                    getLucideIcon(lecture.icon, lecture.iconClass)}
                </div>
                <div className="grow">
                  <h6>{lecture.subject}</h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    {lecture.time}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link to="#!" className={`btn ${lecture.buttonColor} btn-xs`}>
                    <i className="ri-eye-line"></i> Live
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UpcomingLecture
