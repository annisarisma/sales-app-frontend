import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const ColoredBorderTable = () => {
  const [data1, setData1] = useState([
    {
      name: 'Jeremy McMullen',
      age: 37,
      date: '21 Jan, 2024',
      address: 'United States',
      salary: '$15,236',
    },
    {
      name: 'Charles Fischer',
      age: 29,
      date: '28 Jan, 2024',
      address: 'Romania',
      salary: '$8,563',
    },
    {
      name: 'Louise Harms',
      age: 32,
      date: '02 Feb, 2024',
      address: 'Canada',
      salary: '$7,986',
    },
    {
      name: 'Henry Boyle',
      age: 34,
      date: '11 Feb, 2024',
      address: 'Germany',
      salary: '$36,322',
    },
    {
      name: 'John Brown',
      age: 26,
      date: '20 Feb, 2024',
      address: 'Mexico',
      salary: '$11,741',
    },
  ])

  const [data2, setData2] = useState([
    {
      name: 'Jeremy McMullen',
      age: 37,
      date: '21 Jan, 2024',
      address: 'United States',
      salary: '$15,236',
    },
    {
      name: 'Charles Fischer',
      age: 29,
      date: '28 Jan, 2024',
      address: 'Romania',
      salary: '$8,563',
    },
    {
      name: 'Louise Harms',
      age: 32,
      date: '02 Feb, 2024',
      address: 'Canada',
      salary: '$7,986',
    },
    {
      name: 'Henry Boyle',
      age: 34,
      date: '11 Feb, 2024',
      address: 'Germany',
      salary: '$36,322',
    },
    {
      name: 'John Brown',
      age: 26,
      date: '20 Feb, 2024',
      address: 'Mexico',
      salary: '$11,741',
    },
  ])

  const handleDelete = (index, dataType) => {
    if (dataType === 'data1') {
      setData1(data1.filter((_, i) => i !== index))
    } else {
      setData2(data2.filter((_, i) => i !== index))
    }
  }

  return (
    <div className="col-span-12 card">
      <div className="card-header">
        <h6 className="card-title">Colored Border Table</h6>
      </div>
      <div className="card-body">
        {/* First Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table bordered">
              <tbody>
                <tr className="*:!border-primary-200 dark:*:!border-primary-900">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Date</th>
                  <th>Address</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
                {data1.map((item, index) => (
                  <tr
                    key={index}
                    className="*:border-primary-200 dark:*:!border-primary-900">
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.date}</td>
                    <td>{item.address}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link
                        to="#!"
                        className="text-red-500"
                        onClick={() => handleDelete(index, 'data1')}>
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Second Table */}
        <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="table border-green">
              <tbody>
                <tr className="*:!border-green-200 *:dark:!border-green-900">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Date</th>
                  <th>Address</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
                {data2.map((item, index) => (
                  <tr
                    key={index}
                    className="*:!border-green-200 *:dark:!border-green-900">
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.date}</td>
                    <td>{item.address}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link
                        to="#!"
                        className="text-red-500"
                        onClick={() => handleDelete(index, 'data2')}>
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
    </div>
  )
}

export default ColoredBorderTable
