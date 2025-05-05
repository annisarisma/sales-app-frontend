import React from 'react'

import image2 from '@assets/images/dashboards/img-2.png'
import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'

const BookAppointment = () => {
  return (
    <React.Fragment>
      <div className="relative col-span-12 overflow-hidden bg-indigo-500 border-indigo-500 dark:bg-indigo-500 dark:border-indigo-500 xl:col-span-6 card">
        <div className="hidden md:flex md:absolute md:top-0 ltr:md:right-0 rtl:md:left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500"
            height="250"
            preserveAspectRatio="none"
            viewBox="0 0 500 250">
            <g mask="url(#SvgjsMask1020)" fill="none">
              <path
                d="M231.51 280.18C274.64 267.68 249.28 152.18 351.03 146.08 452.77 139.98 528.45 86.54 590.06 86.08"
                className="stroke-primary-300/10"
                strokeWidth="2"></path>
              <path
                d="M200.68 250.58C260.95 239.55 290.28 88.89 384.42 88.39 478.56 87.89 518.09 166.68 568.16 168.39"
                className="stroke-primary-300/10"
                strokeWidth="2"></path>
              <path
                d="M33.11 268.48C95.57 246.25 104.46 66.02 197.7 60.55 290.93 55.08 279.99 91.8 362.28 91.8 444.58 91.8 484.99 60.69 526.87 60.55"
                className="stroke-primary-300/10"
                strokeWidth="2"></path>
              <path
                d="M214.96 255.51C265.37 253.07 292.61 172.07 395.66 165.55 498.72 159.03 523.65 59.76 576.37 55.55"
                className="stroke-primary-300/10"
                strokeWidth="2"></path>
              <path
                d="M129.54 298.93C172.49 296.37 204.22 217.32 280.98 217.15 357.75 216.98 356.71 248.4 432.43 248.4 508.15 248.4 545.21 217.31 583.87 217.15"
                className="stroke-primary-300/10"
                strokeWidth="2"></path>
            </g>
            <defs>
              <mask id="SvgjsMask1020">
                <rect width="500" height="250" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
        <div className="relative py-6 card-body">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <p className="mb-2 text-purple-50/75">
                Welcome Back! 👋, Olivia Martina
              </p>
              <h3 className="mb-5 font-medium capitalize text-purple-50">
                Make sure to monitor your health regularly
              </h3>
              <Link
                to="#!"
                className="font-medium text-gray-800 bg-white btn hover:bg-gray-100">
                <span className="align-middle">Book Appointment</span>
                <CalendarDays className="inline-block ml-1 size-4" />
              </Link>
            </div>
            <div className="col-span-12 mt-4 md:col-span-6 md:mt-0">
              <img
                src={image2}
                alt="image2"
                className="relative block ltr:md:ml-auto rtl:md:mr-auto"
                width={200}
                height={154}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BookAppointment
