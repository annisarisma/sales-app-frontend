import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const FlushPagination = () => {
  return (
    <React.Fragment>
      <div>
        <div className="pagination pagination-primary pagination-flush">
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
        <div className="pagination pagination-purple pagination-flush">
          <button type="button" className="!rounded-full pagination-pre">
            <ChevronLeft className="mr-1 ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ml-1 ltr:hidden rtl:inline-block size-5" />
            Prev
          </button>
          <button type="button" className="!rounded-full pagination-item">
            1
          </button>
          <button
            type="button"
            className="!rounded-full pagination-item active">
            2
          </button>
          <button type="button" className="!rounded-full pagination-item">
            3
          </button>
          <button type="button" className="!rounded-full pagination-item">
            ...
          </button>
          <button type="button" className="!rounded-full pagination-item">
            10
          </button>
          <button type="button" className="!rounded-full pagination-next">
            Next
            <ChevronRight className="ml-1 rtl:hidden size-5 ltr:inline-block" />
            <ChevronLeft className="mr-1 rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default FlushPagination
