import React from 'react'

import { orders } from '@src/data'

const OrderWidgets = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
        {orders.map((order, index) => (
          <div key={index} className={`card ${order.class}`}>
            <div className="card-body">
              <h6 className="mb-3">{order.title}</h6>
              <div className="flex items-center divide-x *:px-3 divide-gray-300 dark:divide-dark-800">
                <h4 className="ltr:pl-0 rtl:pr-0">{order.count}</h4>
                <p className="text-gray-500">
                  <span className="font-semibold">
                    <i className={order.icon}></i> {order.percentage}
                  </span>{' '}
                  this month
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default OrderWidgets
