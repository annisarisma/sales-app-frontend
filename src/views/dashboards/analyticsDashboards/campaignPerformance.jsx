import { useCallback, useEffect, useMemo, useState } from 'react'

import Pagination from '@common//Pagination'
import TableContainer from '@custom/Table/Table'
import { campaignList } from '@data/index'
import { Download, Search } from 'lucide-react'

const CampaignPerformance = () => {
  const campaigns = campaignList

  const [filterCampaigns, setFilterCampaigns] = useState(campaignList)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filterCampaignsBySearch = useCallback(() => {
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

  useEffect(() => {
    filterCampaignsBySearch()
  }, [searchTerm, filterCampaignsBySearch])

  const handleExport = () => {
    const csvContent = [
      Object.keys(campaignList[0]).join(','),
      ...campaigns.map((campaign) => Object.values(campaign).join(',')),
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'campaigns.csv')
    link.click()
  }

  const columns = useMemo(
    () => [
      {
        header: 'Campaign',
        accessorKey: 'campaignTitle',
      },
      {
        header: 'Clicks',
        accessorKey: 'clickRate',
      },
      {
        header: 'Delivered Rate (%)',
        accessorKey: 'deliveredRate',
      },
      {
        header: 'Impressions',
        accessorKey: 'impressions',
      },
      {
        header: 'CPC',
        accessorKey: 'cpc',
      },
      {
        header: 'CR',
        accessorKey: 'cr',
      },
      {
        header: 'Revenue',
        accessorKey: 'revenue',
      },
    ],
    []
  )

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
      <div className="grid items-center grid-cols-12 card-header gap-space">
        <div className="col-span-12 md:col-span-3">
          <h6 className="card-title">Campaign Performance</h6>
        </div>
        <div className="col-span-12 md:col-start-9 md:col-span-4">
          <div className="flex items-center gap-space">
            <div className="relative group/form grow">
              <input
                type="text"
                className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                placeholder="Search for campaign etc..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                <Search className="size-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleExport}
              className="btn btn-primary shrink-0">
              <Download className="inline-block ltr:mr-1 rtl:ml-1 size-4" />
              Export
            </button>
          </div>
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
          thClassName="cursor-pointer"
          tBodyClassName="pt-0"
          thTrClassName="*:px-3 *:py-2.5"
          isTableFooter={false}
        />
        {filterCampaigns.length >= 0 && (
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

export default CampaignPerformance
