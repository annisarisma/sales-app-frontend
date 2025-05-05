import React, { useEffect, useState } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQSection = () => {
  const [selected, setSelected] = useState(null)
  const [contentHeight, setContentHeight] = useState({})

  const toggleAccordion = (item) => {
    setSelected(selected !== item ? item : null)
  }

  useEffect(() => {
    if (selected !== null) {
      const contentElement = document.getElementById(`content-${selected}`)
      if (contentElement) {
        setContentHeight((prev) => ({
          ...prev,
          [selected]: `${contentElement.scrollHeight}px`,
        }))
      }
    }
  }, [selected])

  return (
    <section className="relative py-12 md:py-24" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-3 leading-normal capitalize">
            Don&apos;t Just Take Our Word For It
          </h2>
          <p className="text-gray-500 dark:text-dark-500 text-16">
            Frequently asked questions.
            <Link
              to="#!"
              className="font-medium text-gray-800 dark:text-dark-100 underline">
              View All FAQs
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="relative border-b border-gray-200 dark:border-dark-800 last:border-0">
                  <button
                    type="button"
                    className={`block w-full px-4 py-4 font-medium transition duration-200 ease-linear md:px-5 ${
                      selected === item
                        ? 'bg-gray-50 text-primary-500 dark:bg-dark-900/30'
                        : ''
                    }`}
                    onClick={() => toggleAccordion(item)}>
                    <div className="flex items-center justify-between">
                      <span>
                        {item === 1 && 'What are the features of email?'}
                        {item === 2 && 'How do you use email features?'}
                        {item === 3 && 'What is the main use of email?'}
                        {item === 4 && 'How email really works?'}
                        {item === 5 && 'What are emails used for?'}
                      </span>
                      <span className="text-gray-500 dark:text-dark-500">
                        {selected === item ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </div>
                  </button>
                  <div
                    className={`relative overflow-hidden transition-max-height duration-700 ease-in-out ${selected === item ? 'max-h-screen' : 'max-h-0'}`}
                    style={{
                      maxHeight: selected === item ? contentHeight[item] : '0',
                    }}>
                    <div
                      id={`content-${item}`}
                      className="p-5 text-gray-500 dark:text-dark-500">
                      {item === 1 && (
                        <p>
                          Emails are automatically date and time stamped.
                          Signatures can be attached. Files, graphics, or sound
                          can be sent as attachments, often in compressed
                          formats. Webmail and mobile email.
                        </p>
                      )}
                      {item === 2 && (
                        <>
                          <h6 className="mb-2">
                            Change smart features & personalization settings
                          </h6>
                          <ol className="flex flex-col gap-2 list-decimal list-inside">
                            <li>
                              On your Android phone or tablet, open Gmail.
                            </li>
                            <li>
                              Tap Menu. Settings. the account you want to
                              change.
                            </li>
                            <li>Scroll to the &quot;General&quot; section.</li>
                          </ol>
                        </>
                      )}
                      {item === 3 && (
                        <p>
                          Email is a beneficial way to communicate with
                          individuals or small groups of friends or colleagues.
                          It enables users to easily send and receive documents,
                          images, links, and other files. It also gives users
                          the flexibility to communicate with others on their
                          own schedule. Notifications, reminders, and
                          follow-ups.
                        </p>
                      )}
                      {item === 4 && (
                        <p>
                          The email client (web/ mobile/ desktop) connects to
                          the Outgoing SMTP server based on the email account
                          you used. The email client hands over the email in
                          MIME format to the Outgoing SMTP server. The Outgoing
                          SMTP validates the sender&apos;s details and processes
                          the message for sending.
                        </p>
                      )}
                      {item === 5 && (
                        <p>
                          Email is used for many different purposes, including
                          contacting friends, communicating with professors and
                          supervisors, requesting information, and applying for
                          jobs, internships, and scholarships.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
