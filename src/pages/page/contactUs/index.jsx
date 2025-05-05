import React, { useEffect } from 'react'

import user16 from '@assets/images/avatar/user-16.png'
import {
  CornerUpLeft,
  CornerUpRight,
  Mail,
  MoveLeft,
  MoveRight,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center my-10 border-gray-200 ltr:border-r rtl:border-l dark:border-dark-800 lg:my-0 lg:h-screen">
            <div className="px-10 xl:px-20 grow">
              <h1 className="mb-3 text-2xl md:text-4xl">
                Challenge us together Get estimate
              </h1>
              <p className="mb-8 text-gray-500 dark:text-dark-500">
                In three short steps we will establish the most important
                details of our joint journey.
              </p>
              <ul className="space-y-2 list-inside mb-9 list-square marker:text-primary-500">
                <li>Customize Your Projects</li>
                <li>Create Your Own website</li>
                <li>Determining the skills of specialists</li>
                <li>Details about the project</li>
                <li>Customize your layouts</li>
              </ul>
              <Link to="/page/contact-us-two" className="btn btn-primary">
                Start Your Own
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="flex flex-col justify-center w-full px-10 lg:h-screen xl:px-20">
            <h4 className="mb-4">
              Check what will help you with the estimation of your project.
            </h4>
            <ul className="space-y-2 text-green-500 mb-7">
              <li>
                <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                What knowledge do we need for the estimate
              </li>
              <li>
                <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                Sample estimation and cost calculation
              </li>
            </ul>

            <div className="my-10 lg:mb-0 lg:mt-20">
              <h5 className="mb-4">You can also contact us directly.</h5>
              <div className="flex gap-3">
                <img
                  src={user16}
                  alt="user16Img"
                  className="rounded-md size-14 shrink-0"
                />
                <div className="grow">
                  <h6>SRBThemes</h6>
                  <p className="mb-3 text-gray-500 dark:text-dark-500">
                    IT Company
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Mail className="inline-block text-gray-500 ltr:mr-1 rtl:ml-1 dark:text-dark-500 size-4" />
                      <Link
                        to="mailto:support@example.com"
                        className="transition duration-200 ease-linear hover:text-primary-500">
                        support@example.com
                      </Link>
                    </li>
                    <li>
                      <Phone className="inline-block text-gray-500 ltr:mr-1 rtl:ml-1 dark:text-dark-500 size-4" />
                      +(231) 12345 67890
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ContactUs
