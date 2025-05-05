// components/EmailPerformanceTable.tsx
import { useCallback, useEffect, useMemo, useState } from 'react'

import Pagination from '@common//Pagination'
import TableContainer from '@custom/Table/Table'
import { emailListData } from '@data/index'
import { Download, Search, Trash } from 'lucide-react'

const EmailPerformanceTable = () => {
  const [MailPerformance, setMailPerformance] = useState([])
  const [filterMailPerformance, setFilterMailPerformance] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectAll, setSelectAll] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)
  const [deletedListData, setDeletedListData] = useState([])

  useEffect(() => {
    setMailPerformance(emailListData)
  }, [])

  const filteredMailPerformance = useCallback(() => {
    let filtered = [...MailPerformance]
    const searchTermLower = searchTerm.trim().toLowerCase()
    if (searchTermLower) {
      filtered = filtered.filter((MailPerformance) =>
        Object.values(MailPerformance).some((value) =>
          value.toString().toLowerCase().includes(searchTermLower)
        )
      )
    }
    setFilterMailPerformance(filtered)
  }, [searchTerm, MailPerformance])

  useEffect(() => {
    filteredMailPerformance()
  }, [filteredMailPerformance])

  const exportTable = () => {
    let csvContent = 'data:text/csv;charset=utf-8,'
    const headers = Object.keys(MailPerformance[0]).join(',')
    csvContent += headers + '\n'
    MailPerformance.forEach((MailPerformance) => {
      const values = Object.values(MailPerformance).join(',')
      csvContent += values + '\n'
    })
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'MailPerformance.csv')
    document.body.appendChild(link)
    link.click()
  }

  // select all or unselect all
  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedListData([])
    } else {
      setDeletedListData(filterMailPerformance.map((customer) => customer.id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, filterMailPerformance])
  const handleSelectRecord = (id) => {
    setDeletedListData((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }
  const handleRemoveSelectedRecords = () => {
    const filteredMailPerformance = filterMailPerformance.filter(
      (MailPerformance) => !deletedListData.includes(MailPerformance.id)
    )
    setMailPerformance(filteredMailPerformance)
    setDeletedListData([])
    setSelectAll(false)
  }
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
        header: 'Email',
        accessorKey: 'emailName',
      },
      {
        header: 'Publish Date',
        accessorKey: 'publishDate',
      },
      {
        header: 'Sent',
        accessorKey: 'sent',
      },
      {
        header: 'Click Rate (%)',
        accessorKey: 'clickRate',
      },
      {
        header: 'Delivered Rate',
        accessorKey: 'deliveredRate',
      },
      {
        header: 'Span Report Rate',
        accessorKey: 'spamReport',
      },
    ],
    [selectAll, deletedListData, handleSelectAll]
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filterMailPerformance.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <div className="col-span-12 card">
      <div className="grid items-center grid-cols-12 card-header gap-space">
        <div className="col-span-12 lg:col-span-3">
          <h6 className="card-title grow">All Email Performance</h6>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-start-9">
          <div className="flex items-center gap-space">
            {deletedListData.length > 0 && (
              <button
                className="btn btn-red btn-icon"
                onClick={handleRemoveSelectedRecords}>
                <Trash className="inline-block size-4" />
              </button>
            )}
            <div className="relative group/form grow">
              <input
                type="text"
                className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                placeholder="Search ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                <Search className="size-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={exportTable}
              className="btn btn-primary shrink-0">
              <Download className="inline-block ltr:mr-1 rtl:ml-1 size-4" />{' '}
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="pt-0 card-body">
        <TableContainer
          isSearch={false}
          isPagination={false}
          columns={columns}
          data={paginatedEvents}
          divClassName="overflow-x-auto table-box"
          tableClassName="table whitespace-nowrap"
          thClassName="!font-medium text-gray-500 bg-gray-100 dark:text-dark-500 dark:bg-dark-850"
          tBodyClassName=""
          PaginationClassName="pagination-container"
          thTrClassName="*:px-3 *:py-2.5"
          isTableFooter={false}
        />
        {filterMailPerformance.length > 0 && (
          <Pagination
            totalItems={filterMailPerformance.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default EmailPerformanceTable
