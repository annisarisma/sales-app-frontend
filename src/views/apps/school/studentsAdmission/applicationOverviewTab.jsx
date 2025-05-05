import React from 'react'

import { MoveLeft, MoveRight } from 'lucide-react'

const ApplicationOverviewTab = () => {
  return (
    <React.Fragment>
      <form action="#!">
        <h6 className="mb-3">Application Overview</h6>
        <div className="grid grid-cols-12 gap-space">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="applicationIDInput" className="form-label">
              Application ID
            </label>
            <input
              type="text"
              id="applicationIDInput"
              className="form-input"
              value="#PEA-1478A5487956236"
              readOnly
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="referenceNumberInput" className="form-label">
              Reference Number
            </label>
            <input
              type="text"
              id="referenceNumberInput"
              className="form-input"
              placeholder="#PEA-000A0000000000"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="dateOfApplicationSelect" className="form-label">
              Date of Application Submission
            </label>
            <input
              type="text"
              id="dateOfApplicationSelect"
              className="form-input"
              value="23 June, 2024"
              readOnly
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="dateOfApplicationSelect" className="form-label">
              Current Status
            </label>
            <span className="badge badge-green">Submitted</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-5 ltr:justify-end rtl:justify-start">
          <button type="button" className="btn btn-sub-gray">
            <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
            <MoveRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
            Previous
          </button>
          <button type="button" className="btn btn-primary">
            Submitted Form
            <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
            <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ApplicationOverviewTab
