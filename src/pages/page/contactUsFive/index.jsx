import React from 'react'

import { CircleCheckBig, MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactUsFive = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div className="col-span-6 col-start-4">
          <div className="flex flex-col justify-center w-full h-screen">
            <div>
              <CircleCheckBig className="mb-6 text-green-500 size-10 fill-green-500/10" />
              <h2 className="mb-2 leading-normal">
                Thank you, we accepted your Challenge
              </h2>
              <p className="mb-6 text-gray-500 dark:text-dark-500">
                Usually, we need 24 hours to read the information you sent. We
                will get back to you as soon as possible.
              </p>
              <Link to="/dashboards/ecommerce" className="btn btn-primary">
                Back to Home
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactUsFive
