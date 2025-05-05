import React from 'react'

import { userFollowersData } from '@data/index'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import FollowerCard from './followerCard'

const UserFollowersContent = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-x-5">
        {userFollowersData.map((item, index) => (
          <FollowerCard key={index} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5 mb-5 items-center">
        <div className="col-span-12 md:col-span-6">
          <p className="text-gray-500 dark:text-dark-500">
            Showing <b>8</b> of <b>76</b> Results
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex pagination pagination-primary md:justify-end">
            <button type="button" className="pagination-pre" disabled>
              <ChevronLeft className="mr-1 ltr:inline-block rtl:hidden size-5" />
              <ChevronRight className="ml-1 ltr:hidden rtl:inline-block size-5" />
              Prev
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
            <button type="button" className="pagination-next">
              Next
              <ChevronRight className="ml-1 rtl:hidden size-5 ltr:inline-block" />
              <ChevronLeft className="mr-1 rtl:inline-block ltr:hidden size-5" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserFollowersContent
