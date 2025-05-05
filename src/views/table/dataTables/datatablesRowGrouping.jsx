import React, { useEffect, useMemo, useState } from 'react'

import TableContainer from '@custom/Table/Table'

import { EmployeeData } from '../../../data/DataTables/employe-data'

const DataTablesRowGrouping = () => {
  const [groupedData, setGroupedData] = useState([])

  const columns = useMemo(
    () => [
      { accessorKey: 'Name', header: 'Name' },
      { accessorKey: 'Position', header: 'Position' },
      { accessorKey: 'Age', header: 'Age' },
      { accessorKey: 'StartDate', header: 'Start date' },
      { accessorKey: 'Salary', header: 'Salary' },
    ],
    []
  )

  useEffect(() => {
    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        if (!result[currentValue[key]]) {
          result[currentValue[key]] = []
        }
        result[currentValue[key]].push(currentValue)
        return result
      }, {})
    }

    const grouped = groupBy(EmployeeData, 'Office')

    const groupedRows = []
    Object.keys(grouped).forEach((groupKey) => {
      groupedRows.push({
        Name: groupKey,
      })
      groupedRows.push(
        ...grouped[groupKey].map((item) => ({
          ...item,
        }))
      )
    })

    setGroupedData(groupedRows)
  }, [])

  return (
    <React.Fragment>
      <div className="table-container">
        <TableContainer
          columns={columns}
          data={groupedData}
          divClassName="overflow-x-auto"
          tableClassName="display table whitespace-nowrap dtr-inline"
          isPagination={true}
          PaginationClassName="pagination-container"
          thTrClassName="bg-gray-100 dark:bg-dark-850 dt-orderable-asc dt-orderable-desc dt-ordering-desc"
          trClassName={`${groupedData.map((item) =>
            Object.keys(item).length === 0
              ? 'group bg-gray-50 border-y' // Group header class
              : ''
          )}`}
          isSearch={true}
          classStyle="100%"
        />
      </div>
    </React.Fragment>
  )
}

export default DataTablesRowGrouping
