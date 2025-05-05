import React from 'react'

import { CornerUpLeft, CornerUpRight, MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactUsFour = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div className="col-span-7">
          <div className="flex items-center h-screen border-gray-200 ltr:border-r rtl:border-l dark:border-dark-800">
            <div className="px-20 grow">
              <h1 className="mb-8 leading-normal xl:w-2/3">
                Let's now concentrate on the fundamental aspects of your
                projects.
              </h1>
              <form action="#!" className="w-2/3 mb-6">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12">
                    <label htmlFor="projectInput" className="form-label">
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="projectInput"
                      className="bg-transparent form-input dark:bg-transparent"
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="textareaInput2" className="form-label">
                      Description
                    </label>
                    <textarea
                      name="textareaInput2"
                      id="textareaInput2"
                      rows={3}
                      className="h-auto bg-transparent form-input dark:bg-transparent"></textarea>
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="filesInput" className="form-label">
                      Please send us any additional files you want to send us
                      below
                    </label>
                    <input
                      type="file"
                      id="filesInput"
                      className="form-file"
                      multiple
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="linksInput" className="form-label">
                      You can also upload links to your content, such as Google
                      Docs or Dropbox
                    </label>
                    <input
                      type="url"
                      id="linksInput"
                      className="bg-transparent form-input dark:bg-transparent"
                    />
                  </div>
                </div>
              </form>
              <div className="flex gap-2">
                <Link
                  to="/page/contact-us-three"
                  className="btn btn-outline-gray">
                  <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
                  Back
                </Link>
                <Link to="/page/contact-us-five" className="btn btn-primary">
                  Go Forward
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col justify-center w-full h-screen px-20">
            <div>
              <h5 className="mb-3">Send Additional Files</h5>
              <p className="mb-5 text-gray-500 dark:text-dark-500">
                Please provide any supplementary materials (files or links) that
                will assist us in formulating the estimate.
              </p>
              <ul className="space-y-2 mb-7">
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Description of your project
                </li>
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Wireframes or functional sketches
                </li>
                <li>
                  <CornerUpRight className="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4" />
                  <CornerUpLeft className="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4" />
                  Visual identification materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactUsFour
