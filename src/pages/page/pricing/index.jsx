import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { addOns, plans } from '@data/index'
import { Redo2 } from 'lucide-react'
import * as Icons from 'lucide-react'

const PlanCard = ({ plan }) => {
  useEffect(() => {
    document.title = 'Pricing | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const IconComponent = Icons[plan.icon]
  const isValidIconComponent = (component) => {
    return (
      typeof component === 'function' ||
      (typeof component === 'object' && component !== null)
    )
  }

  return (
    <div className="relative card">
      <div className="card-body">
        {plan.popular && (
          <div className="absolute badge badge-sub-pink ltr:right-5 rtl:left-5 top-5">
            Popular
          </div>
        )}
        <div className="relative">
          <div
            className={`absolute top-0 z-0 size-11 blur-md ${plan.color}`}></div>
          {isValidIconComponent(IconComponent) && (
            <IconComponent
              className={`relative stroke-1 size-10 ${plan.iconColor}`}
            />
          )}
        </div>
        <h6 className="mt-5">{plan.plan}</h6>
        <p className="mb-3 text-sm text-gray-500 dark:text-dark-500">
          {plan.description}
        </p>
        <h2 className="font-semibold">{plan.price}</h2>
        <div className="pt-5 my-5 border-t border-gray-200 dark:border-dark-800">
          <ul className="space-y-3 *:flex *:items-center *:gap-2">
            {plan.features.map((feature, index) => (
              <li key={index}>
                <Redo2 className="inline-block text-green-500 size-4" />{' '}
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          data-modal-target="confirmModal"
          className="w-full btn btn-primary">
          Choose Plan
        </button>
      </div>
    </div>
  )
}

const PricingPage = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Pricing" subTitle="Pages" />

      <h6 className="mb-5 underline">Step 1:</h6>

      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12 xl:col-span-10 xl:col-start-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5">
            {plans.map((plan, index) => (
              <div key={index}>
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h6 className="mt-2 mb-5 underline">Step 2:</h6>
      <div className="grid grid-cols-12 gap-x-5">
        {addOns.map((addOn) => {
          const IconComponent = Icons[addOn.icon]
          return (
            <div
              key={addOn.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 card">
              <div className="card-body">
                <div className="flex items-start">
                  {addOn.color ? (
                    <div
                      className={`flex items-center justify-center ltr:mr-auto rtl:ml-auto size-16 ${addOn.gradient} rounded-modern`}>
                      <IconComponent
                        className={`relative stroke-1 size-10 ${addOn.color}`}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center ltr:mr-auto rtl:ml-auto size-16 bg-gradient-to-bl from-red-500/20 rounded-modern">
                      <Icons.Gem className="relative text-red-500 stroke-1 size-10 fill-red-500/20"></Icons.Gem>
                    </div>
                  )}
                  <label
                    htmlFor={addOn.id}
                    className="switch-group switch-soft shrink-0">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={addOn.id}
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper peer-checked:!bg-green-500/15"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:!bg-green-500"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center mt-4">
                  <h6 className="grow">{addOn.title}</h6>
                  <h6>{addOn.price}</h6>
                </div>
                <p className="text-gray-500 truncate dark:text-dark-500">
                  {addOn.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
export default PricingPage
