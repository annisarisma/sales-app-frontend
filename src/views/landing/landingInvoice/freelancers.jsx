import React from 'react'

import {
  CalendarDays,
  PanelBottomDashed,
  PencilRuler,
  Route,
} from 'lucide-react'

const Freelancers = () => {
  return (
    <React.Fragment>
      <section className="relative lg:py-20" id="About">
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="grid items-center grid-cols-12 mb-10">
            <div className="col-span-12 text-center md:col-span-8 md:col-start-3">
              <h2 className="mb-2 text-3xl capitalize md:leading-normal md:text-4xl">
                Modern{' '}
                <span className="font-bold text-purple-500">Invoicing</span> for
                small businesses & Freelancers
              </h2>
              <p className="text-gray-500 dark:text-muted-invoice">
                All the company&apos;s terms and conditions, including due dates
                and penalties for non-payment or partial payments, must be
                clearly included in the invoice.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-space">
            <div className="col-span-12 p-6 border border-gray-200 rounded-sm lg:p-8 md:col-span-6 bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
              <div className="gap-4 md:flex">
                <div className="flex items-center justify-center size-10 shrink-0">
                  <PencilRuler className="text-purple-500 stroke-1 size-7" />
                </div>
                <div className="grow">
                  <h6 className="mb-1 text-16">Customized invoicing</h6>
                  <p className="text-gray-500 dark:text-muted-invoice">
                    Invoicing is the basic thing without which a business cannot
                    work. Every business needs to issue an invoice according to
                    their requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 p-6 border border-gray-200 rounded-sm lg:p-8 md:col-span-6 bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
              <div className="gap-4 md:flex">
                <div className="flex items-center justify-center size-10 shrink-0">
                  <PanelBottomDashed className="text-purple-500 stroke-1 size-7" />
                </div>
                <div className="grow">
                  <h6 className="mb-1 text-16">Recurring invoices</h6>
                  <p className="text-gray-500 dark:text-muted-invoice">
                    Invoices record the essential data to preparing tax filings.
                    When the company records all its invoices meticulously, that
                    data can be extracted to make tax filings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 p-6 border border-gray-200 rounded-sm lg:p-8 md:col-span-6 bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
              <div className="gap-4 md:flex">
                <div className="flex items-center justify-center size-10 shrink-0">
                  <Route className="text-purple-500 stroke-1 size-7" />
                </div>
                <div className="grow">
                  <h6 className="mb-1 text-16">Automatic payment reminders</h6>
                  <p className="text-gray-500 dark:text-muted-invoice">
                    Send digital invoices in seconds via email, SMS, or a
                    shareable link. Your customers can pay instantly with just
                    one click using their preferred method.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 p-6 border border-gray-200 rounded-sm lg:p-8 md:col-span-6 bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
              <div className="gap-4 md:flex">
                <div className="flex items-center justify-center size-10 shrink-0">
                  <CalendarDays className="text-purple-500 stroke-1 size-7" />
                </div>
                <div className="grow">
                  <h6 className="mb-1 text-16">Invoice date</h6>
                  <p className="text-gray-500">
                    What should an invoice include? If you want to issue an
                    invoice, then the word “invoice” must appear on it. This
                    tells you that it is an official document that confirms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Freelancers
