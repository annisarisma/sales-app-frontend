import React, { useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { userData } from '@src/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import ProjectsTabs from '../ProjectsTabs'

const options = [
  { label: 'All', value: 'All' },
  { label: 'This Month', value: 'This Month' },
  { label: 'Last Month', value: 'Last Month' },
  { label: 'Last Year', value: 'Last Year' },
  { label: 'Last Week', value: 'Last Week' },
  { label: 'This Year', value: 'This Year' },
]
const ProjectsUsers = () => {
  const [users] = useState(userData)

  let filter = ''
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    document.title = 'Users | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const filteredUsers = useMemo(() => {
    const now = new Date()
    const filterOptions = {
      'Last Month': () => {
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
        return users.filter((user) => new Date(user.date) >= lastMonth)
      },
      'This Month': () => {
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        return users.filter((user) => new Date(user.date) >= thisMonth)
      },
      'Last Week': () => {
        const lastWeek = new Date()
        lastWeek.setDate(now.getDate() - 7)
        return users.filter((user) => new Date(user.date) >= lastWeek)
      },
      'Last Year': () => {
        const lastYear = new Date(
          now.getFullYear() - 1,
          now.getMonth(),
          now.getDate()
        )
        return users.filter((user) => new Date(user.date) >= lastYear)
      },
      'This Year': () => {
        const thisYear = new Date(now.getFullYear(), 0, 1)
        return users.filter((user) => new Date(user.date) >= thisYear)
      },
    }
    return filter === '' ? users : filterOptions[filter]()
  }, [filter, users])

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Users" subTitle="Projects" />
      {/* tabs */}
      <ProjectsTabs />

      {/* user section */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h6>Users ({filteredUsers.length})</h6>
          <div className="w-36">
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
              isMulti={false}
              isClearable={true}
              placeholder="Select"
              id="preselectMultipleValue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-space mt-space">
          {displayedUsers.map((user, index) => (
            <div key={index} className="card">
              <div className="text-center card-body">
                <img
                  src={user.image}
                  alt="userImg"
                  className="mx-auto mb-4 rounded-full size-14 lazy"
                  onLoad={() => setLoaded(true)}
                  onError={() => setLoaded(false)}
                />
                {!loaded && (
                  <div className="mx-auto mb-4 bg-gray-200 rounded-full dark:bg-dark-850 size-24"></div>
                )}
                <h6>
                  <Link to="/page/user">{user.name}</Link>
                </h6>
                <p className="mt-1 text-gray-500 dark:text-dark-500">
                  {user.role}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-3 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                    <h6>{user.task}</h6>
                    <p className="text-gray-500 dark:text-dark-500">Tasks</p>
                  </div>
                  <div className="p-3 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                    <h6>{user.earning}</h6>
                    <p className="text-gray-500 dark:text-dark-500">Earning</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-5 mb-5 items-center">
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-500 dark:text-dark-500">
              Showing <b>{(currentPage - 1) * itemsPerPage + 1}</b> -{' '}
              <b>
                {Math.min(currentPage * itemsPerPage, filteredUsers.length)}
              </b>{' '}
              of <b>{filteredUsers.length}</b> Results
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-end pagination pagination-primary">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="pagination-pre">
                <ChevronLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
                <ChevronRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
                Prev
              </button>
              {[...Array(totalPages)].map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={`pagination-item ${currentPage === pageIndex + 1 ? 'active' : ''}`}>
                  {pageIndex + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-next">
                Next
                <ChevronRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <ChevronLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsUsers
