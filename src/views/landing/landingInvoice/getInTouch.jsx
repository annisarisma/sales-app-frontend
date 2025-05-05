import React, { useState } from 'react'

const GetInTouch = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [interested, setInterested] = useState('')
  const [projectBudget, setProjectBudget] = useState('')
  const [message, setMessage] = useState('')

  return (
    <React.Fragment>
      <section className="relative py-12 md:py-20" id="contact-us">
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="grid items-center grid-cols-12 mb-10">
            <div className="col-span-12 text-center md:col-span-8 md:col-start-3">
              <h2 className="mb-2 text-2xl leading-normal capitalize sm:text-3xl md:text-4xl">
                Love for hear from you{' '}
                <span className="text-purple-500">Get in Touch</span>
              </h2>
              <p className="text-gray-500 dark:text-muted-invoice">
                If you get in touch with someone, you contact them by writing to
                them or phoning them.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {/* Full Name Input */}
            <div className="relative col-span-12 pr-4 md:col-span-6 sm:pr-0">
              <div className={`group ${fullName ? 'show' : ''}`}>
                <input
                  type="text"
                  id="fullNameInput"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-6 pt-4 h-14 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice"
                  required
                />
                <label
                  htmlFor="fullNameInput"
                  className={`absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 ${
                    fullName ? 'scale-[0.85] -translate-y-4 px-2 top-2' : ''
                  } ltr:left-4 rtl:right-4`}>
                  Your Full Name
                </label>
              </div>
            </div>

            {/* Email Input */}
            <div className="relative col-span-12 pr-4 md:col-span-6 sm:pr-0">
              <div className={`group ${email ? 'show' : ''}`}>
                <input
                  type="text"
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 pt-4 h-14 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice"
                  required
                />
                <label
                  htmlFor="emailInput"
                  className={`absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 ${
                    email ? 'scale-[0.85] -translate-y-4 px-2 top-2' : ''
                  } ltr:left-4 rtl:right-4`}>
                  Your Email Address
                </label>
              </div>
            </div>

            {/* Interested Input */}
            <div className="relative col-span-12 pr-4 md:col-span-6 sm:pr-0">
              <div className={`group ${interested ? 'show' : ''}`}>
                <input
                  type="text"
                  id="interestedInput"
                  value={interested}
                  onChange={(e) => setInterested(e.target.value)}
                  className="px-6 pt-4 h-14 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice"
                  required
                />
                <label
                  htmlFor="interestedInput"
                  className={`absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 ${
                    interested ? 'scale-[0.85] -translate-y-4 px-2 top-2' : ''
                  } ltr:left-4 rtl:right-4`}>
                  What you are Interested
                </label>
              </div>
            </div>

            {/* Project Budget Input */}
            <div className="relative col-span-12 pr-4 md:col-span-6 sm:pr-0">
              <div className={`group ${projectBudget ? 'show' : ''}`}>
                <input
                  type="text"
                  id="projectBudgetInput"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                  className="px-6 pt-4 h-14 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice"
                  required
                />
                <label
                  htmlFor="projectBudgetInput"
                  className={`absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 ${
                    projectBudget
                      ? 'scale-[0.85] -translate-y-4 px-2 top-2'
                      : ''
                  } ltr:left-4 rtl:right-4`}>
                  Project Budget
                </label>
              </div>
            </div>

            {/* Message Input */}
            <div className="col-span-12 pr-4 sm:pr-0">
              <div className={`relative group ${message ? 'show' : ''}`}>
                <textarea
                  id="MessageInput"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-auto px-6 pt-4 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice"
                  rows={4}
                  required
                />
                <label
                  htmlFor="messageInput"
                  className={`absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 ${
                    message ? 'scale-[0.85] -translate-y-4 px-2 top-2' : ''
                  } ltr:left-4 rtl:right-4`}>
                  Message
                </label>
              </div>
            </div>
            <div className="flex justify-end col-span-12 pr-4 sm:pr-0">
              <button
                type="button"
                className="w-full btn btn-purple max-w-[200px]">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default GetInTouch
