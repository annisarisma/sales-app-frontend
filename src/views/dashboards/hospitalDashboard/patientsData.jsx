// components/EmailPerformanceTable.tsx
import { useCallback, useEffect, useMemo, useState } from 'react'

import Pagination from '@common//Pagination'
import TableContainer from '@custom/Table/Table'
import { patientList } from '@data/index'
import { CirclePlus, Search, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

const PatientsData = () => {
  const [campaigns, setCampaigns] = useState([])
  const [filterCampaigns, setFilterCampaigns] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectAll, setSelectAll] = useState(false)
  const [itemsPerPage] = useState(8)
  const [deletedListData, setDeletedListData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedListData([])
    } else {
      setDeletedListData(campaigns.map((customer) => customer.id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, campaigns])

  const handleSelectRecord = (id) => {
    setDeletedListData((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    setCampaigns(patientList)
  }, [])

  const filteredCampaigns = useCallback(() => {
    let filtered = [...campaigns]
    const searchTermLower = searchTerm.trim().toLowerCase()
    if (searchTermLower) {
      filtered = filtered.filter((campaign) =>
        Object.values(campaign).some((value) =>
          value.toString().toLowerCase().includes(searchTermLower)
        )
      )
    }
    setFilterCampaigns(filtered)
  }, [searchTerm, campaigns])

  const deleteRecord = (id) => {
    setCampaigns((prev) => prev.filter((item) => item.id !== id))
  }

  useEffect(() => {
    filteredCampaigns()
  }, [filteredCampaigns])

  const columns = useMemo(
    () => [
      {
        header: (
          <input
            id="checkboxAll"
            className="input-check input-check-primary"
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        ),
        accessorKey: 'id',
        enableSorting: false,
        cell: ({ row }) => (
          <input
            className="input-check input-check-primary"
            type="checkbox"
            checked={deletedListData.includes(row.original.id)}
            onChange={() => handleSelectRecord(row.original.id)}
          />
        ),
      },
      {
        header: 'Patient Name',
        accessorKey: 'patientName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
      },
      {
        header: 'Phone',
        accessorKey: 'phone',
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Condition',
        accessorKey: 'condition',
      },
      {
        header: 'Medications',
        accessorKey: 'medications',
      },
      {
        header: 'Last Visit',
        accessorKey: 'lastVisit',
      },
      {
        header: 'Action',
        accessorKey: '',
        cell: ({ row }) => (
          <div className="flex gap-3">
            <Link
              to="/apps/hospital/patients-lists"
              title="overview"
              className="link link-primary">
              <i className="ri-eye-line"></i>
            </Link>
            <Link
              to="/apps/hospital/patients-lists"
              title="edit"
              className="link link-primary">
              <i className="ri-edit-2-line"></i>
            </Link>
            <Link
              to="#!"
              className="link link-red"
              title="delete"
              onClick={() => deleteRecord(row.original.id)}>
              <i className="ri-delete-bin-6-line"></i>
            </Link>
          </div>
        ),
      },
    ],
    [selectAll, deletedListData, handleSelectAll]
  )
  const handleRemoveSelectedRecords = () => {
    const filterCampaignsData = filterCampaigns.filter(
      (MailPerfomance) => !deletedListData.includes(MailPerfomance.id)
    )
    setCampaigns(filterCampaignsData)
    setDeletedListData([])
    setSelectAll(false)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filterCampaigns.slice(
    startIndex,
    startIndex + itemsPerPage
  )
  return (
    <div className="col-span-12 card">
      <div className="flex flex-wrap items-center justify-between card-header gap-space">
        <h6 className="card-title grow">All Patients</h6>

        <div className="flex flex-col w-full md:items-center md:flex-row gap-space md:w-auto">
          {deletedListData.length > 0 && (
            <button
              className="btn btn-red btn-icon shrink-0"
              onClick={handleRemoveSelectedRecords}>
              <Trash className="inline-block size-4" />
            </button>
          )}
          <div className="relative w-full group/form grow">
            <input
              type="email"
              className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
              placeholder="Search ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
              <Search className="size-4" />
            </button>
          </div>
          <Link
            to="/apps/hospital/patients-create"
            className="btn btn-primary shrink-0">
            <CirclePlus className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> Add
            Patient
          </Link>
        </div>
      </div>
      <div className="card-body">
        <TableContainer
          isSearch={false}
          isPagination={false}
          columns={columns}
          data={paginatedEvents}
          divClassName="overflow-x-auto"
          tableClassName="table whitespace-nowrap"
          thClassName="!font-medium text-gray-500 dark:text-dark-500"
          tBodyClassName=""
          PaginationClassName="pagination-container"
          thTrClassName="*:px-3 *:py-2.5"
          isTableFooter={false}
        />
        {filterCampaigns.length > 0 && (
          <Pagination
            totalItems={filterCampaigns.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default PatientsData
