import React, { useEffect, useState } from 'react'

import faq from '@assets/images/auth/faq.png'
import BreadCrumb from '@common//BreadCrumb'
import Accordion from '@custom/Accordion/Accordion'
import { faqData } from '@data/index'
import { Headset, Phone } from 'lucide-react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    document.title = 'FAQ | Domiex - React JS Admin & Dashboard Template'
  }, [])
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="FAQ's" subTitle="Pages" />

      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12">
          <div className="card">
            <div className="card-header">
              <h6>Frequently asked questions (FAQ)</h6>
            </div>
            <div className="card-body">
              <p className="mb-4 text-gray-500 dark:text-dark-500">
                They serve as a self-service tool for customers to easily find
                the information they need without contacting customer support.
              </p>
              <div className="grid items-center grid-cols-1 gap-3 xl:grid-cols-2">
                <div className="xl:hidden">
                  <div className="text-center">
                    <img src={faq} alt="faqImg" className="mx-auto" />

                    <h5 className="mt-5 mb-1">
                      Frequently asked questions (FAQ)
                    </h5>
                    <p className="mb-5 text-gray-500 dark:text-dark-500">
                      Cleaning up common queries about domiex.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button className="btn btn-purple">
                        <i
                          data-lucide="phone"
                          className="inline-block ltr:mr-1 rtl:ml-1 size-4"></i>{' '}
                        Contact US
                      </button>
                      <button className="btn btn-gray">
                        <i
                          data-lucide="headset"
                          className="inline-block ltr:mr-1 rtl:ml-1 size-4"></i>{' '}
                        Help Center
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {isClient &&
                    faqData.map((item, index) => (
                      <Accordion
                        key={index}
                        accordionclass="accordion-boxed"
                        headerColor="accordion-primary"
                        title={item.title}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}>
                        <div className="px-3 py-2.5">
                          <p
                            className="text-gray-500 dark:text-dark-500"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </div>
                      </Accordion>
                    ))}
                </div>
                <div className="hidden xl:block">
                  <div className="text-center">
                    <img src={faq} alt="faqImg" className="mx-auto" />
                    <h5 className="mt-5 mb-1">
                      Frequently asked questions (FAQ)
                    </h5>
                    <p className="mb-5 text-gray-500 dark:text-dark-500">
                      Cleaning up common queries about domiex.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <button className="btn btn-purple">
                        <Phone className="inline-block ltr:mr-1 rtl:ml-1 size-4"></Phone>{' '}
                        Contact US
                      </button>
                      <button className="btn btn-sub-gray">
                        <Headset className="inline-block ltr:mr-1 rtl:ml-1 size-4" />{' '}
                        Help Center
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="card">
            <div className="card-header">
              <h6>Video Tutorial by Domiex</h6>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <iframe
                  className="w-full rounded-xl aspect-video"
                  src="https://www.youtube.com/embed/DxcJbrs6rKk?si=r9xt6eHRj0kayf8d"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
                <iframe
                  className="w-full rounded-xl aspect-video"
                  src="https://www.youtube.com/embed/eSzNNYk7nVU?si=EHJjJ8BjAsp6yMgx"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
                <iframe
                  className="w-full rounded-xl aspect-video"
                  src="https://www.youtube.com/embed/MAtaT8BZEAo?si=iyOi2lREUWB35ct6"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Faq
