import { Filter, Plus, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderListTab = ({
  activeTab,
  setActiveTab,
  openModal,
  deletedListData = [],
  handleRemoveSelectedRecords,
}) => {
  const handleTabChange = (status) => {
    setActiveTab(status)
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8">
            <ul className="flex items-center gap-2 overflow-x-auto">
              {[
                'All',
                'New',
                'Pending',
                'Delivered',
                'Shipping',
                'Cancelled',
              ].map((status) => (
                <li key={status}>
                  <Link
                    to="#!"
                    onClick={() => handleTabChange(status)}
                    className={`whitespace-nowrap relative block px-4 py-2 font-medium text-center transition duration-200 ease-linear rounded-md text-gray-500 ${activeTab === status ? 'bg-gray-100 text-gray-900 dark:bg-dark-850 dark:text-dark-50' : 'hover:text-gray-900 dark:hover:text-dark-50'}`}>
                    <span className="align-middle">
                      {status} {status == 'All' ? 'Orders' : ''}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex col-span-12 gap-3 mt-4 xl:mt-0 xl:justify-end xl:col-span-4">
            {deletedListData.length > 0 && (
              <button
                className="btn btn-red btn-icon"
                onClick={handleRemoveSelectedRecords}>
                <Trash className="size-4" />
              </button>
            )}
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                openModal('showAddOrderForm')
              }}>
              <Plus className="inline-block mr-1 size-4"></Plus> New Order
            </button>
            <button className="btn btn-sub-gray">
              <Filter className="inline-block mr-1 size-4"></Filter> Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderListTab
