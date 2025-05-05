import React from 'react'

import {
  CornerUpLeft,
  CornerUpRight,
  Gem,
  Layers3,
  MonitorStop,
  MoveLeft,
  MoveRight,
  PencilRuler,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactUsThree = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div className="col-span-7">
          <div className="flex items-center h-screen border-gray-200 ltr:border-r rtl:border-l dark:border-dark-800">
            <div className="px-20 grow">
              <h1 className="mb-10 leading-normal xl:w-2/3">
                What expertise should specialists possess to develop your
                project?
              </h1>
              <div className="grid grid-cols-4 gap-5 mb-10">
                <div className="relative input-check-group">
                  <input
                    id="brandingInput"
                    className="absolute z-10 input-check input-check-primary peer ltr:right-4 rtl:left-4 top-4"
                    type="checkbox"
                  />
                  <label
                    htmlFor="brandingInput"
                    className="relative block p-4 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer dark:border-dark-800 dark:bg-dark-900 peer-checked:bg-primary-100 dark:peer-checked:bg-primary-500/10 peer-checked:border-primary-300 dark:peer-checked:border-primary-500/30 shadow-gray-100 dark:shadow-dark-850">
                    <span className="flex items-center justify-center rounded-md text-primary-50 bg-primary-500 size-10">
                      <Gem className="size-5" />
                    </span>
                    <span className="block mt-4 mb-1 text-base font-medium">
                      Branding
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-dark-500">
                      We will create the image of your product from scratch.
                    </span>
                  </label>
                </div>
                <div className="relative input-check-group">
                  <input
                    id="productCheckbox"
                    className="absolute z-10 input-check input-check-green peer ltr:right-4 rtl:left-4 top-4"
                    type="checkbox"
                  />
                  <label
                    htmlFor="productCheckbox"
                    className="relative block p-4 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer dark:border-dark-800 dark:bg-dark-900 peer-checked:bg-green-100 dark:peer-checked:bg-green-500/10 peer-checked:border-green-300 dark:peer-checked:border-green-500/30 shadow-gray-100 dark:shadow-dark-850">
                    <span className="flex items-center justify-center bg-green-500 rounded-md text-green-50 size-10">
                      <Layers3 className="size-5" />
                    </span>
                    <span className="block mt-4 mb-1 text-base font-medium">
                      Product Design
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-dark-500">
                      We will create the image of your product from scratch.
                    </span>
                  </label>
                </div>
                <div className="relative input-check-group">
                  <input
                    id="developmentCheckbox"
                    className="absolute z-10 input-check input-check-yellow peer ltr:right-4 rtl:left-4 top-4"
                    type="checkbox"
                  />
                  <label
                    htmlFor="developmentCheckbox"
                    className="relative block p-4 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer dark:border-dark-800 dark:bg-dark-900 peer-checked:bg-yellow-100 dark:peer-checked:bg-yellow-500/10 peer-checked:border-yellow-300 dark:peer-checked:border-yellow-500/30 shadow-gray-100 dark:shadow-dark-850">
                    <span className="flex items-center justify-center bg-yellow-500 rounded-md text-yellow-50 size-10">
                      <MonitorStop className="size-5" />
                    </span>
                    <span className="block mt-4 mb-1 text-base font-medium">
                      Web Development
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-dark-500">
                      We will create the image of your product from scratch.
                    </span>
                  </label>
                </div>
                <div className="relative input-check-group">
                  <input
                    id="customizeCheckbox"
                    className="absolute z-10 input-check input-check-purple peer ltr:right-4 rtl:left-4 top-4"
                    type="checkbox"
                  />
                  <label
                    htmlFor="customizeCheckbox"
                    className="relative block p-4 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer dark:border-dark-800 dark:bg-dark-900 peer-checked:bg-purple-100 dark:peer-checked:bg-purple-500/10 peer-checked:border-purple-300 dark:peer-checked:border-purple-500/30 shadow-gray-100 dark:shadow-dark-850">
                    <span className="flex items-center justify-center bg-purple-500 rounded-md text-purple-50 size-10">
                      <PencilRuler className="size-5" />
                    </span>
                    <span className="block mt-4 mb-1 text-base font-medium">
                      Customize Projects
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-dark-500">
                      We will create the image of your product from scratch.
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/page/contact-us-two"
                  className="btn btn-outline-gray">
                  <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
                  Back
                </Link>
                <Link to="/page/contact-us-four" className="btn btn-primary">
                  Go Forward
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col justify-center w-full h-screen px-20">
            <div>
              <h5 className="mb-3">
                At each stage of the project timeline, we ensure quality through
                the dedicated oversight of our Head of Design, who leads our
                quality assurance efforts.
              </h5>
              <p className="mb-5 text-gray-500 dark:text-dark-500">
                Our Head of Design is entrusted with ensuring the utmost quality
                of the final digital product.
              </p>
              <ul className="space-y-2 mb-7">
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Basic support at the start of the project
                </li>
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Taking care of the best design quality
                </li>
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Perfect pixel at every stage of building your project
                </li>
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Support: Design, Creative & Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactUsThree
