import React from 'react'

import {
  Atom,
  FlaskConical,
  HeartPulse,
  JapaneseYen,
  Scale,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const UpcomingLecture = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-header">
          <h6 className="card-title">Upcoming Lecture</h6>
        </div>
        <div className="card-body">
          <div className="space-y-3">
            <div className="flex gap-3 item-center">
              <div className="flex items-center justify-center rounded-md shrink-0 text-sky-500 bg-sky-500/15 size-10">
                <FlaskConical className="size-5" />
              </div>
              <div className="grow">
                <h6>12 (A)</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  09:00AM - 10:15AM
                </p>
              </div>
              <div className="shrink-0">
                <Link to="#!" className="btn btn-red btn-xs">
                  <i className="ri-eye-line"></i> Live
                </Link>
              </div>
            </div>
            <div className="flex gap-3 item-center">
              <div className="flex items-center justify-center text-purple-500 rounded-md bg-purple-500/10 shrink-0 size-10">
                <Scale className="size-5" />
              </div>
              <div className="grow">
                <h6>11</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  10:15AM - 11:30AM
                </p>
              </div>
              <div className="shrink-0">
                <Link to="#!" className="btn btn-sub-gray btn-xs">
                  <i className="ri-eye-line"></i> Live
                </Link>
              </div>
            </div>
            <div className="flex gap-3 item-center">
              <div className="flex items-center justify-center text-orange-500 rounded-md bg-orange-500/10 shrink-0 size-10">
                <Atom className="size-5" />
              </div>
              <div className="grow">
                <h6>10 (B)</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  11:30AM - 12:45PM
                </p>
              </div>
              <div className="shrink-0">
                <Link to="#!" className="btn btn-sub-gray btn-xs">
                  <i className="ri-eye-line"></i> Live
                </Link>
              </div>
            </div>
            <div className="flex gap-3 item-center">
              <div className="flex items-center justify-center text-green-500 rounded-md bg-green-500/10 shrink-0 size-10">
                <HeartPulse className="size-5" />
              </div>
              <div className="grow">
                <h6>11 (A)</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  02:00PM - 03:15PM
                </p>
              </div>
              <div className="shrink-0">
                <Link to="#!" className="btn btn-sub-gray btn-xs">
                  <i className="ri-eye-line"></i> Live
                </Link>
              </div>
            </div>
            <div className="flex gap-3 item-center">
              <div className="flex items-center justify-center rounded-md shrink-0 text-primary-500 bg-primary-500/10 size-10">
                <JapaneseYen className="size-5" />
              </div>
              <div className="grow">
                <h6>9 (B)</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  03:15PM - 05:00PM
                </p>
              </div>
              <div className="shrink-0">
                <Link to="#!" className="btn btn-sub-gray btn-xs">
                  <i className="ri-eye-line"></i> Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UpcomingLecture
