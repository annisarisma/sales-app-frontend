import React from 'react'

import UseNumberCounter from '@common//NumberCounter'
import { information } from '@data/index'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Information = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-space">
        {information.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group/item before:transition-all before:duration-500 before:ease-in-out card before:absolute before:h-0.5 before:w-full before:bottom-0 ${item.colorClass} hover:before:h-full hover:before:top-0`}>
            <div className="relative p-6 text-center">
              <span
                className={`transition-all duration-500 ease-linear badge ${item.badgeClass} group-hover/item:${item.hoverColorClass} group-hover/item:border-primary-600`}>
                {item.title}
              </span>
              <div className="mt-10 mb-8">
                <h3 className="transition-all duration-500 ease-linear group-hover/item:text-white">
                  {item.currency}
                  <UseNumberCounter
                    start={item.start}
                    end={item.amount}
                    duration={3000}
                  />
                  {item.sign}
                </h3>
              </div>
              <Link
                to="#!"
                className="inline-block px-3 py-1.5 text-sm border rounded-full link link-red transition-all duration-500 ease-linear border-gray-200 dark:border-dark-800 group-hover/item:text-primary-100 group-hover/item:border-primary-400/50 dark:group-hover/item:border-primary-400/50">
                View All
                <MoveRight className="ltr:inline-block rtl:hidden size-4 ms-1" />
                <MoveLeft className="rtl:inline-block ltr:hidden size-4 ms-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Information
