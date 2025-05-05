import React from 'react'

import { MoveLeft, MoveRight, Upload } from 'lucide-react'

const DocumentsTab = () => {
  return (
    <React.Fragment>
      <form action="#!">
        <h6 className="mb-3">Passport-sized Photograph</h6>
        <div className="mb-5">
          <label htmlFor="passportPhotoInput">
            <div className="flex items-center justify-center overflow-hidden bg-gray-100 border border-gray-200 rounded-sm cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-36">
              <div className="flex flex-col items-center text-gray-500 dark:text-dark-500">
                <Upload />
                <div className="mt-2 mb-1">Passport Size</div>
                <p>144 x 144</p>
              </div>
            </div>
          </label>
          <label className="block">
            <input
              type="file"
              name="passportPhoto"
              id="passportPhotoInput"
              className="hidden"
            />
          </label>
          <p className="mt-1 text-sm text-red-500"></p>
        </div>

        <h6 className="mb-3">High School Transcript</h6>
        <div>
          <label htmlFor="transcriptInput">
            <div className="flex items-center justify-center p-4 overflow-hidden bg-gray-100 border border-gray-200 rounded-sm cursor-pointer dark:bg-dark-850 dark:border-dark-800 h-28">
              <div className="flex flex-col items-center text-gray-500 dark:text-dark-500">
                <Upload />
                <div className="mt-2 mb-1">Drag and drop your certificate</div>
                <p>only allowed pdf, png files.</p>
              </div>
            </div>
          </label>
          <label className="block">
            <input
              type="file"
              name="transcript"
              id="transcriptInput"
              className="hidden"
            />
          </label>
          <p className="mt-1 text-sm text-red-500"></p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-5 ltr:justify-end rtl:justify-start">
          <button type="button" className="btn btn-sub-gray">
            <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
            <MoveRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
            Previous
          </button>
          <button type="button" className="btn btn-primary">
            Save to Next
            <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
            <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default DocumentsTab
