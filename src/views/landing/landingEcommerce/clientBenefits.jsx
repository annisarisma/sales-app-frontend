import React from 'react'

import { CreditCard, Handshake, Headset, Truck } from 'lucide-react'

const ClientBenefits = () => {
  return (
    <React.Fragment>
      <section className="relative pt-10 pb-10 md:pb-24" id="service">
        <div className="container mx-auto px-4 lg:max-w-[1350px]">
          <div className="grid items-center grid-cols-12 gap-5 lg:gap-8">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2">
              <div className="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                <div className="flex items-center justify-center size-12 shrink-0">
                  <Truck className="text-gray-500 stroke-1 dark:text-dark-500 size-8" />
                </div>
                <div className="overflow-hidden grow">
                  <h6 className="mb-1">Free Shipping</h6>
                  <p className="text-gray-500 truncate dark:text-dark-500">
                    Enjoy free shipping on orders over $149.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                <div className="flex items-center justify-center size-12 shrink-0">
                  <i data-lucide="handshake"></i>
                  <Handshake className="text-gray-500 stroke-1 dark:text-dark-500 size-8" />
                </div>
                <div className="overflow-hidden grow">
                  <h6 className="mb-1">Money Guarantee</h6>
                  <p className="text-gray-500 truncate dark:text-dark-500">
                    Exchange within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                <div className="flex items-center justify-center size-12 shrink-0">
                  <Headset className="text-gray-500 stroke-1 dark:text-dark-500 size-8" />
                </div>
                <div className="overflow-hidden grow">
                  <h6 className="mb-1">Online Help Center</h6>
                  <p className="text-gray-500 truncate dark:text-dark-500">
                    24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2">
              <div className="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                <div className="flex items-center justify-center size-12 shrink-0">
                  <CreditCard className="text-gray-500 stroke-1 dark:text-dark-500 size-8" />
                </div>
                <div className="overflow-hidden grow">
                  <h6 className="mb-1">Flexible Payment Options</h6>
                  <p className="text-gray-500 truncate dark:text-dark-500">
                    Pay Using Multiple Credit Cards
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 text-center lg:col-span-6">
              <h1 className="relative leading-normal capitalize lg:ltr:pl-5 lg:rtl:pr-5 lg:before:rounded-full drop-shadow-lg lg:before:absolute lg:before:w-1 lg:before:bg-primary-500 lg:before:h-1/2 lg:ltr:before:left-0 lg:rtl:before:right-0">
                Benefits You Get When Using Our Service
              </h1>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ClientBenefits
