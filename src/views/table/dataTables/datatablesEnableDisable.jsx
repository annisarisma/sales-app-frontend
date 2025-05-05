import React, { useMemo, useState } from 'react'

import { EmployeeData } from '../../../data/DataTables/employe-data'

const DataTablesEnableDisable = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState(EmployeeData)

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = EmployeeData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query)
      )
    )
    setFilteredData(filtered)
  }

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
      <div className="overflow-x-auto">
        <div
          id="example_wrapper"
          className="flex flex-col gap-5 dt-container dt-tailwindcss">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
            <div className="md:col-start-2 justify-self-center md:justify-self-end">
              <div className="dt-search">
                <label htmlFor="dt-search-0">Search:</label>
                <input
                  type="search"
                  value={searchQuery}
                  className="inline-block w-auto form-input ltr:ml-2 rtl:mr-2"
                  id="dt-search-0"
                  placeholder=""
                  aria-controls="example"
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>

          <table
            id="example"
            className="table display group whitespace-nowrap dtr-inline"
            style={{ width: '100%' }}>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="bg-gray-100 dark:bg-dark-850 dt-orderable-none">
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Position}</td>
                    <td>{item.Office}</td>
                    <td>{item.Age}</td>
                    <td>{item.StartDate}</td>
                    <td>{item.Salary}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default DataTablesEnableDisable
