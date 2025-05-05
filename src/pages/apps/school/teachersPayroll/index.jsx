import React, { useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Pagination from '@src/components/Common/Pagination'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { getPayrollListData } from '@src/slices/thunk'
import { Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const category = [
  { label: 'All', value: 'all' },
  { label: 'Status', value: 'status' },
  { label: 'Taxes', value: 'taxes' },
  { label: 'Teachers', value: 'teacherName' },
]

const TeachersPayroll = () => {
  const dispatch = useDispatch()
  const { payroll } = useSelector((state) => state.TeacherPayroll)

  const [teacherPayrollListData, setTeacherPayrollListData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    document.title = 'Payroll | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!payroll) {
      dispatch(getPayrollListData())
    } else {
      setTeacherPayrollListData(payroll)
    }
  }, [payroll, dispatch])

  const getPerformanceClass = (performance) => {
    switch (performance) {
      case 'Excellent':
        return 'badge badge-orange'
      case 'Good':
        return 'badge badge-purple'
      case 'Satisfactory':
        return 'badge badge-sky'
      default:
        return 'badge'
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge badge-green'
      case 'Inactive':
        return 'badge badge-yellow'
      default:
        return 'badge'
    }
  }

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption)
    if (selectedOption) {
      sortPayrollData(selectedOption.value)
    }
  }

  const sortPayrollData = (category) => {
    const sortedData = [...teacherPayrollListData]
    switch (category) {
      case 'teacherName':
        sortedData.sort((a, b) => a.teacherName.localeCompare(b.teacherName))
        break
      case 'taxes':
        sortedData.sort(
          (a, b) =>
            parseFloat(a.taxes.replace(/[^0-9.-]+/g, '')) -
            parseFloat(b.taxes.replace(/[^0-9.-]+/g, ''))
        )
        break
      case 'status':
        sortedData.sort((a, b) => a.status.localeCompare(b.status))
        break
      default:
        break
    }
    setTeacherPayrollListData(sortedData)
  }

  const filterPayroll = teacherPayrollListData.filter((data) =>
    data.teacherName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Pagination
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filterPayroll.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const columns = useMemo(
    () => [
      {
        header: 'Teacher Name',
        accessorKey: 'teacherName',
        cell: ({ row }) => {
          const { image, teacherName } = row.original
          return (
            <div className="flex items-center gap-3">
              <div className="relative text-gray-500 bg-gray-100 rounded-full size-6 dark:bg-dark-850 dark:text-dark-500">
                {image ? (
                  <img
                    src={image}
                    alt="image"
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 text-11">
                    {teacherName.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h6>
                  <Link to="/apps/school/teachers-overview">{teacherName}</Link>
                </h6>
              </div>
            </div>
          )
        },
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Gross',
        accessorKey: 'gross',
      },
      {
        header: 'Taxes',
        accessorKey: 'taxes',
      },
      {
        header: 'Salary',
        accessorKey: 'netSalary',
      },
      {
        header: 'Performance',
        accessorKey: 'performance',
        cell: ({ row }) => {
          const { performance } = row.original
          return (
            <span className={`badge ${getPerformanceClass(performance)}`}>
              {performance}
            </span>
          )
        },
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ row }) => {
          const { status } = row.original
          return (
            <span className={`badge ${getStatusClass(status)}`}>{status}</span>
          )
        },
      },
    ],
    []
  )

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true) // Ensures that hydration is completed
  }, [])

  if (!hydrated) {
    return null // Prevent render until hydrated
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Payroll" subTitle="Teachers" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <div className="relative group/form grow">
                  <input
                    type="text"
                    className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                    placeholder="Search by Teacher Name"
                    value={searchQuery}
                    onChange={handleSearchQuery}
                  />
                  <button className="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 lt:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                    <Search className="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850" />
                  </button>
                </div>
              </div>
              <div>
                <div id="sorting" className="w-full">
                  <Select
                    classNamePrefix="select"
                    options={category}
                    onChange={handleCategoryChange}
                    placeholder="Sorting By"
                    className="w-48"
                    isClearable={true}
                    value={selectedCategory}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div>
              <TableContainer
                columns={columns}
                data={paginatedEvents}
                thClassName="!font-medium cursor-pointer"
                divClassName="overflow-x-auto whitespace-nowrap"
                tableClassName="table flush"
                thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
              />

              <Pagination
                currentPage={currentPage}
                totalItems={filterPayroll.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TeachersPayroll
