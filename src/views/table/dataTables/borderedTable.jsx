import React, { useMemo } from 'react'

import TableContainer from '@custom/Table/Table'

import { EmployeeData } from '../../../data/DataTables/employe-data'

const BorderedTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: 'Name', header: 'Name' },
      { accessorKey: 'Position', header: 'Position' },
      { accessorKey: 'Office', header: 'Office' },
      { accessorKey: 'Age', header: 'Age' },
      { accessorKey: 'StartDate', header: 'Start date' },
      { accessorKey: 'Salary', header: 'Salary' },
    ],
    []
  )

  return (
    <>
      <div className="table-container">
        <TableContainer
          columns={columns}
          data={EmployeeData}
          divClassName="overflow-x-auto"
          tableClassName="display group bordered dataTable table whitespace-nowrap dtr-inline"
          PaginationClassName="pagination-container"
          isPagination={true}
          thTrClassName="bg-gray-100 dark:bg-dark-850 dt-orderable-asc dt-orderable-desc dt-ordering-desc"
          isTableFooter={true}
          classStyle="100%"
          isSearch={true}
        />
      </div>
    </>
  )
}

export default BorderedTable
