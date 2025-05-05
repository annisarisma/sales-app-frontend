import React from 'react'

import { CalendarFold } from 'lucide-react'

const ReadyToGive = () => {
  return (
    <React.Fragment>
      <section className="relative  py-12 md:py-24 bg-[url('../images/invoice/cta.jpg')]">
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="absolute inset-0 uppercase text-7xl top-24 text-gray-100/5">
              Invoice Demo
            </h2>
            <div className="relative">
              <h2 className="mb-2 leading-normal text-white capitalize xl:mt-10">
                Ready to give it a try?
              </h2>
              <p className="mb-5 text-slate-200/50">
                A standard invoice typically includes a header with the business
                name and contact details, a list of products or services
                provided with their prices, and the total amount due.
              </p>
              <div className="space-x-2 flex flex-col gap-2">
                <button type="button" className="btn btn-purple">
                  Try for free
                </button>
                <button
                  type="button"
                  className="font-medium bg-white hover:bg-gray-100 dark:text-gray-900 btn">
                  <CalendarFold className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{' '}
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ReadyToGive
