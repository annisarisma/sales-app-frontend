import React from 'react'

import {
  Brain,
  Fingerprint,
  HeartPulse,
  Microscope,
  Siren,
  Syringe,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const AvailableFacilities = () => {
  return (
    <React.Fragment>
      <section className="pt-14">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-space">
            <Link
              to="#!"
              className="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
              <div className="card-body">
                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                  <Microscope className="fill-sky-500/10 size-6" />
                </div>
                <h6>Health Test</h6>
              </div>
            </Link>
            <Link
              to="#!"
              className="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
              <div className="card-body">
                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                  <HeartPulse className="fill-sky-500/10 size-6" />
                </div>
                <h6>Bone and Joint Health</h6>
              </div>
            </Link>
            <Link
              to="#!"
              className="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
              <div className="card-body">
                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                  <Brain className="fill-sky-500/10 size-6" />
                </div>
                <h6>Brain Surgery</h6>
              </div>
            </Link>
            <Link
              to="#!"
              className="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
              <div className="card-body">
                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                  <Siren className="fill-sky-500/10 size-6" />
                </div>
                <h6>Imaging Services</h6>
              </div>
            </Link>
            <Link
              to="#!"
              className="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
              <div className="card-body">
                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                  <Fingerprint className="fill-sky-500/10 size-6" />
                </div>
                <h6>Genetic Testing</h6>
              </div>
            </Link>
            <Link
              to="#!"
              className="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
              <div className="card-body">
                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                  <Syringe className="fill-sky-500/10 size-6" />
                </div>
                <h6>Laboratory Testing</h6>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AvailableFacilities
