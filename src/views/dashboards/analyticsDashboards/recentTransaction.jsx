import { Link } from 'react-router-dom'

const transactions = [
  {
    name: 'Jeremy McMullen',
    status: 'Success',
    date: '21 Jan, 2024',
    price: '$154',
  },
  {
    name: 'Charles Fischer',
    status: 'Cancel',
    date: '28 Jan, 2024',
    price: '$150',
  },
  {
    name: 'Louise Harms',
    status: 'Success',
    date: '02 Feb, 2024',
    price: '$255',
  },
  {
    name: 'Henry Boyle',
    status: 'Success',
    date: '11 Feb, 2024',
    price: '$347',
  },
  {
    name: 'Isabella Smith',
    status: 'Success',
    date: '15 Feb, 2024',
    price: '$398',
  },
  {
    name: 'Ethan Johnson',
    status: 'Cancel',
    date: '20 Feb, 2024',
    price: '$495',
  },
  {
    name: 'Marina Bashirian',
    status: 'Success',
    date: '18 Mar, 2025',
    price: '$174',
  },
]

const RecentTransaction = () => {
  return (
    <div className="col-span-12 2xl:col-span-4 card">
      <div className="flex items-center gap-3 card-header">
        <h6 className="card-title grow">Recent Transaction</h6>
        <Link to="#!" className="link link-primary shrink-0">
          See all <i className="align-baseline ri-arrow-right-line"></i>
        </Link>
      </div>
      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="table flush whitespace-nowrap">
            <thead>
              <tr>
                <th className="!font-medium text-gray-500 dark:text-dark-500">
                  Order Date
                </th>
                <th className="!font-medium text-gray-500 dark:text-dark-500">
                  Product
                </th>
                <th className="!font-medium text-gray-500 dark:text-dark-500">
                  Price
                </th>
                <th className="!font-medium text-gray-500 dark:text-dark-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className={`badge ${item.status === 'Cancel' ? 'badge-red' : 'badge-green'}`}>
                      {item.status}
                    </span>
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

export default RecentTransaction
