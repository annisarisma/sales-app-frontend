import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const LightPagination = () => {
  return (
    <React.Fragment>
      <div>
        <div className="p-2 bg-gray-100 pagination pagination-primary pagination-flush dark:bg-dark-850">
          <button type="button" className="pagination-item" disabled>
            <ChevronLeft className="ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ltr:hidden rtl:inline-block size-5" />
          </button>
          <button type="button" className="pagination-item active">
            1
          </button>
          <button type="button" className="pagination-item">
            2
          </button>
          <button type="button" className="pagination-item">
            3
          </button>
          <button type="button" className="pagination-item">
            ...
          </button>
          <button type="button" className="pagination-item">
            10
          </button>
          <button type="button" className="pagination-item">
            <ChevronRight className="ltr:inline-block rtl:hidden size-5" />
            <ChevronLeft className="rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>
      </div>

      <div className="mt-space">
        <div className="p-2 bg-gray-100 rounded-full pagination pagination-primary pagination-flush dark:bg-dark-850">
          <button
            type="button"
            className="pagination-item !rounded-full"
            disabled>
            <ChevronLeft className="ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ltr:hidden rtl:inline-block size-5" />
          </button>
          <button
            type="button"
            className="pagination-item !rounded-full active">
            1
          </button>
          <button type="button" className="pagination-item !rounded-full">
            2
          </button>
          <button type="button" className="pagination-item !rounded-full">
            3
          </button>
          <button type="button" className="pagination-item !rounded-full">
            ...
          </button>
          <button type="button" className="pagination-item !rounded-full">
            10
          </button>
          <button type="button" className="pagination-item !rounded-full">
            <ChevronRight className="ltr:inline-block rtl:hidden size-5" />
            <ChevronLeft className="rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default LightPagination
