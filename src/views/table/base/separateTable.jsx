import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const SeparateTable = () => {
  const [data, setData] = useState([
    {
      name: 'Tatyana Weissnat',
      age: 37,
      date: '21 Jan, 2024',
      address: 'United States',
      salary: '$15,236',
    },
    {
      name: 'Milford Nitzsche',
      age: 29,
      date: '28 Jan, 2024',
      address: 'Romania',
      salary: '$8,563',
    },
    {
      name: 'Carmela Marks',
      age: 32,
      date: '02 Feb, 2024',
      address: 'Canada',
      salary: '$7,986',
    },
    {
      name: 'Julianne Ruecker',
      age: 34,
      date: '11 Feb, 2024',
      address: 'Germany',
      salary: '$36,322',
    },
    {
      name: 'Rosario Kertzmann',
      age: 26,
      date: '20 Feb, 2024',
      address: 'Mexico',
      salary: '$11,741',
    },
  ])
  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index))
  }
  return (
    <div className="col-span-12 card">
      <div className="card-header">
        <h6 className="card-title">Separate Table</h6>
      </div>
      <div className="card-body">
        <p className="mb-2 text-gray-500">
          Use border-separate to force each cell to display its own separate
          borders.
        </p>
        <div className="overflow-x-auto">
          <table className="table border-separate border-spacing-2 whitespace-nowrap bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.date}</td>
                  <td>{item.address}</td>
                  <td>{item.salary}</td>
                  <td>
                    <Link
                      to="#!"
                      className="text-red-500"
                      onClick={() => handleDelete(index)}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SeparateTable
