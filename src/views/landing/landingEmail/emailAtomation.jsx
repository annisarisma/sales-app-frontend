import React from 'react'

import ctaImage from '@assets/images/email/cta.png'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const EmailAutomation = () => {
  return (
    <React.Fragment>
      <section className="relative lg:py-24 bg-primary-900" id="templates">
        <div className="container mx-auto px-4">
          <div className="lg:flex gap-x-16">
            <div className="w-full py-12 text-white lg:w-3/5 lg:py-0">
              <h2 className="mb-2 leading-normal capitalize xl:text-5xl">
                Customers with the <span className="text-primary-500">#1</span>{' '}
                email marketing and automation.
              </h2>
              <p className="mb-5 text-lg text-white">
                Email automation helps you find your audience and engage your
                customers. Unlike manual campaigns, automations run in the
                background while you tend to other valuable tasks. With
                automation, you can send personalized individual.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/dashboards/email"
                  type="button"
                  className="btn btn-primary">
                  Request Demo{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
                <button type="button" className="btn">
                  Open in you browser{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </button>
              </div>
            </div>
            <div className="lg:w-2/5">
              <img
                src={ctaImage}
                alt="ctaImage"
                className="w-[300px] mx-auto xl:scale-150 xl:-mt-16 relative object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EmailAutomation
