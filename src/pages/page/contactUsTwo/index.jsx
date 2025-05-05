import React from 'react'

import user16 from '@assets/images/avatar/user-16.png'
import { Mail, MoveLeft, MoveRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactUsTwo = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div className="col-span-7">
          <div className="flex items-center h-screen border-gray-200 ltr:border-r rtl:border-l dark:border-dark-800">
            <div className="px-20 grow">
              <h1 className="mb-3 leading-normal xl:w-2/3">
                Before we start, we'd like to get to know you better
              </h1>
              <form action="#!" className="w-2/3 mb-5">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12">
                    <label htmlFor="nameInput" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="nameInput"
                      className="bg-transparent form-input dark:bg-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="yourPlaceInput" className="form-label">
                      Your Place
                    </label>
                    <input
                      type="text"
                      id="yourPlaceInput"
                      className="bg-transparent form-input dark:bg-transparent"
                      placeholder="Enter your place"
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="emailAddressInput" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddressInput"
                      className="bg-transparent form-input dark:bg-transparent"
                      placeholder="support@example.com"
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="productCompanyInput" className="form-label">
                      Product Or Company
                    </label>
                    <input
                      type="text"
                      id="productCompanyInput"
                      className="bg-transparent form-input dark:bg-transparent"
                      placeholder="What is the name of your product or company?"
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="textareaInput2" className="form-label">
                      Your Reply
                    </label>
                    <textarea
                      name="textareaInput2"
                      id="textareaInput2"
                      rows={3}
                      className="h-auto bg-transparent form-input dark:bg-transparent"
                      placeholder="Enter your description"
                    />
                  </div>
                </div>
              </form>
              <div className="flex gap-2">
                <Link to="/page/contact-us" className="btn btn-outline-gray">
                  <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
                  Back
                </Link>
                <Link to="/page/contact-us-three" className="btn btn-primary">
                  Start Your Own
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col justify-center w-full h-screen px-20">
            <div className="w-2/3 mx-auto">
              <img
                src={user16}
                alt="user16Img"
                className="mx-auto rounded-md shadow-lg size-32 shrink-0"
              />
              <div className="mt-5 text-center grow">
                <h5 className="mb-1">SRBThemes</h5>
                <p className="mb-3 text-gray-500 dark:text-dark-500">
                  IT Company
                </p>
                <p className="mb-6">
                  But most of all, I have been a Product Designer & Development
                  for nearly 8+ years.
                </p>
                <ul className="space-y-2">
                  <li>
                    <Mail className="inline-block mr-1 text-gray-500 dark:text-dark-500 size-4" />
                    <Link
                      to="mailto:support@example.com"
                      className="transition duration-200 ease-linear hover:text-primary-500">
                      support@example.com
                    </Link>
                  </li>
                  <li>
                    <Phone className="inline-block mr-1 text-gray-500 dark:text-dark-500 size-4" />
                    +(231) 12345 67890
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactUsTwo
