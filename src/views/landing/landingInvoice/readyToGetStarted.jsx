import React from 'react'

import { Flower, Redo2, X } from 'lucide-react'

const ReadyToGetStarted = () => {
  return (
    <React.Fragment>
      <section className="relative pt-12 md:py-20" id="community">
        <svg
          viewBox="0 0 156 54"
          width="156"
          height="54"
          className="hidden md:absolute ltr:-rotate-45 rtl:rotate-45 top-56 ltr:left-48 rtl:right-48">
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              className="fill-yellow-300"
              d="m36.7 49.8l-24.8-29.7 6.1-5.2 18.7 22.5 21.9-26.1 21.8 26.1 21.8-26.1 21.8 26.1 18.8-22.5 6.1 5.2-24.9 29.7-21.8-26.1-21.8 26.1-21.8-26.1z"
            />
          </g>
        </svg>
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="max-w-[800px] mx-auto pb-10 text-center">
            <h2 className="mb-2 text-2xl leading-normal capitalize sm:text-3xl md:text-4xl">
              Ready to <span className="text-purple-500">get Started</span>
            </h2>
            <p className="text-gray-500 dark:text-muted-invoice">
              The business name and address of the customer you&apos;re
              invoicing. a clear description of what you&apos;re charging for.
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="border rounded-sm bg-gradient-to-br border-gray-200 dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
                <div className="p-8">
                  <h6 className="flex items-center gap-3 mb-1 text-16">
                    <Flower className="inline-block text-green-500 size-5" />{' '}
                    Lite Plan
                  </h6>
                  <p className="mb-8 text-gray-500">
                    Free account with limited features
                  </p>

                  <h2 className="mb-6">
                    $9.99
                    <sub className="text-gray-500 text-14 fotn-normal">
                      /monthly
                    </sub>
                  </h2>
                  <button type="button" className="w-full btn btn-sub-purple">
                    Get Started
                  </button>
                  <div className="mt-6">
                    <ul className="flex flex-col gap-3 *:flex *:items-center *:gap-2">
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        30 Products & Projects
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Custom Permissions
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Some Basic Integration
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Up to 50 Team Members
                      </li>
                      <li className="text-gray-500 dark:text-muted-invoice">
                        <X className="inline-block text-red-500 size-4" />{' '}
                        Advanced Security
                      </li>
                      <li className="text-gray-500 dark:text-muted-invoice">
                        <X className="inline-block text-red-500 size-4" />{' '}
                        Permissions & Workflows
                      </li>
                      <li className="text-gray-500 dark:text-muted-invoice">
                        <X className="inline-block text-red-500 size-4" /> 24/7
                        Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden border border-purple-500 rounded-sm bg-gradient-to-br dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
                <div className="p-3 text-center bg-purple-500 text-purple-50">
                  Most Popular
                </div>
                <div className="p-8">
                  <h6 className="flex items-center gap-3 mb-1 text-16">
                    <Flower className="inline-block text-green-500 size-5" />{' '}
                    Professional Plan
                  </h6>
                  <p className="mb-8 text-gray-500">
                    Free account with limited features
                  </p>

                  <h2 className="mb-6">
                    $19.99
                    <sub className="text-gray-500 text-14 fotn-normal">
                      /monthly
                    </sub>
                  </h2>
                  <button type="button" className="w-full btn btn-purple">
                    Get Started
                  </button>
                  <div className="mt-6">
                    <ul className="flex flex-col gap-3 *:flex *:items-center *:gap-2">
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        30 Products & Projects
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Custom Permissions
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Some Basic Integration
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Up to 50 Team Members
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Advanced Security
                      </li>
                      <li className="text-gray-500 dark:text-muted-invoice">
                        <X className="inline-block text-red-500 size-4" />{' '}
                        Permissions & Workflows
                      </li>
                      <li className="text-gray-500 dark:text-muted-invoice">
                        <X className="inline-block text-red-500 size-4" /> 24/7
                        Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border rounded-sm bg-gradient-to-br border-gray-200 dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
                <div className="p-8">
                  <h6 className="flex items-center gap-3 mb-1 text-16">
                    <Flower className="inline-block text-green-500 size-5" />{' '}
                    Business Plan
                  </h6>
                  <p className="mb-8 text-gray-500">
                    Free account with limited features
                  </p>

                  <h2 className="mb-6">
                    $29.99
                    <sub className="text-gray-500 text-14 fotn-normal">
                      /monthly
                    </sub>
                  </h2>
                  <button type="button" className="w-full btn btn-sub-purple">
                    Get Started
                  </button>
                  <div className="mt-6">
                    <ul className="flex flex-col gap-3 *:flex *:items-center *:gap-2">
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        30 Products & Projects
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Custom Permissions
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Some Basic Integration
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Up to 50 Team Members
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Advanced Security
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        Permissions & Workflows
                      </li>
                      <li>
                        <Redo2 className="inline-block text-green-500 size-4" />{' '}
                        24/7 Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ReadyToGetStarted
