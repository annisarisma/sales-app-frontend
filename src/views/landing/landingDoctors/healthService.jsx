import React from 'react'

import { healthServiceData } from '@src/data/landingPage/doctors'
import {
  Activity,
  Brain,
  HeartPulse,
  Microscope,
  MoveLeft,
  MoveRight,
  Stethoscope,
  Syringe,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const HealthService = () => {
  const getLucideIcon = (icon, className) => {
    const icons = {
      'heart-pulse': <HeartPulse className={className} />,
      syringe: <Syringe className={className} />,
      brain: <Brain className={className} />,
      activity: <Activity className={className} />,
      stethoscope: <Stethoscope className={className} />,
      microscope: <Microscope className={className} />,
    }
    return icons[icon]
  }

  return (
    <React.Fragment>
      <section
        className="relative py-14 md:py-28 bg-gray-50 dark:bg-dark-900/30"
        id="services">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-2 text-4xl leading-normal capitalize md:text-5xl">
              Service for
              <span className="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">
                your Health
              </span>
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              Here is the complete slideshow for introducing our services. You
              can also use it for the value section.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space">
            {healthServiceData.map((item, index) => (
              <div
                className="p-5 transition duration-300 ease-linear rounded-lg hover:bg-white dark:hover:bg-dark-950 hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-200/75 dark:hover:shadow-dark-850"
                key={index}>
                <div
                  className={`flex items-center justify-center rounded-md ${item.iconBgColor} size-12`}>
                  {item.icon &&
                    getLucideIcon(
                      item.icon,
                      `${item.iconColor} ${item.iconBg}`
                    )}
                </div>
                <h5 className="mt-4 mb-2">{item.title}</h5>
                <p className="mb-3 text-gray-500 dark:text-dark-500 text-16">
                  {item.desc}
                </p>
                <Link to="#!" className="font-medium link link-sky">
                  Read More
                  <MoveRight className="inline-block ml-1 rtl:hidden size-4" />
                  <MoveLeft className="hidden mr-1 rtl:inline-block size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HealthService
